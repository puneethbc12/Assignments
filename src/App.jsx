import { lazy, Suspense, useState } from 'react'
import './assets/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AudioVideoRecorder = lazy(() => import('./pages/audioVideoRecorder/container/AudioVideoRecorder'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" exact element={<Logon_Page />} /> */}
          <Route path="/AudioVideoRecorder" element={<AudioVideoRecorder />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
