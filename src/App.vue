<template>
  <div id="app">
    <Header></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    Header, Footer
  }
}
</script>
<style>
  body, ul, li, h1, h2, p{
    padding: 0px;
    margin: 0px;
  }
  *{
    box-sizing: border-box;
  }
  ul{
    list-style: none;
  }
  body{
    font-family: 'Comfortaa', cursive;
    color: #345;
    background: url('./assets/pattern.svg') repeat top;
  }
  a{
    color: #345;
    text-decoration: none;
  }
  img{
    max-width: 100%;
    display: block;
  }
  .btn{
    display: block;
    padding: 10px 30px;
    background: #87f;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rbga(30,40,90, 0.2);
    transition: all .3s;
    border: none;
    font-family: 'Comfortaa', cursive;
    cursor: pointer;
  }
  .btn:hover{
    background-color: #65d;
    transform: scale(1.1);
  }
  #app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  #main{
    flex: 1;
  }
</style>
