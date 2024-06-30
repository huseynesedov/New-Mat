import {
  SET_USER_ERROR,
  LOADING_ON,
  LOADING_OFF,
  SET_USER_LOGGED_IN,
  LOG_OUT,
  CANCEL_EDIT,
  SET_EDIT,
  SET_NOTIFICATION,
  ADD_TO_CART
} from "../types";
import admin from "../../Const/api";
import history from "../../Const/history";
import {apiRoutes} from "../../Const/apiroutes";

export const getUserData = (exp) => async (dispatch) => {
  dispatch({ type: LOADING_ON });
  let token = localStorage.getItem("access_token")
  if (token !== undefined){
    dispatch({
      type: SET_USER_LOGGED_IN,
      payload: token,
    });
    dispatch({ type: LOADING_OFF });
  }
  if (token === undefined){
    dispatch({
      type: LOG_OUT,
    });
    dispatch({ type: LOADING_OFF });
  }

};

export const logInUser = (e, p) => async (dispatch) => {
  // temporary
  dispatch({
    type: SET_USER_LOGGED_IN,
    payload: localStorage.getItem("access_token"),
  });

  // if (e.trim().length === 0 ||   p.trim().length === 0) {
  //   dispatch({
  //     type: SET_USER_ERROR,
  //     payload: { message: "İstifadəçi adı və şifrə daxil edilməlidir" },
  //   });
  // } else {
  //   dispatch({ type: LOADING_ON });
  //   await admin
  //     .post(apiRoutes.admin.login , {
  //       username:e , password:p
  //     })
  //     .then((res) => {
  //       localStorage.setItem("access_token", res.data.token);
  //       // dispatch(getUserData());
  //       dispatch({
  //         type: SET_USER_LOGGED_IN,
  //         payload: localStorage.getItem("access_token"),
  //       });
  //       history.push("/");
  //     })
  //     .catch((error) => {
  //       dispatch({
  //         type: SET_USER_ERROR,
  //         payload: { message: "İstifadəçi adı və ya şifrə yanlışdır" },
  //       });
  //     })
  //     .finally(() => {
  //       dispatch({ type: LOADING_OFF });
  //     });
  // }
};

export const toggleLoading = (payload) => ({
  type: payload ? LOADING_ON : LOADING_OFF,
});

export const logOut = () => ({
  type: LOG_OUT,
});





export const notify = (description, isHappy) => {
  return {
    type: SET_NOTIFICATION,
    payload: { description, isHappy },
  };
};


export const setEdit = (bolean) => {
    if (bolean === true){
      return {type: SET_EDIT}
    }
    else {
      return {type: CANCEL_EDIT}
    }
}


export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    };
};