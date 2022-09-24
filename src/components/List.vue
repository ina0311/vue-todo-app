<template>
  <div class="list-style">
    {{ category.title }}
    <card v-for="card in cardList" :key="card.id" :card="card"></card>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from "vuex";
import Card from "./Card.vue";

export default {
  components: { Card },
  props: {
    category: Object
  },
  setup(props) {
    const store = useStore();
    onMounted(store.dispatch("fetchCardList"));
    console.log(store.state);
    const cardList = computed(() =>
      store.state.cardList.filter(card => card.categoryId === props.category.id)
    );
    return {
      cardList,
    };
  }
};
</script>

<style scoped>
.list-style {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  background-color: silver;
  min-width: 200px;
  min-height: 400px;
}
</style>