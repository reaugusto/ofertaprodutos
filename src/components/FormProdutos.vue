
<template>
    <div class="modal">
        <div class="modal-inner">
            <div class="modal-close" @click="close()">
                &times;
            </div>
            <h1>Formulario de Cliente</h1>


            <form class="login-form">
                    <div class="input-group">
                        <input type="text" name="nome" id="nome" value="" class="input" required />
                        <label for="nome" class="input-label" >Nome</label>
                    </div>
                    <p>Ativar?</p>

                    <div class="slideOne"> 
                        
                        <input type="checkbox" value="None" id="slideOne" name="check" checked />
                        <label for="slideOne"></label>
                    </div>

                    <button class="btn" id="cadastrar" @click="cadastrar()">Salvar</button>
                </form>

        </div>
    </div>
</template>

<script>
export default {
  name: 'FormProdutos',
  methods: {
    close(){
        this.$emit('close')
    },
    cadastrar(){
        const inputNome = document.querySelector('#nome');
        const inputStatus = document.querySelector('#slideOne');
        console.log(JSON.stringify({
                            nome: inputNome.value,
                            status: inputStatus.checked

                        }));

        fetch('http://localhost:3000/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                            nome: inputNome.value,
                            status: inputStatus.checked
                        }
                    )

            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            })
        }
    }
  }
</script>

<style lang="scss" scoped>
@import "../scss/_global.scss";

.btn{
    @include botao();
}

.modal{
    @include flexCenter(center,column);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 32px 16px 60px;
    height: 100vh;
    width: 100%;
    background-color: rgba($text, $alpha: 0.90);  
    }

.modal-inner{
    min-height: 400px;
    width: 500px;
    background-color: #000000;
    box-sizing: border-box;
    padding: 32px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    }
.modal-close{
    width: 100%;
    text-align: end;
    font-size: 25px;
    cursor: pointer;
}
</style>