/*Components*/
import { TitlePage } from "./TitleSection"
/*Styles*/
import './Styles/Briefcase.css'

export function Categorie(
        proyectName1, proyect1Image1, proyect1Image2, proyect1Image3, proyect1Image4,
        proyectName2, proyect2Image1, proyect2Image2, proyect2Image3, proyect2Image4,
        proyectName3, proyect3Image1, proyect3Image2, proyect3Image3, proyect3Image4,
        proyectName4, proyect4Image1, proyect4Image2, proyect4Image3, proyect4Image4,
    ){
    return(
        <>
            {TitlePage('Portafolio')}     
            <section className="containerMP">
            <div className="containerSection">
                <h2>{proyectName1}</h2>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={proyect1Image1} alt="proyect1Image1" />
                    <img className="imageMainPage" src={proyect1Image2} alt="proyect1Image2" />
                </div>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={proyect1Image3} alt="proyect1Image3" />
                    <img className="imageMainPage" src={proyect1Image4} alt="proyect1Image4" />
                </div>
            </div>
            <div>
            </div>
            <div className="containerSection">
                <h2>{proyectName2}</h2>                
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={proyect2Image1} alt="proyect2Image1" />
                    <img className="imageMainPage" src={proyect2Image2} alt="proyect2Image2" />
                </div>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={proyect2Image3} alt="proyect2Image3" />
                    <img className="imageMainPage" src={proyect2Image4} alt="proyect2Image4" />
                </div>
            </div>
            <div className="containerSection">
                <h2>{proyectName3}</h2>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={proyect3Image1} alt="proyect3Image1" />
                    <img className="imageMainPage" src={proyect3Image2} alt="proyect3Image2" />
                </div>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={proyect3Image3} alt="proyect3Image3" />
                    <img className="imageMainPage" src={proyect3Image4} alt="proyect3Image4" />
                </div>
            </div>
            <div className="containerSection">
                <h2>{proyectName4}</h2>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={proyect4Image1} alt="proyect4Image1" />
                    <img className="imageMainPage" src={proyect4Image2} alt="proyect4Image2" />
                </div>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={proyect4Image3} alt="proyect4Image3" />
                    <img className="imageMainPage" src={proyect4Image4} alt="proyect4Image4" />
                </div>
            </div>
        </section>
    </>
    )
}