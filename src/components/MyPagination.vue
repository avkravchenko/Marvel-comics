<template>
  <vue-awesome-paginate
    :total-items="total ? total : 0"
    :items-per-page="15"
    :max-pages-shown="innerWidth <= 500 ? 3 : 5"
    v-model="currentPage"
    :on-click="onClickHandler"
  />
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import "vue-awesome-paginate/dist/style.css";

export default {
  data() {
    return {
      currentPage: 1,
      innerWidth: window.innerWidth,
    };
  },
  computed: {
    ...mapGetters("comicsModule", ["comics", "total", "page"]),
  },
  methods: {
    onClickHandler() {
      const currentQuery = { ...this.$route.query };
      currentQuery.page = this.currentPage - 1 + "";
      this.$router.push({ query: currentQuery });
      window.scrollTo(0, 0);
    },
    handleInnerWidth() {
      this.innerWidth = window.innerWidth;
    },
    getCurrentAfterReload() {
      const page = this.$route.query.page;
      this.currentPage = page ? +page + 1 : 1;
    },
  },
  watch: {
    "$route.query.page"(newPage) {
      if (newPage === "0" || newPage === undefined) {
        this.currentPage = 1;
      }
    },
    "$route.query.search"(newSearch) {
      if (newSearch) this.currentPage = 1;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleInnerWidth);
    this.getCurrentAfterReload();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleInnerWidth);
  },
};
</script>

<style>
.pagination-container {
  display: flex;
  justify-content: center;
  width: 100%;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
@media screen and (max-width: 550px) {
  .pagination-container {
    display: flex;
    justify-content: center;
    width: 100%;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 30px;
    width: fit-content;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
}
</style>
