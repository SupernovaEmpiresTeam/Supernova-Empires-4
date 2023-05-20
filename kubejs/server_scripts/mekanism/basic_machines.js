onEvent('recipes', event => {
    
    // Basic Smelting Factory

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:energized_smelter'
        },
        ingredients : [
            {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "minecraft:iron_ingot"
              },
              {
                "item": "minecraft:iron_ingot"
              },
              {
                "item": "minecraft:iron_ingot"
              },
              {
                "item": "minecraft:iron_ingot"
              },
              {
                "item": "minecraft:redstone"
              },
              {
                "item": "minecraft:redstone"
              }
        ],
        result: {
            item: "mekanism:basic_smelting_factory",
            count: 1
        }
    })

    

})