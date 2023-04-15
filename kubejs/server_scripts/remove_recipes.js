
// Remove Recipes by id 

onEvent('recipes', event => {

    // Minecraft

    event.remove({id: 'minecraft:netherite_helmet_smithing'})
    event.remove({id: 'minecraft:netherite_chestplate_smithing'})
    event.remove({id: 'minecraft:netherite_leggings_smithing'})
    event.remove({id: 'minecraft:netherite_boots_smithing'})

    event.remove({id: 'minecraft:diamond_helmet'})
    event.remove({id: 'minecraft:diamond_chestplate'})
    event.remove({id: 'minecraft:diamond_leggings'})
    event.remove({id: 'minecraft:diamond_boots'})

    event.remove({id: 'minecraft:diamond_pickaxe'})
    event.remove({id: 'minecraft:diamond_axe'})
    event.remove({id: 'minecraft:diamond_sword'})
    event.remove({id: 'minecraft:diamond_shovel'})
    event.remove({id: 'minecraft:diamond_hoe'})

    // Extended Crafting

    event.remove({id: 'extendedcrafting:basic_table'})
    event.remove({id: 'extendedcrafting:advanced_table'})
    event.remove({id: 'extendedcrafting:elite_table'})
    event.remove({id: 'extendedcrafting:ultimate_table'})
    event.remove({id: 'extendedcrafting:pedesta'})
    event.remove({id: 'extendedcrafting:crafting_core'})
  

})