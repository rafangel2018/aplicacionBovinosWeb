<template>
  <div class="home">
   <div class="sidenav">
         <div class="login-main-text">
            <h2>Aplicativo Web<br> Login</h2>
            <p>Inicie sesión o regístrese desde aquí para acceder.</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form v-on:submit.prevent="login">
                  <div class="form-group">
                     <label>Usuario</label>
                     <input type="text" class="form-control" placeholder="Usuario" v-model="usuario">
                  </div>
                  <div class="form-group">
                     <label>Contraseña</label>
                     <input type="password" class="form-control" placeholder="Password" v-model="password">
                  </div>
                  <button type="submit" class="btn btn-black">Login</button>
                  <button type="submit" class="btn btn-secondary">Register</button>
               </form>
               <div class="alert alert-danger" role="alert" v-if="error">
                 {{error_msg}}
               </div>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {

  },
  data: function(){
    return {
      usuario: "",
      password: "",
      error: false,
      error_msg: "",
    }
  },
  methods:{
    login(){
      let json ={
        "usuario": this.usuario,
        "password": this.password
      };
      axios.post('http://localhost/apirest_bovino/auth',json)
      .then(data=>{
        if(data.data.status == "ok"){
          localStorage.token = data.data.result.token;
          this.$router.push('dashboard');        }else{
          this.error = true
          this.error_msg = data.data.result.error_msg;
        }

      })
    }
  }
}
</script>


<style scoped>
-body {
    font-family: "Lato", sans-serif;
}



.main-head{
    height: 150px;
    background: #FFF;
   
}

.sidenav {
    height: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
}


.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 40%; 
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 80%;
    }

    .register-form{
        margin-top: 20%;
    }
}


.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>