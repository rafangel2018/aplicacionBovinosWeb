<template>
    <div>
      
        <Header/>
          <img src="https://s1.1zoom.me/big0/244/Cow_Grass_Front_547634_1280x848.jpg" class="img-fluid" alt="Responsive image">
        <Footer/>
    </div>
</template>



<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios'
export default {
    name: "Dashboard",
        data(){
        return {
            Listabovinos:null,
            pagina:1
        }
   
    },
     components:{
        Header,
        Footer,

     },
    mounted:function(){
         let direccion = "http://localhost/apirest_bovino/bovinos?page=" + this.pagina;
        axios.get(direccion).then( data =>{
        this.Listabovinos = data.data;
        });
    }
}
</script>

<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>