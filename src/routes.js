import ShopItems from "./components/ShopItems";
import Orders from "./components/Orders";
import OrderDetail from "./components/OrderDetail";
import OrderEdit from "./components/OrderEdit";

const routes = [
    { path: '/', component: ShopItems },
    { path: '/orders', component: Orders },
    { path: '/orders/:id', component: OrderDetail },
    { path: '/orders/:id/edit', component: OrderEdit}
];

export default routes;
