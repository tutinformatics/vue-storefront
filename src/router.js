import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import ShopItems from "./components/ShopItems";
import Orders from "./components/Orders";
import OrderDetail from "./components/OrderDetail";
import OrderEdit from "./components/OrderEdit";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: ShopItems },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', name: 'profile', component: () => import('./views/Profile.vue') }, // lazy loaded
    { path: '/orders', component: Orders },
    { path: '/orders/:id', component: OrderDetail },
    { path: '/orders/:id/edit', component: OrderEdit}
  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
