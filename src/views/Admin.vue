<template>
    <div>
        <SubmitForm v-if="state.isLoggedIn" />
    </div>
</template>

<script>
import SubmitForm from '../components/AdminPortal/SubmitForm.vue';

import 'firebase/auth';

export default {
  name: 'Admin',
  components: {
    SubmitForm,
  },
};
</script>

<style lang="scss" scoped>

</style>
