<template>
  <v-app>
    <v-app-bar>
      <v-container>
        <v-row class="pt-3">
          <v-col cols="auto">
            <router-link to="/">
              <v-img
                min-width="150"
                :src="imagePath"
              ></v-img>
            </router-link>
          </v-col>
          <v-col cols="auto" class="pl-5">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn 
                  variant="contained-text"
                  v-bind="props"
                  class="format-text"
                  >
                  TP.HCM
                  <v-icon icon="fas fa-caret-down" /> 
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  class="pa-0"
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-col>
                    <span class="float-left text-caption">{{ item.city }}</span>
                    <span class="ml-2 float-right text-caption text-medium-emphasis">{{ item.placeNumber }} địa điểm</span>
                    <v-divider></v-divider>
                  </v-col>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <v-col cols="auto" class="pl-10 py-0">
            <v-tabs 
              color="#ff3300"
              >
              <v-tab
                v-for="(itemBar, i) in itemBars"
                :key="i"
                :value="i"
                class="format-text px-3"
                min-width="auto"
                height="100%"
              >{{ itemBar }}</v-tab>
            </v-tabs> 
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="pt-4" cols="auto">
            <v-icon 
              icon="fas fa-search"
              />
          </v-col>
          <v-col cols="auto">
            <CartToShop />
          </v-col>
          <v-col cols="auto">
            <v-btn 
              variant="outlined"
              color="#ff3300"
              class="format-text"
              >Đăng nhập</v-btn>  
          </v-col>
          <!-- <v-col cols="auto">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                  <v-row>
                    <v-img 
                      min-width="25"
                      src="./assets/flag-vn.png"
                    ></v-img> 
                  <v-icon icon="fas fa-caret-down" /> 
                  </v-row>
                </v-btn>
              </template>
              <v-list class="pa-2">
                <v-list-item>
                    <v-row>
                      <v-img 
                        class="mr-2"
                        min-width="10"
                        src="./assets/flag-us.png"
                        mr="10"
                      ></v-img>
                      Tiếng Anh
                    </v-row>
                </v-list-item>
                <v-list-item>
                    <v-row>
                      <v-img 
                        class="mr-2"
                        min-width="25"
                        src="./assets/flag-vn.png"
                      ></v-img> 
                      Tiếng Việt
                    </v-row>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col> -->
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="footer">
      <v-container>
        <v-row>
          <v-col cols="2">
            <div class="mb-5 font-weight-bold">
              Công ty
            </div>
            <div class="text-body-2 text-blue">
              <div>
                Giới thiệu
              </div>
              <div>
                Trung tâm Trợ giúp
              </div>
              <div>
                Quy chế
              </div>
              <div>
                Điều khoản sử dụng
              </div>
              <div>
                Bảo mật thông tin
              </div>
              <div>
                Giải quyết khiếu nại
              </div>
              <div>
                Liên hệ
              </div>
              <div>
                Hợp tác nhân viên giao nhận
              </div>
              <div>
                Đăng ký quán
              </div>
              <div>
                ShopeeFood Uni
              </div>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="mb-5 font-weight-bold">
              Ứng dụng ShopeeFood
            </div>
            <div class="text-body-2 text-blue">
              <v-img
                class="mb-5"
                max-width="120px"
                src="./assets/app-store-vn.png"
              ></v-img>
              <v-img
                class="mb-5"
                max-width="120px"
                src="./assets/play-store-vn.png"
              ></v-img>
              <v-img
                class="mb-5"
                max-width="120px"
                src="./assets/huawei-gallery-vn.png"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="2">
            <v-img
              max-height="100px"
              src="./assets/logo-shopeefood-vn.png"
            ></v-img>
            <div class="text-center text-caption text-medium-emphasis">
              <v-icon 
                icon="fa-regular fa-copyright"
                size="13"
              ></v-icon>
              2022 ShopeeFood
            </div>
          </v-col>
          <v-col cols="5">
            <div class="mb-5 font-weight-bold float-right">
              Địa chỉ công ty
            </div>
            <pre class="text-body-2 float-right">
                                                                                                Công Ty Cổ Phần Foody
                                                                                                Lầu G, Tòa nhà Jabes 1,
                    số 244 đường Cống Quỳnh, phường Phạm Ngũ Lão, Quận 1, TPHCM
                                                                                  Giấy CN ĐKDN số: 0311828036
                                         do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 11/6/2012,
                                                                          sửa đổi lần thứ 23, ngày 10/12/2020
                                                                                              Số điện thoại: 1900 2042 
                                                                                          Email: <span class="text-blue">info@shopeefood.vn</span>
            </pre>
            <v-img
              max-width="120px"
              src="./assets/gov_seals1.jpg"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import CartToShop from './components/CartToShop.vue'
export default({
  name: 'App',
  components: {
    CartToShop,
  },
  data: () => ({
    imagePath: require('./assets/logo.png'),
    items: [
      { city: 'Hà Nội', placeNumber: 808080},
      { city: 'Đà Nẵng', placeNumber: 123412},
      { city: 'Quảng Nam', placeNumber: 909012}
    ],
    itemBars: ['Đồ ăn', 'Thực phẩm', 'Bia', 'Hoa', 'Siêu thị', 'Thuốc', 'Thú cưng']
  }),
})
</script>
<style>
.footer {
  background-color: #f5f5ef;
}
</style>