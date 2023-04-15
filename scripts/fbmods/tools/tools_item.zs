#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;
import mods.contenttweaker.item.tool.ItemBuilderTool;

new ItemBuilder()
    .withMaxDamage(1000)
    .withType<ItemBuilderTool>()
    .withToolType(<tooltype:axe>, 0, 5.0f) //Axe harvest level = 1
    .withAttackSpeed(3.0d)
    .build("dirt_axe");

new ItemBuilder()
    .withMaxDamage(1000)
    .withType<ItemBuilderTool>()
    .withToolType(<tooltype:pickaxe>, 0, 5.0f) //Axe harvest level = 1
    .build("dirt_pickaxe");

new ItemBuilder()
    .withMaxDamage(1000)
    .withType<ItemBuilderTool>()
    .withToolType(<tooltype:shovel>, 0, 5.0f) //Axe harvest level = 1
    .build("dirt_shovel");

new ItemBuilder()
    .withMaxDamage(1000)
    .withType<ItemBuilderTool>()
    .withToolType(<tooltype:hoe>, 0, 5.0f) //Axe harvest level = 1
    .build("dirt_hoe");

new ItemBuilder()
    .withMaxDamage(1000)
    .withType<ItemBuilderTool>()
    .withToolType(<tooltype:sword>, 0, 5.0f) //Axe harvest level = 1
    .withAttackSpeed(3.0d)
    .build("dirt_sword");
