<template>
        <div>
          <Header />
         <div>
            <b-card
                overlay
                img-src="https://fondosmil.com/fondo/19431.jpg"
                img-alt="Card Image"
                text-variant="white"
                title="Editar o Eliminar Gasto"
            >
            <div class="container">

                <form action="" class="form-horizontal">
              <b-card bg-variant="light"    overlay
                img-src="https://fondosmil.com/fondo/19431.jpg"
                img-alt="Card Image"
                    style="width: 70rem;"
    class="mb-2"
            >
                             <b-form-group
                                label-cols-lg="3"
                                label="Datos del Bovino"
                                label-size="lg"
                                label-class="font-weight-bold pt-0"
                                class="mb-0"
                                >
           

                       <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Gasto</label>
                        <br>
                         <b-form-select  v-model="form.gasto" :options="options" class="control-label col-sm-4" >
                            <template #first>
                              <b-form-select-option :value="null" disabled>-- Seleccione Medicamento--</b-form-select-option>
                             </template>
                            <b-form-select-option value="Vacuna">Vacuna</b-form-select-option>
                            <b-form-select-option value="Purgante">Purgante</b-form-select-option>
                            <b-form-select-option value="Vitamina">Vitamina</b-form-select-option>
                            <b-form-select-option value="Personal">Personal</b-form-select-option>
                        </b-form-select >
                    </div>

                       <div class="form-group left row">
                         <div class="col">
                            <label for="" class="control-label col-sm-2">Cantidad</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" name="cantidad" id="cantidad" v-model="form.cantidad">
                            </div>
                          </div>  
                    </div>
                       <div class="form-group left row">
                         <div class="col">
                            <label for="" class="control-label col-sm-2">Costo</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" name="costo" id="costo" v-model="form.costo">
                            </div>
                          </div>  
                    </div>
  
                    <div class="form-group left">
                         <b-container fluid>
                            <b-row class="my-1" v-for="type in types" :key="type" >
                            <b-col sm="1">
                                <label :for="`type-${type}`">Fecha</label>
                            
                            </b-col>
                            
                                <b-col sm="2." >
                               
                                <b-form-input :id="`type-${type}`" :type="type" v-model="form.fecha"></b-form-input>
                            </b-col> 
                            </b-row>
                      </b-container>
                    </div>
                   
                        <div class="form-group left row">
                         <div class="col">
                            <label for="" class="control-label col-sm-2">Descripcion</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="descripcion" id="descripcion" v-model="form.descripcion">
                            </div>
                          </div>

                         </div>
             

                    </b-form-group>
                    
                    <div class="form-group">
                      <button type="button" class="btn btn-primary mr-sm-2" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-danger margen mr-sm-2" v-on:click="eliminar()" >Eliminar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                      </b-card>
                      <br>
                </form>
                
            </div>
            </b-card>
         </div>
        </div>
    
</template>
<script>
import Header from '@/components/Header.vue';
//import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  name:"EditarGasto",
  components:{
    Header,
    //Footer
  },
  data:function(){
    return {
        form:{
          "id":"",
          "gasto" : "",
          "cantidad" : "",
          "costo": "",
          "fecha": "", 
          "descripcion" : "",
          "token" : "" 
        }
    }
  },
  methods:{
      editar(){
          axios.put("http://localhost/apirest_bovino/gastos",this.form)
          .then( data =>{
              console.log(data);
               this.$router.push("/consultarGastos");
          })
      },
        Buscar(id){
              this.$router.push('/editar/' + id);
            },
      salir(){
        this.$router.push("/dashboard");
      },
      eliminar(){
        var enviar = {
            "id" : this.form.id,
            "token" : this.form.token
        };
        axios.delete("http://localhost/apirest_bovino/gastos", { headers : enviar})
        .then( datos => {
            console.log(datos);
           this.$router.push("/consultarGastos");
        });

      }
  },
  mounted:function(){
      this.form.id = this.$route.params.id;
      axios.get("http://localhost/apirest_bovino/gastos?id="+ this.form.id)
      .then( datos => {
        
        this.form.gasto = datos.data[0].gasto;
        this.form.cantidad = datos.data[0].cantidad;
        this.form.costo = datos.data[0].costo;
        this.form.fecha = datos.data[0].fecha;
        this.form.descripcion = datos.data[0].descripcion;
        this.form.token = localStorage.getItem("token");
        console.log(this.form);

      })
     
  }  
}
</script>
<style scoped>
 .left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 15px;;
 }
</style>