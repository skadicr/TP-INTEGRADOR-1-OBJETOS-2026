import { Usuario } from "../modelos/Usuario.js";

export async function obtenerUsuarios() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await response.json();
    return datos.map(u => new Usuario(u.id, u.name));
}
