/*Components*/
import { TitlePage } from "../componentes/TitleSection"
/*Styles*/
import './Styles/AboutUs.css'
/*Images*/
import AboutImage from './imgs/AboutUs/aboutImage.jpg'

export function AboutUs(){
    return(
        <>
            {TitlePage('Sobre nosotros')}
            <section className="aboutSection">
                <div className="aboutTitle">
                    <h2> David Pulido - SUSPHEXT</h2>
                </div>
                <div className="containerABout">
                    <img className="imageAbout" src = {AboutImage} alt="AboutImage" />
                    <p className="descriptionAbout">
                        Buen dia, Soy David Pulido, Soy un profesional entusiasta en el ámbito del 
                        entretenimiento, la fotografía y la producción cinematográfica, con una 
                        carrera establecida desde 2017. En el sector multimedia, soy conocido 
                        afectuosamente como SusxPHxecT. Con los años, mi compromiso y habilidad me 
                        han permitido colaborar en agencias de marketing digital, artistas, y famosos
                        de la TV colombiana. un fotógrafo autodidacta con 8 años de experiencia. La 
                        imagen y la fotografía siempre han sido mi pasión. Mi marca, SXPHXT, es el 
                        sello distintivo de mis trabajos audiovisuales. En 2021, comencé a estudiar y 
                        me he especializado en el ámbito visual desde entonces. 
                        <br />
                        <br />
                        Esta experiencia ha mejorado no solo mi perspectiva fotográfica, sino 
                        también mis habilidades en la producción cinematográfica, permitiéndome 
                        captar momentos únicos tanto en el mundo de la música como en el sector de 
                        la belleza la salud y de entretenimiento de una manera cinematográfica.
                        Mi portafolio incluye impactantes imágenes de artistas como Jamir Aguilar y 
                        Zemgo, Laura Acuña, Natalia Rivera, Andrea Tovar, además de destacados 
                        médicos y doctores en el ámbito estético y medicinal. También he realizado 
                        producciones cinematográficas que cuentan historias visuales fascinantes. En
                        cada proyecto, me esfuerzo por capturar la esencia y la pasión de cada 
                        actuación, resaltando al mismo tiempo la innovación y emoción de las marcas
                        con las que he tenido el privilegio de colaborar.          
                    </p>
                </div>
            </section>
        </>
    )
}