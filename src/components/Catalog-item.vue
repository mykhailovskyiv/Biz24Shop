<template>
  <div class="catalog-item">
    <router-link
        :to="{ name: 'product', params: {id: productData.id}}"
        class="catalog-item__container">
      <img :src="require('../assets/img/' + productData.image)" alt="img" />
      <p class="catalog-item__name">{{ productData.name }}</p>
      <p class="catalog-item__name">Brand: {{ productData.brand }}</p>
      <p class="catalog-item__name">Video memory size: {{ productData.ram_size }} GB</p>
      <p class="catalog-item__price">Price: {{ productData.price }} UAH</p>
    </router-link>
    <button class="catalog-item__button" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "Catalog-item",
  components: {},
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.productData);
    },
  },
};
</script>

<style lang="scss">
.catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 29%;
  height: 513px;
  padding: 10px 0;
  margin: 20px 0 20px 50px;
  box-shadow: 5px 5px 10px 5px#0000004a;
  transition-property: box-shadow;
  transition-duration: 0.5s;
  a {
    color: black;
    text-decoration: none;
  }
  &:hover {
    box-shadow: 20px 20px 30px 20px#0000004a;
    transition-duration: 0.5s;
  }
  &__container {
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  img {
    width: auto;
    height: 150px;
  }
  &__title {
    color: red;
  }
  &__button {
    border: 1px solid #1b1b20;
    background-color: white;
    transition-duration: 0.5s;
    height: 40px;
    width: 80%;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: black;
      transition-duration: 0.5s;
      color: white;
    }
  }
}
@media (max-width: 1279px) {
  .catalog-item {
    width: 43%;
    height: 401px;
    margin: 20px 0 20px 35px;
    img {
      width: 220px;
    }
  }
}
@media (max-width: 767px) {
  .catalog-item {
    width: 85%;
  }
}
@media (max-width: 425px) {
  .catalog-item {
    width: 100%;
    margin: 20px 0 20px 0;
  }
}
</style>
