<template>
  <div class="login-page-container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm';
import router from '../router'

export default {
  components: {
    LoginForm
  },
  beforeCreate () {
    if (localStorage.getItem('session')) {
      router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page-container {
  padding-top: 60px;
}
</style>