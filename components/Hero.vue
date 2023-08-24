<template>
  <div class="flex flex-col items-center lg:flex-row lg:mx-24">
    <img class="w-1/2 object-scale-down" src="../assets/images/shiba_inu.png" />
    <div class="w-1/2 flex flex-col items-center">
        <TypeHeader variant="peta" weight="strong"> Hi, I'm Edward </TypeHeader>
        <TypeHeader variant="medium" weight="strong">
          I'm a software engineer in Toronto
        </TypeHeader>
    </div>
  </div>
</template>
<script lang="ts">
import Icon from "./Icon.vue";
import TypeHeader from "./TypeHeader.vue";

export default {
  name: "Hero",
  components: {
    Icon,
    TypeHeader,
  },
};
</script>
<style></style>
