<script setup lang="ts">
import { storeData } from '../stores/data'
const dataInfo = storeData()

const chosenFood = ref('')
const filterData = (taken: string) => {
    chosenFood.value = taken
}

const filteredFoodData = computed(() => {
    return chosenFood.value ?
        dataInfo.fooddata.filter(el => el.name.toLowerCase().includes(chosenFood.value)) :
        dataInfo.fooddata
})
</script>

<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>

      <AppSelect @selectedFood="filterData"/>
    </div>
    
    <AppRestaurantInfo :fooddata="filteredFoodData" />
  </main>
</template>
