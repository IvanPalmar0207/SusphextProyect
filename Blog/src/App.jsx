import { Route, Routes, BrowserRouter } from "react-router-dom"
/*Components*/
import { NavBar } from "./componentes/NavBar"
import { FooterPage } from "./componentes/Footer"
import { ScrollTop } from "./componentes/ScrollTop"
import { CategoriesSection } from "./componentes/CategoriesSection"
/*Pages*/
import { MainPage } from "./pages/MainPage"
import { Briefcase } from "./pages/Briefcase"
import { AboutUs } from "./pages/AboutUs"
import { ContactUs } from "./pages/ContactUs"
import { Event } from "./pages/Events"
import { PhotoSession } from "./pages/PhotoSesion"
import { Artist } from "./pages/Artist"
import { Others } from "./pages/Others"
import { NotFound } from "./pages/NotFound"

function App() {
  return (    
    <BrowserRouter>
      <ScrollTop />
      <NavBar />
      <CategoriesSection />
      <Routes>
        <Route path="/" element = {<MainPage />}/>      
        <Route path="/AboutUs" element = {<AboutUs />}/>
        <Route path="/ContactUs" element = {<ContactUs />}/>        
        <Route path="/Briefcase" element = {<Briefcase />}/>
        <Route path="/Event" element = {<Event />}/>
        <Route path="/PhotoSession" element = {<PhotoSession />}/>
        <Route path="/Artist" element = {<Artist />}/>        
        <Route path="/Others" element = {<Others />}/>
        <Route path="*" element = {<NotFound />}/>
      </Routes>
      <FooterPage />
    </BrowserRouter>
  )
}

export default App
