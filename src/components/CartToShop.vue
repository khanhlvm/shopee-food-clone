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
          <v-icon icon="fa-solid fa-cart-shopping" color="orange"/>
          <span class="btn-circle">
           {{ cartQuantity }}
          </span>
          <transition name="appear">
            <popupcart class="cart"/>
          </transition>
        </v-btn>
      </template>
      
      <v-list>
        <v-list-item>
          <v-btn
            elevation="2"
            small
            @click="onUserCart"
          >{{ cartQuantity }} -> Xem chi tiết</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: ['id', 'name', 'address', 'price', 'discountMessage'],
  computed: {
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    }
  },
  methods: {
    onUserCart() {
      this.$router.push({ path: `/user-cart` });
    }
  }
}
</script>
        
<style>

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: silver;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .appear-enter-active {
    animation: appear-animation .5s;
  }

  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }

  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
</style>
