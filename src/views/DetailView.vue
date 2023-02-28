<template>
  <div class="body-detail">
    <div class="preview-shop">
      <v-container class="py-10">
        <v-row>
          <v-col cols="5">
            <v-img
              max-height="300px"
              src="../assets/com-chi-thien.jpg"
            ></v-img>
          </v-col>
          <v-col cols="7">
            <span 
              class="text-caption text-blue"
              > Home >> Đà Nẵng >> Chí Thiện - Cơm Phần
            </span>
            <v-spacer></v-spacer>
            <span class="text-caption text-medium-emphasis" size="8">
              QUÁN ĂN
            </span>
            <h1>
              <!-- Chí Thiện - Cơm Phần -->
              {{ name }}
            </h1>
            <span class="text-body-2">
              <!-- 158A Trần Vĩnh Kiết, P. An Bình, Quận Ninh Kiều, Cần Thơ -->
              {{ address }}
            </span>
            <div class="mb-2">
              <v-icon
                class="mr-1"
                color="yellow"
                icon="fa-solid fa-star" 
                v-for="n in 3"
                :key=n
                ></v-icon>
              <v-icon 
              class="mr-1"
                color="yellow"
                icon="fa-solid fa-star-half-stroke"
              ></v-icon>
              <v-icon 
              class="mr-1"
                color="yellow" 
                icon="fa-regular fa-star"
              ></v-icon>
              <span class="mx-2 pa-1 bg-yellow text-body-2 rounded-lg">
                999+ 
              </span>
              <span class="text-body-2">
                đánh giá trên ShopeeFood
              </span>
            </div>
            <div class="text-body-2 text-blue">
              Xem thêm lượt đánh giá từ Foody
            </div>
            <div class="pa-1 bg-green rounded-circle d-inline-block"></div>
            <span>
              Đang mở
            </span>
            <div class="text-body-1 text-medium-emphasis">
              <v-icon
                size="15"
                icon="fa-solid fa-dollar-sign"
                ></v-icon> 
                <!-- 25,000 - 35,000 -->
                {{ price }}
            </div>
            <v-divider class="mt-4 mb-4"></v-divider>
            <v-btn
              elevation="2"
              @click="addToCart"
            >Thêm vào giỏ hàng</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="preview-menu">
      <v-container class="pt-10">
        <v-row>
          <span class="mb-3 pl-6 font-weight-bold text-red">THỰC ĐƠN</span>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-card
              class="mx-auto pa-3 bg-white rounded-lg"
              max-width="300"
            >
              <v-list
              active-color="red" 
              :items="items"></v-list>
            </v-card>
          </v-col>
          <v-col cols="6">
            <div  class="pa-3 bg-white rounded-lg">
              <MenuList/>
            </div>
          </v-col>
          <v-col cols="3">
            <v-img
              src="../assets/qr-code.png"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import MenuList from '../components/MenuList.vue'

export default({
  name: 'DetailView',
  components: {
    MenuList,
  },
  // props: [ 'id', 'name', 'address', 'price', 'discountMessage' ],
  // props: {
  //   productId: {
  //     type: Number,
  //     required: true
  //   },
  // },
  data: () => ({
    items: [
      {
        title: 'Các món từ gà',
        value: 1,
      },
      {
        title: 'Thịt heo',
        value: 2,
      },
      {
        title: 'Món canh',
        value: 3,
      },
      {
        title: 'Cơm tổng hợp',
        value: 4,
      },
      {
        title: 'Món thêm xào',
        value: 5,
      },
    ],
    productId: 0,
    id: 0,
    name: '',
    price: 0,
    address: '',
    discountMessage: '',
  }),
  mounted() {
    const productId = this.$route.params.productId;

    const product = this.products.find(prod => prod.id === productId);
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.address = product.address;
    this.discountMessage = product.discountMessage;
  },
  computed: {
    products() {
      return this.$store.getters['prods/products'];
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        id: this.id,
        name: this.name,
        price: this.price,
        address: this.address,
        discountMessage: this.discountMessage,
      });
    },
  },
});
</script>

<style>
.preview-menu {
  background-color: #f5f5ef;
}
</style>

