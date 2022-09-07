import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://3.39.254.156';

export const __getTripList = createAsyncThunk(
    "trip/tripList",
    async (payload, thunkAPI) => {
        try {
            
            const data =  await axios.get(`${API_URL}/trip`, {
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

export const __AddTrip = createAsyncThunk(
    "trip/trip",
    async (payload, thunkAPI) => {
        try {
            const data =  await axios.post(`${API_URL}/trip`, payload, {
              headers: {
                Authorization: localStorage.getItem("Token"),
                RefreshToken: localStorage.getItem("RefreshToken")
            } 
            });
            console.log(data)
            return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
            return thunkAPI.rejectWithValue(error);
          }
    }
);


const initialState = {  
    trips: [],
    isLoading: false,
    error: null,  
  };

export const trip = createSlice({
    name: "trip",
    initialState,
    reducers:{
        // createTrip: (state, action) => {
        //   state.trips.push(action.payload);
        //   axios.post(`${API_URL}/trip`, action.payload, {
        //     headers: {
        //       Authorization: localStorage.getItem("Token"),
        //       RefreshToken: localStorage.getItem("RefreshToken")
        //   }});
        // },

        removeTrip: (state, action) => {
          const  index = state.data.findIndex(trips =>  trips.data.id === action.payload);
			    state.trips.splice(index,1);
          axios.delete(`${API_URL}/trip/${action.payload}`, {
            headers: {
              Authorization: localStorage.getItem("Token"),
              RefreshToken: localStorage.getItem("RefreshToken")
          }});
        }
    },
    extraReducers: {
        [__getTripList.pending]: (state) => {
          state.isLoading = true; 
        },
        [__getTripList.fulfilled]: (state, action) => {
          state.isLoading = false; 
          state.trips = action.payload; 
        },
        [__getTripList.rejected]: (state, action) => {
          state.isLoading = false; 
          state.error = action.payload;
        },
        [__AddTrip.pending]: (state) => {
          state.isLoading = true; 
        },
        [__AddTrip.fulfilled]: (state, action) => {
          state.isLoading = false; 
          state.trips = action.payload; 
        },
        [__AddTrip.rejected]: (state, action) => {
          state.isLoading = false; 
          state.error = action.payload;
      }
}
});

export const { removeTrip } = trip.actions;

export default trip;