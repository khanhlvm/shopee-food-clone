<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          prepend-inner-icon="fa-solid fa-magnifying-glass"
          variant="outlined"
          label="Tìm món"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="text-caption text-medium-emphasis">
          CÁC MÓN TỪ GÀ
        </span>
      </v-col>
    </v-row>
    <v-row 
      v-for="n in 5"
      :key="n"
      >
      <v-col cols="2">
        <v-img
              src="../assets/menu-food-1.jpg"
            ></v-img>
      </v-col>
      <v-col cols="7">
        <div class="text-subtitle-1 font-weight-bold">
          Cơm phần Gà chiên nước mắm
        </div>
        <div class="text-subtitle-2 text-medium-emphasis">
          Bao gồm: Cơm + canh + rau sống + món mặn.
        </div>
      </v-col>
      <v-col cols="2">
        <div class="text-decoration-line-through text-caption text-medium-emphasis">
          28,000<sup>đ</sup>
        </div>
        <div class="text-blue font-weight-bold">
          25,000<sup>đ</sup>
        </div>
      </v-col>
      <v-col cols="1">
        <button @click="addToCart()">
          <v-icon 
            icon="fa-solid fa-square-plus"
            color="red"
          ></v-icon>
        </button>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default({
  name: 'MenuList',
})
</script>

<style>
.v-input__details {
  display: none;
}
</style>
