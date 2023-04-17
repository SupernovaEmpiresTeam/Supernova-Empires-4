


onEvent('recipes', event => {

    // Fluid Mixer
    
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAA",
            "ABBBBBA",
            "ABCCCBA",
            "ABCDCBA",
            "ABCCCBA",
            "ABBBBBA",
            "AAAAAAA"
          ],
        key: {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "minecraft:redstone"
            },
            "C": {
              "item": "minecraft:blaze_rod"
            },
            "D": {
              "item": "vehicle:fluid_mixer"
            }
        },
        result: {
            item: 'custommachinery:custom_machine_item',
            nbt: "{machine:\"custommachinery:fluid_mixer\"}"
        }
    })

    // Stone Generator

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAA",
            "AAAAAAA",
            "AABBBAA",
            "AABBBAA",
            "AABBBAA",
            "AAAAAAA",
            "AAAAAAA"
          ],
        key: {
            "A": {
                "item": "minecraft:stone_bricks"
              },
              "B": {
                "item": "kubejs:machine_casing"
              }
        },
        result: {
            item: 'custommachinery:custom_machine_item',
            nbt: "{machine:\"custommachinery:stone_generator\"}"
        }
    })

    // Power Generator

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAA",
            "AAAAAAA",
            "AABBBAA",
            "AABCBAA",
            "AABBBAA",
            "AAAAAAA",
            "AAAAAAA"
          ],
        key: {
            "A": {
              "tag": "forge:ingots/steel"
            },
            "B": {
              "item": "kubejs:energy_module"
            },
            "C": {
                "item": "kubejs:machine_casing"
            }
        },
        result: {
            item: 'custommachinery:custom_machine_item',
            nbt: "{machine:\"custommachinery:power_generator\"}"
        }
    })
    
})
