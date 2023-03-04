<!-- <template>
  <v-row>
    <v-card
      class="mx-auto"
      max-width="544"
      variant="outlined"
      style="width: 500px;"
    >
      <v-card-item>
        <div class="text-overline mb-1 pl-3 mt-1">
          Product Infor
        </div>
        <v-row>
          <v-col cols="8">
            <div class="text-h6 mb-1 pl-3">
              {{ name }}
            </div>
          </v-col>
          <v-col cols="4">
            <div class="text-h6 mb-1">
              <v-btn variant="outlined" @click="remove">
                Remove
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row class="pl-3">
          <div class="text-caption pb-5 pl-3">Price per prod: {{ price }}</div>
        </v-row>
        <v-row class="pl-3">
          <div class="text-caption pb-5 pl-3">Quantity: {{ qty }}</div>
        </v-row>
        <div class="text-overline mb-1 pl-3">
          Total: {{ itemTotal }}
        </div>
      </v-card-item>
    </v-card>
  </v-row>
</template> -->

<template>
  
  <h3 class="product-name">{{ name }}</h3>
  <span class="product-price">{{ price }} </span>
  <span class="product-price">{{ qty }} </span>
  <button class="product-remove" @click="remove">X</button>
  
</template>

<script>
  export default {
    props: ['prodId', 'name', 'address', 'price', 'discountMessage', 'qty'],
    
    computed: {
      itemTotal() {
        return (this.price * this.qty).toFixed(2);
      },
    },

    methods: {
      remove() {
        this.$store.dispatch('cart/removeFromCart', { productId: this.prodId });
      },
    }
  }
</script>

<style scoped>
  .product-name {
    box-sizing: border-box;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }
</style>
