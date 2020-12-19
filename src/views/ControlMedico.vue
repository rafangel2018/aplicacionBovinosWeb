<template>
    <div>
      
        <Header/>
       <div>
  <b-card
    overlay
    img-src="https://img.freepik.com/foto-gratis/vacas-pastando-corral-al-atardecer-ganado-comiendo-caminando-al-aire-libre_106029-680.jpg?size=626&ext=jpg"
    img-alt="Card Image"
    text-variant="white"
    img-height="700px"
    title="Control Medico"
  >
        <div  class="container izquierda">



                <button class="btn btn-primary" v-on:click="nuevo()" >Aplicar medicamento</button>   
                <br>
                <br>  
          <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Id Bovino</th>
                    <th scope="col">Raza</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Descripcion</th>
                </tr>
            </thead>
            <tbody>
             <tr v-for="medicamento in Listamedicamentos" :key="medicamento.Id" v-on:click="editar(medicamento.Id)">
                    <th scope="row">{{ medicamento.Id}}</th>
                    <td>{{ medicamento.BovinoId }}</td>
                    <td>{{ medicamento.Raza }}</td>
                     <td>{{ medicamento.Marca }}</td>
                    <td>{{ medicamento.Tipo }}</td>
                     <td>{{ medicamento.Fecha }}</td>
                     <td>{{ medicamento.Descripcion }}</td>
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
    name: "ControlMedico",
        data(){
        return {
            Listamedicamentos:null,
            pagina:1
        }
   
    },
     components:{
        Header,
        Footer,

     },
         methods:{
            editar(id){
              this.$router.push('/editarMedicamento/' + id);
            },
            nuevo(){
                this.$router.push('/medicamento');
            }
    },
    mounted:function(){
         let direccion = "http://localhost/apirest_bovino/medicamentos?page=" + this.pagina;
        axios.get(direccion).then( data =>{
        this.Listamedicamentos = data.data;
        });
    }
}
</script>

<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>