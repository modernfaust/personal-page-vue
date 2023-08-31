<template>
  <div class="flex mx-8 py-4 lg:mx-24">
    <router-link to="/"><img class="h-10" src="../assets/images/logo.png" alt="edward_logo"/></router-link>
    <div class="flex flex-row gap-4 ms-auto">
      <a href="https://github.com/modernfaust"><Icon class="text-blue-900" icon="faGithub" size="medium"/></a>
      <a href="https://www.linkedin.com/in/edward-lee-183b878b"><Icon class="text-blue-900" icon="faLinkedin" size="medium"/></a>
      <a href="www.github.com"><Icon class="text-blue-900" icon="faFile" size="medium"/></a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue/types/v3-define-component";
import { PropType } from "vue/types";
import Icon from "@/components/Icon.vue";

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
