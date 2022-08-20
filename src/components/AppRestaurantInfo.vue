<script setup>
const props = defineProps({
    fooddata : Array
})
</script>

<template>
  <section class="restaurantinfo">
      <div v-for="store of props.fooddata" :key="store.id">
          <h2>{{ store.name }}</h2>
          <p>delivery time{{store.deliveryTime}}</p>
          <p>rating {{store.rating}}</p>
          <p v-if="store.freeDelivery" class="label">
              <span>Free delivery</span>
          </p>
          <div class="row">
              <div
                v-for="menuItem of store.menu"
                :key="menuItem.id"
                class="items"
                :style="`background : url(${menuItem.img}) no-repeat center center`">
                    <div class="iteminfo">
                        <div>
                            <h4>{{menuItem.item}}</h4>
                            <p>${{menuItem.price}}</p>
                        </div>
                        <router-link :to="`/items/${menuItem.id}`">
                          <button class="ghost">View item ></button>
                        </router-link>
                    </div>
               </div>
          </div>
      </div>
  </section>
</template>

<style>
.iteminfo p{
    margin-top: 5px;
}
</style>