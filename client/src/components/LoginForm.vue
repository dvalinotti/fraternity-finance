<template>
  <div class="login-form-container">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <transition 
      name="slide-fade" 
      mode="out-in"
    >
      <form v-if="register === false" key="login" class="md-layout" @submit.prevent="handleSubmit">
        <md-card class="login-form md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">Fraternity Finance</div>
            <div class="md-subtitle">Tau Delta Phi</div>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter login-container">
              <div class="md-layout-item md-small-size-100">
                <md-field class="login-field">
                  <label for="username">Username</label>
                  <md-input v-model="username" name="username" id="username" aria-placeholder="Username"/>
                </md-field>
                <md-field class="login-field">
                  <label for="password">Password</label>
                  <md-input v-model="password" v-on:keyup.enter="handleSubmit" type="password" name="password" id="password" />
                </md-field>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-50 button-container">
                    <md-button class="md-raised md-primary register-button" v-on:click="handleSwitch()">Sign Up</md-button>
                  </div>
                  <div class="md-layout-item md-small-size-50 button-container">
                    <md-button class="md-raised md-primary login-button" v-on:click="handleSubmit()">Log In</md-button>
                  </div>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </form>
      <form v-else key="register" class="md-layout" @submit.prevent="handleSubmit">
        <md-card class="login-form md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">Fraternity Finance</div>
            <div class="md-subtitle">Tau Delta Phi</div>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter login-container">
              <div class="md-layout-item md-small-size-100">
                <md-field class="login-field">
                  <label for="username">Username</label>
                  <md-input v-model="username" name="username" id="username" aria-placeholder="Username"/>
                </md-field>
                <md-field class="login-field">
                  <label for="email">Email</label>
                  <md-input v-model="email" name="email" id="email" aria-placeholder="Email"/>
                </md-field>
                <md-field class="login-field">
                  <label for="password">Password</label>
                  <md-input v-model="password" v-on:keyup.enter="handleSubmit" type="password" name="password" id="password" />
                </md-field>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-50 button-container">
                    <md-button class="md-raised md-primary register-button" v-on:click="handleSwitch()">Log In</md-button>
                  </div>
                  <div class="md-layout-item md-small-size-50 button-container">
                    <md-button class="md-raised md-primary login-button" v-on:click="handleSubmit()">register</md-button>
                  </div>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </form>
    </transition>
    
  </div>
  
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
      submitted: false,
      register: false
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
    },
    handleSwitch() {
      this.register = !this.register;
    }
  }
}
</script>

<style lang="scss" scoped>

.login-container {
  .md-layout-item {
    .md-layout {
      flex-basis: 50% 50%;
      .button-container {
        padding-left: 5px;
        padding-right: 5px;

        button {
          width: 90%;
        }
      }
    }
  }
}

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

.register-button {
  margin-top: 30px;
  background-color: #7d7d93;
  color: white;
}

.login-button {
  margin-top: 30px;
  background-color: #2c3e50;
  color: white;
}

.login-field {
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
  margin: 4px 0 15px;
}

.slide-fade-enter-active {
  transition: all .25s ease;
}
.slide-fade-leave-active {
  transition: all .25s ease;
}
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>