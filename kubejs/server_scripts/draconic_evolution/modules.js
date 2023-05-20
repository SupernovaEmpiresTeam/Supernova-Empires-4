
onEvent('recipes', event => {

    // Draconium Energy Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "minecraft:redstone_block"
        },
        "B": {
            "item": "minecraft:iron_ingot"
        },
        "C": {
            "item": "draconicevolution:module_core"
        }
    },
    result: {
        "item": "draconicevolution:draconium_energy_module"
    }
  })

})