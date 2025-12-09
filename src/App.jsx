import { useState, useEffect } from 'react'
import ModelCard from './components/ModelCard'
import './App.css'

function App() {
  const [models, setModels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/models.json')
      .then(res => res.json())
      .then(data => {
        setModels(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load models:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="gallery-container">
        <h1 className="page-title">Markethalle</h1>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="gallery-container">
      <h1 className="page-title">Markethalle</h1>
      <div className="gallery-grid">
        {models.map((model) => (
          <ModelCard
            key={model.name}
            name={model.name}
            previewUrl={model.previewUrl}
            meshVideo={model.meshVideo}
            rfVideo={model.rfVideo}
            glbUrl={model.glbUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default App
