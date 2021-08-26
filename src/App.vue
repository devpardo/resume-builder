<template>
  <div id="app">
    <Navi />
    <b-container class="mt-md-3 mt-sm-0 shadow-sm mb-5">
      <b-row id="print">
        <router-view/>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import Navi from './components/navbar'

export default {
  name : 'App',
  components : {
    Navi
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@700&family=Roboto&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Atkinson Hyperlegible', sans-serif;
}

body, p {
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: #000 !important;
}

.debug {
  border: 1px dashed #f00;
}
</style>
