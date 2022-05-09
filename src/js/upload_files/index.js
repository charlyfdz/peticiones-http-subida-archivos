//https://webpack.js.org/configuration/

//import { init } from './js/usuarios-page';
//import { obtenerChistes, obtenerUsuarios } from './js/http-provider';
//import './styles.css';

//init()
import * as crud from './js/crud/crud-provider'

crud.getUsuario(1).then(console.log)

crud.crearUsuario({
    name: 'Carlos',
    job: 'Carpintero'
}).then(console.log)

crud.actualizarUsuario(1, {
    name: 'Alberto',
    job: 'Carpintero'
}).then(console.log)

crud.borrarUsuario(2).then(console.log)