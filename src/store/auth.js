import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';

// <===================register==================>>>

const registration = createAsyncThunk(
  'registration',
  async (data, thunkAPI) => {
    console.log('Registratio==>>', data);
    const response = await request('post', "/api/users/register-user", data);
    return response.data;
  },
);

// <===================Login==================>>>

const login = createAsyncThunk(
  'login',
  async (data, thunkAPI) => {
    console.log('UserLogin Data==>>==>>', data);
    const response = await request('post', "/api/users/login-user", data);
    return response.data;
  },
);
// <===================sendotp==================>>>

const sendotp = createAsyncThunk(
  'sendotp',
  async (data, thunkAPI) => {
    const response = await request('post', "/api/users/email-send", data);
    return response.data;
  },
);
// <===================verifyOtp==================>>>

const verifyOtp = createAsyncThunk(
  'verifyOtp',
  async (data, thunkAPI) => {
    //console.log('guestUserLogin', data);
    const response = await request('post', "/api/users/check-otp", data);
    return response.data;
  },
);

// <===================resetpassword==================>>>
//https://gstcomman.herokuapp.com/api/users/password-reset

const resetpassword = createAsyncThunk(
  'resetpassword',
  async (data, thunkAPI) => {
    //console.log('guestUserLogin', data);
    const response = await request('post', "/api/users/password-reset", data);
    return response.data;
  },
);

const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    token: null,
    isUserLoggedIn: false,
    userTokenInfo: {},
  },

  reducers: {
    userLoginSuccess: (state) => {
      state.isUserLoggedIn = true;
      state.token = "gfh"
    },


    setUserTokenInfo: (state, action) => {
      state.userTokenInfo = action.payload;

    },
    userLogoutSuccess: (state) => {
      state.isUserLoggedIn = false;
      state.token = null;
    },

  },

  extraReducers: {

    // <===================register==================>>>

    [registration.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('HURREY!!!!!registration Successfull', action.payload)
    },
    [registration.pending]: (state, action) => {
    },
    [registration.rejected]: (state, action) => {
      console.log('registration Failed!!!!!', action)
    },

    // <===================login==================>>>

    [login.fulfilled]: (state, action) => {
      state.userData = action.payload;
      console.log('HURREY!!!!!LOGIN SUCESSFULL', state.userData)
    },
    [login.rejected]: (state, action) => {
      console.log('LOGIN FAILED!!!!', action)
    },

    // <===================Extrareducer for sendotp==================>>>

    [sendotp.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('OTP SEND SUCCESSFULL!!!!!!', action)
    },
    [sendotp.rejected]: (state, action) => {
      sendotp.log('OTP SEND Rejected!!!', action)
    },




    [verifyOtp.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('verifyOtp fullfield', action)
    },
    [verifyOtp.pending]: (state, action) => {
    },
    [verifyOtp.rejected]: (state, action) => {
      console.log(' verifyOtp Rejected', action)
    },


    // <===================verifyOtp for sendotp==================>>>

    [resetpassword.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('verifyOtp fullfield', action)
    },
    [resetpassword.pending]: (state, action) => {
    },
    [resetpassword.rejected]: (state, action) => {
      console.log(' verifyOtp Rejected', action)
    },




  },
});



export const { userLoginSuccess, userLogoutSuccess, setUserTokenInfo } = loginSlice.actions;
export { registration, login, sendotp, verifyOtp, resetpassword };
export default loginSlice.reducer;