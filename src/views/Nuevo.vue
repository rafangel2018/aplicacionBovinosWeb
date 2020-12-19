<template>
    <div>
        <Header />
        <div>
  <b-card
    overlay
    img-src="https://fondosmil.com/fondo/19431.jpg"
    img-alt="Card Image"
    text-variant="white"
    title="Registrar Bovino"
  >
            <div class="container">
                

                <form action="" class="form-horizontal">
                    <br>
                     <b-card bg-variant="light "    overlay
                        img-src="https://fondosmil.com/fondo/19431.jpg"
                        img-alt="Card Image">
                             <b-form-group
                                label-cols-lg="3"
                                label="Datos del Bovino"
                                label-size="lg"
                                label-class="font-weight-bold pt-0"
                                class="mb-0"
                                
                                >
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

                        <div class="mt-3" >Seleccion: <strong>{{ form.raza }} </strong></div>
                    </div>

                    <div class="form-group left row">
                         <div class="col">
                            <label for="" class="control-label col-sm-2"># Marca</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" name="marca" id="marca" v-model="form.marca">
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
                   
                    <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Estado</label>
                        <br>
                         <b-form-select  v-model="form.estado" :options="options" class="control-label col-sm-4" >
                             <!-- This slot appears above the options from 'options' prop -->
                            <template #first>
                              <b-form-select-option :value="null" disabled>-- Seleccione Estado--</b-form-select-option>
                             </template>
                            <b-form-select-option value="Cotero">Cotero</b-form-select-option>
                            <b-form-select-option value="Comprado">Ordeño</b-form-select-option>
                        </b-form-select >
                    </div>
                       <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Nacimiento</label>
                        <br>
                         <b-form-select  v-model="form.nacimiento" :options="options" class="control-label col-sm-4" >
                            <template #first>
                              <b-form-select-option :value="null" disabled>-- Seleccione Nacimiento--</b-form-select-option>
                             </template>
                            <b-form-select-option value="Finca">Finca</b-form-select-option>
                            <b-form-select-option value="Comprado">Comprado</b-form-select-option>
                        </b-form-select >
                    </div>                

                    <div class="form-group left row">
                         <div class="col">
                            <label for="" class="control-label col-sm-2">Peso</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" name="peso" id="peso" v-model="form.peso">
                            </div>
                          </div>  
                    </div>

                    <div class="form-group left row">
                        <div class="col">
                            <label for="" class="control-label col-sm-5">Corporal</label>
                             <div class="col-sm-8">
                                 <input type="text" class="form-control" name="corporal" id="corporal" v-model="form.corporal">
                            </div>
                        </div>
                        <div class="col">
                        <label for="" class="control-label col-sm-5">Preñado</label>
                        <br>
                         <b-form-select  v-model="form.prenado" :options="options" class="control-label col-sm-4" >
                            <template #first>
                              <b-form-select-option :value="null" disabled>-- Seleccione Si o No--</b-form-select-option>
                             </template>
                            <b-form-select-option value="Si">Si</b-form-select-option>
                            <b-form-select-option value="No">No</b-form-select-option>
                        </b-form-select >
                    </div>   
                    </div>
              
                  
                    <div class="form-group">
                      <button type="button" class="btn btn-primary mr-sm-2" v-on:click="guardar()" >Guardar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                    </b-form-group>
                     </b-card>
                   <br>
                </form>

   </div>
     </b-card>
</div>
   </div>


    
</template>
<script>
import Header from '@/components/Header.vue'
//import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
    name:"Nuevo",
    data:function(){
        return {
             Listapropietarios:null,
            pagina:1,
            form:{
                "raza" : "",
                "marca":"",
                "fecha": "", 
                "estado" : "",
                "peso" :"",
                "corporal" : "",
                "nacimiento" : "",
                "prenado":"",
                "token" : "" 
            },
            selected: null,
            types: [ 
          'date'
        ]
        }
    },
    components:{
        Header,
        //Footer
    },
    methods:{
        guardar(){
            this.form.token = localStorage.getItem("token");
            axios.post("http://localhost/apirest_bovino/bovinos",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","Bovino creado","success");
                this.$router.push("/dashboard");
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","error");
            })
        },
        salir(){
            this.$router.push("/dashboard");
        },
        makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
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

<style scoped>
.left{
    text-align:  left;
}
</style>