

onEvent('recipes', event => {

    
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AABEDEBAA",
            "AACFFFCAA",
            "AADFGFDAA",
            "AACFFFCAA",
            "AABEDEBAA",
            "AAAAAAAAA",
            "AAAAAAAAA"
          ],
        key: {
            "A": {
              "item": "extendedcrafting:luminessence"
            },
            "B": {
              "item": "mekanism:ingot_osmium"
            },
            "C": {
                "item": "mekanism:ingot_lead"
            },
            "D": {
                "item": "mekanism:ingot_uranium"
            },
            "E": {
                "item": "mekanism:ingot_tin"
            },
            "F": {
                "item": "minecraft:netherite_ingot"
            },
            "G": {
                "item": "minecraft:nether_star"
            }
        },
        result: {
            "item": "theft:glove"
        }
      })


})