import { useState } from 'react'
import './ModelCard.css'

export default function ModelCard({ name, previewUrl, meshVideo, rfVideo, glbUrl, plyUrl }) {
  const [showRf, setShowRf] = useState(true)

  const displayName = name.replace(/_/g, ' ')

  return (
    <div className="model-card">
      <button className="badge" onClick={() => setShowRf(prev => !prev)}>
        {showRf ? 'RF' : 'GEOMETRY'}
      </button>
      <div className="video-container">
        <video
          key={showRf ? 'rf' : 'mesh'}
          src={showRf ? rfVideo : meshVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="card-footer">
        <div className="preview-container">
          <img src={previewUrl} alt={`${displayName} preview`} className="preview-image" />
        </div>
        <div className="card-info">
          <div className="model-name">{displayName}</div>
          <div className="download-links">
            {glbUrl && (
              <a href={glbUrl} download className="download-link">GLB</a>
            )}
            {plyUrl && (
              <a href={plyUrl} download className="download-link">PLY</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
