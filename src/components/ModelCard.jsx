import { useState, useRef, useEffect } from 'react'
import './ModelCard.css'

export default function ModelCard({ name, previewUrl, meshVideo, rfVideo, glbUrl }) {
  const [showRf, setShowRf] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  const displayName = name.replace(/_/g, ' ')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { rootMargin: '50px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="model-card" ref={cardRef}>
      <button className="badge" onClick={() => setShowRf(prev => !prev)}>
        {showRf ? 'RF' : 'GEOMETRY'}
      </button>
      <div className="video-container">
        {isVisible && (
          <video
            key={showRf ? 'rf' : 'mesh'}
            src={showRf ? rfVideo : meshVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        )}
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
          </div>
        </div>
      </div>
    </div>
  )
}
