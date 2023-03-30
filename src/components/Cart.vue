<template>
  <div class="cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="cart__link_to_catalog">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">Thre are not product in cart...</p>
    <cartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart__total">
      <p class="cart__total-title">Total</p>
      <p>{{ cartTotalCost }} UAH</p>
    </div>
  </div>
</template>

<script>
import cartItem from "./Cart-item";
import { mapActions } from "vuex";
export default {
  name: "Cart",
  components: {
    cartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },

    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
};
</script>

<style lang="scss" >
.cart {
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__link_to_catalog {
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
  &__total {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #ff5d3b;
    color: white;
    width: 100%;
    font-size: 20px;
    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
    }
  }
}
</style>
