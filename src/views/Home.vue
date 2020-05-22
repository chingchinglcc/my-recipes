<template>
  <div class="home">
    <h2>Latest recipes</h2>
    <RecipeView />
  </div>
</template>

<script>
import RecipeView from '../components/RecipeView.vue';

export default {
  name: 'Home',
  components: {
    RecipeView,
  },
};
</script>

<style lang="scss" scoped>

</style>
