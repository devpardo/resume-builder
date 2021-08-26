<template>

  <div class="px-5 py-3">
    <div class="mt-3">
      <b-row class="">
        <b-col cols="3" lg="3" md="12" sm="4" class="mb-3">
          <b-img rounded="circle" blank-color="#e3e3e3" :src="profile.image" center fluid class=""></b-img>
        </b-col>
        <b-col cols="9" lg="9" md="12" sm="8">
          <h2 class="text-warning mb-0 text-uppercase">{{profile.full_name}}</h2>
          <h5 class="text-light text-uppercase">{{profile.position}}</h5>
        </b-col>
      </b-row>
    </div>
    <div class="text-white mt-3 ">
      <div class="mb-3">
        <h5 class="text-warning">CONTACT</h5>
        <ul class="list-unstyled">
          <li>
            <b-icon icon="geo"></b-icon>
            {{profile.location}}
          </li>
          <li>
            <b-icon icon="envelope"></b-icon>
            {{profile.email}}
          </li>
          <li>
            <b-icon icon="telephone"></b-icon>
            {{profile.contact}}
          </li>
          <li>
            <b-icon icon="github"></b-icon>
            {{profile.socials.github}}
          </li>
          <li>
            <b-icon icon="globe"></b-icon>
            {{profile.socials.web}}
          </li>
          <li>
            <b-icon icon="chat-text"></b-icon>
            Skype: {{profile.socials.skype}}
          </li>
      </ul>
      </div>
      
      <div class="mb-5">
        <h5 class="text-warning">SUMMARY</h5>
        <p class="small">{{profile.summary}}</p>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  name : 'Profile',
  props : ['profile']
}
</script>

<style scoped>

</style>