<template>
  <div class="catalog-item">
    <img :src="require('../assets/img/' + product.image)" alt="img" />
    <p class="catalog-item-name">{{ product.name }}</p>
    <p class="catalog-item-name">Brand: {{ product.brand }}</p>
    <p class="catalog-item-name">Video memory size: {{ product.ram_size }} GB</p>
    <p class="catalog-item-price">Price: {{ product.price }} UAH</p>
    <button class="catalog-item-button" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "product",
  components: {},
  data() {
    return {
    };
  },
  created() {
    const productId = this.$route.params.id;
    this.$store.dispatch('ADD_SELECTED_PRODUCT_BY_ID', productId);
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.productData);
    },
  },
  computed: {
    product() {
      return this.$store.getters.PRODUCT;
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 29%;
  height: 513px;
  padding: 10px 0;
  margin: 20px 0 20px 50px;

  box-shadow: 5px 5px 10px 5px#0000004a;
  transition-property: box-shadow;
  transition-duration: 0.5s;
  &:hover {
    box-shadow: 20px 20px 30px 20px#0000004a;
    transition-duration: 0.5s;
  }
  img {
    width: auto;
    height: 150px;
  }

  .catalog-item-title {
    color: red;
  }
  .catalog-item-button {
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
