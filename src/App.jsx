import { lazy, Suspense } from 'react'
import './assets/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AudioVideoRecorder = lazy(() => import('./pages/audioVideoRecorder/container/AudioVideoRecorder'))
const Logon_Page = lazy(() => import('./pages/Logon_Page/Logon_Page'))

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Logon_Page />} />
          <Route path="/AudioVideoRecorder" element={<AudioVideoRecorder />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
