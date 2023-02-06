<template>
  <!-- Sizes your content based upon application components -->
  <div class="body">
    <v-container class="pt-15 pl-10">
      <v-row class="now-search">
        <v-col cols="5" class="pr-10">
          <v-row class="py-5">
            <h2 class="format-text">
              Đặt Đồ ăn, giao hàng từ 20'...
            </h2>
            <p>Có 69316 Địa Điểm Ở TP. HCM Từ 00:00 - 23:59</p>
          </v-row>
          <v-row class="py-5">
            <v-text-field
              class="format-text pt-3 pr-0"
              label="Tìm địa điểm, món ăn, địa chỉ,..."
              variant="contained"
            ></v-text-field>
            <v-btn
              color="blue"
              class="mt-3"
              min-height="56px"
              ><v-icon 
                icon="fas fa-search"
                color="white"
              />
            </v-btn>
          </v-row>
          <v-row>
            <v-btn 
              v-for="(iBox, i) in iBoxs"
              :id="i"
              :key="i"
              variant="outlined" 
              class="format-text mr-3 my-2">
              {{ iBox }}
            </v-btn>
          </v-row>
          <v-row class="py-5">
            <span>
              Sử dụng App ShopeeFood để có nhiều giảm giá<br>
              và trải nghiệm tốt hơn
            </span>
          </v-row>
          <v-row>
            <v-col cols="5">
              <v-img 
                min-width="100"
                src="../assets/app-store.png"
              ></v-img>
            </v-col>
            <v-col cols="5">
              <v-img 
                min-width="100"
                src="../assets/google-play.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7">
          <v-item-group class="mb-5">
            <v-container class="bg-white rounded-lg px-8">
              <v-row>
                <v-col cols="12">
                  <div class="text-h6 float-left">Ưu đãi</div>
                  <div class="text-caption float-right">
                    <v-icon icon="fas fa-th-large" color="blue" size="xs"/>
                    Xem tất cả
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-for="n in 6"
                  :key="n"
                  cols="12"
                  md="4"
                >
                  <PromotionCard/>
                </v-col>
              </v-row>
              </v-container>
            </v-item-group>
          <v-item-group class="mb-5">
            <v-container class="bg-white rounded-lg px-8">
              <v-row>
                <v-col cols="12">
                  <div class="text-h6 float-left">Bộ sưu tập</div>
                  <div class="text-caption float-right">
                    <v-icon icon="fas fa-th-large" color="blue" size="xs"/>
                    Xem tất cả
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-for="n in 6"
                  :key="n"
                  cols="12"
                  md="4"
                >
                  <CollectionCard/>
                </v-col>
              </v-row>
              </v-container>
            </v-item-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PromotionCard from '../components/PromotionCard.vue'
import CollectionCard from '../components/CollectionCard.vue'
export default {
  name: 'HomeView',
  components: {
    PromotionCard,
    CollectionCard
  },
  data: () => ({
    items: [
      { city: 'Hà Nội', placeNumber: 808080},
      { city: 'Đà Nẵng', placeNumber: 123412},
      { city: 'Quảng Nam', placeNumber: 909012}
    ],
    itemBars: ['Đồ ăn', 'Thực phẩm', 'Bia', 'Hoa', 'Siêu thị', 'Thuốc', 'Thú cưng'],
    iBoxs: ['All', 'Đồ ăn', 'Đồ uống', 'Đồ chay', 'Bánh kem', 'Tráng miệng', 'Homemade', 'Vỉa hè'],
  }
  ),
}
</script>
<style>
.body{
  background-image: url('../assets/main-banner.jpg');
  background-repeat: round;
}
.format-text{
  text-transform:none;
  font-weight: 450;
}
.now-search{
  color: white;
}
</style>