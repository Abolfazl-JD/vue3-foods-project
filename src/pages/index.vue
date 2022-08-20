<script setup lang="ts">
import { storeData } from '../stores/data'
const dataInfo = storeData()

useHead({
    title: 'foods app',
})
</script>

<template>
    <main class="container">
        <AppHeader/>
        <AppRestaurantInfo :fooddata="dataInfo.fooddata"/>
  </main>
</template>