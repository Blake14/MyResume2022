import { Contact } from "./Contact"
import { Homepage } from "./Homepage"
import { Portfolio } from "./Portfolio"
import { WorkHistory } from "./WorkHistory"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NavigationBar } from "./NavigationBar"
import backdrop from './wallpaper-resume.jpg'
import { AboutMe } from "./AboutMe"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const App = () => {
  document.body.style.backgroundColor = 'white'
  return <Router>
    <div style={{
      backgroundImage: `url(${backdrop})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '90vw',
      height: '90vh',
      opacity: .3,
      display: 'relative',
      position: 'absolute',
      zIndex: -1
    }} />
    <NavigationBar />
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Homepage
          />} exact />
          <Route path="/history" element={<WorkHistory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      position: 'absolute',
      bottom: 0,
      width: '100%'
    }}>
      <div style={{
        height: 75,
        display: 'flex',
        justifyContent: 'space-evenly',
        fontSize: 35,
        color: '#CC0033',
        width: 200
      }}>
        <p style={{
          cursor: 'pointer'
        }}><AiFillGithub /></p>
        <p style={{
          cursor: 'pointer'
        }}><AiFillLinkedin /></p>
      </div>
    </div>
  </Router>
}

export default App;
