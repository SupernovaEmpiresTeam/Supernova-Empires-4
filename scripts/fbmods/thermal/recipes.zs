import crafttweaker.api.BracketHandlers;

// Melt
<recipetype:thermal:pyrolyzer>.addRecipe("fbmodium_rec1", [<item:minecraft:air> %100], <fluid:contenttweaker:molten_fbmodium> *250, <item:contenttweaker:fbmodium_ingot>, 600);
<recipetype:thermal:pyrolyzer>.addRecipe("fbmodium_rec2", [<item:minecraft:air> %100], <fluid:contenttweaker:molten_nether_infused_fbmodium> *250, <item:contenttweaker:nether_infused_fbmodium_ingot>, 600);
<recipetype:thermal:pyrolyzer>.addRecipe("fbmodium_rec3", [<item:minecraft:air> %100], <fluid:contenttweaker:molten_end_infused_fbmodium> *250, <item:contenttweaker:end_infused_fbmodium_ingot>, 600);
<recipetype:thermal:pyrolyzer>.addRecipe("fbmodium_rec4", [<item:minecraft:air> %100], <fluid:contenttweaker:molten_ultimate_infused_fbmodium> *250, <item:contenttweaker:ultimate_infused_fbmodium_ingot>, 600);
// Return to ingot
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec5", <item:contenttweaker:fbmodium_ingot>, <item:minecraft:air>, <fluid:contenttweaker:molten_fbmodium> *250, 600);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec6", <item:contenttweaker:nether_infused_fbmodium_ingot>, <item:minecraft:air>, <fluid:contenttweaker:molten_nether_infused_fbmodium> *250, 600);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec7", <item:contenttweaker:end_infused_fbmodium_ingot>, <item:minecraft:air>, <fluid:contenttweaker:molten_end_infused_fbmodium> *250, 600);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec8", <item:contenttweaker:ultimate_infused_fbmodium_ingot>, <item:minecraft:air>, <fluid:contenttweaker:molten_ultimate_infused_fbmodium> *250, 600);
// Armors
// FBModium
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec9", <item:kubejs:fbmodium_helmet>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_helmet>, <fluid:contenttweaker:molten_fbmodium> *1000, 40000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec10", <item:kubejs:fbmodium_chestplate>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_chestplate>, <fluid:contenttweaker:molten_fbmodium> *1000, 40000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec11", <item:kubejs:fbmodium_leggings>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_leggings>, <fluid:contenttweaker:molten_fbmodium> *1000, 40000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec12", <item:kubejs:fbmodium_boots>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_boots>, <fluid:contenttweaker:molten_fbmodium> *1000, 40000);
// Nether Infused FBModium
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec13", <item:kubejs:nether_infused_helmet>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_helmet>, <fluid:contenttweaker:molten_nether_infused_fbmodium> *1000, 41000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec15", <item:kubejs:nether_infused_chestplate>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_chestplate>, <fluid:contenttweaker:molten_nether_infused_fbmodium> *1000, 41000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec16", <item:kubejs:nether_infused_leggings>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_leggings>, <fluid:contenttweaker:molten_nether_infused_fbmodium> *1000, 41000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec17", <item:kubejs:nether_infused_boots>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_boots>, <fluid:contenttweaker:molten_nether_infused_fbmodium> *1000, 41000);
// End Infused FBModium
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec18", <item:kubejs:end_infused_helmet>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_helmet>, <fluid:contenttweaker:molten_end_infused_fbmodium> *1000, 42000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec19", <item:kubejs:end_infused_chestplate>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_chestplate>, <fluid:contenttweaker:molten_end_infused_fbmodium> *1000, 42000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec20", <item:kubejs:end_infused_leggings>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_leggings>, <fluid:contenttweaker:molten_end_infused_fbmodium> *1000, 42000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec21", <item:kubejs:end_infused_boots>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_boots>, <fluid:contenttweaker:molten_end_infused_fbmodium> *1000, 42000);
// Ultimate Infused FBModium
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec22", <item:kubejs:ultimate_infused_helmet>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_helmet>, <fluid:contenttweaker:molten_ultimate_infused_fbmodium> *1000, 45000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec23", <item:kubejs:ultimate_infused_chestplate>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_chestplate>, <fluid:contenttweaker:molten_ultimate_infused_fbmodium> *1000, 45000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec24", <item:kubejs:ultimate_infused_leggings>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_leggings>, <fluid:contenttweaker:molten_ultimate_infused_fbmodium> *1000, 45000);
<recipetype:thermal:chiller>.addRecipe("fbmodium_rec25", <item:kubejs:ultimate_infused_boots>.withTag({Enchantments: [{lvl: 50 as short, id: "minecraft:protection" as string}]}), <item:minecraft:iron_boots>, <fluid:contenttweaker:molten_ultimate_infused_fbmodium> *1000, 45000);

