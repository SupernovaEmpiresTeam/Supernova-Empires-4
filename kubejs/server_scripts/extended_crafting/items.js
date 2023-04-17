

onEvent('recipes', event => {

    // Luminessence

    event.shapeless('extendedcrafting:luminessence', ['minecraft:redstone', 'kubejs:bluestone', '2x minecraft:glowstone', 'minecraft:gunpowder', 'kubejs:light_bluestone', 'kubejs:greenstone'])
    

    // Manual Tables

    event.shaped('extendedcrafting:basic_table', [
      'CBC',
      'BAB',
      'CBC'
  ],
  {
      A: 'minecraft:crafting_table',
      B: 'minecraft:iron_block',
      C: 'minecraft:ink_sac'
  })

  event.shaped('extendedcrafting:advanced_table', [
    'CBC',
    'BAB',
    'CBC'
  ],
  {
    A: 'extendedcrafting:basic_table',
    B: 'minecraft:gold_block',
    C: 'minecraft:ink_sac'
  })

  event.shaped('extendedcrafting:elite_table', [
  'CBC',
  'BAB',
  'CBC'
  ],
  {
  A: 'extendedcrafting:advanced_table',
  B: 'minecraft:diamond_block',
  C: 'minecraft:ink_sac'
  })

  event.shaped('extendedcrafting:ultimate_table', [
  'CBC',
  'BAB',
  'CBC'
  ],
  {
  A: 'extendedcrafting:elite_table',
  B: 'minecraft:emerald_block',
  C: 'minecraft:ink_sac'
  })

    // Automatic Tables

    event.smithing('extendedcrafting:basic_auto_table', 'extendedcrafting:basic_table', 'kubejs:energy_module')
    event.smithing('extendedcrafting:advanced_auto_table', 'extendedcrafting:advanced_table', 'kubejs:energy_module')
    event.smithing('extendedcrafting:elite_auto_table', 'extendedcrafting:elite_table', 'kubejs:energy_module')
    event.smithing('extendedcrafting:ultimate_auto_table', 'extendedcrafting:ultimate_table', 'kubejs:energy_module')

  // Combination Crafting

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
        " AAA ",
        " ABA ",
        "AAAAA",
        "AAAAA"
      ],
    key: {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "minecraft:iron_block"
        }
    },
    result: {
        "item": "extendedcrafting:pedestal"
    }
  })

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
        "AAAAA",
        "ABCBA",
        "ACDCA",
        "ABCBA",
        "AAAAA"
      ],
    key: {
        "A": {
          "tag": "forge:glass"
        },
        "B": {
          "item": "minecraft:iron_ingot"
        },
        "C": {
          "item": "kubejs:bluestone"
        },
        "D": {
          "item": "minecraft:iron_block"
        }
    },
    result: {
        "item": "extendedcrafting:crafting_core"
    }
  })

})