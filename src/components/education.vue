<template>
  <div class="px-5">
    <h5 class="text-uppercase text-warning">Education</h5>
    <ul class="list-unstyled ">
      <li v-for="(item, index) in ed" :key="index">
        <h6 class="text-light">{{item.school}}</h6>
        <p class="text-light">{{item.date}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'Education',
  props : ['ed']
}
</script>

<style scoped>

</style>