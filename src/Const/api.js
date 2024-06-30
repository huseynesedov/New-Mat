// import axios from "axios";
// import siteUrl from "./const";
// import {logOut} from "../redux/actions/index";

// export const admin = axios.create({
//   baseURL: `${siteUrl}api/`,
//   headers: { "Content-Type": "application/json" },
// });

// admin.interceptors.request.use(
//   (config) => {
//     config.headers["Authorization"] = localStorage.getItem("access_token")
//       ? "Bearer " + localStorage.getItem("access_token")
//       : null;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// admin.interceptors.response.use(
//     function (response) {
//         localStorage.setItem('error' , false)
//         return response;
//     },
//     function (error) {
//         console.log(JSON.stringify(error))

//         if (error.response) {
//             if (error.response.status === 401) {
//                 logOut()
//                 localStorage.setItem('error' , true)
//                 localStorage.removeItem("access_token");
//                 window.location.reload();
//             } else {
//                 console.log('xeta')
//             }
//             return Promise.reject(error);
//         }
//         else{
//             localStorage.setItem('error' , false)
//         }
//     }
// );
// export default admin;

