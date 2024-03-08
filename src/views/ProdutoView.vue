<template>
  <div class="cadatro">
    <FormProdutos v-show="modal" @close="toogleModal()" />
    <button class="btn" @click="toogleModal()">Cadastrar</button>
  </div>
  <div class="produtos">
    <h1>Listagem de produtos</h1>
    <ItemProduto 
    v-for="(produto, indice) in produtos" 
            :key="indice"
            :dados="produto"
    />
  </div>
  
</template>

<script>
import ItemProduto from '@/components/ItemProduto.vue';
import FormProdutos from '@/components/FormProdutos.vue';

export default {
  name: 'ProdutoView',
  data: () => ({
    modal: false,
    produtos: []
  }),
  created(){
        fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(dados => this.produtos = dados)
    },
  components: {
    ItemProduto,
    FormProdutos
  },
  methods: {
    toogleModal(){
      this.modal = !this.modal
        }
      }
}
</script>

<style lang="scss">
  .btn{
    @include botao();
    margin: 50px;
  }
</style>

