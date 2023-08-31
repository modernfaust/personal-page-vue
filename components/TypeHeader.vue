<template>
  <component
    :is="tag"
    :class="[
      `type-header-${variant}`,
      `type-header-${weight}`,
    ]"
    class="type-header font-poppins text-center"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "TypeHeader",
  props: {
    /** The html tag to use for this component. */
    tag: {
      type: String,
      default: "span",
    },
    /** One of `mega`, `giga`, `tera`, or `peta`. */
    variant: {
      type: String,
      default: "tera",
    },
    /** One of `regular`, or `strong`. */
    weight: {
      type: String,
      default: "regular",
    },
  },
};
</script>
<style>
.type-header-mega {
  font-size: 2rem;
}
.type-header-giga {
  font-size: 2.5rem;
}
.type-header-tera {
  font-size: 3rem;
}
.type-header-peta {
  font-size: 4.5rem;
}
.type-header-regular {
  font-weight: normal;
}
.type-header-strong {
  font-weight: bold;
}
</style>
