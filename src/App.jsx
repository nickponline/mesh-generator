import ModelCard from './components/ModelCard'
import './App.css'

const models = [
  { name: 'alchemy_flask', previewUrl: '/alchemy_flask.png', meshVideo: '/alchemy_flask_mesh.mp4', rfVideo: '/alchemy_flask_rf.mp4', glbUrl: '/alchemy_flask.glb', plyUrl: '/alchemy_flask.ply' },
  { name: 'alien_artifact', previewUrl: '/alien_artifact.png', meshVideo: '/alien_artifact_mesh.mp4', rfVideo: '/alien_artifact_rf.mp4', glbUrl: '/alien_artifact.glb', plyUrl: '/alien_artifact.ply' },
  { name: 'android_head', previewUrl: '/android_head.png', meshVideo: '/android_head_mesh.mp4', rfVideo: '/android_head_rf.mp4', glbUrl: '/android_head.glb', plyUrl: '/android_head.ply' },
  { name: 'battle_axe', previewUrl: '/battle_axe.png', meshVideo: '/battle_axe_mesh.mp4', rfVideo: '/battle_axe_rf.mp4', glbUrl: '/battle_axe.glb', plyUrl: '/battle_axe.ply' },
  { name: 'campfire', previewUrl: '/campfire.png', meshVideo: '/campfire_mesh.mp4', rfVideo: '/campfire_rf.mp4', glbUrl: '/campfire.glb', plyUrl: '/campfire.ply' },
  { name: 'cozy_cottage', previewUrl: '/cozy_cottage.png', meshVideo: '/cozy_cottage_mesh.mp4', rfVideo: '/cozy_cottage_rf.mp4', glbUrl: '/cozy_cottage.glb', plyUrl: '/cozy_cottage.ply' },
  { name: 'crystal_orb', previewUrl: '/crystal_orb.png', meshVideo: '/crystal_orb_mesh.mp4', rfVideo: '/crystal_orb_rf.mp4', glbUrl: '/crystal_orb.glb', plyUrl: '/crystal_orb.ply' },
  { name: 'cursed_gauntlet', previewUrl: '/cursed_gauntlet.png', meshVideo: '/cursed_gauntlet_mesh.mp4', rfVideo: '/cursed_gauntlet_rf.mp4', glbUrl: '/cursed_gauntlet.glb', plyUrl: '/cursed_gauntlet.ply' },
  { name: 'cyber_visor', previewUrl: '/cyber_visor.png', meshVideo: '/cyber_visor_mesh.mp4', rfVideo: '/cyber_visor_rf.mp4', glbUrl: '/cyber_visor.glb', plyUrl: '/cyber_visor.ply' },
  { name: 'cybernetic_drone', previewUrl: '/cybernetic_drone.png', meshVideo: '/cybernetic_drone_mesh.mp4', rfVideo: '/cybernetic_drone_rf.mp4', glbUrl: '/cybernetic_drone.glb', plyUrl: '/cybernetic_drone.ply' },
  { name: 'dagger_of_venom', previewUrl: '/dagger_of_venom.png', meshVideo: '/dagger_of_venom_mesh.mp4', rfVideo: '/dagger_of_venom_rf.mp4', glbUrl: '/dagger_of_venom.glb', plyUrl: '/dagger_of_venom.ply' },
  { name: 'dragon_shield', previewUrl: '/dragon_shield.png', meshVideo: '/dragon_shield_mesh.mp4', rfVideo: '/dragon_shield_rf.mp4', glbUrl: '/dragon_shield.glb', plyUrl: '/dragon_shield.ply' },
  { name: 'elven_bow', previewUrl: '/elven_bow.png', meshVideo: '/elven_bow_mesh.mp4', rfVideo: '/elven_bow_rf.mp4', glbUrl: '/elven_bow.glb', plyUrl: '/elven_bow.ply' },
  { name: 'enchanted_sword', previewUrl: '/enchanted_sword.png', meshVideo: '/enchanted_sword_mesh.mp4', rfVideo: '/enchanted_sword_rf.mp4', glbUrl: '/enchanted_sword.glb', plyUrl: '/enchanted_sword.ply' },
  { name: 'energy_crystal', previewUrl: '/energy_crystal.png', meshVideo: '/energy_crystal_mesh.mp4', rfVideo: '/energy_crystal_rf.mp4', glbUrl: '/energy_crystal.glb', plyUrl: '/energy_crystal.ply' },
  { name: 'energy_shield', previewUrl: '/energy_shield.png', meshVideo: '/energy_shield_mesh.mp4', rfVideo: '/energy_shield_rf.mp4', glbUrl: '/energy_shield.glb', plyUrl: '/energy_shield.ply' },
  { name: 'exo_boots', previewUrl: '/exo_boots.png', meshVideo: '/exo_boots_mesh.mp4', rfVideo: '/exo_boots_rf.mp4', glbUrl: '/exo_boots.glb', plyUrl: '/exo_boots.ply' },
  { name: 'flame_torch', previewUrl: '/flame_torch.png', meshVideo: '/flame_torch_mesh.mp4', rfVideo: '/flame_torch_rf.mp4', glbUrl: '/flame_torch.glb', plyUrl: '/flame_torch.ply' },
  { name: 'flower_patch', previewUrl: '/flower_patch.png', meshVideo: '/flower_patch_mesh.mp4', rfVideo: '/flower_patch_rf.mp4', glbUrl: '/flower_patch.glb', plyUrl: '/flower_patch.ply' },
  { name: 'goblin_bomb', previewUrl: '/goblin_bomb.png', meshVideo: '/goblin_bomb_mesh.mp4', rfVideo: '/goblin_bomb_rf.mp4', glbUrl: '/goblin_bomb.glb', plyUrl: '/goblin_bomb.ply' },
  { name: 'healing_potion', previewUrl: '/healing_potion.png', meshVideo: '/healing_potion_mesh.mp4', rfVideo: '/healing_potion_rf.mp4', glbUrl: '/healing_potion.glb', plyUrl: '/healing_potion.ply' },
  { name: 'holographic_projector', previewUrl: '/holographic_projector.png', meshVideo: '/holographic_projector_mesh.mp4', rfVideo: '/holographic_projector_rf.mp4', glbUrl: '/holographic_projector.glb', plyUrl: '/holographic_projector.ply' },
  { name: 'hoverboard', previewUrl: '/hoverboard.png', meshVideo: '/hoverboard_mesh.mp4', rfVideo: '/hoverboard_rf.mp4', glbUrl: '/hoverboard.glb', plyUrl: '/hoverboard.ply' },
  { name: 'lantern', previewUrl: '/lantern.png', meshVideo: '/lantern_mesh.mp4', rfVideo: '/lantern_rf.mp4', glbUrl: '/lantern.glb', plyUrl: '/lantern.ply' },
  { name: 'laser_blaster', previewUrl: '/laser_blaster.png', meshVideo: '/laser_blaster_mesh.mp4', rfVideo: '/laser_blaster_rf.mp4', glbUrl: '/laser_blaster.glb', plyUrl: '/laser_blaster.ply' },
  { name: 'mailbox', previewUrl: '/mailbox.png', meshVideo: '/mailbox_mesh.mp4', rfVideo: '/mailbox_rf.mp4', glbUrl: '/mailbox.glb', plyUrl: '/mailbox.ply' },
  { name: 'mushroom', previewUrl: '/mushroom.png', meshVideo: '/mushroom_mesh.mp4', rfVideo: '/mushroom_rf.mp4', glbUrl: '/mushroom.glb', plyUrl: '/mushroom.ply' },
  { name: 'nanobot_swarm', previewUrl: '/nanobot_swarm.png', meshVideo: '/nanobot_swarm_mesh.mp4', rfVideo: '/nanobot_swarm_rf.mp4', glbUrl: '/nanobot_swarm.glb', plyUrl: '/nanobot_swarm.ply' },
  { name: 'necromancer_staff', previewUrl: '/necromancer_staff.png', meshVideo: '/necromancer_staff_mesh.mp4', rfVideo: '/necromancer_staff_rf.mp4', glbUrl: '/necromancer_staff.glb', plyUrl: '/necromancer_staff.ply' },
  { name: 'paladin_helmet', previewUrl: '/paladin_helmet.png', meshVideo: '/paladin_helmet_mesh.mp4', rfVideo: '/paladin_helmet_rf.mp4', glbUrl: '/paladin_helmet.glb', plyUrl: '/paladin_helmet.ply' },
  { name: 'park_bench', previewUrl: '/park_bench.png', meshVideo: '/park_bench_mesh.mp4', rfVideo: '/park_bench_rf.mp4', glbUrl: '/park_bench.glb', plyUrl: '/park_bench.ply' },
  { name: 'phoenix_feather', previewUrl: '/phoenix_feather.png', meshVideo: '/phoenix_feather_mesh.mp4', rfVideo: '/phoenix_feather_rf.mp4', glbUrl: '/phoenix_feather.glb', plyUrl: '/phoenix_feather.ply' },
  { name: 'picket_fence', previewUrl: '/picket_fence.png', meshVideo: '/picket_fence_mesh.mp4', rfVideo: '/picket_fence_rf.mp4', glbUrl: '/picket_fence.glb', plyUrl: '/picket_fence.ply' },
  { name: 'plasma_grenade', previewUrl: '/plasma_grenade.png', meshVideo: '/plasma_grenade_mesh.mp4', rfVideo: '/plasma_grenade_rf.mp4', glbUrl: '/plasma_grenade.glb', plyUrl: '/plasma_grenade.ply' },
  { name: 'quantum_core', previewUrl: '/quantum_core.png', meshVideo: '/quantum_core_mesh.mp4', rfVideo: '/quantum_core_rf.mp4', glbUrl: '/quantum_core.glb', plyUrl: '/quantum_core.ply' },
  { name: 'ring_of_invisibility', previewUrl: '/ring_of_invisibility.png', meshVideo: '/ring_of_invisibility_mesh.mp4', rfVideo: '/ring_of_invisibility_rf.mp4', glbUrl: '/ring_of_invisibility.glb', plyUrl: '/ring_of_invisibility.ply' },
  { name: 'robot_pet', previewUrl: '/robot_pet.png', meshVideo: '/robot_pet_mesh.mp4', rfVideo: '/robot_pet_rf.mp4', glbUrl: '/robot_pet.glb', plyUrl: '/robot_pet.ply' },
  { name: 'robotic_arm', previewUrl: '/robotic_arm.png', meshVideo: '/robotic_arm_mesh.mp4', rfVideo: '/robotic_arm_rf.mp4', glbUrl: '/robotic_arm.glb', plyUrl: '/robotic_arm.ply' },
  { name: 'runestone', previewUrl: '/runestone.png', meshVideo: '/runestone_mesh.mp4', rfVideo: '/runestone_rf.mp4', glbUrl: '/runestone.glb', plyUrl: '/runestone.ply' },
  { name: 'space_capsule', previewUrl: '/space_capsule.png', meshVideo: '/space_capsule_mesh.mp4', rfVideo: '/space_capsule_rf.mp4', glbUrl: '/space_capsule.glb', plyUrl: '/space_capsule.ply' },
  { name: 'space_satellite', previewUrl: '/space_satellite.png', meshVideo: '/space_satellite_mesh.mp4', rfVideo: '/space_satellite_rf.mp4', glbUrl: '/space_satellite.glb', plyUrl: '/space_satellite.ply' },
  { name: 'spacesuit_helmet', previewUrl: '/spacesuit_helmet.png', meshVideo: '/spacesuit_helmet_mesh.mp4', rfVideo: '/spacesuit_helmet_rf.mp4', glbUrl: '/spacesuit_helmet.glb', plyUrl: '/spacesuit_helmet.ply' },
  { name: 'spellbook', previewUrl: '/spellbook.png', meshVideo: '/spellbook_mesh.mp4', rfVideo: '/spellbook_rf.mp4', glbUrl: '/spellbook.glb', plyUrl: '/spellbook.ply' },
  { name: 'starship', previewUrl: '/starship.png', meshVideo: '/starship_mesh.mp4', rfVideo: '/starship_rf.mp4', glbUrl: '/starship.glb', plyUrl: '/starship.ply' },
  { name: 'terraformer_device', previewUrl: '/terraformer_device.png', meshVideo: '/terraformer_device_mesh.mp4', rfVideo: '/terraformer_device_rf.mp4', glbUrl: '/terraformer_device.glb', plyUrl: '/terraformer_device.ply' },
  { name: 'tree_stump', previewUrl: '/tree_stump.png', meshVideo: '/tree_stump_mesh.mp4', rfVideo: '/tree_stump_rf.mp4', glbUrl: '/tree_stump.glb', plyUrl: '/tree_stump.ply' },
  { name: 'warlock_amulet', previewUrl: '/warlock_amulet.png', meshVideo: '/warlock_amulet_mesh.mp4', rfVideo: '/warlock_amulet_rf.mp4', glbUrl: '/warlock_amulet.glb', plyUrl: '/warlock_amulet.ply' },
  { name: 'wizard_hat', previewUrl: '/wizard_hat.png', meshVideo: '/wizard_hat_mesh.mp4', rfVideo: '/wizard_hat_rf.mp4', glbUrl: '/wizard_hat.glb', plyUrl: '/wizard_hat.ply' },
  { name: 'wizard_staff', previewUrl: '/wizard_staff.png', meshVideo: '/wizard_staff_mesh.mp4', rfVideo: '/wizard_staff_rf.mp4', glbUrl: '/wizard_staff.glb', plyUrl: '/wizard_staff.ply' },
  { name: 'wooden_bridge', previewUrl: '/wooden_bridge.png', meshVideo: '/wooden_bridge_mesh.mp4', rfVideo: '/wooden_bridge_rf.mp4', glbUrl: '/wooden_bridge.glb', plyUrl: '/wooden_bridge.ply' },
]

function App() {
  return (
    <div className="gallery-container">
      <h1 className="page-title">Low Polygon Markethalle</h1>
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
