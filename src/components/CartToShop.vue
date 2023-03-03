<template>
  <div class="d-flex justify-space-around">
    <v-menu
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          <v-icon icon="fa-solid fa-cart-shopping" color="orange"/>{{ cartQuantity }}
          
        </v-btn>
      </template>
      
      <v-list>
        <v-list-item>
          <v-btn
            elevation="2"
            small
            @click="onCartDetail"
          >{{ cartQuantity }} -> Xem chi tiết</v-btn>
          <!-- <v-list-item-title></v-list-item-title> -->
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  console.log("tesst");
  export default {
    props: ['id', 'name', 'address', 'price', 'discountMessage'],
    computed: {
      cartQuantity() {
        console.log("cart/quantity");
        return this.$store.getters['cart/quantity'];
      }
    },
    methods: {
      remove() {
        this.$store.dispatch('cart/removeFromCart', { productId: this.id });
      },
      onCartDetail() {
        this.$router.push({ path: `/cart-detail` });
      }
    }
  }
</script>
        