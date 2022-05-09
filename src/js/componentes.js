import '../css/componentes.css';
import image1 from '../assets/img/1.jpg'

export const saludar = (nombre) => {



    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}!!`;

    document.body.append(h1);

    //img dinamicas --- para blogs, llamadas a apis etc es muy util para no cachear las imagenes
    const img = document.createElement('img');
    img.src = image1;
    document.body.append(img)

}