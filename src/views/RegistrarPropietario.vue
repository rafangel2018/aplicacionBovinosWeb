<template>
    <div>
        <Header />
        <div>
            <b-card
                overlay
                img-src="https://fondosmil.com/fondo/19431.jpg"
                img-alt="Card Image"
                text-variant="white"
                title="Registrar Propietario"
            >

            <div class="container">
        
                <br>
                <form action="" class="form-horizontal">
                     <b-card
                        overlay
                        img-src="https://fondosmil.com/fondo/19431.jpg"
                        img-alt="Card Image"
                    >
                     <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Id</label>
                       <div class="col-sm-5">
                          <input type="text" class="form-control" name="propietarioid" id="propietarioid" v-model="form.propietarioid">
                       </div>
                        </div>

                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Nombre</label>
                       <div class="col-sm-7">
                          <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                       </div>
                    </div>
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Apellido</label>
                       <div class="col-sm-7">
                          <input type="text" class="form-control" name="apellido" id="apellido" v-model="form.apellido">
                       </div>
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Telefono</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="telefono" id="telefono" v-model="form.telefono">
                            </div>
                        </div>
                    </div>
                    <div class="form-group left row">
                         <div class="col">
                            <label for="" class="control-label col-sm-2"># Marca</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" name="marcaPropietario" id="marcaPropietario" v-model="form.marcaPropietario">
                            </div>
                          </div>

                    </div>
                   
                    <div class="form-group">
                      <button type="button" class="btn btn-primary mr-sm-2" v-on:click="guardar()" >Guardar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                    </b-card>
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
    name:"RegistrarPropietario",
    data:function(){
        return {
            form:{
                "propietarioid" : "",
                "nombre" : "",
                "apellido": "", 
                "telefono" : "",
                "marcaPropietario" :"",
                "token" : "" 
            }
        }
    },
    components:{
        Header,
        //Footer
    },
    methods:{
        guardar(){
            this.form.token = localStorage.getItem("token");
            axios.post("http://localhost/apirest_bovino/propietarios",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","Propietario creado","success");
                this.$router.push("/propietario");
            }).catch( e =>{
                console.log(e);
                 this.$router.push("/propietario");
            })
        },
        salir(){
            this.$router.push("/propietario");
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