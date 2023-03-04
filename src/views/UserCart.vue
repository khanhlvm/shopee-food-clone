<template>
  <div class="body-detail">
    <div class="preview-shop">
      <v-container class="pt-15 pl-10 pb-15">
        <div class="pb-15">
            <h2 class="text-center">YOUR CART</h2>
            <h3 class="text-center">Total Amount: <span><strong>{{ cartTotal }}</strong></span></h3>
        </div>
        <div v-if="!isHasProduct()" class="checkout-message">
          <h3>No products...</h3>
          <router-link to="./">Back to list of products</router-link>
        </div>
        <div class="checkout-box">
          <ul class="checkout-list">
            <transition-group name="fade">
              <li v-for="item in cartItems" :key="item.productId" class="checkout-product">
                <cart-item
                  :prod-id="item.productId"
                  :name="item.name"
                  :price="item.price"
                  :qty="item.qty"
                ></cart-item>
              </li>
            </transition-group>
          </ul>
        </div>
    </v-container>
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';

export default {
  components: { 
    CartItem, 
  },
  props: ['id', 'name', 'address', 'price', 'discountMessage', 'qty'],
  computed: {
    cartTotal() {
      return this.$store.getters['cart/totalSum'];
    },
    cartItems() {
      return this.$store.getters['cart/product'];
    },
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    }
  },
  methods: {
    isHasProduct() {
      console.log(this.cartTotal);
      return this.cartTotal > 0;
    },
  }
}
</script>

<style scoped>
  .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-message {
    font-size: 1.1em;
  }
</style>
