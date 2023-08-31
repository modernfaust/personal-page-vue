<template>
  <div class="py-8 flex flex-col items-center w-full">
    <TypeHeader class="text-blue-900" tag="h1" variant="peta" weight="strong">Experience</TypeHeader>
    <div v-for="(item,index) in experience" class="flex flex-col items-center w-2/3 lg:w-1/2">
      <FeatureCard
        :image="item.image"
        :alt="item.alt"
        :name="item.companyName"
        :subheader="item.position"
        :date="item.date"
        :description="item.description"
        :url="item.url"
      />
      <BaseDivider v-if="index != experience.length-1"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import FeatureCard from "@/components/FeatureCard.vue";
import { ExperienceItem } from "@/constants/interfaces";
import TypeHeader from "@/components/TypeHeader.vue";
import BaseDivider from "@/components/BaseDivider.vue";

export default defineComponent({
  name: "Experience",
  props: {
    experience: {
      type: Array as PropType<Array<ExperienceItem>>
    },
  },
  components: {
    FeatureCard,
    TypeHeader,
    BaseDivider,
  },
});
</script>