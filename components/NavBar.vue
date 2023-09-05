<template>
  <div>
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
          <Icon class="text-blue-900" icon="faGithub" size="medium" />
        </a>
        <a href="https://www.linkedin.com/in/edward-lee-183b878b">
          <Icon class="text-blue-900" icon="faLinkedin" size="medium" />
        </a>
        <a href="www.github.com">
          <Icon class="text-blue-900" icon="faFile" size="medium" />
        </a>
      </div>
    </div>
    <div v-if="isPanelOpen">
      <NavigationPanelItem />
    </div>
  </div>
</template>
<script lang="ts">
import Icon from "@/components/BaseIcon.vue";
import HamburgerMenu from "./HamburgerMenu.vue";
import NavigationPanelItem from "./NavigationPanelItem.vue";
import { defineComponent, PropType, ref, onMounted, onUnmounted } from "vue";
import content from "@/constants/copy";
import { NavigationItem } from "@/constants/interfaces";

export default defineComponent({
  name: "NavBar",
  props: {
    navItems: {
      type: Object as PropType<NavigationItem>,
    },
  },
  components: {
    Icon,
    HamburgerMenu,
    NavigationPanelItem,
    content,
  },
  setup(props) {
    const mobileMode = ref(false);
    const isPanelOpen = ref(false);
    const panelItemsArray = Object.keys(props.panelItems);

    function revealPanel(value) {
      isPanelOpen.value = value;
      console.log("this changed", isPanelOpen.value);
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
    };
  },
});
</script>
<style>
.nuxt-logo {
  height: 180px;
}
</style>
