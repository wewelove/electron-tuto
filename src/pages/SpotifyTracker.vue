<template>
  <div class="container subtitle">
    <MainSection>
      <li>
        <button class="button is-link is-light mt-5" v-on:click="navigateToHome">Go Home</button>
      </li>
    </MainSection>
    <br />
    <div v-if="isPlaying">
      <img :src="imgSrc" />
      <p>🎸 You are currently listening to {{ song }} by {{ artist }}</p>
    </div>
    <div v-else>
      <p>
        1. Set <i>VUE_APP_SPOTIFY_AUTHORIZATION_BEARER_TOKEN</i>
        <br />
        2. Play something on Spotify! (Refresh the page if you can see the song playing)
      </p>
    </div>
  </div>
</template>

<script>
import MainSection from "@components/MainSection.vue"
import * as api from "@/assets/scripts/api"
export default {
  name: "SpotifyTracker",
  components: {
    MainSection
  },
  mounted() {
    api
      .getUsersCurrentlyPlayingTrack()
      .then((item) => {
        this.isPlaying = true
        this.song = item.name
        this.artist = item.artists[0].name
        this.imgSrc = item.album.images[0].url
      })
      .catch(() => {
        this.isPlaying = false
      })
  },
  data() {
    return {
      isPlaying: false,
      song: "",
      imgSrc: "",
      artist: ""
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push("/")
    }
  }
}
</script>


<style></style>
