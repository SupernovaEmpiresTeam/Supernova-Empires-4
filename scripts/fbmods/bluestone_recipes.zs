import mods.mysticalagriculture.InfusionCrafting;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.FurnaceManager;

# Seeds
mods.mysticalagriculture.InfusionCrafting.addRecipe("bluestone_seed_recipe", <item:contenttweaker:bluestone_seed>, [<item:mysticalagriculture:prosperity_seed_base>, <item:contenttweaker:bluestone>, <item:mysticalagriculture:tertium_essence>, <item:contenttweaker:bluestone>, <item:mysticalagriculture:tertium_essence>, <item:contenttweaker:bluestone>, <item:mysticalagriculture:tertium_essence>, <item:contenttweaker:bluestone>, <item:mysticalagriculture:tertium_essence>]);
mods.mysticalagriculture.InfusionCrafting.addRecipe("bluestone_seed_recipe2", <item:contenttweaker:light_bluestone_seed>, [<item:mysticalagriculture:prosperity_seed_base>, <item:contenttweaker:light_bluestone>, <item:mysticalagriculture:tertium_essence>, <item:contenttweaker:light_bluestone>, <item:mysticalagriculture:tertium_essence>, <item:contenttweaker:light_bluestone>, <item:mysticalagriculture:tertium_essence>, <item:contenttweaker:light_bluestone>, <item:mysticalagriculture:tertium_essence>]);
mods.mysticalagriculture.InfusionCrafting.addRecipe("bluestone_seed_recipe3", <item:contenttweaker:greenstone_seed>, [<item:mysticalagriculture:prosperity_seed_base>, <item:contenttweaker:greenstone>, <item:mysticalagriculture:tertium_essence>, <item:contenttweaker:greenstone>, <item:mysticalagriculture:tertium_essence>, <item:contenttweaker:greenstone>, <item:mysticalagriculture:tertium_essence>, <item:contenttweaker:greenstone>, <item:mysticalagriculture:tertium_essence>]);


# Gears
craftingTable.addShaped("58439b9a-5b3b-427a-ad55-999a3ff52e81", <item:contenttweaker:bluestone_gear>, [
	[<item:minecraft:air>, <item:contenttweaker:bluestone>, <item:minecraft:air>], 
	[<item:contenttweaker:bluestone>, <item:minecraft:iron_nugget>, <item:contenttweaker:bluestone>], 
	[<item:minecraft:air>, <item:contenttweaker:bluestone>, <item:minecraft:air>]
]);

craftingTable.addShaped("58439b9a-5b3b-427a-ad55-999a3ff52e812", <item:contenttweaker:light_bluestone_gear>, [
	[<item:minecraft:air>, <item:contenttweaker:light_bluestone>, <item:minecraft:air>], 
	[<item:contenttweaker:light_bluestone>, <item:minecraft:iron_nugget>, <item:contenttweaker:light_bluestone>], 
	[<item:minecraft:air>, <item:contenttweaker:light_bluestone>, <item:minecraft:air>]
]);

craftingTable.addShaped("58439b9a-5b3b-427a-ad55-999a3ff52e813", <item:contenttweaker:greenstone_gear>, [
	[<item:minecraft:air>, <item:contenttweaker:greenstone>, <item:minecraft:air>], 
	[<item:contenttweaker:greenstone>, <item:minecraft:iron_nugget>, <item:contenttweaker:greenstone>], 
	[<item:minecraft:air>, <item:contenttweaker:greenstone>, <item:minecraft:air>]
]);


