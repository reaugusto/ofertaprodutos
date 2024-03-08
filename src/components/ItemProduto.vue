<template>
    <div class="itprd">
        <div class="lat">
            <input v-if ="this.$route.name === 'cliente' && dados.status" type="checkbox" name="" class="checkServico">
        </div>
        <span class="nprod" v-if="dados.nome">{{ dados.nome }}</span>
        <div class="status"></div>
    </div>
</template>


<script>

export default {
  name: 'ItemProduto',
  props: {
        dados: Object,
    },
    data: () => ({
        color: ''
  }),
  created(){
    this.color = this.dados.status ? '#12E200' : '#EE0000';
    }
}

</script>

<style lang="scss" scoped>

@import "../scss/_global.scss";

.itprd{
    @include flexCenter(space-between,row);
    width: 70%;
    height: 60px;  
    background-color: $bg_elements_primary;
    margin: 1%;
    
    .lat{
        @include flexCenter(center,row);
        width: 60px;
        height: 60px;
        margin-left: 0%;
        background: #D9D9D9;
        }

    .status{
        width: 20px;
        height: 20px;
        border-radius: 20px;
        margin-right: 10px;
        background-color: v-bind('color');
        
    }
    .nprod{
        color: $title;
        font-weight: 600;
        font-size: 22px;
    }
}


</style>