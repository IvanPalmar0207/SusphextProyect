/*React-Router-Dom*/
import { Link } from 'react-router-dom'
/*Styles*/
import './Styles/CategoriesSection.css'

export function CategoriesSection(){
    return(
        <div className='containerMainCat'>
            <div className="containerCategories">
                <ul>
                    <li>
                        <Link to = "Briefcase">Empresariales</Link>
                    </li>
                    <li>
                        <Link to = 'Event'>Eventos</Link>
                    </li>
                    <li>
                        <Link to = 'PhotoSession'>Sesiones Fotograficas</Link>
                    </li>
                    <li>
                        <Link to = 'Artist'>Artistas</Link>
                    </li>
                    <li>
                        <Link to = 'Publicity'>Diseños Publicitarios</Link>
                    </li>
                    <li>
                        <Link to = 'Others'>Otros</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}