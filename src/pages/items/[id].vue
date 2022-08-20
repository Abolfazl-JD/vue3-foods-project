<script setup>
import { storeData } from '../../stores/data'
const dataInfo = storeData()

const route = useRoute()
const id = route.params.id

const currentItem = computed(() => {
    for (let i = 0; i < dataInfo.fooddata.length; i++) {
        for (let j = 0; j < dataInfo.fooddata[i].menu.length; j++) {
            if (dataInfo.fooddata[i].menu[j].id === id) return dataInfo.fooddata[i].menu[j]
        }
    }
})

useHead({
    title: computed(() => currentItem.value.item),
})

</script>

<template>
  <main class="container">
        <section 
            class="image"
            :style="`background : url(/${currentItem.img}) no-repeat center center`">
        </section>
        
        <section class="details">
            <h1>{{currentItem.item}}</h1>
            <h3>price : ${{currentItem.price}}</h3>

            <fieldset v-if="currentItem.options">
                <legend>
                    <h3>Options</h3>
                </legend>
                <div v-for="option of currentItem.options" :key="option">
                    <label for="option">{{option}}</label>
                </div>
            </fieldset>

            <fieldset v-if="currentItem.addOns">
                <legend>
                    <h3>Add Ons</h3>
                </legend>
                <div v-for="addon in currentItem.addOns" :key="addon">
                    <label :for="addon">{{ addon }}</label>
                </div>
            </fieldset>
        </section>

        <section class="options">
            <h3>Description</h3>
            <p class="desc-text">{{ currentItem.description }}</p>
        </section>
  </main>
</template>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
  padding-bottom: 70px;
}
.image {
  grid-area: 1 / 1 / 2 / 2;
  background-size: cover;
}
.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}
.options {
  grid-area: 2 / 1 / 3 / 2;
}

.desc-text {
    position: absolute;
}
</style>