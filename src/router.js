import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/user/Login.vue';
import Register from './views/user/Register.vue';
import ProductList from "./views/product/ProductList";
import OrderList from "./views/order/OrderList";
import OrderDetail from "./views/order/OrderDetail";
import OrderEdit from "./views/order/OrderEdit";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: ProductList },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', name: 'profile', component: () => import('./views/user/Profile.vue') }, // lazy loaded
    { path: '/orders', component: OrderList },
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
