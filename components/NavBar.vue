<template>
  <div class="flex mx-8 py-4 lg:mx-24">
    <router-link to="/"><img class="h-10" src="../assets/images/logo.png" alt="edward_logo"/></router-link>
    <HamburgerPanel v-if="mobileMode"/>
    <div v-else class="flex flex-row gap-4 ms-auto">
      <a href="https://github.com/modernfaust"><Icon class="text-blue-900" icon="faGithub" size="medium"/></a>
      <a href="https://www.linkedin.com/in/edward-lee-183b878b"><Icon class="text-blue-900" icon="faLinkedin" size="medium"/></a>
      <a href="www.github.com"><Icon class="text-blue-900" icon="faFile" size="medium"/></a>
    </div>

  </div>
</template>
<script lang="ts">
import Icon from "@/components/BaseIcon.vue";
import HamburgerPanel from "./HamburgerPanel.vue";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "NavBar",
  components: {
    Icon,
    HamburgerPanel,
  },
  setup() {
    const mobileMode = ref(false);
    if (process.client) {
      mobileMode.value = window.innerWidth < 640;
      
    }
    return {
      mobileMode,
    }
  }
});
</script>
<style>
.nuxt-logo {
  height: 180px;
}
</style>
