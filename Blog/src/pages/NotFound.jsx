/*Components*/
import { TitlePage } from "../componentes/TitleSection";
/*Imgs*/
import NotFoundImage from './imgs/NotFound/Robot.jpg'
/*Styles*/
import './Styles/NotFound.css'

export function NotFound(){
    return(
        <div>
            {TitlePage('NotFound')}
            <div className="containerFound">
                <img src = {NotFoundImage} alt="Robot" />

                <h2>Error 404 - Not Found</h2>

                <p>
                    No ha sido posible encontrar la página buscada porque
                    no es una ruta valida, ve al menú de inicio.
                </p>
            </div>
        </div>
    )
}