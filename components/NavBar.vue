<template>
  <div class="flex mx-8 py-4">
    <img class="h-10" src="../assets/images/logo.png"/>
    <div class="ms-auto">
      <Icon class="w-10 h-10" icon="faGithub" />
      <Icon class="w-10 h-10" icon="faLinkedin" />
      <Icon class="w-10 h-10" icon="faFile" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue/types/v3-define-component";
import { PropType } from "vue/types";
import Icon from "./Icon.vue";

export default {
  name: "NavBar",
  components: {
    Icon,
  },
};
</script>
<style>
.nuxt-logo {
  height: 180px;
}
</style>