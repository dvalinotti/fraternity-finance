<template>
  <div class="login-form-container">
    <form class="md-layout" @submit.prevent="handleSubmit">
      <md-card class="login-form md-layout-item md-size-100 md-small-size-100">
        <md-card-header>
          <div class="md-title">Fraternity Finance</div>
          <div class="md-subtitle">Tau Delta Phi</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field class="login-field">
                <label for="username">Username</label>
                <md-input v-model="username" name="username" id="username" aria-placeholder="Username"/>
              </md-field>
              <md-field class="login-field">
                <label for="password">Password</label>
                <md-input v-model="password" type="password" name="password" id="password" />
              </md-field>
              <md-button class="md-raised md-primary" v-on:click="handleSubmit()">Submit</md-button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    ...mapState([
      'authRequest',
      'authSuccess',
      'authFailure'
    ])
  },
  methods: {
    ...mapActions('auth', ['login']),
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .login-form {
    padding: 30px 45px;
    background-color: whitesmoke
  }
}

.login-field {
      border-bottom: 1px solid gray;
      padding-bottom: 5px;
  }
</style>