import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUsers2 = createAsyncThunk("users/update", async(user) => {
  const res = await axios.post("http://localhost:8800/api/users/123/update", user );
  return res.data
})
export const deleteUsers = createAsyncThunk("users/update", async(user) => {
  const res = await axios.post("http://localhost:8800/api/users/123/update", user );
  return res.data
})

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "Alison",
      email: "alison89montgomary@gmail.com",
    },
    pending: null,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUsers2.pending]: (state) => {
      state.pending = true
      state.error = false 
    },
    [updateUsers2.fulfilled]: (state, action) => {
      state.pending = false
      state.userInfo = action.payload;
    },
    [updateUsers2.rejected]: (state) => {
      state.pending = false
      state.error = true 
    },
    [deleteUsers.pending]: (state) => {
      state.pending = true
      state.error = false 
    },
    [deleteUsers.fulfilled]: (state, action) => {
      state.pending = false
      state.userInfo = action.payload;
    },
    [deleteUsers.rejected]: (state) => {
      state.pending = false
      state.error = true 
    }
  }
});

/** before fake miniAPI
 * name: "user"  ,
  initialState: {
    name: "Alison",
    email: "alison89montgomary@gmail.com"
  },
  reducers: {
    update: (state, action) => {
        state.name = action.payload.name
        state.email = action.payload.email
    },
    remove: (state) => (state = {})
    
  }
 */

  /** with custom API call 
   * we write pending, error , success 
   * name: "user",
  initialState: {
    userInfo: {
      name: "Alison",
      email: "alison89montgomary@gmail.com",
    },
    pending: null,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
   */

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
