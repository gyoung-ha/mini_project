import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getCosts = createAsyncThunk(
    "costs/getCosts",
    async (payload, thunkAPI) => {
        try {
            const {data} =  await axios.get("");
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
        createCost(state, action){
            state.costs.push(action.payload);
            axios.post("",action.payload );
        },
        removeCost(state, action){
            const  index = state.costs.findIndex(cost =>  cost.id === action.payload);
			      state.costs.splice(index,1);
            axios.delete(`url/${action.payload}`);
        }
    },
    extraReducers: {
        [__getCosts.pending]: (state) => {
          state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getCosts.fulfilled]: (state, action) => {
          state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
          state.costs = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__getCosts.rejected]: (state, action) => {
          state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
          state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
      },
})

export const { createCost, removeCost } = costs.actions;

export default costs;