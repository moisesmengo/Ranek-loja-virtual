<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <div v-if="produtos && produtos.length" class="produtos" key="produtos">
        <div v-for="(produto, index) in produtos" :key="index" class="produto">
          <router-link to="/">
            <img
              v-if="produto.fotos"
              :src="produto.fotos[0].src"
              :alt="produto.fotos[0].titulo"
            />
            <p class="preco">{{ produto.preco }}</p>
            <h2 class="titulo">{{ produto.nome }}</h2>
            <p>{{ produto.descricao }}</p>
          </router-link>
        </div>
        <produtosPaginar :produtosTotal="produtosTotal" :produtosPorPagina=9 />
      </div>
      <div v-else-if="produtos && produtos.length === 0" key="sem-resultados">
        <p class="sem-resultados">Busca sem resultados. Busque por outro termo!</p>
      </div>
      <div v-else key="carregando">
        <pagina-carregando />
      </div>
    </transition>
  </section>
</template>

<script>
import { api } from "../../services";
import { serialize } from "../helpers";
import PaginaCarregando from './PaginaCarregando.vue';
import ProdutosPaginar from './ProdutosPaginar.vue';

export default {
  name: "ProdutosLista",
  components:{ProdutosPaginar, PaginaCarregando},
  data() {
    return {
      produtos: null,
      produtosTotal: 0
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return "/produto?_limit=10" + query;
    },
  },
  methods: {
    getProdutos() {
      this.produtos = null
      setTimeout(()=>{
        api.get(this.url).then(response =>{
        this.produtosTotal = Number(response.headers['x-total-count'])
        this.produtos = response.data
      })
      }, 1500)
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.produtos-container{
  max-width: 1000px;
  margin: 0 auto;
}
.produtos{
  display: grid;
  grid-template-columns: repeat(3, 1fr) ;
  grid-gap: 30px;
  margin: 30px;
}
.produto{
  box-shadow: 0 4px 8px rgba(30, 60, 90, .1);
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  transition: all .2s;
}
.produto:hover{
    box-shadow: 0 6px 12px rgba(30, 60, 90, .2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
}
.produto img{
  border-radius: 4px;
  margin-bottom: 20px;
}
.titulo{
  margin-bottom: 10px;
}
.preco{
  font-weight: bold;
  color: #e80;
}

.sem-resultados{
  text-align: center;
}

</style>
