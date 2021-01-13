<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutoAdicionar />
    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(produto, index) in usuario_produtos" :key="index">
        <ProdutoItem :produto="produto" >
          <p> {{produto.descricao}} </p>
          <button class="deletar" @click="deletarProduto(produto.id)" >Deletar</button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>
<script>
import ProdutoAdicionar from './ProdutoAdicionar'
import ProdutoItem from './ProdutoItem'
import {api} from '../../../services'

import {mapState, mapActions} from 'vuex'

export default {
  name: "UsuarioProdutos",
  components:{ProdutoAdicionar, ProdutoItem},
  computed:{
    ...mapState(['login', 'usuario', 'usuario_produtos'])
  },
  methods:{
    ...mapActions(["getUsuarioProdutos"]),
    deletarProduto(id){
      const confirmar = window.confirm("Deseja realmente remover esse produto?")
      if(confirmar) api.delete(`/produto/${id}`).then(()=> this.getUsuarioProdutos()).catch(err=> console.log(err))
    }
  },
  watch:{
    login(){
      this.getUsuarioProdutos()
    }
  },
  created(){
    if(this.login){
      this.getUsuarioProdutos()
    }
  }
}
</script>
<style scoped>
  h2{
    margin-bottom: 20px;
  }
  .deletar{
    position: absolute;
    top: 0px;
    right: 0px;
    background: url("../../assets/remove.svg") no-repeat center center;
    width: 24px;
    height: 24px;
    text-indent: -140px;
    overflow: hidden;
    cursor: pointer;
    border: none;
  }
  .list-enter,
  .list-leave-to{
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }

  .list-enter-active,
  .list-leave-active{
    transition: all .3s;
  }
</style>