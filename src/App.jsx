import ModelCard from './components/ModelCard'
import './App.css'

const models = [
  { name: 'apple', previewUrl: '/image-apple.png', meshVideo: '/geometry-apple.mp4', rfVideo: '/gaussian-apple.mp4', glbUrl: '/glb-apple.glb', plyUrl: '/ply-apple.ply' },
  { name: 'banana', previewUrl: '/image-banana.png', meshVideo: '/geometry-banana.mp4', rfVideo: '/gaussian-banana.mp4', glbUrl: '/glb-banana.glb', plyUrl: '/ply-banana.ply' },
  { name: 'bell_pepper', previewUrl: '/image-bell_pepper.png', meshVideo: '/geometry-bell_pepper.mp4', rfVideo: '/gaussian-bell_pepper.mp4', glbUrl: '/glb-bell_pepper.glb', plyUrl: '/ply-bell_pepper.ply' },
  { name: 'blender', previewUrl: '/image-blender.png', meshVideo: '/geometry-blender.mp4', rfVideo: '/gaussian-blender.mp4', glbUrl: '/glb-blender.glb', plyUrl: '/ply-blender.ply' },
  { name: 'blueberry', previewUrl: '/image-blueberry.png', meshVideo: '/geometry-blueberry.mp4', rfVideo: '/gaussian-blueberry.mp4', glbUrl: '/glb-blueberry.glb', plyUrl: '/ply-blueberry.ply' },
  { name: 'carrot', previewUrl: '/image-carrot.png', meshVideo: '/geometry-carrot.mp4', rfVideo: '/gaussian-carrot.mp4', glbUrl: '/glb-carrot.glb', plyUrl: '/ply-carrot.ply' },
  { name: 'cherry', previewUrl: '/image-cherry.png', meshVideo: '/geometry-cherry.mp4', rfVideo: '/gaussian-cherry.mp4', glbUrl: '/glb-cherry.glb', plyUrl: '/ply-cherry.ply' },
  // { name: 'coffee_maker', previewUrl: '/image-coffee_maker.png', meshVideo: '/geometry-coffee_maker.mp4', rfVideo: '/gaussian-coffee_maker.mp4', glbUrl: '/glb-coffee_maker.glb', plyUrl: '/ply-coffee_maker.ply' },
  { name: 'cucumber', previewUrl: '/image-cucumber.png', meshVideo: '/geometry-cucumber.mp4', rfVideo: '/gaussian-cucumber.mp4', glbUrl: '/glb-cucumber.glb', plyUrl: '/ply-cucumber.ply' },
  { name: 'diamond', previewUrl: '/image-diamond.png', meshVideo: '/geometry-diamond.mp4', rfVideo: '/gaussian-diamond.mp4', glbUrl: '/glb-diamond.glb', plyUrl: '/ply-diamond.ply' },
  { name: 'dishwasher', previewUrl: '/image-dishwasher.png', meshVideo: '/geometry-dishwasher.mp4', rfVideo: '/gaussian-dishwasher.mp4', glbUrl: '/glb-dishwasher.glb', plyUrl: '/ply-dishwasher.ply' },
  { name: 'electric_kettle', previewUrl: '/image-electric_kettle.png', meshVideo: '/geometry-electric_kettle.mp4', rfVideo: '/gaussian-electric_kettle.mp4', glbUrl: '/glb-electric_kettle.glb', plyUrl: '/ply-electric_kettle.ply' },
  { name: 'electric_stove', previewUrl: '/image-electric_stove.png', meshVideo: '/geometry-electric_stove.mp4', rfVideo: '/gaussian-electric_stove.mp4', glbUrl: '/glb-electric_stove.glb', plyUrl: '/ply-electric_stove.ply' },
  { name: 'emerald', previewUrl: '/image-emerald.png', meshVideo: '/geometry-emerald.mp4', rfVideo: '/gaussian-emerald.mp4', glbUrl: '/glb-emerald.glb', plyUrl: '/ply-emerald.ply' },
  { name: 'gold_coin', previewUrl: '/image-gold_coin.png', meshVideo: '/geometry-gold_coin.mp4', rfVideo: '/gaussian-gold_coin.mp4', glbUrl: '/glb-gold_coin.glb', plyUrl: '/ply-gold_coin.ply' },
  { name: 'grape_cluster', previewUrl: '/image-grape_cluster.png', meshVideo: '/geometry-grape_cluster.mp4', rfVideo: '/gaussian-grape_cluster.mp4', glbUrl: '/glb-grape_cluster.glb', plyUrl: '/ply-grape_cluster.ply' },
  { name: 'hair_dryer', previewUrl: '/image-hair_dryer.png', meshVideo: '/geometry-hair_dryer.mp4', rfVideo: '/gaussian-hair_dryer.mp4', glbUrl: '/glb-hair_dryer.glb', plyUrl: '/ply-hair_dryer.ply' },
  { name: 'iron', previewUrl: '/image-iron.png', meshVideo: '/geometry-iron.mp4', rfVideo: '/gaussian-iron.mp4', glbUrl: '/glb-iron.glb', plyUrl: '/ply-iron.ply' },
  { name: 'laptop', previewUrl: '/image-laptop.png', meshVideo: '/geometry-laptop.mp4', rfVideo: '/gaussian-laptop.mp4', glbUrl: '/glb-laptop.glb', plyUrl: '/ply-laptop.ply' },
  { name: 'lemon', previewUrl: '/image-lemon.png', meshVideo: '/geometry-lemon.mp4', rfVideo: '/gaussian-lemon.mp4', glbUrl: '/glb-lemon.glb', plyUrl: '/ply-lemon.ply' },
  { name: 'microwave', previewUrl: '/image-microwave.png', meshVideo: '/geometry-microwave.mp4', rfVideo: '/gaussian-microwave.mp4', glbUrl: '/glb-microwave.glb', plyUrl: '/ply-microwave.ply' },
  // { name: 'monitor', previewUrl: '/image-monitor.png', meshVideo: '/geometry-monitor.mp4', rfVideo: '/gaussian-monitor.mp4', glbUrl: '/glb-monitor.glb', plyUrl: '/ply-monitor.ply' },
  { name: 'orange', previewUrl: '/image-orange.png', meshVideo: '/geometry-orange.mp4', rfVideo: '/gaussian-orange.mp4', glbUrl: '/glb-orange.glb', plyUrl: '/ply-orange.ply' },
  { name: 'pear', previewUrl: '/image-pear.png', meshVideo: '/geometry-pear.mp4', rfVideo: '/gaussian-pear.mp4', glbUrl: '/glb-pear.glb', plyUrl: '/ply-pear.ply' },
  // { name: 'pineapple', previewUrl: '/image-pineapple.png', meshVideo: '/geometry-pineapple.mp4', rfVideo: '/gaussian-pineapple.mp4', glbUrl: '/glb-pineapple.glb', plyUrl: '/ply-pineapple.ply' },
  { name: 'potato', previewUrl: '/image-potato.png', meshVideo: '/geometry-potato.mp4', rfVideo: '/gaussian-potato.mp4', glbUrl: '/glb-potato.glb', plyUrl: '/ply-potato.ply' },
  { name: 'printer', previewUrl: '/image-printer.png', meshVideo: '/geometry-printer.mp4', rfVideo: '/gaussian-printer.mp4', glbUrl: '/glb-printer.glb', plyUrl: '/ply-printer.ply' },
  { name: 'refrigerator', previewUrl: '/image-refrigerator.png', meshVideo: '/geometry-refrigerator.mp4', rfVideo: '/gaussian-refrigerator.mp4', glbUrl: '/glb-refrigerator.glb', plyUrl: '/ply-refrigerator.ply' },
  { name: 'ruby', previewUrl: '/image-ruby.png', meshVideo: '/geometry-ruby.mp4', rfVideo: '/gaussian-ruby.mp4', glbUrl: '/glb-ruby.glb', plyUrl: '/ply-ruby.ply' },
  // { name: 'silver_coin', previewUrl: '/image-silver_coin.png', meshVideo: '/geometry-silver_coin.mp4', rfVideo: '/gaussian-silver_coin.mp4', glbUrl: '/glb-silver_coin.glb', plyUrl: '/ply-silver_coin.ply' },
  { name: 'strawberry', previewUrl: '/image-strawberry.png', meshVideo: '/geometry-strawberry.mp4', rfVideo: '/gaussian-strawberry.mp4', glbUrl: '/glb-strawberry.glb', plyUrl: '/ply-strawberry.ply' },
  { name: 'table_fan', previewUrl: '/image-table_fan.png', meshVideo: '/geometry-table_fan.mp4', rfVideo: '/gaussian-table_fan.mp4', glbUrl: '/glb-table_fan.glb', plyUrl: '/ply-table_fan.ply' },
  { name: 'toaster', previewUrl: '/image-toaster.png', meshVideo: '/geometry-toaster.mp4', rfVideo: '/gaussian-toaster.mp4', glbUrl: '/glb-toaster.glb', plyUrl: '/ply-toaster.ply' },
  { name: 'tomato', previewUrl: '/image-tomato.png', meshVideo: '/geometry-tomato.mp4', rfVideo: '/gaussian-tomato.mp4', glbUrl: '/glb-tomato.glb', plyUrl: '/ply-tomato.ply' },
  // { name: 'vacuum_cleaner', previewUrl: '/image-vacuum_cleaner.png', meshVideo: '/geometry-vacuum_cleaner.mp4', rfVideo: '/gaussian-vacuum_cleaner.mp4', glbUrl: '/glb-vacuum_cleaner.glb', plyUrl: '/ply-vacuum_cleaner.ply' },
  { name: 'washing_machine', previewUrl: '/image-washing_machine.png', meshVideo: '/geometry-washing_machine.mp4', rfVideo: '/gaussian-washing_machine.mp4', glbUrl: '/glb-washing_machine.glb', plyUrl: '/ply-washing_machine.ply' },
]

function App() {
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
            plyUrl={model.plyUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default App
