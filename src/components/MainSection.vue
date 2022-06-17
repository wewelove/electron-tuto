<template>
  <div class="columns">
    <div class="column">
      <span>⚛️</span>
      <h1 class="title">
        {{
          !userIsLoggedIn
            ? "Welcome to Electron Tuto!"
            : "You are now logged in"
        }}
      </h1>
      <br>
      <p class="subtitle" v-if="!userIsLoggedIn">
        The electron version of 🍦tuto is here!
        <br />
        You can now start a new 🍎 macOS / 🪟 Windows
        <br />project using the latest frameworks out there.
      </p>
      <ul>
        <li v-if="userIsLoggedIn && $route.name != 'spotify'">
          <button class="button is-primary is-light mt-5 mr-5" v-on:click="navigateToSpotify">Spotify Tracker</button>
        </li>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
import * as session from "@scripts/session"
export default {
  name: "MainSection",
  props: {
    msg: String
  },
  data() {
    return {
      userIsLoggedIn: session.userIsLoggedIn(this.$pinia)
    }
  },
  methods: {
    navigateToSpotify() {
      // 🔄 Redirect to Spotify page
      this.$router.push("/spotify")
    }
  }
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

span {
  font-size: 92px;
}
</style>
