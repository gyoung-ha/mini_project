import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://3.39.254.156';

export const __getDate = createAsyncThunk(
    "date/date",
    async (payload, thunkAPI) => {
        try {
            const data =  await axios.get(`${API_URL}/date/${payload}`, {
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
    date: [],
    isLoading: false,
    error: null,  
  };

export const date = createSlice({
    name: "date",
    initialState,
    reducers:{},
    extraReducers: {
        [__getDate.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
          },
        [__getDate.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.date = action.payload; 
          },
        [__getDate.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; 
          },
        },
})

export default date.reducer;