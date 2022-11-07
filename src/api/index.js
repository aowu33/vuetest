/**
 * Mock
 */
import http from "../utils/request";
//请求首页数据
export const getData = () => {
  return http.get("/home/getData");
};
// export const getUser = (params) => {
//   //返回用户列表
//   return http.get("/user/getUser", params);
// };
// export const addUser = (data) => {
//   return http.post("/user/add", data);
// };
// export const adit = (params) => {
//   return http.post("/user/adit", params);
// };
// export const delUser = (data) => {
//   return http.delete("/user/del", data);
// };
// export const roleList = (params) => {
//   return http.post("/web/role/page", params);
// };
