<template>
  <div class="home">
    <ItemCliente />
    <ItemCliente />
    <ItemCliente />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemCliente from '@/components/ItemCliente.vue'

export default {
  name: 'HomeView',
  components: {
    ItemCliente
  }
}
</script>
