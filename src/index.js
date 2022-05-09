//https://webpack.js.org/configuration/

import { saludar } from './js/componentes';
import './styles.css';

const nombre = prompt("Cual es tu nombre", "Anonimo")

saludar(nombre);