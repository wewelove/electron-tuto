<template>
  <MainSection>
    <li>
      <button class="button is-link is-light mt-5" v-on:click="login" id="btn-login">{{ !userIsLoggedIn ? "Log In" : "Log out" }}</button>
    </li>
  </MainSection>
</template>

<script>
import MainSection from "@components/MainSection.vue"
import * as session from '@scripts/session'

export default {
  name: "UserSessionLink",
  components: {
    MainSection
  },
  data() {
    return {
      userIsLoggedIn: session.userIsLoggedIn(this.$pinia)
    }
  },
  methods: {
    login() {    
      session.setUserIsLoggedIn(this.$pinia, this.userIsLoggedIn ? false : true)
      // 🔄 Redirect to login or home depending on the state of user session
      this.$router.push(this.userIsLoggedIn ? "/login" : "/")
    }
  }
}
</script>


<style></style>
