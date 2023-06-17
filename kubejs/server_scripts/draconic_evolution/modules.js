
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

    // AOE Module

      event.custom({
        type: 'extendedcrafting:shaped_ender_crafter',
        pattern: [
            "AAA",
            "BCB",
            "AAA"
          ],
        key: {
            "A": {
                "item": "minecraft:piston"
            },
            "B": {
                "item": "minecraft:iron_ingot"
            },
            "C": {
                "item": "draconicevolution:module_core"
            }
        },
        result: {
            "item": "draconicevolution:draconium_aoe_module"
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
            "item": "minecraft:piston"
          },
        "B": {
            "item": "draconicevolution:draconium_energy_module"
          },
        "C": {
            "item": "draconicevolution:draconium_core"
         }
        },
        result: {
            "item": "draconicevolution:wyvern_aoe_module"
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
                "item": "minecraft:piston"
            },
            "B": {
                "item": "draconicevolution:wyvern_energy_module"
            },
            "C": {
                "item": "draconicevolution:wyvern_core"
            }
        },
        result: {
            "item": "draconicevolution:draconic_aoe_module"
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
                "item": "minecraft:piston"
            }
        },
        result: {
            "item": "draconicevolution:chaotic_aoe_module"
        }
      })
    
    // Projectile Module

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "minecraft:arrow"
        },
        "B": {
            "item": "minecraft:iron_ingot"
        },
        "C": {
            "item": "draconicevolution:module_core"
        }
    },
    result: {
        "item": "draconicevolution:draconium_proj_velocity_module"
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
        "item": "minecraft:arrow"
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_proj_velocity_module"
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
            "item": "minecraft:arrow"
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_proj_velocity_module"
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
            "item": "minecraft:arrow"
        }
    },
    result: {
        "item": "draconicevolution:chaotic_proj_velocity_module"
    }
  })


  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": "minecraft:target"
        },
        "B": {
            "item": "minecraft:iron_ingot"
        },
        "C": {
            "item": "draconicevolution:module_core"
        }
    },
    result: {
        "item": "draconicevolution:draconium_proj_accuracy_module"
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
        "item": "minecraft:target"
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_proj_accuracy_module"
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
            "item": "minecraft:target"
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_proj_accuracy_module"
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
            "item": "minecraft:target"
        }
    },
    result: {
        "item": "draconicevolution:chaotic_proj_accuracy_module"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "type": "forge:nbt",
            "item": 'minecraft:potion',
            "nbt": '{Potion: "minecraft:slow_falling"}'
        },
        "B": {
            "item": "minecraft:iron_ingot"
        },
        "C": {
            "item": "draconicevolution:module_core"
        }
    },
    result: {
        "item": "draconicevolution:draconium_proj_accuracy_module"
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
        "type": "forge:nbt",
        "item": 'minecraft:potion',
        "nbt": '{Potion: "minecraft:slow_falling"}'
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_proj_accuracy_module"
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
            "type": "forge:nbt",
            "item": 'minecraft:potion',
            "nbt": '{Potion: "minecraft:slow_falling"}'
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_proj_accuracy_module"
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
            "type": "forge:nbt",
            "item": 'minecraft:potion',
            "nbt": '{Potion: "minecraft:slow_falling"}'
        }
    },
    result: {
        "item": "draconicevolution:chaotic_proj_accuracy_module"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": 'minecraft:trident',
        },
        "B": {
            "item": "minecraft:iron_ingot"
        },
        "C": {
            "item": "draconicevolution:module_core"
        }
    },
    result: {
        "item": "draconicevolution:draconium_proj_penetration_module"
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
        "item": 'minecraft:trident',
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_proj_penetration_module"
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
            "item": 'minecraft:trident',
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_proj_penetration_module"
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
            "item": 'minecraft:trident',
        }
    },
    result: {
        "item": "draconicevolution:chaotic_proj_penetration_module"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": 'minecraft:bow',
        },
        "B": {
            "item": "minecraft:iron_ingot"
        },
        "C": {
            "item": "draconicevolution:module_core"
        }
    },
    result: {
        "item": "draconicevolution:wyvern_auto_fire_module"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": 'minecraft:wither_skeleton_skull',
        },
        "B": {
            "item": "minecraft:iron_ingot"
        },
        "C": {
            "item": "draconicevolution:module_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_proj_anti_immune_module"
    }
  })


  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
      "A": {
        "item": 'mekanism:basic_control_circuit',
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_shield_control_module"
    }
  })


  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": 'mekanism:basic_control_circuit',
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_shield_control_module"
    }
  })


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
            "item": 'mekanism:basic_control_circuit',
        }
    },
    result: {
        "item": "draconicevolution:chaotic_shield_control_module"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
      "A": {
        "item": 'minecraft:shield',
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_shield_capacity_module"
    }
  })


  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": 'minecraft:shield',
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_shield_capacity_module"
    }
  })


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
            "item": 'minecraft:shield',
        }
    },
    result: {
        "item": "draconicevolution:chaotic_shield_capacity_module"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
      "A": {
        "item": 'draconicevolution:chaotic_shield_capacity_module',
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_large_shield_capacity_module"
    }
  })


  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": 'draconicevolution:chaotic_shield_capacity_module',
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_large_shield_capacity_module"
    }
  })


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
            "item": 'draconicevolution:chaotic_shield_capacity_module',
        }
    },
    result: {
        "item": "draconicevolution:chaotic_large_shield_capacity_module"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
      "A": {
        "item": 'minecraft:netherite_scrap',
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_shield_recovery_module"
    }
  })


  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": 'minecraft:netherite_scrap',
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_shield_recovery_module"
    }
  })


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
            "item": 'minecraft:netherite_scrap',
        }
    },
    result: {
        "item": "draconicevolution:chaotic_shield_recovery_module"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
      "A": {
        "item": 'minecraft:elytra',
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_flight_module"
    }
  })


  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": 'minecraft:elytra',
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_flight_module"
    }
  })


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
            "item": 'minecraft:elytra',
        }
    },
    result: {
        "item": "draconicevolution:chaotic_flight_module"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
      "A": {
        "item": 'minecraft:totem_of_undying',
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_undying_module"
    }
  })


  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": 'minecraft:totem_of_undying',
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_undying_module"
    }
  })


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
            "item": 'minecraft:totem_of_undying',
        }
    },
    result: {
        "item": "draconicevolution:chaotic_undying_module"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
      "A": {
        "item": 'minecraft:golden_apple',
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_auto_feed_module"
    }
  })


  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
        "A": {
            "item": 'minecraft:golden_apple',
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_auto_feed_module"
    }
  })


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
            "item": 'minecraft:golden_apple',
        }
    },
    result: {
        "item": "draconicevolution:chaotic_auto_feed_module"
    }
  })


  event.custom({
    type: 'extendedcrafting:shaped_ender_crafter',
    pattern: [
        "AAA",
        "BCB",
        "AAA"
      ],
    key: {
      "A": {
        "item": "minecraft:diamond_sword"
      },
    "B": {
        "item": "draconicevolution:draconium_energy_module"
      },
    "C": {
        "item": "draconicevolution:draconium_core"
     }
    },
    result: {
        "item": "draconicevolution:wyvern_proj_damage_module"
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
            "item": "minecraft:diamond_sword"
        },
        "B": {
            "item": "draconicevolution:wyvern_energy_module"
        },
        "C": {
            "item": "draconicevolution:wyvern_core"
        }
    },
    result: {
        "item": "draconicevolution:draconic_proj_damage_module"
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
            "item": "minecraft:diamond_sword"
        }
    },
    result: {
        "item": "draconicevolution:chaotic_proj_damage_module"
    }
  })


})

