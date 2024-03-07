<template>
    <div class="itprd">
        <div class="lat">
            <input v-if ="this.$route.name === 'home'" type="checkbox" name="" id="">
        </div>
        <span class="nprod">Nome do Produto</span>
        <div class="status"></div>
    </div>
</template>


<script>

export default {
  name: 'ItemProduto'

}
</script>

<style lang="scss" scoped>

@import "../scss/_global.scss";

.itprd{
    @include flexCenter(space-between,row);
    width: 70%;
    height: 60px;  
    background-color: $bg_elements_primary;
    
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
        background-color: $inactive;
    }
    .nprod{
        color: $title;
        font-weight: 600;
        font-size: 22px;
    }
}


</style>