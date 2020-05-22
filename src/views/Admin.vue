<template>
    <div>
        <SubmitForm v-if="isLoggedIn"/>
    </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api';
import * as firebase from 'firebase/app';
import SubmitForm from '../components/AdminPortal/SubmitForm.vue';
import 'firebase/auth';

export default {
  name: 'Admin',
  components: {
    SubmitForm,
  },
  setup() {
    let isLoggedIn = ref(true);

    onMounted(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          isLoggedIn = false;
        }
      });
    });

    return { isLoggedIn };
  },
};
</script>

<style lang="scss" scoped>

</style>
