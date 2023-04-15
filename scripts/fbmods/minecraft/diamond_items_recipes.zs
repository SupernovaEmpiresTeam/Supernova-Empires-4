
// Removed Diamond gear recipes
craftingTable.removeRecipe(<item:minecraft:diamond_hoe>);
craftingTable.removeRecipe(<item:minecraft:diamond_axe>);
craftingTable.removeRecipe(<item:minecraft:diamond_pickaxe>);
craftingTable.removeRecipe(<item:minecraft:diamond_shovel>);
craftingTable.removeRecipe(<item:minecraft:diamond_sword>);
craftingTable.removeRecipe(<item:minecraft:diamond_helmet>);
craftingTable.removeRecipe(<item:minecraft:diamond_chestplate>);
craftingTable.removeRecipe(<item:minecraft:diamond_leggings>);
craftingTable.removeRecipe(<item:minecraft:diamond_boots>);

// Added Diamond Gear Recipes
// Hoe
mods.extendedcrafting.TableCrafting.addShaped("29dae27a-6b7d-42ca-acb6-5de197792cdb", 0, <item:minecraft:diamond_hoe>, [
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
// Axe
mods.extendedcrafting.TableCrafting.addShaped("ace46a4c-fc33-49e0-8575-29fae861ba22", 0, <item:minecraft:diamond_axe>, [
	[<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:stick>, <item:minecraft:diamond>], 
	[<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:stick>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]
]);
// Pickaxe
mods.extendedcrafting.TableCrafting.addShaped("bfc0c379-9582-42c4-a1eb-06d69ad17373", 0, <item:minecraft:diamond_pickaxe>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:diamond>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:diamond>], 
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
// Shovel
mods.extendedcrafting.TableCrafting.addShaped("2a2609d1-ab1c-4f57-b8ba-764c7706f1b1", 0, <item:minecraft:diamond_shovel>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
// Sword
mods.extendedcrafting.TableCrafting.addShaped("619521dd-8cb9-477b-9c54-5aa90fda5832", 0, <item:minecraft:diamond_sword>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:diamond>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
// Helmet
mods.extendedcrafting.TableCrafting.addShaped("13276b35-c25d-4080-9e0c-165831b45f1c", 0, <item:minecraft:diamond_helmet>, [
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:diamond>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
// Chesplate
mods.extendedcrafting.TableCrafting.addShaped("70413249-bbbf-4920-9c45-97b9d15f750d", 0, <item:minecraft:diamond_chestplate>, [
	[<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>]
]);
// Leggings
mods.extendedcrafting.TableCrafting.addShaped("5015015a-f98d-40db-aa53-20dbbf2bef19", 0, <item:minecraft:diamond_leggings>, [
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>]
]);
// Boots
mods.extendedcrafting.TableCrafting.addShaped("6c47e2ba-89ff-4793-b59b-a846db565aac", 0, <item:minecraft:diamond_boots>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:diamond>]
]);