<template>
    <div>
        <Label :labelFor="state.for" :labelName="state.name" />
        <Input :inputName="state.name" :placeholder="state.placeholder"  v-on:getInputVal="getRecipeName"/>
    </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import Label from '../../ui/label.vue';
import Input from '../../ui/Input.vue';

export default {
  name: 'RecipeName',
  props: {
    getRecipeName: {
      type: Function,
      default() {},
    },
  },
  components: {
    Label,
    Input,
  },
  setup() {
    const state = reactive({
      name: 'Recipe Name',
      for: 'recipe-name',
      placeholder: 'Recipe Name',
    });

    return { state };
  },
};
</script>

<style lang="scss" scoped>

</style>
