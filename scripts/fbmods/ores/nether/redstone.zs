#loader contenttweaker

import mods.contenttweaker.block.BlockBuilder;

new BlockBuilder(<blockmaterial:earth>)
    .setRequiresTool()
    .withHardnessAndResistance(0.5f)
    .withHardnessAndResistance(0.5f, 0.5f)
    .withHarvestLevel(3)
    .withHarvestTool(<tooltype:pickaxe>)
    .withLootFrom(<block:minecraft:redstone_ore>)
    .build("nether_redstone_ore");