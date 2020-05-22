<template>
    <div>
        <form action="">
          <RecipeName :getRecipeName="getFormValues.getRecipeName"/>
          <DatePickerForm :getDateHandler="getFormValues.getDateHandler" />
        </form>
    </div>
</template>

<script>
import { reactive } from '@vue/composition-api';

// components
import RecipeName from './RecipeName/RecipeName.vue';
import DatePickerForm from './DatePickerForm/DatePickerForm.vue';

export default {
  name: 'SubmitForm',
  components: {
    RecipeName,
    DatePickerForm,
  },
  setup() {
    const state = reactive({
      recipeName: '',
      recipeDate: '',
    });


    const getFormValues = {
      getRecipeName(name) {
        console.log('fire name');
        // state.recipeName = name;
        state.recipeDate = name;
      },
      getDateHandler(date) {
        console.log('parent');
        state.recipeDate = date;
      },
    };

    return { state, getFormValues };
  },
};
</script>

<style lang="scss" scoped>

</style>
