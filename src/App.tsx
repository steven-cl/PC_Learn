import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@/App.css'
import Home from '@pages/Home'
import ArduinoBasics from '@pages/ArduinoBasics'
import ArduinoCoding from '@pages/ArduinoCoding'
import ArduinoHardware from '@pages/ArduinoHardware'
import ArduinoTermometro from '@pages/ArduinoTermometro'
import ArduinoLedProject from '@pages/ArduinoLedProject'
import BasicsArchitecture from '@pages/BasicsArchitecture'
import PcComponents from '@pages/PcComponents'
import RecomendPC from '@pages/RecommendPc'
import Layout from '@/Layout'
import NotFound from '@pages/NotFound'
import ScrollToTop from '@components/ui/ScrollToTop'


function App() {

  return (
    <BrowserRouter>
      <div className="app app-container justify-center bg-white">
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/arduinoBasics' element={<ArduinoBasics />} />
            <Route path='/arduinoCoding' element={<ArduinoCoding />} />
            <Route path='/arduinoHardware' element={<ArduinoHardware />} />
            <Route path='/arduinoTermometro' element={<ArduinoTermometro />} />
            <Route path='/arduinoLedProject' element={<ArduinoLedProject />} />
            <Route path='/basicsArchitecture' element={<BasicsArchitecture />} />
            <Route path='/pcComponents' element={<PcComponents />} />
            <Route path='/recommendPc' element={<RecomendPC />} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
