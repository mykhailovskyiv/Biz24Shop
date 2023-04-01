import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '../components/Catalog'
import Product from "../components/Product";
import Cart from '../components/Cart'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/catalog'
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: Catalog
    },
    {
        path: '/product/:id',
        name: 'product',
        component: Product,
        props: true
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        props: true,
    },
]
export default new Router({
    routes
});