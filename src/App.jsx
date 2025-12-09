import ModelCard from './components/ModelCard'
import './App.css'

const models = [
  { name: 'apple', previewUrl: '/image-apple.png', meshVideo: '/geometry-apple.mp4', rfVideo: '/gaussian-apple.mp4', glbUrl: '/glb-apple.glb' },
  // { name: 'apple_pie', previewUrl: '/image-apple_pie.png', meshVideo: '/geometry-apple_pie.mp4', rfVideo: '/gaussian-apple_pie.mp4', glbUrl: '/glb-apple_pie.glb' },
  { name: 'bacon_strip', previewUrl: '/image-bacon_strip.png', meshVideo: '/geometry-bacon_strip.mp4', rfVideo: '/gaussian-bacon_strip.mp4', glbUrl: '/glb-bacon_strip.glb' },
  { name: 'banana', previewUrl: '/image-banana.png', meshVideo: '/geometry-banana.mp4', rfVideo: '/gaussian-banana.mp4', glbUrl: '/glb-banana.glb' },
  { name: 'bell_pepper', previewUrl: '/image-bell_pepper.png', meshVideo: '/geometry-bell_pepper.mp4', rfVideo: '/gaussian-bell_pepper.mp4', glbUrl: '/glb-bell_pepper.glb' },
  { name: 'blender', previewUrl: '/image-blender.png', meshVideo: '/geometry-blender.mp4', rfVideo: '/gaussian-blender.mp4', glbUrl: '/glb-blender.glb' },
  { name: 'blueberry', previewUrl: '/image-blueberry.png', meshVideo: '/geometry-blueberry.mp4', rfVideo: '/gaussian-blueberry.mp4', glbUrl: '/glb-blueberry.glb' },
  { name: 'burger', previewUrl: '/image-burger.png', meshVideo: '/geometry-burger.mp4', rfVideo: '/gaussian-burger.mp4', glbUrl: '/glb-burger.glb' },
  { name: 'carrot', previewUrl: '/image-carrot.png', meshVideo: '/geometry-carrot.mp4', rfVideo: '/gaussian-carrot.mp4', glbUrl: '/glb-carrot.glb' },
  { name: 'cheese_block', previewUrl: '/image-cheese_block.png', meshVideo: '/geometry-cheese_block.mp4', rfVideo: '/gaussian-cheese_block.mp4', glbUrl: '/glb-cheese_block.glb' },
  { name: 'cherry', previewUrl: '/image-cherry.png', meshVideo: '/geometry-cherry.mp4', rfVideo: '/gaussian-cherry.mp4', glbUrl: '/glb-cherry.glb' },
  { name: 'chicken_leg', previewUrl: '/image-chicken_leg.png', meshVideo: '/geometry-chicken_leg.mp4', rfVideo: '/gaussian-chicken_leg.mp4', glbUrl: '/glb-chicken_leg.glb' },
  // { name: 'coffee_maker', previewUrl: '/image-coffee_maker.png', meshVideo: '/geometry-coffee_maker.mp4', rfVideo: '/gaussian-coffee_maker.mp4', glbUrl: '/glb-coffee_maker.glb' },
  { name: 'croissant', previewUrl: '/image-croissant.png', meshVideo: '/geometry-croissant.mp4', rfVideo: '/gaussian-croissant.mp4', glbUrl: '/glb-croissant.glb' },
  { name: 'cucumber', previewUrl: '/image-cucumber.png', meshVideo: '/geometry-cucumber.mp4', rfVideo: '/gaussian-cucumber.mp4', glbUrl: '/glb-cucumber.glb' },
  { name: 'cupcake', previewUrl: '/image-cupcake.png', meshVideo: '/geometry-cupcake.mp4', rfVideo: '/gaussian-cupcake.mp4', glbUrl: '/glb-cupcake.glb' },
  { name: 'diamond', previewUrl: '/image-diamond.png', meshVideo: '/geometry-diamond.mp4', rfVideo: '/gaussian-diamond.mp4', glbUrl: '/glb-diamond.glb' },
  { name: 'dishwasher', previewUrl: '/image-dishwasher.png', meshVideo: '/geometry-dishwasher.mp4', rfVideo: '/gaussian-dishwasher.mp4', glbUrl: '/glb-dishwasher.glb' },
  { name: 'donut', previewUrl: '/image-donut.png', meshVideo: '/geometry-donut.mp4', rfVideo: '/gaussian-donut.mp4', glbUrl: '/glb-donut.glb' },
  { name: 'egg', previewUrl: '/image-egg.png', meshVideo: '/geometry-egg.mp4', rfVideo: '/gaussian-egg.mp4', glbUrl: '/glb-egg.glb' },
  { name: 'electric_kettle', previewUrl: '/image-electric_kettle.png', meshVideo: '/geometry-electric_kettle.mp4', rfVideo: '/gaussian-electric_kettle.mp4', glbUrl: '/glb-electric_kettle.glb' },
  { name: 'electric_stove', previewUrl: '/image-electric_stove.png', meshVideo: '/geometry-electric_stove.mp4', rfVideo: '/gaussian-electric_stove.mp4', glbUrl: '/glb-electric_stove.glb' },
  { name: 'emerald', previewUrl: '/image-emerald.png', meshVideo: '/geometry-emerald.mp4', rfVideo: '/gaussian-emerald.mp4', glbUrl: '/glb-emerald.glb' },
  // { name: 'fish', previewUrl: '/image-fish.png', meshVideo: '/geometry-fish.mp4', rfVideo: '/gaussian-fish.mp4', glbUrl: '/glb-fish.glb' },
  { name: 'game_console', previewUrl: '/image-game_console.png', meshVideo: '/geometry-game_console.mp4', rfVideo: '/gaussian-game_console.mp4', glbUrl: '/glb-game_console.glb' },
  { name: 'gold_coin', previewUrl: '/image-gold_coin.png', meshVideo: '/geometry-gold_coin.mp4', rfVideo: '/gaussian-gold_coin.mp4', glbUrl: '/glb-gold_coin.glb' },
  { name: 'grape_cluster', previewUrl: '/image-grape_cluster.png', meshVideo: '/geometry-grape_cluster.mp4', rfVideo: '/gaussian-grape_cluster.mp4', glbUrl: '/glb-grape_cluster.glb' },
  { name: 'hair_dryer', previewUrl: '/image-hair_dryer.png', meshVideo: '/geometry-hair_dryer.mp4', rfVideo: '/gaussian-hair_dryer.mp4', glbUrl: '/glb-hair_dryer.glb' },
  // { name: 'ham_slice', previewUrl: '/image-ham_slice.png', meshVideo: '/geometry-ham_slice.mp4', rfVideo: '/gaussian-ham_slice.mp4', glbUrl: '/glb-ham_slice.glb' },
  // { name: 'hot_dog', previewUrl: '/image-hot_dog.png', meshVideo: '/geometry-hot_dog.mp4', rfVideo: '/gaussian-hot_dog.mp4', glbUrl: '/glb-hot_dog.glb' },
  { name: 'iron', previewUrl: '/image-iron.png', meshVideo: '/geometry-iron.mp4', rfVideo: '/gaussian-iron.mp4', glbUrl: '/glb-iron.glb' },
  { name: 'laptop', previewUrl: '/image-laptop.png', meshVideo: '/geometry-laptop.mp4', rfVideo: '/gaussian-laptop.mp4', glbUrl: '/glb-laptop.glb' },
  { name: 'lemon', previewUrl: '/image-lemon.png', meshVideo: '/geometry-lemon.mp4', rfVideo: '/gaussian-lemon.mp4', glbUrl: '/glb-lemon.glb' },
  { name: 'loaf_bread', previewUrl: '/image-loaf_bread.png', meshVideo: '/geometry-loaf_bread.mp4', rfVideo: '/gaussian-loaf_bread.mp4', glbUrl: '/glb-loaf_bread.glb' },
  { name: 'microwave', previewUrl: '/image-microwave.png', meshVideo: '/geometry-microwave.mp4', rfVideo: '/gaussian-microwave.mp4', glbUrl: '/glb-microwave.glb' },
  { name: 'milk_carton', previewUrl: '/image-milk_carton.png', meshVideo: '/geometry-milk_carton.mp4', rfVideo: '/gaussian-milk_carton.mp4', glbUrl: '/glb-milk_carton.glb' },
  // { name: 'monitor', previewUrl: '/image-monitor.png', meshVideo: '/geometry-monitor.mp4', rfVideo: '/gaussian-monitor.mp4', glbUrl: '/glb-monitor.glb' },
  { name: 'muffin', previewUrl: '/image-muffin.png', meshVideo: '/geometry-muffin.mp4', rfVideo: '/gaussian-muffin.mp4', glbUrl: '/glb-muffin.glb' },
  { name: 'orange', previewUrl: '/image-orange.png', meshVideo: '/geometry-orange.mp4', rfVideo: '/gaussian-orange.mp4', glbUrl: '/glb-orange.glb' },
  { name: 'pancake_stack', previewUrl: '/image-pancake_stack.png', meshVideo: '/geometry-pancake_stack.mp4', rfVideo: '/gaussian-pancake_stack.mp4', glbUrl: '/glb-pancake_stack.glb' },
  { name: 'pear', previewUrl: '/image-pear.png', meshVideo: '/geometry-pear.mp4', rfVideo: '/gaussian-pear.mp4', glbUrl: '/glb-pear.glb' },
  // { name: 'pineapple', previewUrl: '/image-pineapple.png', meshVideo: '/geometry-pineapple.mp4', rfVideo: '/gaussian-pineapple.mp4', glbUrl: '/glb-pineapple.glb' },
  { name: 'pizza_slice', previewUrl: '/image-pizza_slice.png', meshVideo: '/geometry-pizza_slice.mp4', rfVideo: '/gaussian-pizza_slice.mp4', glbUrl: '/glb-pizza_slice.glb' },
  { name: 'potato', previewUrl: '/image-potato.png', meshVideo: '/geometry-potato.mp4', rfVideo: '/gaussian-potato.mp4', glbUrl: '/glb-potato.glb' },
  { name: 'printer', previewUrl: '/image-printer.png', meshVideo: '/geometry-printer.mp4', rfVideo: '/gaussian-printer.mp4', glbUrl: '/glb-printer.glb' },
  { name: 'refrigerator', previewUrl: '/image-refrigerator.png', meshVideo: '/geometry-refrigerator.mp4', rfVideo: '/gaussian-refrigerator.mp4', glbUrl: '/glb-refrigerator.glb' },
  // { name: 'router', previewUrl: '/image-router.png', meshVideo: '/geometry-router.mp4', rfVideo: '/gaussian-router.mp4', glbUrl: '/glb-router.glb' },
  { name: 'ruby', previewUrl: '/image-ruby.png', meshVideo: '/geometry-ruby.mp4', rfVideo: '/gaussian-ruby.mp4', glbUrl: '/glb-ruby.glb' },
  { name: 'sandwich', previewUrl: '/image-sandwich.png', meshVideo: '/geometry-sandwich.mp4', rfVideo: '/gaussian-sandwich.mp4', glbUrl: '/glb-sandwich.glb' },
  { name: 'shrimp', previewUrl: '/image-shrimp.png', meshVideo: '/geometry-shrimp.mp4', rfVideo: '/gaussian-shrimp.mp4', glbUrl: '/glb-shrimp.glb' },
  // { name: 'silver_coin', previewUrl: '/image-silver_coin.png', meshVideo: '/geometry-silver_coin.mp4', rfVideo: '/gaussian-silver_coin.mp4', glbUrl: '/glb-silver_coin.glb' },
  // { name: 'smartphone', previewUrl: '/image-smartphone.png', meshVideo: '/geometry-smartphone.mp4', rfVideo: '/gaussian-smartphone.mp4', glbUrl: '/glb-smartphone.glb' },
  { name: 'steak', previewUrl: '/image-steak.png', meshVideo: '/geometry-steak.mp4', rfVideo: '/gaussian-steak.mp4', glbUrl: '/glb-steak.glb' },
  { name: 'strawberry', previewUrl: '/image-strawberry.png', meshVideo: '/geometry-strawberry.mp4', rfVideo: '/gaussian-strawberry.mp4', glbUrl: '/glb-strawberry.glb' },
  { name: 'sushi_roll', previewUrl: '/image-sushi_roll.png', meshVideo: '/geometry-sushi_roll.mp4', rfVideo: '/gaussian-sushi_roll.mp4', glbUrl: '/glb-sushi_roll.glb' },
  { name: 'table_fan', previewUrl: '/image-table_fan.png', meshVideo: '/geometry-table_fan.mp4', rfVideo: '/gaussian-table_fan.mp4', glbUrl: '/glb-table_fan.glb' },
  // { name: 'tablet', previewUrl: '/image-tablet.png', meshVideo: '/geometry-tablet.mp4', rfVideo: '/gaussian-tablet.mp4', glbUrl: '/glb-tablet.glb' },
  // { name: 'television', previewUrl: '/image-television.png', meshVideo: '/geometry-television.mp4', rfVideo: '/gaussian-television.mp4', glbUrl: '/glb-television.glb' },
  { name: 'toaster', previewUrl: '/image-toaster.png', meshVideo: '/geometry-toaster.mp4', rfVideo: '/gaussian-toaster.mp4', glbUrl: '/glb-toaster.glb' },
  { name: 'tomato', previewUrl: '/image-tomato.png', meshVideo: '/geometry-tomato.mp4', rfVideo: '/gaussian-tomato.mp4', glbUrl: '/glb-tomato.glb' },
  // { name: 'vacuum_cleaner', previewUrl: '/image-vacuum_cleaner.png', meshVideo: '/geometry-vacuum_cleaner.mp4', rfVideo: '/gaussian-vacuum_cleaner.mp4', glbUrl: '/glb-vacuum_cleaner.glb' },
  { name: 'washing_machine', previewUrl: '/image-washing_machine.png', meshVideo: '/geometry-washing_machine.mp4', rfVideo: '/gaussian-washing_machine.mp4', glbUrl: '/glb-washing_machine.glb' },
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
          />
        ))}
      </div>
    </div>
  )
}

export default App
