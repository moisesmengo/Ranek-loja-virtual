<template>
  <div>
    <form class="adicionar-produto">
      <label for="nome">Nome</label>
      <input type="text" name="nome" id="nome" v-model="produto.nome">

      <label for="preco">Preco (R$)</label>
      <input type="number" name="preco" id="preco" v-model="produto.preco">

      <label for="fotos">Fotos</label>
      <input type="file" name="fotos" id="fotos" ref="fotos">

      <label for="descricao">Descricao</label>
      <textarea name="descricao" id="descricao" v-model="produto.descricao">
      </textarea>

      <input type="button" class="btn" value="Adicionar Produto" @click.prevent="adicionarProduto">

    </form>
  </div>
</template>

<script>
import {api} from '../../../services'
export default {
  name:'ProdutoAdicionar',
  data() {
    return {
      produto: {
        nome: "",
        preco: "",
        descricao: "",
        fotos: null,
      }
    }
  },
  methods:{
    formatarProduto(){
      this.produto.usuario_id = this.$store.state.usuario.id
    },
    adicionarProduto(){
      this.formatarProduto()
      api.post("/produto", this.produto).then(()=>{
        this.$store.dispatch("getUsuarioProdutos")
      })
    }
  }
}
</script>

<style scoped>
  .adicionar-produto{
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    margin-bottom: 60px;
  }
  .btn{
    grid-column: 2;
  }
</style>