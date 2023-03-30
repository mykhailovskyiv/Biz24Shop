<template>
  <div class="cart-item">
    <img :src="require('../assets/img/' + cart_item_data.image)" alt="img" />
    <div class="cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="cart_item__quantity">
      <p>Qty.</p>
      <span>
        <span class="quantity_button" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="quantity_button" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="cart-item__delete_button" @click="deleteFromCart">
      delete
    </button>
  </div>
</template>

<script>
export default {
  name: "Cart-item",
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$set(this.cart_item_data);
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 5px 5px 10px 5px#0000004a;
  padding: 20px;
  margin-bottom: 30px;
  img {
    width: 250px;
  }
  .cart_item__quantity {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__delete_button {
    margin-top: 30px;
    height: 40px;
    background-color: white;
    color: #ff5d3b;
    transition-duration: 0.3s;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 30px;
    &:hover {
      background-color: black;
      transition-duration: 0.3s;
    }
  }
  .quantity_button {
    cursor: pointer;
    padding: 10px 40px;
  }
}
@media (max-width: 767px) {
  .cart-item {
    flex-direction: column;
    &__delete_button {
      width: 100%;
    }
    &__info {
      align-self: baseline;
    }
  }
}
</style>
