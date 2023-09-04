<template>
  <div>
    <component
      :is="getComponent(icon)"
      :icon="getIcon(icon)"
      v-bind="$attrs"
      v-on="$listeners"
      :class="iconSizing()"
    />
  </div>
</template>
<script>
import { snakeCase, camelCase } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFile, faBars,faX } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconSizes } from "@/constants/enums";

const FAIcons = Object.freeze({
  faGithub,
  faLinkedin,
  faFile,
  faBars,
  faX,
});

const CustomIcons = Object.freeze({});

Object.values(FAIcons).forEach((icon) => {
  library.add(icon);
});

export const Icons = Object.freeze(
  [...Object.keys(FAIcons), ...Object.keys(CustomIcons)].sort().reduce(
    (obj, val) => ({
      ...obj,
      [snakeCase(val).toUpperCase()]: val,
    }),
    {}
  )
);

export const isValidIcon = (value) =>
  Object.values(Icons).includes(camelCase(value));

const isCustomIcon = (iconName) => Object.keys(CustomIcons).includes(iconName);

export const getComponent = (iconName) =>
  isCustomIcon(iconName) ? CustomIcons[iconName] : FontAwesomeIcon;

export const getIcon = (icon) => FAIcons[camelCase(icon)] || null;

export default {
  props: {
    icon: {
      type: String,
      required: true,
      validator: isValidIcon,
    },
    size: {
      type: String,
      default: "small",
      validator: (value) => Object.values(IconSizes).includes(value),
    },
  },
  setup(props) {
    const iconSizing = () => {
      switch (props.size) {
        case "small":
          return "w-4 h-4";
        case "medium":
          return "w-10 h-10";
        default:
          return "w-16 h-16";
      }
    };
    return {
      getComponent,
      getIcon,
      iconSizing,
    };
  },
};
</script>
<style></style>
