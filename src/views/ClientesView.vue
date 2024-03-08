<template>
  <div class="outer">
  <h3>Lista de Clientes</h3>
  <div>
    <MyModal />
  </div>
</div>

  <div class="home">
    <ItemCliente 
    v-for="(cliente, indice) in clientes" 
            :key="indice"
            :dados="cliente"
    />
  </div>
 
  <FormClienteModal v-show="modal" @close="toogleModal()" />
  <button class="btn" @click="toogleModal()">Cadastrar</button>

 

</template>

<script>
// @ is an alias to /src
import ItemCliente from '@/components/ItemCliente.vue'

import FormClienteModal from '@/components/FormClienteModal.vue';
import { mapState } from 'vuex';


export default {
  name: 'ClientesView',
  components: {
    ItemCliente,
    FormClienteModal
  },
  data: () => ({
    modal: false,
    clientes: []
  }),
  created(){
        fetch('http://localhost:3000/clientes')
        .then(response => response.json())
        .then(dados => this.clientes = dados)
    },
  methods: {
    toogleModal(){
      this.modal = !this.modal
        }
      },
      computed: mapState('clientes'),
      
    }
</script>

<style lang="scss" scoped>
@import "../scss/_global.scss";

.btn{
  @include botao();
  margin: 50px;
}  
.home{
  @include flexCenter(center, row);
  flex-wrap: wrap;
}
</style>
