import { createStore } from 'vuex'

export default createStore({
  state: {
    clientes: [
      {
        "nome": "",
        "documento": "",
        "telefone": "",
        "email": "",
        "status": ""
      }
    ],
    produtos: []

  },
  getters: {
  },
  mutations: {
    setClientes: (state, payload) => {
      state.clientes = payload
  }
  },
  actions: {
  },
  modules: {
  }
})
