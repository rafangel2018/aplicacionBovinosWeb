<template>
    <div>
      
        <Header/>
        <div>
  <b-card
    overlay
    img-src="https://images2.alphacoders.com/716/716997.jpg"
    img-alt="Card Image"
    text-variant="white"
    title="Bovinos registrados"
  >

        <div  class="container izquierda">
       
                <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo bovino</button>   
                <br>
                <br>  
          <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Raza</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Corporal</th>
                    <th scope="col">Nacimiento</th>
                    <th scope="col">Preñado</th>
                </tr>
            </thead>
            <tbody>
             <tr v-for="bovino in Listabovinos" :key="bovino.Id" v-on:click="editar(bovino.Id)">
                    <th scope="row">{{ bovino.Id}}</th>
                    <td>{{ bovino.Raza }}</td>
                    <td>{{ bovino.Marca }}</td>
                     <td>{{ bovino.Fecha }}</td>
                    <td>{{ bovino.Estado }}</td>
                     <td>{{ bovino.Peso }}</td>
                     <td>{{ bovino.Corporal }}</td>
                     <td>{{ bovino.Nacimiento }}</td>
                     <td>{{ bovino.Prenado }}</td>
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
    name: "Consultar",
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
         methods:{
            editar(id){
              this.$router.push('/editar/' + id);
            },
            nuevo(){
                this.$router.push('/nuevo');
            }
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