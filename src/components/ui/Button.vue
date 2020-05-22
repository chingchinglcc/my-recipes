<template>
  <div>
    <button
      :type="btnType"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="onClickHandler"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    btnType: {
      type: String,
      default: 'submit',
    },
    onClickHandler: {
      type: Function,
      default() {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
