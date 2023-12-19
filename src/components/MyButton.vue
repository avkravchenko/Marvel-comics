<template>
  <button :class="{ 'my-button': true, 'empty-button': empty }">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    empty: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.my-button {
  background-color: rgb(0, 132, 255);
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  border: none;
  padding: 15px;

  &:hover {
    background-color: rgb(0, 132, 255);
  }
}

.empty-button {
  background-color: #fff;
  color: rgb(0, 132, 255); // Set text color to the original background color
  border: solid 1px rgb(0, 132, 255);
  border-radius: 5px;

  &:hover {
    background-color: rgb(0, 132, 255);
    color: #fff;
  }
}
</style>
