import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://3.39.254.156';

export const __getDates = createAsyncThunk(
    "date/datelist",
    async (payload, thunkAPI) => {
        try {
            const data =  await axios.get(`${API_URL}/dates/${payload}`, {
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
    dates: [],
    isLoading: false,
    error: null,
    success: true  
  };

export const datelist = createSlice({
    name: "datelist",
    initialState,
    reducers:{},

    extraReducers: {
        [__getDates.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
          },
        [__getDates.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.dates = action.payload; 
          },
        [__getDates.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; 
          },
        },
})

export default datelist.reducer;