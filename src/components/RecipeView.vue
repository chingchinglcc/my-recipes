<template>
    <div>
        show the summary of the recipe, and can route to the Recipe.vue
        <Button :text="'String'" />
    </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import Button from './ui/Button.vue';

export default {
  name: 'RecipeView',
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>

</style>
