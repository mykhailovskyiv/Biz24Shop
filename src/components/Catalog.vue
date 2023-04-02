<template>
  <div class="catalog">
    <Notification v-if="NOTIFICATION"></Notification>
    <router-link :to="{ name: 'cart' }">
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
    <div v-if="!filteredProducts.length">
      <h4>Unfortunately, we could not find any products according to your categories.</h4>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./Catalog-item";
import CatalogFilter from "./Catalog-filter"
import Notification from "./Notification";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Catalog",
  components: {
    CatalogItem,
    CatalogFilter,
    Notification
  },
  computed: {
    ...mapGetters(["CART", "PRODUCTS", "FILTERS", "NOTIFICATION"]),
    filteredProducts() {
      return this.PRODUCTS.filter(product => {
        const brandFilter = !this.FILTERS.brand || product.brand === this.FILTERS.brand;
        const ramSizeFilter = !this.FILTERS.ram_size || product.ram_size === parseFloat(this.FILTERS.ram_size);
        const priceFilter = !this.FILTERS.price || product.price >= this.FILTERS.price;
        console.log(product.price >= this.FILTERS.price)
        return brandFilter && ramSizeFilter && priceFilter
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
