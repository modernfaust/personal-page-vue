<template>
  <nav class="w-full">
    <div class="flex mx-8 py-4 lg:mx-24">
      <router-link to="/"
        ><img class="h-10" src="../assets/images/logo.png" alt="edward_logo"
      /></router-link>
      <HamburgerMenu
        v-if="mobileMode"
        class="ms-auto"
        @reveal="(value) => revealPanel(value)"
      />
      <div v-else class="flex flex-row gap-4 ms-auto">
        <a href="https://github.com/modernfaust">
          <BaseIcon class="text-blue-900" icon="faGithub" size="medium" />
        </a>
        <a href="https://www.linkedin.com/in/edward-lee-dev">
          <BaseIcon class="text-blue-900" icon="faLinkedin" size="medium" />
        </a>
        <a href="www.github.com">
          <BaseIcon class="text-blue-900" icon="faFile" size="medium" />
        </a>
      </div>
    </div>
    <div
      class="w-full flex flex-col items-center"
      v-if="isPanelOpen"
      v-for="item in panelItemsArray"
    >
      <NavigationPanelItem class="h-12" :item="item" :url="navItems[item]" />
    </div>
  </nav>
</template>
<script lang="ts">
import BaseIcon from "@/components/BaseIcon.vue";
import HamburgerMenu from "./HamburgerMenu.vue";
import NavigationPanelItem from "./NavigationPanelItem.vue";
import {
  defineComponent,
  PropType,
  ref,
  onMounted,
  onUnmounted,
  computed,
} from "vue";
import { NavigationItems } from "@/constants/interfaces";

export default defineComponent({
  name: "NavBar",
  props: {
    navItems: {
      type: Object as PropType<NavigationItems>,
    },
  },
  components: {
    BaseIcon,
    HamburgerMenu,
    NavigationPanelItem,
  },
  setup(props) {
    const mobileMode = ref(false);
    const isPanelOpen = ref(false);
    const panelItemsArray = computed(() =>
      props.navItems ? Object.keys(props.navItems) : []
    );

    function revealPanel(value) {
      isPanelOpen.value = value;
    }

    onMounted(() => {
      if (process.client) {
        window.addEventListener("resize", handleWindowSizeChange);
        handleWindowSizeChange();
      }
    });

    onUnmounted(() => {
      if (process.client) {
        window.removeEventListener("resize", handleWindowSizeChange);
      }
    });

    const handleWindowSizeChange = () => {
      if (process.client) {
        mobileMode.value = window.innerWidth < 690;
      }
    };
    return {
      mobileMode,
      revealPanel,
      isPanelOpen,
      panelItemsArray,
    };
  },
});
</script>
