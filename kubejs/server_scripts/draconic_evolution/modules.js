
onEvent('recipes', event => {

    // Energy Module

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

  // Wyvern Energy Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
      "A": {
        "item": "kubejs:draconium_ingot"
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_energy_module"
    }
  })

  // Draconic Energy Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "draconicevolution:awakened_draconium_nugget"
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_energy_module"
    }
  })

  // Chaotic Energy Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "draconicevolution:medium_chaos_frag"
        },
        "B": {
            "item": "draconicevolution:draconic_energy_module"
        },
        "C": {
            "item": "draconicevolution:awakened_core"
        }
    },
    result: {
        "item": "draconicevolution:chaotic_energy_module"
    }
  })

  // Speed Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "ADA",
        "BCB",
        "ADA"
      ],
    key: {
        "A": {
            "item": "minecraft:iron_ingot"
        },
        "B": {
            "item": "minecraft:clock"
        },
        "C": {
            "item": "draconicevolution:module_core"
        },
        "D": {
            "type": "forge:nbt",
            "item": 'minecraft:potion',
            "nbt": '{Potion: "minecraft:swiftness"}'
        }
    },
    result: {
        "item": "draconicevolution:draconium_speed_module"
    }
  })

  // Wyvern Speed Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "kubejs:draconium_ingot"
        },
        "B": {
            "item": "draconicevolution:draconium_speed_module"
        },
        "C": {
            "item": "draconicevolution:draconium_core"
        }
    },
    result: {
        "item": "draconicevolution:wyvern_speed_module"
    }
  })

  // Draconic Speed Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "draconicevolution:awakened_draconium_nugget"
        },
        "B": {
            "item": "draconicevolution:wyvern_speed_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_speed_module"
    }
  })

  // Chaotic Speed Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "draconicevolution:medium_chaos_frag"
        },
        "B": {
            "item": "draconicevolution:draconic_speed_module"
        },
        "C": {
            "item": "draconicevolution:awakened_core"
        }
    },
    result: {
        "item": "draconicevolution:chaotic_speed_module"
    }
  })

  // Damage Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "ADA",
        "BCB",
        "ADA"
      ],
    key: {
        "A": {
            "item": "minecraft:iron_ingot"
        },
        "B": {
            "item": "minecraft:clock"
        },
        "C": {
            "item": "draconicevolution:module_core"
        },
        "D": {
            "type": "forge:nbt",
            "item": 'minecraft:potion',
            "nbt": '{Potion: "minecraft:strength"}'
        }
    },
    result: {
        "item": "draconicevolution:draconium_damage_module"
    }
  })

  // Wyvern Damage Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "kubejs:draconium_ingot"
        },
        "B": {
            "item": "draconicevolution:draconium_damage_module"
        },
        "C": {
            "item": "draconicevolution:draconium_core"
        }
    },
    result: {
        "item": "draconicevolution:wyvern_damage_module"
    }
  })

  // Draconic Damage Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "draconicevolution:awakened_draconium_nugget"
        },
        "B": {
            "item": "draconicevolution:wyvern_damage_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_damage_module"
    }
  })

  // Chaotic Damage Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "draconicevolution:medium_chaos_frag"
        },
        "B": {
            "item": "draconicevolution:draconic_damage_module"
        },
        "C": {
            "item": "draconicevolution:awakened_core"
        }
    },
    result: {
        "item": "draconicevolution:chaotic_damage_module"
    }
  })

  

})