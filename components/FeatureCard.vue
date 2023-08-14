<template>
  <div class="flex flex-col">
    <img src="../assets/images/bambeehr.jpg" />
    <div class="flex flex-col">
      <p>{{ companyName }}</p>
      <p>{{ position }}</p>
    </div>
    <ul class="flex flex-col">
      <li v-for="item in description">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue/types/v3-define-component";
import { PropType } from "vue/types";
import Icon from "./Icon.vue";

export default {
  name: "FeatureCard",
  components: {
    Icon,
  },
  props: {
    image: {
      type: String,
    },
    companyName: {
      type: String,
    },
    position: {
      type: String,
    },
    description: {
      type: Array,
    },
  },
};
</script>
<style></style>
