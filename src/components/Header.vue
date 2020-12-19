<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="success">
  


    <b-navbar-brand href="#">BovinoWeb 1.0</b-navbar-brand>
  

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
          <b-nav-item v-on:click="salir()">Menu</b-nav-item>
           <b-nav-item-dropdown text="Bovinos" right>
          <b-dropdown-item v-on:click="propietario()">Registrar propietario</b-dropdown-item>
          <b-dropdown-item v-on:click="nuevo()">Registrar Bovino</b-dropdown-item>
          <b-dropdown-item v-on:click="consultar()">Consultar bovino</b-dropdown-item>
         </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Produccion" right>
          <b-dropdown-item v-on:click="produccion()">Registrar Produccion</b-dropdown-item>
          <b-dropdown-item v-on:click="consultarProduccion()">Consultar Produccion</b-dropdown-item>
         </b-nav-item-dropdown>
         <b-nav-item-dropdown text="Medicamentos" right>
           <b-dropdown-item v-on:click="medicamento()">Aplicar Medicamento</b-dropdown-item>
          <b-dropdown-item v-on:click="controlMedico()">Consultar Control</b-dropdown-item>
         </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Gastos" right>
           <b-dropdown-item v-on:click="gastos()">Registrar Gastos</b-dropdown-item>
          <b-dropdown-item v-on:click="consultargastos()">Consultar Gastos</b-dropdown-item>
         </b-nav-item-dropdown>
      </b-navbar-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>


        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
          
            <em>Usuario</em>
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item v-on:click="cerrar()">Cerrar</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>


<script>

import axios from 'axios'
export default {
    name: "Header",
        data(){
        return {
            Listabovinos:null,
            pagina:1
        }
   
    },
   
         methods:{
            nuevo(){
                this.$router.push('/nuevo');
            },
            consultar(){
                this.$router.push('/consultar');
            },
            cerrar(){
                this.$router.push('/');
            },
            propietario(){
                this.$router.push('/propietario');
            },
            medicamento(id){
                this.$router.push('/medicamento/'+ id);
            },
            controlMedico(){
                this.$router.push('/controlMedico');
            },
            gastos(){
                this.$router.push('/gastos');
            },
            consultargastos(){
                this.$router.push('/consultarGastos');
            },
            produccion(id){
                this.$router.push('/produccion/' + id);
            },
            consultarProduccion(){
                this.$router.push('/consultarProduccion');
            },
            salir(){
            this.$router.push("/dashboard");
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