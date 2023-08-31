<template>
  <div class="py-8">
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
import { defineComponent, PropType } from "vue";
import FeatureCard from "@/components/FeatureCard.vue";
import { ExperienceItem } from "@/constants/interfaces";

export default defineComponent({
  name: "Experience",
  props: {
    experience: {
      type: Array as PropType<Array<ExperienceItem>>
    },
  },
  components: {
    FeatureCard,
  },
});
</script>
<style></style>
