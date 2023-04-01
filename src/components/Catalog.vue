<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="catalog__link_to_cart">Cart:{{ CART.length }}</div>
    </router-link>
    <h1 class="title">Catalog</h1>
    <h3 class="sub-title">For gamers only</h3>
    <catalog-filter :products="PRODUCTS"/>
    <div class="catalog-row">
      <catalogItem
        v-for="product in filteredProducts"
        :key="product.article"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import catalogItem from "./Catalog-item";
import catalogFilter from "./Catalog-filter"
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Catalog",
  components: {
    catalogItem,
    catalogFilter
  },
  computed: {
    ...mapGetters(["CART", "PRODUCTS", "FILTERS"]),
    filteredProducts() {
      return this.PRODUCTS.filter(product => {
        const brandFilter = !this.FILTERS.brand || product.brand === this.FILTERS.brand;
        const ramSizeFilter = !this.FILTERS.ram_size || product.ram_size === parseFloat(this.FILTERS.ram_size);
        console.log(product.ram_size, this.FILTERS.ram_size)
        return brandFilter && ramSizeFilter
      });
    }
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
    width: 100%;
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
