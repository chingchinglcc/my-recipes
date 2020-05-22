<template>
    <div>
        <input
            :type="inputType"
            class="input-btn rounded border-gray-300 border-4 focus:border-green-300 focus:outline-none transition-colors duration-75 ease-in"
            :placeholder="placeholder"
            :name="inputName"
            v-model="state.currentVal"
            @input="emitInputVal">
    </div>
</template>

<script>
import { reactive } from '@vue/composition-api';

export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: 'enter text',
    },
    inputName: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: 'text',
    },
  },
  setup(prop, { emit }) {
    const state = reactive({
      currentVal: '',
    });

    function emitInputVal() {
      emit('getInputVal', state.currentVal);
    }

    return { state, emitInputVal };
  },
};
</script>

<style lang="scss" scoped>

</style>
