onEvent('recipes', event => {
    
    event.smelting('kubejs:bluestone', 'kubejs:bluestone_ore')
    event.smelting('kubejs:light_bluestone', 'kubejs:light_bluestone_ore')
    event.smelting('kubejs:greenstone', 'kubejs:greenstone_ore')

    event.blasting('kubejs:bluestone', 'kubejs:bluestone_ore')
    event.blasting('kubejs:light_bluestone', 'kubejs:light_bluestone_ore')
    event.blasting('kubejs:greenstone', 'kubejs:greenstone_ore')

    event.recipes.mekanismCrushing('20x kubejs:bluestone', 'kubejs:bluestone_ore')
    event.recipes.mekanismCrushing('20x kubejs:light_bluestone', 'kubejs:light_bluestone_ore')
    event.recipes.mekanismCrushing('20x kubejs:greenstone', 'kubejs:greenstone_ore')

    event.recipes.thermal.pulverizer('20x kubejs:bluestone', 'kubejs:bluestone_ore')
    event.recipes.thermal.pulverizer('20x kubejs:light_bluestone', 'kubejs:light_bluestone_ore')
    event.recipes.thermal.pulverizer('20x kubejs:greenstone', 'kubejs:greenstone_ore')
    
  })