import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';

// <===================getallproduct==================>>>
// https://motionless-duck-shirt.cyclic.app/api/product/show-all-product
const getallproduct = createAsyncThunk(
  'getallproduct',
  async (data, thunkAPI) => {
      console.log('Registratio==>>', data);
    const response = await request('get', "/api/product/show-all-product");
    return response.data;
  },
);

const loginSlice = createSlice({
  name: 'product',
  initialState: {
    getallproduct :{}
  },

  reducers: {
    // userLoginSuccess: (state) => {
    //   state.isUserLoggedIn = true;
    //   state.token = "gfh"
    // },


    // setUserTokenInfo: (state , action) => {
    //   state.userTokenInfo = action.payload;
     
    // },
    // userLogoutSuccess: (state) => {
    //   state.isUserLoggedIn = false;
    //   state.token = null;
    // },

  },

  extraReducers: {

// <===================GET All PRODUCT==================>>>

[getallproduct.fulfilled]: (state, action) => {
  //state.productList=action.payload;
  state.getallproduct=action.payload.ShowAllProduct
  console.log('getallproduct Sucess====>>>',state.getallproduct)
},
[getallproduct.pending]: (state, action) => {
},
[getallproduct.rejected]: (state, action) => {
  console.log('getallproduct Rejected =====>>>',action)
},

  },
});



//export const { userLoginSuccess, userLogoutSuccess , setUserTokenInfo } = loginSlice.actions;
export { getallproduct};
export default loginSlice.reducer;