# Plates
craftingTable.addShaped("2b37e446-f717-44f1-948a-bfbca6afd645", <item:contenttweaker:bluestone_plate>, [
	[<item:immersiveengineering:hammer>.withTag({Damage: 0 as int}), <item:contenttweaker:bluestone>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.addShaped("2b37e446-f717-44f1-948a-bfbca6afd6452", <item:contenttweaker:light_bluestone_plate>, [
	[<item:immersiveengineering:hammer>.withTag({Damage: 0 as int}), <item:contenttweaker:light_bluestone>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.addShaped("2b37e446-f717-44f1-948a-bfbca6afd6453", <item:contenttweaker:greenstone_plate>, [
	[<item:immersiveengineering:hammer>.withTag({Damage: 0 as int}), <item:contenttweaker:greenstone>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);


# Rods
craftingTable.addShaped("c8a7e15c-0835-4be3-8c3a-9fceb215e934", <item:contenttweaker:bluestone_rod>, [
	[<item:minecraft:air>, <item:contenttweaker:bluestone_ingot>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:contenttweaker:bluestone_ingot>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:contenttweaker:bluestone_ingot>, <item:minecraft:air>]
]);

craftingTable.addShaped("c8a7e15c-0835-4be3-8c3a-9fceb215e9342", <item:contenttweaker:light_bluestone_rod>, [
	[<item:minecraft:air>, <item:contenttweaker:light_bluestone_ingot>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:contenttweaker:light_bluestone_ingot>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:contenttweaker:light_bluestone_ingot>, <item:minecraft:air>]
]);

craftingTable.addShaped("c8a7e15c-0835-4be3-8c3a-9fceb215e9343", <item:contenttweaker:greenstone_rod>, [
	[<item:minecraft:air>, <item:contenttweaker:greenstone_ingot>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:contenttweaker:greenstone_ingot>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:contenttweaker:greenstone_ingot>, <item:minecraft:air>]
]);


# Ingots
furnace.addRecipe("blstoneingot", <item:contenttweaker:bluestone_ingot>, <item:contenttweaker:bluestone>, 1.0, 30);
furnace.addRecipe("blstoneingot2", <item:contenttweaker:light_bluestone_ingot>, <item:contenttweaker:light_bluestone>, 1.0, 30);
furnace.addRecipe("blstoneingot3", <item:contenttweaker:greenstone_ingot>, <item:contenttweaker:greenstone>, 1.0, 30);

# Blocks
craftingTable.addShaped("ce4ecd6c-0350-487c-a58b-9254070ad86e", <item:contenttweaker:bluestone_block>, [
	[<item:contenttweaker:bluestone_ingot>, <item:contenttweaker:bluestone_ingot>, <item:contenttweaker:bluestone_ingot>], 
	[<item:contenttweaker:bluestone_ingot>, <item:contenttweaker:bluestone_ingot>, <item:contenttweaker:bluestone_ingot>], 
	[<item:contenttweaker:bluestone_ingot>, <item:contenttweaker:bluestone_ingot>, <item:contenttweaker:bluestone_ingot>]
]);

craftingTable.addShaped("ce4ecd6c-0350-487c-a58b-9254070ad86e2", <item:contenttweaker:light_bluestone_block>, [
	[<item:contenttweaker:light_bluestone_ingot>, <item:contenttweaker:light_bluestone_ingot>, <item:contenttweaker:light_bluestone_ingot>], 
	[<item:contenttweaker:light_bluestone_ingot>, <item:contenttweaker:light_bluestone_ingot>, <item:contenttweaker:light_bluestone_ingot>], 
	[<item:contenttweaker:light_bluestone_ingot>, <item:contenttweaker:light_bluestone_ingot>, <item:contenttweaker:light_bluestone_ingot>]
]);

craftingTable.addShaped("ce4ecd6c-0350-487c-a58b-9254070ad86e3", <item:contenttweaker:greenstone_block>, [
	[<item:contenttweaker:greenstone_ingot>, <item:contenttweaker:greenstone_ingot>, <item:contenttweaker:greenstone_ingot>], 
	[<item:contenttweaker:greenstone_ingot>, <item:contenttweaker:greenstone_ingot>, <item:contenttweaker:greenstone_ingot>], 
	[<item:contenttweaker:greenstone_ingot>, <item:contenttweaker:greenstone_ingot>, <item:contenttweaker:greenstone_ingot>]
]);


craftingTable.addShapeless("sadasmdnasndajk", <item:contenttweaker:bluestone_ingot> *9, [<item:contenttweaker:bluestone_block>]);
craftingTable.addShapeless("sadasmdnasndajk2", <item:contenttweaker:light_bluestone_ingot> *9, [<item:contenttweaker:light_bluestone_block>]);
craftingTable.addShapeless("sadasmdnasndajk3", <item:contenttweaker:greenstone_ingot> *9, [<item:contenttweaker:greenstone_block>]);