import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://3.39.254.156';

export const __getTripDetail = createAsyncThunk(
    "trip/tripDetail",
    async (payload, thunkAPI) => {
        console.log(payload)
        try { 
            const data =  await axios.get(`${API_URL}/trip/${payload}`, {
              headers: {
                Authorization: localStorage.getItem("Token"),
                RefreshToken: localStorage.getItem("RefreshToken")
            } 
            });
            // console.log(data)
            return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
            return thunkAPI.rejectWithValue(error);
          }
    }
  );

const initialState = {  
    trip: [],
    isLoading: false,
    error: null,
    success: true  
  };

export const tripdetail = createSlice({
    name: "tripdetail",
    initialState,
    reducers:{},

    extraReducers: {
        [__getTripDetail.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
          },
        [__getTripDetail.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.trip = action.payload; 
          },
        [__getTripDetail.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; 
          },
        },
})

export default tripdetail.reducer;