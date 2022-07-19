import { Contact } from "./Contact"
import { Homepage } from "./Homepage"
import { Portfolio } from "./Portfolio"
import { WorkHistory } from "./WorkHistory"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NavigationBar } from "./NavigationBar"

const App = () => {
  document.body.style.backgroundColor = 'white'
  return <Router>
    <NavigationBar />
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Homepage
          />} exact />
          <Route path="/history" element={<WorkHistory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  </Router>
}

export default App;
