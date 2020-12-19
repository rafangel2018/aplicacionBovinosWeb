import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue';
import Editar from '../views/Editar.vue';
import Nuevo from '../views/Nuevo.vue';
import Consultar from '../views/Consultar.vue';
import RegistrarPropietario from '../views/RegistrarPropietario.vue';
import Propietario from '../views/Propietario.vue';
import EditarPropietario from '../views/EditarPropietario.vue';
import Medicamento from '../views/Medicamento.vue';
import ControlMedico from '../views/ControlMedico.vue';
import Gastos from '../views/Gastos.vue';
import ConsultarGastos from '../views/ConsultarGastos.vue';
import Produccion from '../views/Produccion.vue';
import ConsultarProduccion from '../views/ConsultarProduccion.vue';
import EditarProduccion from '../views/EditarProduccion.vue';
import EditarMedicamento from '../views/EditarMedicamento.vue';
import EditarGastos from '../views/EditarGastos.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/nuevo',
    name: 'Nuevo',
    component: Nuevo
  },
  {
    path: '/consultar',
    name: 'Consultar',
    component: Consultar
  },
  {
    path: '/registrarPropietario',
    name: 'RegistrarPropietario',
    component: RegistrarPropietario
  },
  {
    path: '/propietario',
    name: 'Propietario',
    component: Propietario
  },
  {
    path: '/editarPropietario/:id',
    name: 'EditarPropietario',
    component: EditarPropietario
  },
  {
    path: '/medicamento/:id',
    name: 'Medicamento',
    component: Medicamento
  },
  {
    path: '/controlMedico',
    name: 'ControlMedico',
    component: ControlMedico
  },
  {
    path: '/gastos',
    name: 'Gastos',
    component: Gastos
  },
  {
    path: '/consultarGastos',
    name: 'ConsultarGastos',
    component: ConsultarGastos
  },
  {
    path: '/produccion/:id',
    name: 'Produccion',
    component: Produccion
  },
  {
    path: '/consultarProduccion',
    name: 'ConsultarProduccion',
    component: ConsultarProduccion
  },
  {
    path: '/editarProduccion/:id',
    name: 'EditarProduccion',
    component: EditarProduccion
  },
  {
    path: '/editarMedicamento/:id',
    name: 'EditarMedicamento',
    component: EditarMedicamento
  },
  {
    path: '/editarGastos/:id',
    name: 'EditarGastos',
    component: EditarGastos
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
