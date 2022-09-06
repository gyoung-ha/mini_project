import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getTrips = createAsyncThunk(
    "trips/getTrips",
    async (payload, thunkAPI) => {
        try {
            const { data } =  await axios.get("http://localhost:3001/trips", payload);
            return thunkAPI.fulfillWithValue(data);
          } catch (error) {
            return thunkAPI.rejectWithValue(error);
          }
    }
  );

export const trips = createSlice({
    name: "trips",
    initialState: {
        trips: [],
        isLoading: false,
        error: null,
      },
    reducers:{
        createTrip(state, action){
          state.trips.push(action.payload);
          axios.post("http://localhost:3001/trips", action.payload );
        },
        removeTrip(state, action){
          const  index = state.trips.findIndex(trip =>  trip.id === action.payload);
			    state.trips.splice(index,1);
          axios.delete(`url/${action.payload}`);
        }
    },
    extraReducers: {
        [__getTrips.pending]: (state) => {
          state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getTrips.fulfilled]: (state, action) => {
          state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
          state.trips = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__getTrips.rejected]: (state, action) => {
          state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
          state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
      },
})

export const { createTrip, removeTrip } = trips.actions;

export default trips;