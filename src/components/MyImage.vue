<template>
  <div>
    <div class="img-wrapper">
      <div v-if="isImgLoad" class="placeholder"></div>
      <img
        ref="myImg"
        class="thumb"
        loading="lazy"
        @load="handleLoad()"
        :src="src"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isImgLoad: true,
    };
  },
  props: {
    src: {
      type: String,
    },
  },
  methods: {
    handleLoad() {
      const image: any = this.$refs.myImg;
      if (image && image.complete) this.isImgLoad = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-wrapper {
  position: relative;

  @keyframes loading {
    0% {
      background-color: rgb(204, 204, 204);
    }
    50% {
      background-color: rgb(159, 159, 159);
    }
    100% {
      background-color: rgb(204, 204, 204);
    }
  }
  .placeholder {
    position: absolute;
    z-index: 1;
    min-height: 300px;
    max-height: 300px;
    width: 200px;

    animation: loading infinite ease-in-out 1.5s;
  }

  .thumb {
    background-image: linear-gradient(to right, #eee, #aaa);
    min-height: 300px;
    max-height: 300px;
    max-width: 200px;
  }
}
</style>
