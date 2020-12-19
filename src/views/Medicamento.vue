<template>
    <div>
        <Header />
          <div>
            <b-card
                overlay
                img-src="https://fondosmil.com/fondo/19431.jpg"
                img-alt="Card Image"
                text-variant="white"
                title="Registrar Medicamento"
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
                        <b-nav-form > 
                        <b-form-input  size = "sm"  class = "mr-sm- 2 mr-sm-2" name="bovinoid" id="bovinoid" v-model="form.bovinoid"> </b-form-input > 
                        <b-button  size = " sm "  class = "btn btn-primary mr-sm-2"  type = " submit " v-on:click="editar(form.bovinoid)"  > Buscar </b-button > 
                        </b-nav-form >
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
    name:"Medicamento",
    data:function(){
        return {
            form:{
                "id" : "",
                "bovinoid" : "",
                "raza" : "",
                "marca": "", 
                "tipo" : "",
                "fecha" :"",
                "descripcion" : "",
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
            axios.post("http://localhost/apirest_bovino/medicamentos",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","Medicamento creado","success");
                this.$router.push("/controlMedico");
            }).catch( e =>{
                console.log(e);
                 this.$router.push("/controlMedico");
            })
        },
              editar(id){
              this.$router.push('/medicamento/' + id);
            },
        salir(){
            this.$router.push("/controlMedico");
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
      this.form.bovinoid = this.$route.params.id;
      axios.get("http://localhost/apirest_bovino/bovinos?id="+ this.form.bovinoid)
      .then( datos => {
        
        this.form.bovinoid = datos.data[0].id;
        this.form.raza = datos.data[0].raza;
        this.form.estado = datos.data[0].estado;
        this.form.token = localStorage.getItem("token");
        console.log(this.form);

      })
     
  } 
}
</script>
<style scoped>
.left{
    text-align:  left;
}
</style>