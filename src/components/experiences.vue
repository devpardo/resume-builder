<template>

  <div class="px-5 py-3 pt-3">
    <h3 class="text-uppercase">Experience</h3>
    <div v-for="(item, index) in exp" :key="index">
      <Experience :item="item"/>
    </div>
  </div>
  
</template>

<script>
import Experience from './experience'
export default {
  name : 'Experiences',
  components : {
    Experience
  },
  props : ['exp']
}
</script>

<style scoped>

</style>