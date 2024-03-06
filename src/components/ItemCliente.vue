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

@import "../scss/_colors.scss";

    .base {
        background: $bg_elements_primary;
        width: 400px;
        height: 80px;
        display: flex;
        flex-direction: columns;
        margin: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .lateral{
        
        left: 0px;
        width: 10%;
        height: 100%;
        background: #D9D9D9;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-around;
    }
    .fa-pencil{
        margin-right: 5%;
        color: $icons;
    }
    .textual{
        display: flex;
        flex-direction: column;
        width: 58%;
 
        text-align: start;
    }
    .img_profile{
        width: 50px;
        height: 50px;
    }
    .email{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: $text;
    }
    .title{

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;

        color: $title; 
    }
    .status{    
        height: 25px;
        width: 25px;
        border-radius: 25px;
        background: $active;
    }
</style>

