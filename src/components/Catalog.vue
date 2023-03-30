<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="catalog__link_to_cart">Cart:{{ CART.length }}</div>
    </router-link>
    <h1 class="title">Catalog</h1>
    <h3 class="sub-title">For gamers only</h3>
    <div class="catalog-row">
      <catalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import catalogItem from "./Catalog-item";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Catalog",
  components: {
    catalogItem,
  },
  computed: {
    ...mapGetters(["CART", "PRODUCTS"]),
  },
  methods: {
    ...mapActions(["ADD_PRODUCTS", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
};
</script>

<style lang="scss" >
.catalog {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  align-items: center;
  &-row {
    display: flex;
    flex-wrap: wrap;
  }
  &__link_to_cart {
    position: fixed;
    background-color: white;
    top: 10px;
    right: 10px;
    padding: 16px;
    border: 1px solid black;
    transition-duration: 0.3s;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
      transition-duration: 0.3s;
    }
  }
}
</style>
