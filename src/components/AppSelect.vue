<script setup lang="ts">
const selectedOptions = ref(['tacos', 'pizza', 'dim sum'])
const selectedFood = ref('')

const emit = defineEmits < {
    (e: 'selectedFood', selectedFood : string): void
}>()

const chosenfood = () => {
    emit('selectedFood', selectedFood.value)
}
</script>

<template>
  <div>
      <label for="food">Wich is your favorite food ?</label>

      <select name="food" id="food" v-model="selectedFood" @change="chosenfood">
          <option value disabled>-- please select a food !</option>
          <option v-for="option in selectedOptions" :key="option" :value="option">{{option}}</option>
      </select>

  </div>
</template>