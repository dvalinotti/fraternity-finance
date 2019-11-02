import { authService } from './services';
import router from '../router'

const user = localStorage.getItem('session');

const state = user
  ? { status: { loggedIn: true }, user, token: null }
  : { status: {}, user: null, token: null };

const actions = {
  login({ commit }, { username, password }) {
    commit('authRequest', { username, password });

    authService.login(username, password)
      .then(
        user => {
          commit('authSuccess', user);
          router.push('/');
        },
        error => {
          commit('authFailure', error);
        }
      )
  },
  logout({ commit }, { token }) {
    commit('logoutRequest', { token });

    authService.logout(token)
      .then(
        data => {
          commit('logoutSuccess', data);
          router.push('/login');
        },
        error => {
          commit('logoutFailure', error);
        }
      )
  }
};

const mutations = {
  authRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
    state.token = null;
  },
  authSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
    state.token = user.token;
  },
  authFailure(state) {
    state.status = {};
    state.user = null;
    state.token = null;
  },

  logoutRequest(state, token) {
    state.status = { loggingOut: true };
    state.token = token;
  },
  logoutSuccess(state) {
    state.status = { loggedIn: false };
    state.token = {};
  },
  logoutFailure(state) {
    state.status = {};
    state.token = null;
  }
};

export const auth = {
  namespaced: true,
  state,
  actions,
  mutations
};