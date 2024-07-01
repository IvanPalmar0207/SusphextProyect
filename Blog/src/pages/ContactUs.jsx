/*Components*/
import { TitlePage } from "../componentes/TitleSection"
/*Icons*/
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
/*Styles*/
import './Styles/ContactUs.css'
import { FormContact } from "../componentes/formContact";

export function ContactUs(){

    return(
        <>
            {TitlePage('Contacta Suspect')}
            <div>        
                <section className="sectionNumber1">
                    <div className="infoTopic">
                        <div className="iconInfo">
                            <MdOutlinePhone />
                        </div>
                        <h2>Contacto y Agendamiento</h2>
                        <br />
                        <p className="descriptionTopic">
                            Para agendar citas o sesiones con nuestra compañía, puedes ponerte en 
                            contacto con nosotros a través de llamada telefónica o WhatsApp. Ofrecemos
                            servicios personalizados en realización audiovisual, así como fotografía y
                            filmación de alta calidad para eventos especiales. Capturamos tus 
                            recuerdos en el formato que desees, asegurando que cada momento se 
                            conserve de manera especial para ti.                        
                        </p>
                        <br />         
                        <div className="informationTopic">
                            <p className="mainTopic"><FiSmartphone /> +57 312 5074414</p>                                            
                            <p className="mainTopic"><MdEmail /> 2iamicda3@gmail.com</p>    
                            <p className="mainTopic"><FaLocationDot /> Bogota, Villa del Rio</p>                                            
                        </div>
                    </div>
                </section>
                <section className="sectionNumber2">
                    <article className="contactMessage">
                        <p>
                            Si deseas realizar alguna sugerencia o deseas contratar algun tipo de servicio por favor escribe tu mensaje 
                            completando el formulario de contacto que se encuentra en la parte inferior📷
                        </p>    
                    </article>               

                    <h2 className="formTitle">Contacta a SusxPHxecT🔥</h2>

                   <FormContact />

                </section>
            </div>
        </>
    )
}