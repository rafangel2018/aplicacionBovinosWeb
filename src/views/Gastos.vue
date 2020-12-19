<template>
    <div>
        <Header />
                  <div>
            <b-card
                overlay
                img-src="https://fondosmil.com/fondo/19431.jpg"
                img-alt="Card Image"
                text-variant="white"
                title="Registrar Gastos"
            >
            <div class="container">
        
                <br>
                <form action="" class="form-horizontal">
                <div>
                    <b-card
                        overlay
                        img-src="https://fondosmil.com/fondo/19431.jpg"
                        img-alt="Card Image"
                    >
                     <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Gasto</label>
                        <br>
                         <b-form-select  v-model="form.gasto" :options="options" class="control-label col-sm-4" >
                            <template #first>
                              <b-form-select-option :value="null" disabled>-- Seleccione Gasto--</b-form-select-option>
                             </template>
                            <b-form-select-option value="Vcuna">Vacuna</b-form-select-option>
                            <b-form-select-option value="Purgante">Purgante</b-form-select-option>
                            <b-form-select-option value="Vitamina">Vitamina</b-form-select-option>
                            <b-form-select-option value="Personal">Personal</b-form-select-option>
                        </b-form-select >
                    </div>  

                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Cantidad</label>
                       <div class="col-sm-1">
                          <input type="text" class="form-control" name="cantidad" id="cantidad" v-model="form.cantidad">
                       </div>
                    </div>
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Costo</label>
                       <div class="col-sm-3">
                          <input type="text" class="form-control" name="costo" id="costo" v-model="form.costo">
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
                   
                    <div class="form-group">
                      <button type="button" class="btn btn-primary mr-sm-2" v-on:click="guardar()" >Guardar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                     </b-card>
                    </div>
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
    name:"Gastos",
    data:function(){
        return {
            form:{
                "id" : "",
                "gasto" : "",
                "cantidad": "", 
                "costo" : "",
                "fecha" :"",
                "descripcion" :"",
                "token" : "" 
            },
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
            axios.post("http://localhost/apirest_bovino/gastos",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","Propietario creado","success");
                this.$router.push("/consultarGastos");
            }).catch( e =>{
                console.log(e);
                 this.$router.push("/consultarGastos");
            })
        },
        salir(){
            this.$router.push("/consultarGastos");
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
        
    }
}
</script>
<style scoped>
.left{
    text-align:  left;
}
</style>