<template>
  <div class="button-wrapper">
    <MyButton :empty="true" @click="clearAllFilters"
      >Clear all filters</MyButton
    >
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import MyButton from "./MyButton.vue";

export default {
  components: {
    MyButton,
  },
  methods: {
    ...mapMutations("comicsModule", ["setSearch"]),
    clearAllFilters() {
      this.$router.replace({ path: "/", query: {} });
      this.setSearch(null);
    },
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  text-align: center;
  margin-bottom: 50px;
}
</style>
