<template>
  <a class="bg-slate-100" :href="url">
    <div class="flex gap-2 w-40">
      <BaseIcon
        class="text-blue-900"
        :icon="setNavigationIcon()"
        size="medium"
      />
      <TypeSubHeader class="uppercase">{{ item }}</TypeSubHeader>
    </div>
  </a>
</template>
<script lang="ts">
import BaseIcon from "@/components/BaseIcon.vue";
import TypeHeader from "@/components/TypeHeader.vue";
import TypeSubHeader from "./TypeSubHeader.vue";
import TypeBody from "./TypeBody.vue";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "NavigationPanelItem",
  props: {
    url: {
      type: String as PropType<string>,
    },
    item: {
      type: String as PropType<string>,
    },
  },
  components: {
    BaseIcon,
    TypeHeader,
    TypeSubHeader,
    TypeBody,
  },
  setup(props) {
    const navigationIcon = ref("faFile");

    function setNavigationIcon() {
      switch (props.item) {
        case "github":
          navigationIcon.value = "faGithub";
          break;
        case "linkedin":
          navigationIcon.value = "faLinkedin";
          break;
        case "resume":
          navigationIcon.value = "faFile";
          break;
        default:
          navigationIcon.value = "faFile";
      }
      console.log("this rendered", navigationIcon.value);
      return navigationIcon.value;
    }

    return {
      navigationIcon,
      setNavigationIcon,
    };
  },
});
</script>
