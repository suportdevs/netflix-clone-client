import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {setCurrentUser} = authSlice.actions;
export default authSlice;