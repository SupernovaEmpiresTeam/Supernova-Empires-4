import crafttweaker.api.registries.IRecipeManager;
import crafttweaker.api.BracketHandlers;

mods.extendedcrafting.CombinationCrafting.addRecipe("c0b7fe6b-bf83-4018-9828-c77c6bc51614", <item:contenttweaker:fbmodium_ingot> * 4, 100000, [
	<item:minecraft:nether_star>.withTag({Id: "extendedcrafting:supremium" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:gold" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:gold" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:supremium" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:blue_iron" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:iron" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:blue_iron" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:iron" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:blue_iron" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:iron" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:supremium" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:bluestone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:bluestone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:supremium" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:bluestone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:iron" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:gold" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:bluestone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:gold" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:blue_iron" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:supremium" as string})
]);

mods.extendedcrafting.CombinationCrafting.addRecipe("16420df3-a272-4ba2-8330-718a934c0a4c", <item:contenttweaker:nether_infused_fbmodium_ingot>, 100000, [
	<item:contenttweaker:fbmodium_ingot>, <item:minecraft:nether_star>, <item:minecraft:nether_star>, <item:minecraft:nether_star>, <item:minecraft:nether_star>
]);

mods.extendedcrafting.CombinationCrafting.addRecipe("e925a60f-ef55-4bb0-9131-33d53ee8c8e8", <item:contenttweaker:end_infused_fbmodium_ingot>, 100000, [
	<item:contenttweaker:nether_infused_fbmodium_ingot>, <item:minecraft:end_crystal>, <item:minecraft:end_crystal>, <item:minecraft:end_crystal>, <item:minecraft:end_crystal>
]);

mods.extendedcrafting.CombinationCrafting.addRecipe("b4b43ccc-c55a-49d3-8de7-c2a13a629e5e", <item:contenttweaker:ultimate_infused_fbmodium_ingot>, 100000, [
	<item:contenttweaker:end_infused_fbmodium_ingot>, <item:extendedcrafting:the_ultimate_catalyst>, <item:extendedcrafting:the_ultimate_catalyst>, <item:extendedcrafting:the_ultimate_catalyst>, <item:extendedcrafting:the_ultimate_catalyst>
]);

craftingTable.addShapeless("fbmodiumblck", <item:contenttweaker:fbmodium_block>, [
	<item:contenttweaker:fbmodium_ingot>, <item:contenttweaker:fbmodium_ingot>, <item:contenttweaker:fbmodium_ingot>, <item:contenttweaker:fbmodium_ingot>, <item:contenttweaker:fbmodium_ingot>, <item:contenttweaker:fbmodium_ingot>, <item:contenttweaker:fbmodium_ingot>, <item:contenttweaker:fbmodium_ingot>, <item:contenttweaker:fbmodium_ingot>
]);
craftingTable.addShapeless("fbmodiumblckn", <item:contenttweaker:nether_infused_fbmodium_block>, [
	<item:contenttweaker:nether_infused_fbmodium_ingot>, <item:contenttweaker:nether_infused_fbmodium_ingot>, <item:contenttweaker:nether_infused_fbmodium_ingot>, <item:contenttweaker:nether_infused_fbmodium_ingot>, <item:contenttweaker:nether_infused_fbmodium_ingot>, <item:contenttweaker:nether_infused_fbmodium_ingot>, <item:contenttweaker:nether_infused_fbmodium_ingot>, <item:contenttweaker:nether_infused_fbmodium_ingot>, <item:contenttweaker:nether_infused_fbmodium_ingot>
]);
craftingTable.addShapeless("fbmodiumblcke", <item:contenttweaker:end_infused_fbmodium_block>, [
	<item:contenttweaker:end_infused_fbmodium_ingot>, <item:contenttweaker:end_infused_fbmodium_ingot>, <item:contenttweaker:end_infused_fbmodium_ingot>, <item:contenttweaker:end_infused_fbmodium_ingot>, <item:contenttweaker:end_infused_fbmodium_ingot>, <item:contenttweaker:end_infused_fbmodium_ingot>, <item:contenttweaker:end_infused_fbmodium_ingot>, <item:contenttweaker:end_infused_fbmodium_ingot>, <item:contenttweaker:end_infused_fbmodium_ingot>
]);
craftingTable.addShapeless("fbmodiumblcku", <item:contenttweaker:ultimate_infused_fbmodium_block>, [
	<item:contenttweaker:ultimate_infused_fbmodium_ingot>, <item:contenttweaker:ultimate_infused_fbmodium_ingot>, <item:contenttweaker:ultimate_infused_fbmodium_ingot>, <item:contenttweaker:ultimate_infused_fbmodium_ingot>, <item:contenttweaker:ultimate_infused_fbmodium_ingot>, <item:contenttweaker:ultimate_infused_fbmodium_ingot>, <item:contenttweaker:ultimate_infused_fbmodium_ingot>, <item:contenttweaker:ultimate_infused_fbmodium_ingot>, <item:contenttweaker:ultimate_infused_fbmodium_ingot>
]);

craftingTable.addShapeless("fbmodiumblck2", <item:contenttweaker:fbmodium_ingot> * 9, [
    <item:contenttweaker:fbmodium_block>, 
]);

craftingTable.addShapeless("fbmodiumblckn2", <item:contenttweaker:nether_infused_fbmodium_ingot> * 9, [
    <item:contenttweaker:nether_infused_fbmodium_block>, 
]);

craftingTable.addShapeless("fbmodiumblcke2", <item:contenttweaker:end_infused_fbmodium_ingot> * 9, [
    <item:contenttweaker:end_infused_fbmodium_block>, 
]);

craftingTable.addShapeless("fbmodiumblcku2", <item:contenttweaker:ultimate_infused_fbmodium_ingot> * 9, [
    <item:contenttweaker:ultimate_infused_fbmodium_block>, 
]);

