<template>
  <div class="flex">
    <div>
      <p>Edward</p>
    </div>
    <Icon :icon="'faGithub'" />
    <Icon :icon="'faLinkedin'" />
    <Icon :icon="'faFile'" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue/types/v3-define-component";
import { PropType } from "vue/types";
import Icon from "./Icon.vue";

export default {
  name: "ContactBar",
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
