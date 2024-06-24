/*Components*/
import { Categorie } from "../componentes/Categorie";
/*Images*/
/*Proyect Number 1*/
import Proyect1Image1 from '../pages/imgs/Events/ProyectNro1/Proyect1Number1.jpg'
import Proyect1Image2 from '../pages/imgs/Events/ProyectNro1/Proyect1Number2.jpg'
import Proyect1Image3 from '../pages/imgs/Events/ProyectNro1/Proyect1Number3.jpg'
import Proyect1Image4 from '../pages/imgs/Events/ProyectNro1/Proyect1Number4.jpg'
/*Proyect Number 2*/
import Proyect2Image1 from '../pages/imgs/Events/ProyectNro2/Proyect2Image1.jpg'
import Proyect2Image2 from '../pages/imgs/Events/ProyectNro2/Proyect2Image2.jpg'
import Proyect2Image3 from '../pages/imgs/Events/ProyectNro2/Proyect2Image3.jpg'
import Proyect2Image4 from '../pages/imgs/Events/ProyectNro2/Proyect2Image4.jpg'
/*Proyect Number 3*/
import Proyect3Image1 from '../pages/imgs/Events/ProyectNro3/Proyect3Image1.jpg'
import Proyect3Image2 from '../pages/imgs/Events/ProyectNro3/Proyect3Image2.jpg'
import Proyect3Image3 from '../pages/imgs/Events/ProyectNro3/Proyect3Image3.jpg'
import Proyect3Image4 from '../pages/imgs/Events/ProyectNro3/Proyect3Image4.jpg'
/*Proyect Number 4*/
import Proyect4Image1 from '../pages/imgs/Events/ProyectNro4/Proyect4Image1.jpg'
import Proyect4Image2 from '../pages/imgs/Events/ProyectNro4/Proyect4Image2.jpg'
import Proyect4Image3 from '../pages/imgs/Events/ProyectNro4/Proyect4Image3.jpg'
import Proyect4Image4 from '../pages/imgs/Events/ProyectNro4/Proyect4Image4.jpg'

export function Event(){
    return(
        <>
            {Categorie(
                '🎂 CUMPLEAÑOS 🧁', Proyect1Image1, Proyect1Image2, Proyect1Image3, Proyect1Image4,
                '🎖️ GRADOS 🎓', Proyect2Image1, Proyect2Image2, Proyect2Image3, Proyect2Image4,
                '🍹 INAUGURACIONES 🍻', Proyect3Image1, Proyect3Image2, Proyect3Image3, Proyect3Image4,
                '👼🏻 BABYSHOWER 🍼', Proyect4Image1, Proyect4Image2, Proyect4Image3, Proyect4Image4
            )}
        </>
    )
}