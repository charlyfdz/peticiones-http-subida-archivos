import { obtenerUsuarios } from "./http-provider";

const body = document.body;
const tablaUsuarios = () => {
    const html = `
    <h1>Lista de usuarios</h1>
    <table class="table">
        <thead>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Avatar</th>
        </thead>  
    </table>
    `
    const divUsuarios = document.createElement('div');
    divUsuarios.innerHTML = html
    body.append(divUsuarios)
}


const seleccionarTabla = ({ id, email, first_name, last_name, avatar }) => {
    const tabla = document.querySelector('table')
    const trReg = document.createElement('tr');
    trReg.innerHTML = `
        <th scope="row">${id}</th>
        <td>${email}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td><img src="${avatar}"></td>
    `
    tabla.append(trReg)

}

const registrosUsuarios = async() => {
    const usuarios = await obtenerUsuarios()
    for (const user of usuarios) {
        seleccionarTabla(user)
    }
}

export const init = () => {
    tablaUsuarios(),
        registrosUsuarios()
}