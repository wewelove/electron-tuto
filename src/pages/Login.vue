<template>
  <div class="columns">
    <div class="column">
      <UserSessionLink />
    </div>
  </div>
</template>

<script>
import UserSessionLink from "@components/UserSessionLink.vue"
export default {
  name: "Login",
  components: {
    UserSessionLink
  }
}
</script>


<style></style>
