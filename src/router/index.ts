import {createRouter , createWebHashHistory } from "vue-router"
const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      redirect:"/main"
    },
    {
      path:"/login",
      component:() => import("@/views/login/Login.vue")//懒加载，打包的时候进行分包
    },
    {
      path:"/main",
      component:() => import("@/views/main/Main.vue")
    },
    {
      path:"/:pathMatch(.*)",
      component:() => import("@/views/not-found/NotFound.vue")
    }
  ]
})
export default router

