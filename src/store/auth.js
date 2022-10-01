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
      console.log('UserLogin', data);
    const response = await request('post', "/api/users/login-user", data);
    return response.data;
  },
);


const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    userData :{},
    token: null,
    isUserLoggedIn: false,
    userTokenInfo: {},
  },

  reducers: {
    userLoginSuccess: (state) => {
      state.isUserLoggedIn = true;
      state.token = "gfh"
    },


    setUserTokenInfo: (state , action) => {
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
  console.log('HURREY!!!!!registration Successfull',action.payload)
},
[registration.pending]: (state, action) => {
},
[registration.rejected]: (state, action) => {
  console.log('registration Failed!!!!!',action)
},

// <===================login==================>>>

    [login.fulfilled]: (state, action) => {
      state.userData=action.payload;
      console.log('HURREY!!!!!LOGIN SUCESSFULL',state.userData)
    },
    [login.pending]: (state, action) => {
    },
    [login.rejected]: (state, action) => {
      console.log('LOGIN FAILED!!!!',action)
    },
    




  },
});



export const { userLoginSuccess, userLogoutSuccess , setUserTokenInfo } = loginSlice.actions;
export { registration,login};
export default loginSlice.reducer;