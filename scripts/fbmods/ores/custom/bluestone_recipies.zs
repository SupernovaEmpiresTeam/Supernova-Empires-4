
import crafttweaker.api.FurnaceManager;
import crafttweaker.api.BlastFurnaceManager;

#Bluestone
furnace.addRecipe("bluestone_ore_smelting", <item:contenttweaker:bluestone>, <item:contenttweaker:bluestone_ore>, 1.0, 30);
blastFurnace.addRecipe("bls_bluestone_ore_smelt", <item:contenttweaker:bluestone>, <item:contenttweaker:bluestone_ore>, 1.0, 30);

<recipetype:thermal:pulverizer>.addRecipe("pulverizer_test", [<item:contenttweaker:bluestone> *20 % 100] , <item:contenttweaker:bluestone_ore>, 2, 13000);

#Light Bluestone
furnace.addRecipe("bluestone_ore_smelting2", <item:contenttweaker:light_bluestone>, <item:contenttweaker:light_bluestone_ore>, 1.0, 30);
blastFurnace.addRecipe("bls_bluestone_ore_smelt2", <item:contenttweaker:light_bluestone>, <item:contenttweaker:light_bluestone_ore>, 1.0, 30);

<recipetype:thermal:pulverizer>.addRecipe("pulverizer_test2", [<item:contenttweaker:light_bluestone> *20 % 100] , <item:contenttweaker:light_bluestone_ore>, 2, 13000);

#Greenstone
furnace.addRecipe("bluestone_ore_smelting3", <item:contenttweaker:greenstone>, <item:contenttweaker:greenstone_ore>, 1.0, 30);
blastFurnace.addRecipe("bls_bluestone_ore_smelt3", <item:contenttweaker:greenstone>, <item:contenttweaker:greenstone_ore>, 1.0, 30);

<recipetype:thermal:pulverizer>.addRecipe("pulverizer_test3", [<item:contenttweaker:greenstone> *20 % 100] , <item:contenttweaker:greenstone_ore>, 2, 13000);