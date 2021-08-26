<template>
  <b-container fluid="sm">
    <b-row class="g-0">

      <b-col cols="12" lg="4" md="4" sm="12" class="bg-dark">
        <Profile :profile="profile"/>
        <Education :ed="education" class=""/>
      </b-col>

      <b-col cols="12" lg="8" md="8" sm="12" class="bg-grey pt-3">
          <Qualifications :qualifications="qualifications"/>
          <Experiences :exp="experiences" class=""/>
      </b-col>
      
    </b-row>
    
  </b-container>
</template>

<script>
import jsonData from '../assets/data.json';
import Profile from '../components/profile';
import Experiences from '../components/experiences';
import Qualifications from '../components/qualifications';
import Education from '../components/education';


export default {
  name: 'Home',
  components: {
    Profile,
    Experiences,
    Qualifications,
    Education
  },
  data () {
    return {
      profile : jsonData.profile,
      experiences : jsonData.work_history,
      qualifications : jsonData.qualifications,
      education : jsonData.education
    }
  }
}
</script>

<style scoped>
.bg-grey {
  background-color: #e3e3e3;
}
</style>
