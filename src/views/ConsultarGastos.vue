<template>
    <div>
      
        <Header/>
       <div>
  <b-card
    overlay
    img-src="https://www.defrentealcampo.com.ar/wp-content/uploads/2018/07/atardecer-vacas-lecheras.jpg"
    text-variant="white"
    title="Gastos realizados"
  >

        <div  class="container izquierda">
       
                <button class="btn btn-primary" v-on:click="nuevo()" >+ Gastos</button>   
                <br>
                <br>  
          <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Gasto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Costo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Descripcion</th>
                </tr>
            </thead>
            <tbody>
             <tr v-for="gasto in Listagastos" :key="gasto.Id" v-on:click="editar(gasto.Id)">
                    <th scope="row">{{ gasto.Id}}</th>
                    <td>{{ gasto.Gasto }}</td>
                    <td>{{ gasto.Cantidad }}</td>
                    <td>{{ gasto.Costo }}</td>
                     <td>{{ gasto.Fecha }}</td>
                     <td>{{ gasto.Descripcion }}</td>
                    </tr>

            </tbody>
            </table>
  </div>
     </b-card>
</div>
        <Footer/>
    </div>
</template>



<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios'
export default {
    name: "ConsultarGastos",
        data(){
        return {
            Listagastos:null,
            pagina:1
        }
   
    },
     components:{
        Header,
        Footer,

     },
         methods:{
            editar(id){
              this.$router.push('/editarGastos/' + id);
            },
            nuevo(){
                this.$router.push('/gastos');
            }
    },
    mounted:function(){
         let direccion = "http://localhost/apirest_bovino/gastos?page=" + this.pagina;
        axios.get(direccion).then( data =>{
        this.Listagastos = data.data;
        });
    }
}
</script>

<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>