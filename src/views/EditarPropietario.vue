<template>
        <div>
          <Header />
            <div>
              <b-card
                  overlay
                  img-src="https://fondosmil.com/fondo/19431.jpg"
                  img-alt="Card Image"
                  text-variant="white"
                  title="Editar o Eliminar Propietario"
              >
            <div class="container">
                <form action="" class="form-horizontal">
                   <b-card bg-variant="light"    overlay
                img-src="https://fondosmil.com/fondo/19431.jpg"
                img-alt="Card Image"
                    style="width: 70rem;"
    class="mb-2"
            >
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
                            <div class="col-sm-5">
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
                      <button type="button" class="btn btn-primary mr-sm-2" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-danger margen mr-sm-2" v-on:click="eliminar()" >Eliminar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                     </b-card>
                </form>
            </div>
             </b-card>
        </div>
          <!-- <Footer />   -->
        </div>
    
</template>
<script>
import Header from '@/components/Header.vue';
//import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  name:"EditarPropietario",
  components:{
    Header,
    //Footer
  },
  data:function(){
    return {
        form:{
          "propietarioId":"",
          "nombre" : "",
          "apellido": "", 
          "telefono" : "",
          "marcaPropietario" :"",
          "token" : "" 
        }
    }
  },
  methods:{
      editar(){
          axios.put("http://localhost/apirest_bovino/propietarios",this.form)
          .then( data =>{
              console.log(data);
               this.$router.push("/propietario");
          })
      },
      salir(){
        this.$router.push("/propietario");
      },
      eliminar(){
        var enviar = {
            "propietarioId" : this.form.propietarioId,
            "token" : this.form.token
        };
        axios.delete("http://localhost/apirest_bovino/propietarios", { headers : enviar})
        .then( datos => {
            console.log(datos);
           this.$router.push("/propietario");
        });

      }
  },
  mounted:function(){
      this.form.propietarioId = this.$route.params.id;
      axios.get("http://localhost/apirest_bovino/propietarios?id="+ this.form.propietarioId)
      .then( datos => {
        
        this.form.nombre = datos.data[0].nombre;
        this.form.apellido = datos.data[0].apellido;
        this.form.telefono = datos.data[0].telefono;
        this.form.marcaPropietario = datos.data[0].marcaPropietario;
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