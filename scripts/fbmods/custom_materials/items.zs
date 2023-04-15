#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;
import mods.contenttweaker.item.tool.ItemBuilderTool;
import mods.contenttweaker.fluid.FluidBuilder;
import mods.contenttweaker.block.BlockBuilder;


new ItemBuilder()
    .build("fbmodium_ingot");

new ItemBuilder()
    .build("nether_infused_fbmodium_ingot");

new ItemBuilder()
    .build("end_infused_fbmodium_ingot");

new ItemBuilder()
    .build("ultimate_infused_fbmodium_ingot");


new FluidBuilder(true, 0xff5d18).build("molten_fbmodium");
new FluidBuilder(true, 0x000b14).build("molten_nether_infused_fbmodium");
new FluidBuilder(true, 0x43cf0d).build("molten_end_infused_fbmodium");
new FluidBuilder(true, 0xaa00aa).build("molten_ultimate_infused_fbmodium");

new BlockBuilder(<blockmaterial:earth>).build("fbmodium_block");
new BlockBuilder(<blockmaterial:earth>).build("nether_infused_fbmodium_block");
new BlockBuilder(<blockmaterial:earth>).build("end_infused_fbmodium_block");
new BlockBuilder(<blockmaterial:earth>).build("ultimate_infused_fbmodium_block");