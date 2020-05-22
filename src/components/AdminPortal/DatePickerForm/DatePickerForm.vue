<template>
    <div @click="getDateHandler">
      <Label :labelFor="state.for" :labelName="state.name" />
      <datepicker v-model="state.date" ></datepicker>
    </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import Datepicker from 'vuejs-datepicker';
import Label from '../../ui/label.vue';

export default {
  name: 'DatePickerForm',
  components: {
    Datepicker,
    Label,
  },
  setup(props, { emit }) {
    const state = reactive({
      name: 'Pick a date',
      for: 'date',
      date: '',
    });

    function getDateHandler() {
      emit('getDateHandler', state.date);
    }

    return { state, getDateHandler };
  },

};
</script>

<style lang="scss" scoped>

</style>
