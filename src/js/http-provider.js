const jokeURL = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";

const cloudPreset = 'wzqb37wg';
const cloudUrl = "https://api.cloudinary.com/v1_1/jerasys/upload";

const obtenerChistes = async() => {

    try {
        const resp = await fetch(jokeURL);
        if (!resp.ok) return alert('No se pudo realizar la peticion')
        const { icons_url, id, value } = await resp.json()
        return { icons_url, id, value }
    } catch (err) {
        throw err;
    }

}


const obtenerUsuarios = async() => {
    const resp = await fetch(urlUsuarios)
    const { data: usuarios } = await resp.json()
    return usuarios
}


const subirImagen = async(archivo) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset)
    formData.append('file', archivo)

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (err) {
        throw err;
    }
}

export {
    obtenerChistes,
    obtenerUsuarios,
    subirImagen
}