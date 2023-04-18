onEvent('recipes', event => {
    
    // Helmet

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'kubejs:osmium_ingot'
        },
        ingredients : [
            {
                "item": "minecraft:furnace"
              },
              {
                "item": "minecraft:furnace"
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
            item: "mekanism:metallurgic_infuser",
            count: 1
        }
    })

})