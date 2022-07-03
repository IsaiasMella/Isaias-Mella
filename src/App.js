import React, { useState, useEffect } from 'react'
import './App.css';
import Cover from './Components/cover/Cover'
import AboutPage from './Components/About/AboutPage/AboutPage';
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Components/About/AboutPage/AboutComponents/AboutMe/AboutMe'
import TechnologyFrontend from './Components/Component/Technologys/Frontend/Technology-Frontend'
import TechnologyBackend from './Components/Component/Technologys/Backend/Technology-Backend';
import Technology from './Components/Component/Technologys/Technology';
import Experience from './Components/About/AboutPage/AboutComponents/Experience/Experience';
import AllProjects from './Components/Component/AllProjects/AllProjects';
import DownloadCV from './Components/Component/CV/DownloadCV';
import FormContact from './Components/Component/FormContact/FormContact';
import ContainerDynamic from './Components/About/AboutPage/AboutComponents/ContainerDynamic/ContainerDynamic';

function App() {

  const [scrollHeigth, setScrollHeigth] = useState(0);

  const underScroll = () => {
    const position = window.pageYOffset
    setScrollHeigth(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", underScroll)
  }, [scrollHeigth]);

  return (
    <div className="App" >
      <NavBar isScrolling={scrollHeigth} />
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path='/about' element={<AboutPage />} >
          <Route path='page' element={<ContainerDynamic />} >

            <Route path='me' element={<AboutMe />} />
            <Route path='devtools' element={<Technology />} >

              <Route path='devtools-frontend' element={<TechnologyFrontend />} />
              <Route path='devtools-backend' element={<TechnologyBackend />} />

            </Route>
            <Route path='experience' element={<Experience />} />
            <Route path='projects' element={<AllProjects />} />
          </Route>
          <Route path='contact' element={<FormContact />} />

        </Route>
        <Route path='/isaias-mella-cv' element={<DownloadCV />} />
      </Routes>
    </div>
  );
}

export default App;