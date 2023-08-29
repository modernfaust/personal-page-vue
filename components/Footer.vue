<template>
  <div class="flex flex-col items-center gap-4 mx-8 py-4 lg:mx-24">
    <div class="flex flex-row gap-4">
      <a href="https://github.com/modernfaust"><Icon class="text-blue-900" icon="faGithub" size="medium"/></a>
      <a href="https://www.linkedin.com/in/edward-lee-183b878b"><Icon class="text-blue-900" icon="faLinkedin" size="medium"/></a>
      <a href="www.github.com"><Icon class="text-blue-900" icon="faFile" size="medium"/></a>
    </div>
    <TypeBody class="text-blue-900">{{`Copyright ©${copyright} Edward Lee. All rights reserved`}}.
    </TypeBody>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue/types/v3-define-component";
import { PropType } from "vue/types";
import Icon from "./Icon.vue";
import TypeBody from "./TypeBody.vue";

export default {
  name: "Footer",
  components: {
    Icon,
    TypeBody,
  },
  computed: {
    copyright: function() {
      return new Date().getFullYear();
    },
  }
};
</script>
<style>
.nuxt-logo {
  height: 180px;
}
</style>
  