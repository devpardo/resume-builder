<template>
  <div class="px-5 py-3 pt-3">
    <h3 class="text-uppercase">Qualifications</h3>
    <ul class="">
      <li v-for="(item, index) in qualifications" :key="index">
        {{ item.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : "qualifications",
  props : ['qualifications']
}
</script>

<style scoped>
</style>