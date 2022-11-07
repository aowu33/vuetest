import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//组件
import Home from "../views/Home";
import User from "../views/User";
import Main from "../views/Main";
import Mall from "../views/Mall";
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
//1.创建路由组件
//2.映射 路由和组件
//3.创建router实例
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  // 主路由
  {
    path: "/",
    component: Main,
    redirect:'/home',//重定向
    children: [
        //子路由
      { path: "home",name:'home', component: Home },
      { path: "user", name:'user',component: User },
      { path: "mall",name:'mall', component: Mall },
      { path: "page1",name:'page1', component: PageOne },
      { path: "page2",name:'page2', component: PageTwo },

    ],
  },
];
const router = new VueRouter({
  routes, //
});
export default router;
