
import Vue from 'vue'
import Vuex from 'vuex'
import products from '../products.json'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        products: products,
        cart: [],
        product: null,
        filters: {
            brand: '',
            ram_size: '',
        }
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            let isProductExist = false
            state.cart.map(function (item) {
                if (item.article === product.article) {
                    isProductExist = true
                    item.quantity++
                }
            })
            isProductExist || state.cart.push({ ...product, quantity: 1 })
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        SET_SELECTED_PRODUCT(state, product) {
            state.product = product;
        },
        SET_FILTERS(state, value) {
            state.filters = value
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        }

    },
    actions: {
        ADD_PRODUCTS({ commit }, products) {
            commit('SET_PRODUCTS_TO_STATE', products);
        },
        ADD_SELECTED_PRODUCT({ commit }, product) {
            commit('SET_SELECTED_PRODUCT', product);
        },
        ADD_SELECTED_PRODUCT_BY_ID({ commit, state }, productId) {
            const product = state.products.find(p => p.id === parseInt(productId));
            commit('SET_SELECTED_PRODUCT', product);
            console.log(this.state.products)
        },
        ADD_FILTERS({ commit }, value) {
            commit('SET_FILTERS',  value);
        },
        ADD_TO_CART({ commit }, product) {
            commit('SET_CART', product)
        },
        DELETE_FROM_CART({ commit }, index) {
            commit('REMOVE_FROM_CART', index)
        },
        INCREMENT_CART_ITEM({ commit }, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({ commit }, index) {
            commit('DECREMENT', index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        PRODUCT(state) {
            return state.product
        },
        CART(state) {
            return state.cart
        },
        FILTERS(state) {
            return state.filters
        }
    }
});

export default store;