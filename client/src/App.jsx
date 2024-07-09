import './App.css'
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
      <Services/>
    </div>
  )
}

export default App
