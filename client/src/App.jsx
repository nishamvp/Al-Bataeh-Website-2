import './App.css'
import Activities from './components/Activities'
import Departments from './components/Departments'
import Details from './components/Details'
import ImageContainer from './components/ImageContainer'
import NavBar from './components/NavBar'
import Services from './components/Services'
import TopBar from './components/TopBar'

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <ImageContainer />
      <Services />
      <Departments />
      <Activities />
      <Details/>
    </div>
  )
}

export default App
