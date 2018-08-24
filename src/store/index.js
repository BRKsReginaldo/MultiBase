import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const toBase = base => ({baseNumber}) => baseNumber.toString(base)

export default new Vuex.Store({
  state: {
    baseNumber: 0,
    showingPath: null,
    originBase: null,
    pathFormater: null
  },
  mutations: {
    SET_BASE_NUMBER (state, {value, base}) {
      if (isNaN(parseInt(value, base))) return
      state.baseNumber = parseInt(value, base)
    },
    SET_SHOWING_PATH (state, base) {
      state.showingPath = base
    },
    SET_ORIGIN_BASE (state, base) {
      state.originBase = base
    },
    SET_PATH_FORMATER (state, formater) {
      state.pathFormater = formater
    }
  },
  actions: {
    setBaseNumber ({commit}, payload) {
      commit('SET_BASE_NUMBER', payload)
    },
    setShowingPath ({commit}, payload) {
      commit('SET_SHOWING_PATH', payload)

      if (payload === null) commit('SET_ORIGIN_BASE', null)
      if (payload === null) commit('SET_PATH_FORMATER', null)
    },
    setOriginBase ({commit}, payload) {
      commit('SET_ORIGIN_BASE', payload)
    },
    setPathFormater ({commit}, payload) {
      commit('SET_PATH_FORMATER', payload)
    }
  },
  getters: {
    decimal: toBase(10),
    binary: toBase(2),
    octal: toBase(8),
    hexadecimal: toBase(16),
    parseToBase: state => base => toBase(base)(state),
    baseNumber: ({baseNumber}) => baseNumber,
    showingPath: ({showingPath}) => showingPath,
    originBase: ({originBase}) => originBase,
    pathFormater: ({pathFormater}) => pathFormater
  }
})
