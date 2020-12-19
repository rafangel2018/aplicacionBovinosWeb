<template>
    <div>
      
        <Header/>
        <div>
  <b-card
    overlay
    img-src="https://c.wallhere.com/photos/23/9a/cow_grass_light_field-631014.jpg!d"
    img-alt="Card Image"
    text-variant="white"
    title="Propietarios registrados"
  >
        <div  class="container izquierda">
       
                <button class="btn btn-primary" v-on:click="registrarPropietario()" >Agregar Propietario</button>   
                <br>
                <br>  
          <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Telefono</th>
                    <th scope="col"># Marca</th>
                </tr>
            </thead>
            <tbody>
             <tr v-for="propietario in Listapropietarios" :key="propietario.PropietarioId" v-on:click="editar(propietario.PropietarioId)">
                    <th scope="row">{{ propietario.PropietarioId}}</th>
                    <td>{{ propietario.Nombre }}</td>
                     <td>{{ propietario.Apellido }}</td>
                    <td>{{ propietario.Telefono }}</td>
                     <td>{{ propietario.MarcaPropietario }}</td>
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
    name: "Propietario",
        data(){
        return {
            Listapropietarios:null,
            pagina:1
        }
   
    },
     components:{
        Header,
        Footer,

     },
         methods:{
            editar(id){
              this.$router.push('/editarPropietario/' + id);
            },
            registrarPropietario(){
                this.$router.push('/registrarPropietario');
            }
    },
    mounted:function(){
         let direccion = "http://localhost/apirest_bovino/propietarios?page=" + this.pagina;
        axios.get(direccion).then( data =>{
        this.Listapropietarios = data.data;
        });
    }
}
</script>

<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>