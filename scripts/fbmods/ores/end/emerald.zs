#loader contenttweaker

import mods.contenttweaker.block.BlockBuilder;

new BlockBuilder(<blockmaterial:earth>)
    .setRequiresTool()
    .withHardnessAndResistance(0.5f)
    .withHardnessAndResistance(0.5f, 0.5f)
    .withHarvestLevel(3)
    .withHarvestTool(<tooltype:pickaxe>)
    .withLootFrom(<block:minecraft:emerald_ore>)
    .build("end_emerald_ore");