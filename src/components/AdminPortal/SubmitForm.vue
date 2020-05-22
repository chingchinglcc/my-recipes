<template>
    <div>
        <form action="">
          <div class="form-recipe-name">
            <Input
              :inputName="state.recipeField.name"
              :placeholder="state.recipeField.placeholder"
              :labelObj="state.recipeField.labelObj" />
          </div>
          <div class="form-action">
            <Button :text="state.submitBtn" />
            <Button :text="state.clearBtn" />
          </div>
        </form>
    </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import Button from '../ui/Button.vue';
import Input from '../ui/Input.vue';

export default {
  name: 'SubForm',
  components: {
    Button,
    Input,
  },
  setup() {
    const state = reactive({
      submitBtn: 'Submit',
      clearBtn: 'Clear',
      recipeField: {
        name: 'RecipeName',
        placeholder: 'Enter Recipe Name',
        labelObj: {
          name: 'RecipeName',
          label: 'Recipe name',
        },
      },
    });


    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
