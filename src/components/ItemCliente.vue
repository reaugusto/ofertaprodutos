<template>
    <div class="base">
        <div class="lateral">
            <div class="status"></div>
            <i class="fa-solid fa-eye"></i>
        </div>
        <img class="img_profile" src="../assets/Ellipse 1.png" />
        <div class="textual">
            <span class="title">Renato Sousa</span>
            <span class="email">renato@email.com</span>
        </div>
        <i class="fa-solid fa-pencil"></i>
    </div>
</template>

<script>

export default {
  name: 'ItemCliente'

}
</script>

<style lang="scss" scoped>

@import "../scss/_global.scss";

    .base {

        @include flexCenter(space-between, row);

        background: $bg_elements_primary;
        width: 400px;
        height: 80px;
        margin: 15px;
    }
    .lateral{
        @include flexCenter(space-around, column);

        left: 0px;
        width: 10%;
        height: 100%;
        background: #D9D9D9;
        
    }
    .fa-pencil{
        margin-right: 5%;
        color: $icons;
    }
    .textual{
        @include flexCenter(flex-start, column);
        width: 58%;
        
        span{
            width: 100%;
            text-align: left;
        }
    }
    .img_profile{
        width: 50px;
        height: 50px;
    }
    .email{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: $text;


    }
    .title{
        font-weight: 500;
        font-size: 22px;
        line-height: 27px;
        color: $title; 
    }
    .status{    
        height: 20px;
        width: 20px;
        border-radius: 20px;
        background: $active;
    }
</style>

