<template>
  <div id="nav" class="mt-3 mb-3">
    <b-container>
      <b-row>
        <b-col class="d-flex justify-content-end">
          <b-button variant="warning" class="mx-1" @click="print">Download CV</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name : 'Navi',
  data () {
    return {
      publicURL : process.env.BASE_URL
    }
  },
  methods : {
    print : function() {
      window.open(`${this.publicURL}HensterBryanPardo-Web Developer.pdf`);
    }
  }
}
</script>

<style scoped>

</style>