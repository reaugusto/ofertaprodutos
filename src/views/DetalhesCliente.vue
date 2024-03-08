<template>
    <div class="container">
        <div class="detalhes">
            <p>Nome: {{ cliente.nome }}</p>
            <p>Documento: {{ cliente.email }}</p>
            <p>Email: {{ cliente.email }}</p>
            <p>Telefone: {{ cliente.telefone }}</p>
            <p>Produtos: {{ cliente.produtos }}</p>
        </div>
        <div class="produtos">
            <ItemProduto 
                v-for="(produto, indice) in produtos" 
                :key="indice"
                :dados="produto"
            />
            <button class="btn" id="cadastrar" @click="associarProdutos()">Associar</button>
        </div> 
    </div>

</template>

<script>
import ItemProduto from '@/components/ItemProduto.vue';

export default {
  name: 'DetalhesCliente',
  components:{
    ItemProduto
  },
  data: () => ({
    cliente: '',
    produtos: [],
    associacoes:[]
  }),
  methods:{
    getCliente(){
        fetch(`http://localhost:3000/clientes/${this.$route.params.id}`)
        .then(response => response.json())
        .then(dados => this.cliente = dados);
    },
    getProdutos(){
        fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(dados => this.produtos = dados);
    },

    associarProdutos(){
        var servicos = document.querySelectorAll('.checkServico');
        var lista = [];

        servicos.forEach(function(el) {
            console.log(el);
            if(el.checked){
                lista.push(el.parentElement.parentNode.innerText);
            }
        });
        console.log(JSON.stringify({
                    id: this.$route.params.id,
                    produtos: lista
                    }))

        fetch(`http://localhost:3000/clientes/${this.$route.params.id}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    
                },
                body: JSON.stringify({
                    produtos: lista
                    })

            }).then((response) => {
                return response;
            }).then((data) => {
                console.log(data)
            })
        }
    },
  created(){
        this.getCliente();
        this.getProdutos();
  }
}
</script>

<style lang="scss">
@import "../scss/_global.scss";

.container{
    @include flexCenter(space-around, row);


    .detalhes + .produtos{
        @include flexCenter(center, column);
        
        width: 45%;
}
}
.btn{
    @include botao();
    margin-top: 25px;

}

 
</style>