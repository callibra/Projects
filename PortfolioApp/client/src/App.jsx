import React, {useState, createContext} from 'react'
import Sidebar from './Components/Sidebar/Sidebar';
import About from './Components/About/About';
import TechStack from './Components/TechStack/TechStack';
import Project from './Components/Project/Project';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/Education';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import Footer from './Components/Footer/Footer';
import "./App.css";
import NavbarMobileView from './Components/Sidebar/NavbarMobileView';

export const ThemeContext = createContext(null);

const App = () => {
  
  const [theme,setTheme] = useState("light")

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark":"light"))
  }
  
  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>

    <div id={theme}>
     <NavbarMobileView />

     <Sidebar changeTheme={changeTheme} theme={theme}/>
     <About />
     <WorkExperience />
     <TechStack />
     <Education />
     <Project />
     <Testimonial />
     <Contact />
     <Footer />
    </div>

    <ScrollToTop
  smooth={true}
  top="200"
  color="white"
  height="20"
  width="20"
  className="scroll-to-top"
  style={{
  borderRadius: "90px",
  backgroundColor: "tomato",
  transition: "transform 0.3s ease", 
  }}
/>
    </ThemeContext.Provider>
  )
}

export default App
