/*React-router-Dom*/
import { Link } from "react-router-dom";
/*Components*/
import { TitlePage } from "../componentes/TitleSection";
/*Styles*/
import './Styles/MainPage.css';
/*Icons*/
import * as Icon from 'react-bootstrap-icons';
/*Images*/
import FirstImage from './imgs/MainPage/FirstPair1.jpg'
import SecondImage from './imgs/MainPage/FirstPair2.jpg'
import ThirdImage from './imgs/MainPage/SecondPair1.jpg'
import FourthImage from './imgs/MainPage/SecondPair2.jpg'
import FifthImage from './imgs/MainPage/ThirdPair1.jpg'
import SixthImage from './imgs/MainPage/ThirdPair2.jpg'

export function MainPage(){
    return(
        <>
            {TitlePage('Inicio')}
            <section className="section1">
                <div className="infoButton">
                    <h2>Mi Portafolio</h2>                
                    <Link className="linkSection" to = 'Briefcase'>Visitar portafolio</Link>
                </div>
            </section>

            <section className="section2">
                <div className="infoButton">
                    <h2>Sobre Mi</h2>                
                    <Link className="linkSection" to = 'AboutUs'>Ver informacion</Link>
                </div>
            </section>

            <section className="section3">
                <div className="infoButton">
                    <h2>Contactame</h2>                
                    <Link className="linkSection" to = 'ContactUs' >Ver contacto</Link>
                </div>
            </section>

            <div className="imagesPairsContainer">
                <div className="imagesPairs">
                    <img className="imagePair" src = {FirstImage} alt = "FirstImage" />
                    <img className="imagePair" src = {SecondImage} alt = "SecondImage" />
                </div>
                <div className="imagesPairs">
                    <img className="imagePair" src = {ThirdImage} alt = "ThirdImage" />
                    <img className="imagePair" src = {FourthImage} alt = "FourthImage" />
                </div>
                <div className="imagesPairs">
                    <img className="imagePair" src = {FifthImage} alt = "FifthImage" />
                    <img className="imagePair" src = {SixthImage} alt = "SixthImage" />
                </div>
            </div>

            <div className="myVideos">
                <div className="infoButton">
                    <h2>Galeria de Videos</h2>     
                    <a className="linkSection" href="https://www.instagram.com/9suspect7?igsh=MTZxY211MHRtNXNzcQ%3D%3D" target='_blank' rel="noopener noreferrer"> Ver más <Icon.Instagram/></a>
                </div>
            </div>
        </>
    )
}