onEvent('recipes', event => {
    
    event.smelting('kubejs:bluestone_ingot', 'kubejs:bluestone')
    event.smelting('kubejs:light_bluestone_ingot', 'kubejs:light_bluestone')
    event.smelting('kubejs:greenstone_ingot', 'kubejs:greenstone')

    event.blasting('kubejs:bluestone_ingot', 'kubejs:bluestone')
    event.blasting('kubejs:light_bluestone_ingot', 'kubejs:light_bluestone')
    event.blasting('kubejs:greenstone_ingot', 'kubejs:greenstone')

    event.recipes.thermal.smelter('kubejs:bluestone_ingot', 'kubejs:bluestone')
    event.recipes.thermal.smelter('kubejs:light_bluestone_ingot', 'kubejs:light_bluestone')
    event.recipes.thermal.smelter('kubejs:greenstone_ingot', 'kubejs:greenstone')

    event.shapeless('4x kubejs:blue_iron_ingot', [
        'kubejs:bluestone',
        '3x #forge:ingots/iron'
    ])

    event.shapeless('kubejs:dark_steel_ingot',  [
        '#forge:ingots/steel',
        'minecraft:ink_sac'
    ])
  })