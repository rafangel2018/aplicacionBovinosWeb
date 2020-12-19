<template>
    <div>
      
        <Header/>
       <div>
  <b-card
    overlay
    img-src="https://img.freepik.com/foto-gratis/vacas-pastando-corral-al-atardecer-ganado-comiendo-caminando-al-aire-libre_106029-680.jpg?size=626&ext=jpg"
    img-alt="Card Image"
    text-variant="white"
    title="Consultar Produccion"
  >
        <div  class="container izquierda">
           <button class="btn btn-primary" v-on:click="nuevo()" >Registrar Produccion</button>
             <br>
<br>
<br>
          <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Id Bovino</th>
                    <th scope="col">Raza</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Leche Lt</th>
                </tr>
            </thead>
            <tbody>
             <tr v-for="produccion in Listaproducciones" :key="produccion.Id" v-on:click="editar(produccion.Id)">
                    <th scope="row">{{ produccion.Id}} </th>
                    <td>{{ produccion.Bovinoid }}</td>
                    <td>{{ produccion.Raza }}</td>
                    <td>{{ produccion.Estado }}</td>
                     <td>{{ produccion.Fecha }}</td>
                     <td>{{ produccion.Leche }}</td>
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
    name: "ConsultarProduccion",
        data(){
        return {
            Listaproducciones:null,
            pagina:1,
            buscar:'',
            form:{
                "fecha" : "",

            },
            types: [ 
          'date'
        ]
   
        }
   
    },
     components:{
        Header,
        Footer,

     },
         methods:{
            editar(id){
              this.$router.push('/editarProduccion/' + id);
            },
            nuevo(id){
                this.$router.push('/produccion/' + id);
            },
            buscarData(){
                this.pagina = 1
                this.Listaproducciones

            }
    },
    mounted:function(){
         let direccion = "http://localhost/apirest_bovino/produccion?page=" + this.pagina ;
        axios.get(direccion).then( data =>{
        this.Listaproducciones = data.data;
        });
    }
}
</script>

<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>