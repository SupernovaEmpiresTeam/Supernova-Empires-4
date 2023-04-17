onEvent('recipes', event => {
    
    // Crafting Tables

    event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    event.smithing('extendedcrafting:advanced_table', 'extendedcrafting:basic_table', 'kubejs:universal_upgrade')
    event.smithing('extendedcrafting:elite_table', 'extendedcrafting:advanced_table', 'kubejs:universal_upgrade')
    event.smithing('extendedcrafting:ultimate_table', 'extendedcrafting:elite_table', 'kubejs:universal_upgrade')

    // Iron Chests

    event.smithing('ironchest:iron_chest', '#forge:chests/wooden', 'kubejs:universal_upgrade')
    event.smithing('ironchest:gold_chest', 'ironchest:iron_chest', 'kubejs:universal_upgrade')
    event.smithing('ironchest:diamond_chest', 'ironchest:gold_chest', 'kubejs:universal_upgrade')
    event.smithing('ironchest:crystal_chest', 'ironchest:diamond_chest', 'kubejs:universal_upgrade')

    // Control Circuits

    event.smithing('mekanism:advanced_control_circuit', 'mekanism:basic_control_circuit', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_control_circuit', 'mekanism:advanced_control_circuit', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_control_circuit', 'mekanism:elite_control_circuit', 'kubejs:universal_upgrade')

    // Alloys

    event.smithing('mekanism:alloy_reinforced', 'mekanism:alloy_infused', 'kubejs:universal_upgrade')
    event.smithing('mekanism:alloy_atomic', 'mekanism:alloy_reinforced', 'kubejs:universal_upgrade')

    // Cells

    event.smithing('mekanism:advanced_induction_cell', 'mekanism:basic_induction_cell', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_induction_cell', 'mekanism:advanced_induction_cell', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_induction_cell', 'mekanism:elite_induction_cell', 'kubejs:universal_upgrade')

    // Cubes

    event.smithing('mekanism:advanced_energy_cube', 'mekanism:basic_energy_cube', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_energy_cube', 'mekanism:advanced_energy_cube', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_energy_cube', 'mekanism:elite_energy_cube', 'kubejs:universal_upgrade')

    // Induction Ports

    event.smithing('mekanism:advanced_induction_provider', 'mekanism:basic_induction_provider', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_induction_provider', 'mekanism:advanced_induction_provider', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_induction_provider', 'mekanism:elite_induction_provider', 'kubejs:universal_upgrade')

    // Cables

    event.smithing('mekanism:advanced_universal_cable', 'mekanism:basic_universal_cable', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_universal_cable', 'mekanism:advanced_universal_cable', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_universal_cable', 'mekanism:elite_universal_cable', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_mechanical_pipe', 'mekanism:basic_mechanical_pipe', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_mechanical_pipe', 'mekanism:advanced_mechanical_pipe', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_mechanical_pipe', 'mekanism:elite_mechanical_pipe', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_pressurized_tube', 'mekanism:basic_pressurized_tube', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_pressurized_tube', 'mekanism:advanced_pressurized_tube', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_pressurized_tube', 'mekanism:elite_pressurized_tube', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_logistical_transporter', 'mekanism:basic_logistical_transporter', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_logistical_transporter', 'mekanism:advanced_logistical_transporter', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_logistical_transporter', 'mekanism:elite_logistical_transporter', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_thermodynamic_conductor', 'mekanism:basic_thermodynamic_conductor', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_thermodynamic_conductor', 'mekanism:advanced_thermodynamic_conductor', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_thermodynamic_conductor', 'mekanism:elite_thermodynamic_conductor', 'kubejs:universal_upgrade')

    // Tanks

    event.smithing('mekanism:advanced_chemical_tank', 'mekanism:basic_chemical_tank', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_chemical_tank', 'mekanism:advanced_chemical_tank', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_chemical_tank', 'mekanism:elite_chemical_tank', 'kubejs:universal_upgrade')

    // Machines

    event.smithing('mekanism:basic_smelting_factory', 'mekanism:energized_smelter', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_smelting_factory', 'mekanism:basic_smelting_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_smelting_factory', 'mekanism:advanced_smelting_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_smelting_factory', 'mekanism:elite_smelting_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:basic_enriching_factory', 'mekanism:enrichment_chamber', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_enriching_factory', 'mekanism:basic_enriching_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_enriching_factory', 'mekanism:advanced_enriching_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_enriching_factory', 'mekanism:elite_enriching_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:basic_crushing_factory', 'mekanism:crusher', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_crushing_factory', 'mekanism:basic_crushing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_crushing_factory', 'mekanism:advanced_crushing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_crushing_factory', 'mekanism:elite_crushing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:basic_compressing_factory', 'mekanism:osmium_compressor', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_compressing_factory', 'mekanism:basic_compressing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_compressing_factory', 'mekanism:advanced_compressing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_compressing_factory', 'mekanism:elite_compressing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:basic_combining_factory', 'mekanism:combiner', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_combining_factory', 'mekanism:basic_combining_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_combining_factory', 'mekanism:advanced_combining_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_combining_factory', 'mekanism:elite_combining_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:basic_purifying_factory', 'mekanism:purification_chamber', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_purifying_factory', 'mekanism:basic_purifying_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_purifying_factory', 'mekanism:advanced_purifying_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_purifying_factory', 'mekanism:elite_purifying_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:basic_injecting_factory', 'mekanism:chemical_injection_chamber', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_injecting_factory', 'mekanism:basic_injecting_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_injecting_factory', 'mekanism:advanced_injecting_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_injecting_factory', 'mekanism:elite_injecting_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:basic_infusing_factory', 'mekanism:metallurgic_infuser', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_infusing_factory', 'mekanism:basic_infusing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_infusing_factory', 'mekanism:advanced_infusing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_infusing_factory', 'mekanism:elite_infusing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:basic_sawing_factory', 'mekanism:precision_sawmill', 'kubejs:universal_upgrade')
    event.smithing('mekanism:advanced_sawing_factory', 'mekanism:basic_sawing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:elite_sawing_factory', 'mekanism:advanced_sawing_factory', 'kubejs:universal_upgrade')
    event.smithing('mekanism:ultimate_sawing_factory', 'mekanism:elite_sawing_factory', 'kubejs:universal_upgrade')

    // Jetpacks

    event.smithing('ironjetpacks:stone_jetpack', 'ironjetpacks:wood_jetpack', 'kubejs:universal_upgrade')
    event.smithing('ironjetpacks:iron_jetpack', 'ironjetpacks:stone_jetpack', 'kubejs:universal_upgrade')
    event.smithing('ironjetpacks:gold_jetpack', 'ironjetpacks:iron_jetpack', 'kubejs:universal_upgrade')
    event.smithing('ironjetpacks:diamond_jetpack', 'ironjetpacks:gold_jetpack', 'kubejs:universal_upgrade')
    event.smithing('ironjetpacks:emerald_jetpack', 'ironjetpacks:diamond_jetpack', 'kubejs:universal_upgrade')

    // Furnaces

    event.smithing('mysticalagriculture:inferium_furnace', 'minecraft:furnace', 'kubejs:universal_upgrade')
    event.smithing('mysticalagriculture:prudentium_furnace', 'mysticalagriculture:inferium_furnace', 'kubejs:universal_upgrade')
    event.smithing('mysticalagriculture:tertium_furnace', 'mysticalagriculture:prudentium_furnace', 'kubejs:universal_upgrade')
    event.smithing('mysticalagriculture:imperium_furnace', 'mysticalagriculture:tertium_furnace', 'kubejs:universal_upgrade')
    event.smithing('mysticalagriculture:supremium_furnace', 'mysticalagriculture:imperium_furnace', 'kubejs:universal_upgrade')
    event.smithing('projecte:dm_furnace', 'mysticalagriculture:supremium_furnace', 'kubejs:universal_upgrade')
    event.smithing('projecte:rm_furnace', 'projecte:dm_furnace', 'kubejs:universal_upgrade')

    // Crafters

    event.smithing('rftoolsutility:crafter2', 'rftoolsutility:crafter1', 'kubejs:universal_upgrade')
    event.smithing('rftoolsutility:crafter3', 'rftoolsutility:crafter2', 'kubejs:universal_upgrade')

    // Upgrades

    event.smithing('pipez:infinity_upgrade', 'pipez:ultimate_upgrade', 'kubejs:universal_upgrade')

    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    // event.smithing('extendedcrafting:basic_table', 'minecraft:crafting_table', 'kubejs:universal_upgrade')
    
  })