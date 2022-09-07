import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://3.39.254.156/';

export const __AddCost = createAsyncThunk(
    "costs/addcost",
    async (payload, thunkAPI) => {
        try {
            const {data} =  await axios.post(`${API_URL}/costs`, payload, {
              headers: {
                Authorization: localStorage.getItem("Token"),
                RefreshToken: localStorage.getItem("RefreshToken")
            }}
            );
            console.log(payload)
            return thunkAPI.fulfillWithValue(data);
          } catch (error) {
            return thunkAPI.rejectWithValue(error);
          }
    }
  );
export const costs = createSlice({
    name:"costs",
    initialState: {
        costs: [],
        isLoading: false,
        error: null,
      },
    reducers:{
        removeCost(state, action){
            const  index = state.costs.findIndex(cost =>  cost.id === action.payload);
			      state.costs.splice(index,1);
            axios.delete(`url/${action.payload}`);
        }
    },
    extraReducers: {
        [__AddCost.pending]: (state) => {
          state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__AddCost.fulfilled]: (state, action) => {
          state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
          state.costs = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__AddCost.rejected]: (state, action) => {
          state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
          state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
      },
})

export const { createCost, removeCost } = costs.actions;

export default costs.reducer;