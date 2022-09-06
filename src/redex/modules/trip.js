import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://3.39.254.156';

export const __getTripList = createAsyncThunk(
    "trip/tripList",
    async (payload, thunkAPI) => {
        try {
            const { data } =  await axios.get(`${API_URL}/`, payload);
            return thunkAPI.fulfillWithValue(data);
          } catch (error) {
            return thunkAPI.rejectWithValue(error);
          }
    }
  );

const initialState = {  
    data: [],
    isLoading: false,
    error: null,  
  };

export const trip = createSlice({
    name: "trip",
    initialState,
    reducers:{
        createTrip(state, action){
          state.data.push(action.payload);
          axios.post(`${API_URL}/trip`, action.payload );
        },
        removeTrip(state, action){
          const  index = state.data.findIndex(data =>  data.id === action.payload);
			    state.data.splice(index,1);
          axios.delete(`${API_URL}/trip/${action.payload}`);
        }
    },
    extraReducers: {
        [__getTripList.pending]: (state) => {
          state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getTripList.fulfilled]: (state, action) => {
          state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
          state.trips = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__getTripList.rejected]: (state, action) => {
          state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
          state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
      },
})

export const { createTrip, removeTrip } = trip.actions;

export default trip;