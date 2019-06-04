import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import car from "./components/car";
import list from "./components/list";
import user from "./components/user";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
 
    },
    {
      path: "/home",
      name: "home",
     
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/Home.vue")
    },
    {
      path: "/list",
      name: "list",
     
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/list.vue")
    },
    {
      path: "/car",
      name: "car",
     
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/car.vue")
    },
    {
      path: "/user",
      name: "user",
     
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/user.vue")
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
});
