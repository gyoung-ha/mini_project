import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL = 'http://3.39.254.156';
  const JSON_URL = 'http://localhost:3001/members';

//회원가입
export const __SignUp = createAsyncThunk(
    "member/signup", 
    async (payload, thunkAPI) => { 
        try {
            console.log(payload)
            const data = await axios.post(`${JSON_URL}`, JSON.stringify(payload))
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
          if (error.response.data.ok === false) {
            alert(`${error.response.data.errorMessage}`);
          }
          return thunkAPI.rejectWithValue(error);
        }
});

//로그인
export const __Login = createAsyncThunk(
  "member/login", 
  async (payload, thunkAPI) => {
      try {
          const data = await axios.post(`${JSON_URL}`, payload);
          localStorage.setItem("token", data.headers.authorization)
          // console.log(data)
          return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
        if (error.response.data.ok === false) {
          alert(`${error.response.data.errorMessage}`);
        }
        return thunkAPI.rejectWithValue(error);
      }
});


export const member = createSlice({
  name: "member",
  initialState: {
    data: [],
    success: false,
    error: null,
    isloading: false 
  },
  reducers: {},
  // extraReducers: {
  //   [__SignUp.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [__SignUp.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.data = action.payload;
  //   },
  //   [__SignUp.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [__Login.pending]: (state) => {
  //     state.isLoading = true; 
  //   },
  //   [__Login.fulfilled]: (state, action) => {
  //     state.isLoading = false; 
  //     state.data = action.payload; 
  //   },
  //   [__Login.rejected]: (state, action) => {
  //     state.isLoading = false; 
  //     state.error = action.payload; 
  //   }
  // },
});

export default member.reducer;