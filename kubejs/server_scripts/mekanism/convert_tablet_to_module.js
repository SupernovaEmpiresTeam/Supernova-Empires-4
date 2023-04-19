onEvent('recipes', event => {
    
    // Robbit Recipe

    event.shaped('mekanism:robit', [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        A: '#forge:ingots/steel',
        B: 'kubejs:energy_module',
        C: 'mekanism:alloy_atomic',
        D: '#forge:ingots/refined_obsidian',
        E: 'mekanism:personal_chest'
    })

    // Network Reader

    event.shaped('mekanism:network_reader', [
        ' A ',
        'CBC',
        ' D '
    ],
    {
        A: '#forge:glass',
        B: 'kubejs:energy_module',
        C: 'mekanism:alloy_infused',
        D: '#forge:ingots/steel'
    })

    // Portable Teleporter

    event.shaped('mekanism:portable_teleporter', [
        ' B ',
        'ACA',
        ' B '
    ],
    {
        A: '#forge:circuits/basic',
        B: 'kubejs:energy_module',
        C: 'mekanism:teleportation_core'
    })

    // Seismic Reader

    event.shaped('mekanism:seismic_reader', [
        'ACA',
        'ABA',
        'AAA'
    ],
    {
        A: '#forge:ingots/steel',
        B: 'kubejs:energy_module',
        C: 'minecraft:lapis_lazuli'
    })

    // Atomic Disassembler

    event.shaped('mekanism:atomic_disassembler', [
        'CBC',
        'CAC',
        ' D '
    ],
    {
        A: 'mekanism:alloy_atomic',
        B: 'kubejs:energy_module',
        C: 'mekanism:alloy_infused',
        D: '#forge:ingots/refined_obsidian',
    })

    // Electric Bow

    event.shaped('mekanism:electric_bow', [
        'AC ',
        'A B',
        'AC '
    ],
    {
        A: '#forge:string',
        B: 'kubejs:energy_module',
        C: 'mekanism:alloy_infused'
    })

    // Free Runners

    event.shaped('mekanism:free_runners', [
        'A A',
        'C C',
        'B B'
    ],
    {
        A: '#forge:circuits/basic',
        B: 'kubejs:energy_module',
        C: 'mekanism:alloy_infused'
    })

    // Induction Cells

    event.shaped('mekanism:basic_induction_cell', [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: '#forge:dusts/lithium',
        B: 'kubejs:energy_module',
        C: 'mekanism:basic_energy_cube'
    })

    event.shaped('mekanism:advanced_induction_cell', [
        'BAB',
        'ACA',
        'BAB'
    ],
    {
        A: 'mekanism:basic_induction_cell',
        B: 'kubejs:energy_module',
        C: 'mekanism:advanced_energy_cube'
    })

    event.shaped('mekanism:elite_induction_cell', [
        'BAB',
        'ACA',
        'BAB'
    ],
    {
        A: 'mekanism:advanced_induction_cell',
        B: 'kubejs:energy_module',
        C: 'mekanism:elite_energy_cube'
    })

    event.shaped('mekanism:ultimate_induction_cell', [
        'BAB',
        'ACA',
        'BAB'
    ],
    {
        A: 'mekanism:elite_induction_cell',
        B: 'kubejs:energy_module',
        C: 'mekanism:ultimate_energy_cube'
    })

    // Chargepad

    event.shaped('mekanism:chargepad', [
        'AAA',
        'CBC'
    ],
    {
        A: 'minecraft:polished_blackstone_pressure_plate',
        B: 'kubejs:energy_module',
        C: '#forge:ingots/steel'
    })

    // Lazer

    event.shaped('mekanism:laser', [
        'CB ',
        'CAD',
        'CB '
    ],
    {
        A: 'mekanism:steel_casing',
        B: 'kubejs:energy_module',
        C: 'mekanism:alloy_reinforced',
        D: 'minecraft:diamond'
    })

    // Resistive Heater

    event.shaped('mekanism:resistive_heater', [
        'ADA',
        'DCD',
        'ABA'
    ],
    {
        A: '#forge:ingots/tin',
        B: 'kubejs:energy_module',
        C: 'mekanism:steel_casing',
        D: 'minecraft:redstone'
    })

    // Cubes

    event.shaped('mekanism:basic_energy_cube', [
        'ABA',
        'DCD',
        'ABA'
    ],
    {
        A: 'minecraft:redstone',
        B: 'kubejs:energy_module',
        C: 'mekanism:steel_casing',
        D: '#forge:ingots/iron'
    })

    event.shaped('mekanism:advanced_energy_cube', [
        'CBC',
        'ADA',
        'CBC'
    ],
    {
        A: '#forge:ingots/osmium',
        B: 'kubejs:energy_module',
        C: 'mekanism:alloy_infused',
        D: 'mekanism:basic_energy_cube'
    })

    event.shaped('mekanism:elite_energy_cube', [
        'CBC',
        'ADA',
        'CBC'
    ],
    {
        A: '#forge:ingots/gold',
        B: 'kubejs:energy_module',
        C: 'mekanism:alloy_reinforced',
        D: 'mekanism:advanced_energy_cube'
    })

    event.shaped('mekanism:ultimate_energy_cube', [
        'CBC',
        'ADA',
        'CBC'
    ],
    {
        A: 'minecraft:diamond',
        B: 'kubejs:energy_module',
        C: 'mekanism:alloy_atomic',
        D: 'mekanism:elite_energy_cube'
    })

    // Wind Generator

    event.shaped('mekanismgenerators:wind_generator', [
        ' A ',
        'ACA',
        'BDB'
    ],
    {
        A: '#forge:ingots/osmium',
        B: 'kubejs:energy_module',
        C: 'mekanism:alloy_infused',
        D: '#forge:circuits/basic',
    })


})