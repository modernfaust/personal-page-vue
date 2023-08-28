<template>
  <div class="py-8 flex flex-col items-center w-full">
    <TypeHeader class="text-blue-500" tag="h1" variant="peta" weight="strong">Experience</TypeHeader>
    <div v-for="(item,index) in experience" class="flex flex-col items-center w-2/3 lg:w-1/2">
      <FeatureCard
        :image="item.image"
        :name="item.companyName"
        :subheader="item.position"
        :date="item.date"
        :description="item.description"
      />
      <BaseDivider v-if="index != experience.length-1"/>
    </div>
  </div>
</template>
<script lang="ts">
import FeatureCard from "./FeatureCard.vue";
import { ExperienceItem } from "../constants/interfaces.ts";
import TypeHeader from "./TypeHeader.vue";
import BaseDivider from "./BaseDivider.vue";

export default ({
  name: "Experience",
  props: {
    experience: {
      type: Array<ExperienceItem>,
      default:[],
    },
  },
  components: {
    FeatureCard,
    TypeHeader,
    BaseDivider,
  },
});
</script>