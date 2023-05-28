

onEvent('recipes', event => {
    
    event.shaped('16x kubejs:disk_cable', [
        'SRS',
        'SBS',
        'SRS'
    ],
    {
        S: '#forge:ingots/steel',
        R: 'minecraft:redstone',
        B: 'kubejs:bluestone'
    })
    
    event.shaped('kubejs:disk_casing', [
        'MMM',
        'MSM',
        'MMM',
    ],
    {
        M: "kubejs:machine_casing",
        S: "#forge:ingots/steel"
    })

    event.shaped('4x kubejs:module_base', [
        'SSS',
        'BOB',
        'SSS'
    ],
    {
        S: "#forge:ingots/steel",
        B: "#forge:ingots/bronze",
        O: "#forge:ingots/osmium"
    })

    event.shaped('4x kubejs:machine_casing', [
        'SGS',
        'GIG',
        'SGS'
    ],
    {
        S: '#forge:ingots/steel',
        G: 'minecraft:glass',
        I: '#forge:ingots/iron'
    })

    event.shaped('kubejs:energy_module', [
        'S S',
        ' R ',
        'S S'
    ],
    {
        S: '#forge:ingots/steel',
        R: 'minecraft:redstone' 
    })

    event.shaped('kubejs:hammer', [
        'S S',
        ' P ',
        ' P '
    ],
    {
        S: '#forge:ingots/steel',
        P: 'minecraft:stick'
    })

  })