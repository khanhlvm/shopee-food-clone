<template>
  <v-item>
    <v-card
      class="mx-auto rounded-lg"
      max-width="344"
      @click="toAbout"
    >
      <div class="ml-n1 pa-2 bg-green rounded-circle d-inline-block" ></div>
      <v-img
        class="rounded-t-lg mt-n5"
        src="../assets/com-chi-thien.jpg"
        height="100px"
        cover
      >
      </v-img>

      <v-card-title class="pl-2 py-0 text-subtitle-2 font-weight-black">
        <!-- <router-link to="/about">About</router-link> -->
        Chí Thiện - Cơm phần
      </v-card-title>

      <v-card-subtitle class="pl-2 text-caption">
        54 Võ Văn Kiệt, Thanh Hà
      </v-card-subtitle>

      <v-divider></v-divider>
      
      <v-card-actions class="pl-2 py-0" >
        <v-icon icon="fas fa-tag" color="red"/>
        <div class=" pl-2 text-subtitle-2 font-weight-black">
          Giảm hết 10%
        </div>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-item>
</template>

<script>
export default{
  name: 'PromotionCard',
  methods: {
    toAbout() {
      this.$router.push({ path: '/detail' })
    }
  }
}
</script>

<style>
.v-responsive.v-img.rounded-t-lg.mt-n5 {
  z-index: -1;
}

.ml-n1.pa-2.bg-green.rounded-circle.d-inline-block {
  border: 1px solid white;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-contained.mx-auto.rounded-lg {
  z-index: 1;
}
</style>
