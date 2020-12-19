<template>
        <div>
          <Header />
         <div>
            <b-card
                overlay
                img-src="https://fondosmil.com/fondo/19431.jpg"
                img-alt="Card Image"
                text-variant="white"
                title="Editar o Eliminar Medicamento"
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
                                label="Datos Medicos"
                                label-size="lg"
                                label-class="font-weight-bold pt-0"
                                class="mb-0"
                                >
                      <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Id Bovino</label>
                       <div class="col-sm-5">
                          <input type="text" class="form-control" name="bovinoid" id="bovinoid" v-model="form.bovinoid">
                       </div>
                    </div>
                         <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Raza</label>
                        <br>
                         <b-form-select  v-model="form.raza" :options="options" class="control-label col-sm-4" >
                             <!-- This slot appears above the options from 'options' prop -->
                            <template #first>
                              <b-form-select-option :value="null" disabled>-- Seleccione raza --</b-form-select-option>
                             </template>
                            <b-form-select-option value="Gelbvieh">Gelbvieh</b-form-select-option>
                            <b-form-select-option value="Romangnola">Romangnola</b-form-select-option>
                            <b-form-select-option value="Nelore">Nelore</b-form-select-option>
                            <b-form-select-option value="Marchigiana">Marchigiana</b-form-select-option>
                            <b-form-select-option value="MaineAnjou">Maine Anjou</b-form-select-option>
                            <b-form-select-option value="Limousin">Limousin</b-form-select-option>
                            <b-form-select-option value="Holstein">Holstein</b-form-select-option>
                            <b-form-select-option value="Hereford">Hereford</b-form-select-option>
                            <b-form-select-option value="Gyr">Gyr</b-form-select-option>
                            <b-form-select-option value="Guzerat">Guzerat</b-form-select-option>
                            <b-form-select-option value="Gelbvieh">Gelbvieh</b-form-select-option>
                        </b-form-select >
                    </div>
     
                  
                       <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Tipo</label>
                        <br>
                         <b-form-select  v-model="form.tipo" :options="options" class="control-label col-sm-4" >
                            <template #first>
                              <b-form-select-option :value="null" disabled>-- Seleccione Medicamento--</b-form-select-option>
                             </template>
                            <b-form-select-option value="Vacuna">Vacuna</b-form-select-option>
                            <b-form-select-option value="Purgante">Purgante</b-form-select-option>
                            <b-form-select-option value="Vitamina">Vitamina</b-form-select-option>
                        </b-form-select >
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
                            <div class="col-sm-23">
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
  name:"EditarMedicamento",
  components:{
    Header,
    //Footer
  },
  data:function(){
    return {
        form:{
          "id":"",
          "bovinoid" : "",
          "raza" : "",
          "marca": "",
          "tipo" : "",
          "fecha": "", 
          "descripcion" : "",
          "token" : "" 
        },
            types: [ 
          'date'
        ]
    }
  },
  methods:{
      editar(){
          axios.put("http://localhost/apirest_bovino/medicamentos",this.form)
          .then( data =>{
              console.log(data);
               this.$router.push("/controlMedico");
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
        axios.delete("http://localhost/apirest_bovino/medicamentos", { headers : enviar})
        .then( datos => {
            console.log(datos);
           this.$router.push("/controlMedico");
        });

      }
  },
  mounted:function(){
      this.form.id = this.$route.params.id;
      axios.get("http://localhost/apirest_bovino/medicamentos?id="+ this.form.id)
      .then( datos => {
        
        this.form.bovinoid = datos.data[0].bovinoid;
        this.form.raza = datos.data[0].raza;
        this.form.marca = datos.data[0].marca;
        this.form.tipo = datos.data[0].tipo;
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