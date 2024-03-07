<template>
  <div class="outer">
  <h3>Vue Teleport Example</h3>
  <div>
    <MyModal />
  </div>
</div>

  <div class="home">
    <ItemCliente />
    <ItemCliente />
    
    <br>
    <ItemProduto />

  </div>
 
  <FormClienteModal v-show="modal" @close="toogleModal()" />
  <button class="btn" @click="toogleModal()">Cadastrar</button>

 

</template>

<script>
// @ is an alias to /src
import ItemCliente from '@/components/ItemCliente.vue'
import ItemProduto from '@/components/ItemProduto.vue'
import FormClienteModal from '@/components/FormClienteModal.vue';


export default {
  name: 'ClientesView',
  components: {
    ItemCliente,
    ItemProduto,
    FormClienteModal
  },
  data: () => ({
    modal: false
  }),
  methods: {
    toogleModal(){
      this.modal = !this.modal
        }
      }
    }
</script>

<style lang="scss" scoped>
.btn{
  @include botao();
  margin: 50px;
}  
</style>
