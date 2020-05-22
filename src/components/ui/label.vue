<template>
    <div>
        <label :for="labelFor">{{labelName}}</label>
    </div>
</template>

<script>
export default {
  name: 'Label',
  props: {
    labelFor: {
      type: String,
      required: true,
    },
    labelName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
