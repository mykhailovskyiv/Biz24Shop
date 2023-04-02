<template>
  <div class="container">
    <router-link :to="{ name: 'catalog' }">
      <div class="cart__link_to_catalog">Back to Catalog</div>
    </router-link>
    <router-link :to="{ name: 'cart' }">
      <div class="catalog__link_to_cart">Cart:{{ CART.length }}</div>
    </router-link>
    <div class="catalog-item">
      <img :src="require('../assets/img/' + PRODUCT.image)" alt="img" />
      <p class="catalog-item__name">{{ PRODUCT.name }}</p>
      <p class="catalog-item__name">Brand: {{ PRODUCT.brand }}</p>
      <p class="catalog-item__name">Video memory size: {{ PRODUCT.ram_size }} GB</p>
      <p class="catalog-item__price">Price: {{ PRODUCT.price }} UAH</p>
      <button class="catalog-item__button" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "product",
  components: {},
  created() {
    const productId = this.$route.params.id;
    this.ADD_SELECTED_PRODUCT_BY_ID(productId)
  },
  methods: {
    ...mapActions(["ADD_SELECTED_PRODUCT_BY_ID", "ADD_TO_CART", "UPDATE_NOTIFICATION"]),
    addToCart() {
      this.ADD_TO_CART(this.PRODUCT);
      this.UPDATE_NOTIFICATION(true)

    },
  },
  computed: {
    ...mapGetters(["CART", "PRODUCT" ]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 10px 0;

  box-shadow: 5px 5px 10px 5px#0000004a;
  transition-property: box-shadow;
  transition-duration: 0.5s;
  &:hover {
    box-shadow: 20px 20px 30px 20px#0000004a;
    transition-duration: 0.5s;
  }
  img {
    width: auto;
    height: 250px;
  }
  &__title {
    color: red;
  }
  &__button {
    border: 1px solid #1b1b20;
    background-color: white;
    transition-duration: 0.5s;
    height: 40px;
    width: 200px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: black;
      transition-duration: 0.5s;
      color: white;
    }
  }
}
.cart__link_to_catalog {
  right: 100px;
}
@media (max-width: 1279px) {
  .catalog-item {
    img {
      width: 250px;
    }
  }
}
@media (max-width: 767px) {
  .catalog-item {
    width: 85%;
  }
}
</style>
