// import { Route, Routes } from "react-router-dom"
// import Navigation from "./components/Navigation"
// import Home from "./components/Home"
// import About from "./components/About"
// import Skills from "./components/Skills"
// import Projects from "./components/Projects"
// import Contact from "./components/Contact"

// function App() {

//   return (
//     <>
//       <Navigation />
      
//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes> */}
//     </>
//   )
// }

// export default App


import Navigation from "./components/Navigation"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Skills from "./components/pages/Skills"
import Projects from "./components/pages/Projects"
import Contact from "./components/pages/Contact"

function App() {
  return (
    <>
      <Navigation />
      <div className="sections">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
}

export default App;

