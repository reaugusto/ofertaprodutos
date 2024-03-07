<template>
  <div class="produtos">
    <h1>This is an about page</h1>
    <ItemProduto />
  </div>
</template>

<script>
// @ is an alias to /src

import ItemProduto from '@/components/ItemProduto.vue'

export default {
  name: 'ProdutoView',
  components: {
    ItemProduto
  }
}
</script>

