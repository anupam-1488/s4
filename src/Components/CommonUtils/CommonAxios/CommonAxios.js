import Cookies from "js-cookie";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { config } from "../CommonUrl/CommonUrls";
import Sweetalert, { TokenAlert } from "../CommonPopupAndAlerts/SweetAlerts";
const RefreshFunction = async (url, values, method) => {
  // console.log("first>>>>method", method, "values>>>>>", values,)
  var refreshToken = Cookies.get("jwtRefreshToken")
  var initvalues = {
    refreshToken: refreshToken
  }
  try {
    let ref_url = config.url.LegalCase_Api_url + "auth/refresh-token"
    const res = await axios.post(ref_url, initvalues);
    if (res.data.ResponseCode === "01") {
      var decoded = jwtDecode(res.data.access_token);
      var decoded_refresh = jwtDecode(res.data.refresh_token);
      var date = new Date(decoded.exp * 1000);
      var ref_date = new Date(decoded_refresh.exp * 1000);
      Cookies.set("jwtToken", res.data.access_token, { expires: date });
      Cookies.set("jwtTokenTym", res.data.access_token_expiration, { expires: date });
      Cookies.set("jwtRefreshToken", res.data.refresh_token, { expires: ref_date });
      Cookies.set("jwtRefreshTokenTym", res.data.refresh_token_expiration, { expires: ref_date });
      if (method === "get") {
        return CommonAxiosGet(url);
      }
      else if (method === "post") {
        return CommonAxiosPost(url, values);
      }
    }
    else if (res.data.ResponseCode === "02") {
      TokenAlert()
    }
  } catch (err) {
    TokenAlert()
    console.log("error at refresh token>>>>>", err)
  }
}
export const CommonAxiosGet = async (url, values) => {
 
  let jwtToken = Cookies.get("jwtToken");
  let refreshToken = Cookies.get("jwtRefreshToken");
 
  if (jwtToken === undefined && refreshToken !== undefined) {
    return RefreshFunction(url, values, "get")
  }
  else if (jwtToken !== undefined) {
    let data = "";
    try {
      let res = await axios({
        url: url,
        method: "get",
        headers: { Authorization: `Bearer ${jwtToken}` }
      });
      if (res.status === 200) {
        data = res;
        return data;
      }
 
 
    } catch (err) {
      if (err.response.data.ResponseCode === '401') {
        return RefreshFunction(url, values, "get");
      }
      else {
        console.log("error at commonget>>>>", err)
      }
    }
  }
  else if (refreshToken === undefined) {
    TokenAlert()
  }
 
}
export const CommonAxiosPost = async (url, values) => {
  let data = "";
  let jwtToken = Cookies.get("jwtToken");
  let refreshToken = Cookies.get("jwtRefreshToken");
  if (jwtToken === undefined && refreshToken !== undefined) {
    return RefreshFunction(url, values, "post")
  }
  else if (jwtToken !== undefined) {
    try {
      let res = await axios({
        url: url,
        method: "post",
        data: values,
        headers: { Authorization: `Bearer ${jwtToken}` }
      });
      if (res.status === 200) {
        data = res;
      }
      return data;
    } catch (err) {
      if (err.response.data.ResponseCode === '401') {
        return RefreshFunction(url, values, "post")
      }
      else {
        console.log("error at commonpost>>>>", err)
      }
    }
  }
  else if (refreshToken === undefined) {
    TokenAlert()
  }
};
export const CommonAxiosGetspinner = async (url, values, dispatch) => {
  let jwtToken = Cookies.get("jwtToken");
  let refreshToken = Cookies.get("jwtRefreshToken");
  dispatch({ type: 'SHOW_SPINNER', payload: true });
 
  if (jwtToken === undefined && refreshToken !== undefined) {
    return RefreshFunction(url, values, "get")
  }
  else if (jwtToken !== undefined) {
    let data = "";
    try {
      let res = await axios({
        url: url,
        method: "get",
        headers: { Authorization: `Bearer ${jwtToken}` }
      });
      if (res.status === 200) {
        dispatch({ type: 'HIDE_SPINNER', payload: false });
 
        data = res;
        return data;
      }
 
 
    } catch (err) {
      dispatch({ type: 'HIDE_SPINNER', payload: false });
      if (err.response.data.ResponseCode === '401') {
        return RefreshFunction(url, values, "get")
      }
      else {
        console.log("error at commongetSpinner>>>>", err)
      }
    }
  }
  else if (refreshToken === undefined) {
    dispatch({ type: 'HIDE_SPINNER', payload: false });
 
 
    TokenAlert()
  }
 
}
export const CommonAxiosPostspinner = async (url, values, dispatch) => {
 
  let data = "";
  let jwtToken = Cookies.get("jwtToken");
  let refreshToken = Cookies.get("jwtRefreshToken");
  if (jwtToken === undefined && refreshToken !== undefined) {
    return RefreshFunction(url, values, "post")
  }
  else if (jwtToken !== undefined) {
    dispatch({ type: 'SHOW_SPINNER', payload: true })
    try {
      let res = await axios({
        url: url,
        method: "post",
        data: values,
        headers: { Authorization: `Bearer ${jwtToken}` }
      });
      if (res.status === 200) {
        dispatch({ type: 'HIDE_SPINNER', payload: false });
        data = res;
      }
      return data;
    } catch (err) {
      dispatch({ type: 'HIDE_SPINNER', payload: false });
      if (err.response.data.ResponseCode === '401') {
        return RefreshFunction(url, values, "post")
      }
      else {
        console.log("error at commonpostSpinner>>>>", err)
      }
    }
  }
  else if (refreshToken === undefined) {
    dispatch({ type: 'HIDE_SPINNER', payload: false });
    TokenAlert()
  }
};
 
export const CommomLoginAunthenticatePost = async (url, values) => {
 
  try {
    let data = "";
    let res = await axios({
      url: url,
      method: "post",
      data: values,
      timeout: 10000
    });
    if (res.status === 200) {
      data = res;
    }
    return data;
  } catch (err) {
    console.error('Error in CommomLoginAunthenticatePost:', err);
 
    // Optionally, handle the error or rethrow it
    throw err;
  }
};
 
export const CommonAxiosPut = async (url, values) => {
  let token = Cookies.get("jwtToken");
  try {
    let data = "";
    let res = await axios({
      url: url,
      method: "put",
      data: values,
      headers: { Authorization: "Bearer " + token },
    });
    if (res.status === 200) {
      data = res;
    }
    return data;
  } catch (err) {
 
  }
};
 

 
export const CommonAjaxDeleteRequest = async (url, values) => {
  var token = Cookies.get("jwtToken");
  var refreshToken = Cookies.get("jwtRefreshToken");
 
  let data = '';
  if (token === undefined && refreshToken !== undefined) {
    return  RefreshFunction(url, values, "delete")
  } else if (token !== undefined) {
    try {
      let res = await axios({
        url: url,
        method: "delete",
        // data: values,
        headers: { Authorization: "Bearer " + token },
      });
      if (res.status === 200) {
        data = res;
      }
      return data;
    }
    catch (err) {
      if (err.response.data.ResponseCode === '401') {
        return RefreshFunction(url, values, "delete")
  
      }
      else {
        console.log("error at common delete>>>>", err)
      }
    }
  }
  else if (refreshToken === undefined) {
 
    Sweetalert("Session Expired", "warning")
  }
};
 