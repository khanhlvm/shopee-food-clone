<template>
  <v-row>
    <v-card
      class="mx-auto"
      max-width="544"
      variant="outlined"
      style="width: 500px;"
    >
      <v-card-item>
        <div>
          <div class="text-overline mb-1 pl-3 mt-1">
            Thong tin san pham
          </div>
          <v-row>
            <v-col cols="8">
              <div class="text-h6 mb-1 pl-3">
                {{ name }}
              </div>
            </v-col>
            <v-col cols="4">
              <div class="text-h6 mb-1">
                <v-btn variant="outlined">
                  Remove
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <div class="text-caption pb-5 pl-3">Gia tien: {{ price }}</div>
            </v-col>
            <v-col cols="3">
              <div class="text-caption pb-5 pl-3">So luong: {{ qty}}</div>
            </v-col>
            <v-col cols="3">
              <div class="text-caption pb-5 pl-6"></div>
            </v-col>
          </v-row>
          <div class="text-overline mb-1 pl-3">
            Total: {{ itemTotal }}
          </div>
        </div>
      </v-card-item>
    </v-card>
  </v-row>
</template>

<script>
  export default {
    props: ['prodId', 'name', 'address', 'price', 'discountMessage', 'qty'],
    computed: {
      itemTotal() {
        return (this.price * this.qty);
      }
    },
    methods: {
      remove() {
        this.$store.dispatch('cart/removeFromCart', { productId: this.prodId });
      }
    }
  }
</script>
