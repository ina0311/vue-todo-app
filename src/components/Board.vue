<template>
  <div class="board-style">
    <list
      v-for="category in categoryList"
      :key="category.id"
      :category="category"
    ></list>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import List from "./List.vue";

export default {
  components: { List },
  setup() {
    const store = useStore();
    onMounted(store.dispatch("fetchCategoryList"));
    return {
      categoryList: computed(() => store.state.categoryList)
    };
  }
};
</script>

<style scoped>
.board-style {
  display: flex;
  gap: 10px;
}
</style>