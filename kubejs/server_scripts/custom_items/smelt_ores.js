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


    event.smelting('kubejs:awakened_draconium_ingot', '#forge:dusts/awakened_draconium')
    event.blasting('kubejs:awakened_draconium_ingot', '#forge:dusts/awakened_draconium')

    event.smelting('cavesandcliffs:amethyst_shard', '#forge:dusts/amethyst')
    event.blasting('cavesandcliffs:amethyst_shard', '#forge:dusts/amethyst')

    event.smelting('thermal:apatite', '#forge:dusts/apatite')
    event.blasting('thermal:apatite', '#forge:dusts/apatite')

    event.smelting('thermal:cinnabar', '#forge:dusts/cinnabar')
    event.blasting('thermal:cinnabar', '#forge:dusts/cinnabar')

    event.smelting('kubejs:cobalt_ingot', '#forge:dusts/cobalt')
    event.blasting('kubejs:cobalt_ingot', '#forge:dusts/cobalt')

    event.blasting('kubejs:draconium_ingot', '#forge:dusts/draconium')

    event.smelting('kubejs:ruby', '#forge:dusts/ruby')
    event.blasting('kubejs:ruby', '#forge:dusts/ruby')

    event.smelting('kubejs:sapphire', '#forge:dusts/sapphire')
    event.blasting('kubejs:sapphire', '#forge:dusts/sapphire')

    event.smelting('create:zinc_ingot', '#forge:dusts/zinc')
    event.blasting('create:zinc_ingot', '#forge:dusts/zinc')

    event.smelting('kubejs:cobalt_ingot', '#forge:ores/cobalt')
    event.blasting('kubejs:cobalt_ingot', '#forge:ores/cobalt')

    event.smelting('kubejs:uranium_ingot', '#forge:ores/uranium')
    event.blasting('kubejs:uranium_ingot', '#forge:ores/uranium')

    event.smelting('kubejs:ruby', '#forge:ores/ruby')
    event.blasting('kubejs:ruby', '#forge:ores/ruby')

    event.smelting('kubejs:sapphire', '#forge:ores/sapphire')
    event.blasting('kubejs:sapphire', '#forge:ores/sapphire')
    
  })