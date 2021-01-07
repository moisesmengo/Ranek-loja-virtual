<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutoAdicionar />
    <h2>Seus Produtos</h2>
    {{usuario_produtos}}
  </section>
</template>
<script>
import ProdutoAdicionar from './ProdutoAdicionar'

import {mapState, mapActions} from 'vuex'

export default {
  name: "UsuarioProdutos",
  components:{ProdutoAdicionar},
  computed:{
    ...mapState(['login', 'usuario', 'usuario_produtos'])
  },
  methods:{
    ...mapActions(["getUsuarioProdutos"])
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
  
</style>