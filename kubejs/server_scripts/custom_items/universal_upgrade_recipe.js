
onEvent('recipes', event => {

    // Cover

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'minecraft:chest'
        },
        ingredients: [
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            }
        ],
        result: {
            "item": "kubejs:universal_upgrade_cover"
        }
    })

    // Core

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:alloy_infused'
        },
        ingredients: [
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'minecraft:quartz'
            },
            {
                "item": 'minecraft:quartz'
            },
            {
                "item": 'minecraft:quartz'
            },
            {
                "item": 'minecraft:quartz'
            },
            {
                "item": 'minecraft:glowstone_dust'
            },
            {
                "item": 'minecraft:glowstone_dust'
            },
            {
                "item": 'minecraft:glowstone_dust'
            },
            {
                "item": 'minecraft:glowstone_dust'
            },
            {
                "item": 'kubejs:bluestone'
            },
            {
                "item": 'kubejs:bluestone'
            },
            {
                "item": 'kubejs:bluestone'
            },
            {
                "item": 'kubejs:bluestone'
            }
        ],
        result: {
            "item": "kubejs:universal_upgrade_core"
        }
    })

    // Upgrade
    
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAABBBAAA",
            "AAABBBAAA",
            "AAABBBAAA",
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAAAAAAAA"
          ],
        key: {
            "A": {
              "item": "kubejs:universal_upgrade_cover"
            },
            "B": {
              "item": "kubejs:universal_upgrade_core"
            }
        },
        result: {
            "item": "kubejs:universal_upgrade"
        }
      })


})