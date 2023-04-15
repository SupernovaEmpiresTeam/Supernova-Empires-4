import crafttweaker.api.SmithingManager;

// Extendedcrafting
// Tables
smithing.addRecipe("basic_table", <item:extendedcrafting:basic_table>, <item:minecraft:crafting_table>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("advanced_table", <item:extendedcrafting:advanced_table>, <item:extendedcrafting:basic_table>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("elite_table", <item:extendedcrafting:elite_table>, <item:extendedcrafting:advanced_table>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("ultimate_table", <item:extendedcrafting:ultimate_table>, <item:extendedcrafting:elite_table>, <item:contenttweaker:universal_upgrade>);

// Iron Chests
// Chests
smithing.addRecipe("ironchest", <item:ironchest:iron_chest>, <tag:items:forge:chests/wooden>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("goldchest", <item:ironchest:gold_chest>, <item:ironchest:iron_chest>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("diamondchest", <item:ironchest:diamond_chest>, <item:ironchest:gold_chest>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("crystalchets", <item:ironchest:crystal_chest>, <item:ironchest:diamond_chest>, <item:contenttweaker:universal_upgrade>);

// Mekanism
// Control Circuits
smithing.addRecipe("advanced_circuit", <item:mekanism:advanced_control_circuit>, <item:mekanism:basic_control_circuit>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("elite_circuit", <item:mekanism:elite_control_circuit>, <item:mekanism:advanced_control_circuit>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("ultimate_circuit", <item:mekanism:ultimate_control_circuit>, <item:mekanism:elite_control_circuit>, <item:contenttweaker:universal_upgrade>);
// Alloys
smithing.addRecipe("reinforced_alloy", <item:mekanism:alloy_reinforced>, <item:mekanism:alloy_infused>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("atomic_alloy", <item:mekanism:alloy_atomic>, <item:mekanism:alloy_reinforced>, <item:contenttweaker:universal_upgrade>);
// Cells
smithing.addRecipe("advanced_cell", <item:mekanism:advanced_induction_cell>, <item:mekanism:basic_induction_cell>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("elite_cell", <item:mekanism:elite_induction_cell>, <item:mekanism:advanced_induction_cell>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("ultimate_cell", <item:mekanism:ultimate_induction_cell>, <item:mekanism:elite_induction_cell>, <item:contenttweaker:universal_upgrade>);
// Cubes
smithing.addRecipe("advanced_cube", <item:mekanism:advanced_energy_cube>, <item:mekanism:basic_energy_cube>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("elite_cube", <item:mekanism:elite_energy_cube>, <item:mekanism:advanced_energy_cube>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("ultimate_cube", <item:mekanism:ultimate_energy_cube>, <item:mekanism:elite_energy_cube>, <item:contenttweaker:universal_upgrade>);
// Induction Ports
smithing.addRecipe("advanced_induction", <item:mekanism:advanced_induction_provider>, <item:mekanism:basic_induction_provider>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("elite_induction", <item:mekanism:elite_induction_provider>, <item:mekanism:advanced_induction_provider>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("ultimate_induction", <item:mekanism:ultimate_induction_provider>, <item:mekanism:elite_induction_provider>, <item:contenttweaker:universal_upgrade>);
// Cables
smithing.addRecipe("advanced_energy", <item:mekanism:advanced_universal_cable>, <item:mekanism:basic_universal_cable>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("elite_energy", <item:mekanism:elite_universal_cable>, <item:mekanism:advanced_universal_cable>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("ultimate_energy", <item:mekanism:ultimate_universal_cable>, <item:mekanism:elite_universal_cable>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("advanced_fluid", <item:mekanism:advanced_mechanical_pipe>, <item:mekanism:basic_mechanical_pipe>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("elite_fluid", <item:mekanism:elite_mechanical_pipe>, <item:mekanism:advanced_mechanical_pipe>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("ultimate_fluid", <item:mekanism:ultimate_mechanical_pipe>, <item:mekanism:elite_mechanical_pipe>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("advanced_pressure", <item:mekanism:advanced_pressurized_tube>, <item:mekanism:basic_pressurized_tube>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("elite_pressure", <item:mekanism:elite_pressurized_tube>, <item:mekanism:advanced_pressurized_tube>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("ultimate_pressure", <item:mekanism:ultimate_pressurized_tube>, <item:mekanism:elite_pressurized_tube>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("advanced_items", <item:mekanism:advanced_logistical_transporter>, <item:mekanism:basic_logistical_transporter>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("elite_items", <item:mekanism:elite_logistical_transporter>, <item:mekanism:advanced_logistical_transporter>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("ultimate_items", <item:mekanism:ultimate_logistical_transporter>, <item:mekanism:elite_logistical_transporter>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("advanced_thermodynamic", <item:mekanism:advanced_thermodynamic_conductor>, <item:mekanism:basic_thermodynamic_conductor>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("elite_thermodynamic", <item:mekanism:elite_thermodynamic_conductor>, <item:mekanism:advanced_thermodynamic_conductor>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("ultimate_thermodynamic", <item:mekanism:ultimate_thermodynamic_conductor>, <item:mekanism:elite_thermodynamic_conductor>, <item:contenttweaker:universal_upgrade>);
// Machines
smithing.addRecipe("smeltery1", <item:mekanism:basic_smelting_factory>, <item:mekanism:energized_smelter>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("smeltery2", <item:mekanism:advanced_smelting_factory>, <item:mekanism:basic_smelting_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("smeltery3", <item:mekanism:elite_smelting_factory>, <item:mekanism:advanced_smelting_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("smeltery4", <item:mekanism:ultimate_smelting_factory>, <item:mekanism:elite_smelting_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("enrich1", <item:mekanism:basic_enriching_factory>, <item:mekanism:enrichment_chamber>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("enrich2", <item:mekanism:advanced_enriching_factory>, <item:mekanism:basic_enriching_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("enrich3", <item:mekanism:elite_enriching_factory>, <item:mekanism:advanced_enriching_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("enrich4", <item:mekanism:ultimate_enriching_factory>, <item:mekanism:elite_enriching_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("crush1", <item:mekanism:basic_crushing_factory>, <item:mekanism:crusher>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("crush2", <item:mekanism:advanced_crushing_factory>, <item:mekanism:basic_crushing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("crush3", <item:mekanism:elite_crushing_factory>, <item:mekanism:advanced_crushing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("crush4", <item:mekanism:ultimate_crushing_factory>, <item:mekanism:elite_crushing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("compress1", <item:mekanism:basic_compressing_factory>, <item:mekanism:osmium_compressor>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("compress2", <item:mekanism:advanced_compressing_factory>, <item:mekanism:basic_compressing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("compress3", <item:mekanism:elite_compressing_factory>, <item:mekanism:advanced_compressing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("compress4", <item:mekanism:ultimate_compressing_factory>, <item:mekanism:elite_compressing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("comb1", <item:mekanism:basic_combining_factory>, <item:mekanism:combiner>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("comb2", <item:mekanism:advanced_combining_factory>, <item:mekanism:basic_combining_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("comb3", <item:mekanism:elite_combining_factory>, <item:mekanism:advanced_combining_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("comb4", <item:mekanism:ultimate_combining_factory>, <item:mekanism:elite_combining_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("pure1", <item:mekanism:basic_purifying_factory>, <item:mekanism:purification_chamber>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("pure2", <item:mekanism:advanced_purifying_factory>, <item:mekanism:basic_purifying_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("pure3", <item:mekanism:elite_purifying_factory>, <item:mekanism:advanced_purifying_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("pure4", <item:mekanism:ultimate_purifying_factory>, <item:mekanism:elite_purifying_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("inject1", <item:mekanism:basic_injecting_factory>, <item:mekanism:chemical_injection_chamber>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("inject2", <item:mekanism:advanced_injecting_factory>, <item:mekanism:basic_injecting_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("inject3", <item:mekanism:elite_injecting_factory>, <item:mekanism:advanced_injecting_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("inject4", <item:mekanism:ultimate_injecting_factory>, <item:mekanism:elite_injecting_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("infuse1", <item:mekanism:basic_infusing_factory>, <item:mekanism:metallurgic_infuser>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("infuse2", <item:mekanism:advanced_infusing_factory>, <item:mekanism:basic_infusing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("infuse3", <item:mekanism:elite_infusing_factory>, <item:mekanism:advanced_infusing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("infuse4", <item:mekanism:ultimate_infusing_factory>, <item:mekanism:elite_infusing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("saw1", <item:mekanism:basic_sawing_factory>, <item:mekanism:precision_sawmill>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("saw2", <item:mekanism:advanced_sawing_factory>, <item:mekanism:basic_sawing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("saw3", <item:mekanism:elite_sawing_factory>, <item:mekanism:advanced_sawing_factory>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("saw4", <item:mekanism:ultimate_sawing_factory>, <item:mekanism:elite_sawing_factory>, <item:contenttweaker:universal_upgrade>);
// Tanks
smithing.addRecipe("tank1", <item:mekanism:advanced_chemical_tank>, <item:mekanism:basic_chemical_tank>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("tank2", <item:mekanism:elite_chemical_tank>, <item:mekanism:advanced_chemical_tank>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("tank3", <item:mekanism:ultimate_chemical_tank>, <item:mekanism:elite_chemical_tank>, <item:contenttweaker:universal_upgrade>);

// Iron Jetpacks
// jetpacks
smithing.addRecipe("stone_jetpack", <item:ironjetpacks:stone_jetpack>, <item:ironjetpacks:wood_jetpack>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("iron_jetpack", <item:ironjetpacks:iron_jetpack>, <item:ironjetpacks:stone_jetpack>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("gold_jetpack", <item:ironjetpacks:gold_jetpack>, <item:ironjetpacks:iron_jetpack>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("diamond_jetpack", <item:ironjetpacks:diamond_jetpack>, <item:ironjetpacks:gold_jetpack>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("emerald_jetpack", <item:ironjetpacks:emerald_jetpack>, <item:ironjetpacks:diamond_jetpack>, <item:contenttweaker:universal_upgrade>);

// Xnet
// Router
smithing.addRecipe("xnet_router_wifi", <item:xnet:wireless_router>, <item:xnet:router>, <item:contenttweaker:universal_upgrade>);

// Mystical
// Furnaces
smithing.addRecipe("inferium_furnace", <item:mysticalagriculture:inferium_furnace>, <item:minecraft:furnace>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("prudentium_furnace", <item:mysticalagriculture:prudentium_furnace>, <item:mysticalagriculture:inferium_furnace>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("tertium_furnace", <item:mysticalagriculture:tertium_furnace>, <item:mysticalagriculture:prudentium_furnace>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("imperium_furnace", <item:mysticalagriculture:imperium_furnace>, <item:mysticalagriculture:tertium_furnace>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("supremium_furnace", <item:mysticalagriculture:supremium_furnace>, <item:mysticalagriculture:imperium_furnace>, <item:contenttweaker:universal_upgrade>);

// ProjectE
// Furnaces
smithing.addRecipe("dark_matter_furnace", <item:projecte:dm_furnace>, <item:mysticalagriculture:supremium_furnace>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("red_matter_furnace", <item:projecte:rm_furnace>, <item:projecte:dm_furnace>, <item:contenttweaker:universal_upgrade>);

// RF Tools
// Crafters
smithing.addRecipe("crafter_tier_2", <item:rftoolsutility:crafter2>, <item:rftoolsutility:crafter1>, <item:contenttweaker:universal_upgrade>);
smithing.addRecipe("crafter_tier_3", <item:rftoolsutility:crafter3>, <item:rftoolsutility:crafter2>, <item:contenttweaker:universal_upgrade>);
