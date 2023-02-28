<template>
  <div class="body-detail">
    <div class="preview-shop">
      <v-container class="pt-15 pl-10 pb-15" style="margin-left: 600px;">
        <v-row>  
          <h2>YOUR CART</h2>
        </v-row>
        <br>
        <v-row>
          <h3>Total Amount: <span><strong>123</strong></span></h3>
        </v-row>
      </v-container>
      <v-row class="pt-15">
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <cart-item
            v-for="item in cartItems"
            :key="item.productId"
            :prod-id="item.productId"
            :price="item.price"
            :qty="item.qty"
          >
          </cart-item>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
        
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
      return this.$store.getters['cart/products'];
    }
  },
  methods: {
    remove() {
      this.$store.dispatch('cart/removeFromCart', { productId: this.id });
    }
  }
}
</script>
