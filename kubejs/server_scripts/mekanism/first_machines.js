onEvent('recipes', event => {
    
    // Enrichment Chamber

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:steel_casing'
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
            item: "mekanism:enrichment_chamber",
            count: 1
        }
    })

    // Osmium Compressor

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:steel_casing'
        },
        ingredients : [
            {
                "item": "mekanism:advanced_control_circuit"
              },
              {
                "item": "mekanism:advanced_control_circuit"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "minecraft:bucket"
              },
              {
                "item": "minecraft:bucket"
              }
        ],
        result: {
            item: "mekanism:osmium_compressor",
            count: 1
        }
    })

    // Combiner

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:steel_casing'
        },
        ingredients : [
            {
                "item": "mekanism:elite_control_circuit"
              },
              {
                "item": "mekanism:elite_control_circuit"
              },
              {
                "item": "mekanism:alloy_reinforced"
              },
              {
                "item": "mekanism:alloy_reinforced"
              },
              {
                "item": "mekanism:alloy_reinforced"
              },
              {
                "item": "mekanism:alloy_reinforced"
              },
              {
                "item": "minecraft:cobblestone"
              },
              {
                "item": "minecraft:cobblestone"
              }
        ],
        result: {
            item: "mekanism:combiner",
            count: 1
        }
    })

    // Crusher

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:steel_casing'
        },
        ingredients : [
            {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "minecraft:redstone"
              },
              {
                "item": "minecraft:redstone"
              },
              {
                "item": "minecraft:redstone"
              },
              {
                "item": "minecraft:redstone"
              },
              {
                "item": "minecraft:lava_bucket"
              },
              {
                "item": "minecraft:lava_bucket"
              }
        ],
        result: {
            item: "mekanism:crusher",
            count: 1
        }
    })

    // Purification Chamber

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:enrichment_chamber'
        },
        ingredients : [
            {
                "item": "mekanism:advanced_control_circuit"
              },
              {
                "item": "mekanism:advanced_control_circuit"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "kubejs:osmium_ingot"
              },
              {
                "item": "kubejs:osmium_ingot"
              }
        ],
        result: {
            item: "mekanism:purification_chamber",
            count: 1
        }
    })

    // Energized smelter

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:steel_casing'
        },
        ingredients : [
            {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "minecraft:redstone"
              },
              {
                "item": "minecraft:redstone"
              },
              {
                "item": "minecraft:redstone"
              },
              {
                "item": "minecraft:redstone"
              },
              {
                "item": "minecraft:glass"
              },
              {
                "item": "minecraft:glass"
              }
        ],
        result: {
            item: "mekanism:energized_smelter",
            count: 1
        }
    })

    // Chemical Oxidizer

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:dynamic_tank'
        },
        ingredients : [
            {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:personal_chest"
              },
              {
                "item": "mekanism:basic_chemical_tank"
              }
        ],
        result: {
            item: "mekanism:chemical_oxidizer",
            count: 1
        }
    })

    // Chemical Infuser

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:steel_casing'
        },
        ingredients : [
            {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:basic_chemical_tank"
              },
              {
                "item": "mekanism:basic_chemical_tank"
              }
        ],
        result: {
            item: "mekanism:chemical_infuser",
            count: 1
        }
    })


    // Chemical Injection Chamber

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:purification_chamber'
        },
        ingredients : [
            {
                "item": "mekanism:elite_control_circuit"
              },
              {
                "item": "mekanism:elite_control_circuit"
              },
              {
                "item": "mekanism:alloy_reinforced"
              },
              {
                "item": "mekanism:alloy_reinforced"
              },
              {
                "item": "mekanism:alloy_reinforced"
              },
              {
                "item": "mekanism:alloy_reinforced"
              },
              {
                "item": "minecraft:gold_ingot"
              },
              {
                "item": "minecraft:gold_ingot"
              }
        ],
        result: {
            item: "mekanism:chemical_injection_chamber",
            count: 1
        }
    })


    // Electrolytic Separator

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:electrolytic_core'
        },
        ingredients : [
            {
                "item": "minecraft:redstone"
              },
              {
                "item": "minecraft:redstone"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
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
              }
        ],
        result: {
            item: "mekanism:electrolytic_separator",
            count: 1
        }
    })


    // Precison Sawmill


    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:steel_casing'
        },
        ingredients : [
            {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
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
              }
        ],
        result: {
            item: "mekanism:precision_sawmill",
            count: 1
        }
    })


    // Chemical Dissolution Chamber

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:steel_casing'
        },
        ingredients : [
            {
                "item": "mekanism:ultimate_control_circuit"
              },
              {
                "item": "mekanism:ultimate_control_circuit"
              },
              {
                "item": "mekanism:basic_chemical_tank"
              },
              {
                "item": "mekanism:basic_chemical_tank"
              },
              {
                "item": "mekanism:ingot_refined_obsidian"
              },
              {
                "item": "mekanism:ingot_refined_obsidian"
              },
              {
                "item": "mekanism:ingot_refined_obsidian"
              },
              {
                "item": "mekanism:ingot_refined_obsidian"
              }
        ],
        result: {
            item: "mekanism:chemical_dissolution_chamber",
            count: 1
        }
    })


    // Chemical Crystallizer

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:steel_casing'
        },
        ingredients : [
            {
                "item": "mekanism:ultimate_control_circuit"
              },
              {
                "item": "mekanism:ultimate_control_circuit"
              },
              {
                "item": "mekanism:fluorite_gem"
              },
              {
                "item": "mekanism:fluorite_gem"
              },
              {
                "item": "mekanism:ingot_refined_obsidian"
              },
              {
                "item": "mekanism:ingot_refined_obsidian"
              },
              {
                "item": "mekanism:ingot_refined_obsidian"
              },
              {
                "item": "mekanism:ingot_refined_obsidian"
              }
        ],
        result: {
            item: "mekanism:chemical_crystallizer",
            count: 1
        }
    })


    // Seismic Vibrator


    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:steel_casing'
        },
        ingredients : [
            {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "minecraft:lapis_lazuli"
              },
              {
                "item": "kubejs:tin_ingot"
              },
              {
                "item": "kubejs:tin_ingot"
              },
              {
                "item": "kubejs:tin_ingot"
              },
              {
                "item": "kubejs:tin_ingot"
              },
              {
                "item": "kubejs:tin_ingot"
              }
        ],
        result: {
            item: "mekanism:seismic_vibrator",
            count: 1
        }
    })

    // Pressurized Reaction Chamber

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:enrichment_chamber'
        },
        ingredients : [
            {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:basic_control_circuit"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:dynamic_tank"
              },
              {
                "item": "kubejs:steel_ingot"
              },
              {
                "item": "kubejs:steel_ingot"
              },
              {
                "item": "mekanism:basic_chemical_tank"
              },
              {
                "item": "mekanism:basic_chemical_tank"
              }
        ],
        result: {
            item: "mekanism:pressurized_reaction_chamber",
            count: 1
        }
    })


    // Gas Burning Generator


    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'mekanism:electrolytic_core'
        },
        ingredients : [
            {
                "item": "mekanism:steel_casing"
              },
              {
                "item": "mekanism:steel_casing"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "mekanism:alloy_infused"
              },
              {
                "item": "kubejs:osmium_ingot"
              },
              {
                "item": "kubejs:osmium_ingot"
              },
              {
                "item": "kubejs:osmium_ingot"
              },
              {
                "item": "kubejs:osmium_ingot"
              }
        ],
        result: {
            item: "mekanismgenerators:gas_burning_generator",
            count: 1
        }
    })

})