<template>
  <div class="mb-3">
    <b-card :title="item.position" :sub-title="company_details">

      <b-card-text>
        {{ item.date }}
      </b-card-text>
      
      <b-card-text>
        <ul>
          <li class="" v-for="(i, index) in item.duties" :key="index">
            {{i.description}}
          </li>
        </ul>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name : 'Experience',
  props : ['item'],
  data () {
    return {
      company_details : ''
    }
  },
  mounted() {
    this.company_details = `${this.$props.item.company}, ${this.$props.item.location}`
  }
}
</script>

<style scoped>

</style>