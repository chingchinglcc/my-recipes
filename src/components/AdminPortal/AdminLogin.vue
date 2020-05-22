<template>
    <div>
        <div class="admin-login">
          <Button :text="state.loginBtn" :onClickHandler="onClickHandler" v-if="!state.isLoggedIn" />
          <Button :text="state.loginOut" :onClickHandler="onLogoutHandler" v-else />
        </div>
    </div>
</template>

<script>
import { reactive, onMounted } from '@vue/composition-api';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Button from '../ui/Button.vue';

export default {
  name: 'AdminLogin',
  components: { Button },
  setup() {
    const state = reactive({
      isLoggedIn: false,
      loginBtn: 'Login with GitHub',
      loginOut: 'Logout',
    });

    const fetchData = () => {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        // The signed-in user info.
        const { user } = result;
      }).catch((error) => {
        const errorMessage = error.message;
        const { email } = error;
        console.log(`${errorMessage}, ${email} is wrong. OR YOU ARE NOT ME !`);
      });
    };

    const onClickHandler = (e) => {
      e.preventDefault();
      fetchData();
    };

    const onLogoutHandler = (e) => {

    };

    onMounted(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          state.isLoggedIn = true;
        }
      });
    });

    return { state, onClickHandler, onLogoutHandler };
  },
};
</script>

<style lang="scss" scoped>

</style>
