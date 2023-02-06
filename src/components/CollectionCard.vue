<template>
  <v-item>
    <v-card
      class="mx-auto mt-5 rounded-lg"
      max-width="344"
    >
      <v-img
        class="rounded-lg mt-n5"
        src="../assets/freeship.jpg"
        height="100px"
        cover
        style="z-index=1000"
      >
      </v-img>

      <v-card-title class="pl-2 py-0 text-subtitle-2 font-weight-black">
        Chí Thiện - Cơm phần
      </v-card-title>

      <div class="pl-2" size="1" color="blue">
        200 địa điểm
      </div>
    </v-card>
  </v-item>
</template>

<script>
export default{
  name: 'PromotionCard',
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
