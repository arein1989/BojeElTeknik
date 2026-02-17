import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Elboje from './Component/Elboje'
import Ydelser from './Component/Ydelser'
import Cases from './Component/Cases'
import Job from './Component/Job'
import Omboje from './Component/Omboje'
import Kontakt from './Component/Kontakt'
import Kontor from './Component/Kontor'
import Ombygning from './Component/Ombygning'
import Renovering from './Component/Renovering'
import Tilbygning from './Component/Tilbygning'
import Rådgivning from './Component/Radgivning'
import Udskiftning from './Component/Udskiftning'
import DataInstallation from './Component/DataInstallation'
import Byggestrøm from './Component/Byggestrøm'
import Fåettilbud from './Component/Fåettilbud'
import Tak from './Component/Tak'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Elboje />} />
          <Route path='/ydelser' element={<Ydelser/>}/>
          <Route path='/cases' element={<Cases/>}/>
          <Route path='/job' element={<Job/>}/>
          <Route path='/omboje' element={<Omboje/>}/>
          <Route path='/kontakt' element={<Kontakt/>}/>
          <Route path='/kontor' element={<Kontor/>}/>
          <Route path='/ombygning' element={<Ombygning/>}/>
          <Route path='/renovering' element={<Renovering/>}/>
          <Route path='/tilbygning' element={<Tilbygning/>}/>
          <Route path='/rådgivning' element={<Rådgivning/>}/>
          <Route path='/udskiftning' element={<Udskiftning/>}/>
          <Route path='/dataInstallation' element={<DataInstallation/>}/>
          <Route path='/byggestrøm' element={<Byggestrøm/>}/>
          <Route path='/fåettilbud' element={<Fåettilbud/>}/>
          <Route path='/tak' element={<Tak/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
