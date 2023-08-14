<template>
  <div>
    <div v-for="item in experience" class="flex flex-col items-center">
      <FeatureCard
        :image="item.image"
        :name="item.companyName"
        :subheader="item.position"
        :date="item.date"
        :description="item.description"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue/types/v3-define-component";
import { PropType } from "vue/types";
import FeatureCard from "./FeatureCard.vue";
import { ExperienceItem } from "../constants/interfaces.ts";

export default {
  name: "Experience",
  props: {
    experience: {
      type: Array<ExperienceItem>,
    },
  },
  components: {
    FeatureCard,
  },
};
</script>
<style></style>
