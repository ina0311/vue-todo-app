<template>
  <div>
    カード一覧：{{ cardList }}<br />
    カテゴリ一覧：{{ categoryList }}
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {},
  setup() {
    // Vuexを使う設定
    const store = useStore();
    // コンポーネントがマウントされたときにcategoryListとcardListをAPIから取得
    onMounted(store.dispatch("fetchCategoryList"));
    onMounted(store.dispatch("fetchCardList"));
    return {
      cardList: computed(() => store.state.cardList),
      categoryList: computed(() => store.state.categoryList)
    };
  }
};
</script>

<style></style>
