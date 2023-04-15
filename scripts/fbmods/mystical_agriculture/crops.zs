import mods.botanypots.ZenCrop;
val crops = <recipetype:botanypots:crop>;

val redstone = crops.getCrop("mysticalagriculture:crops/redstone");
val wood = crops.getCrop("mysticalagriculture:crops/wood");
val inferium = crops.getCrop("mysticalagriculture:crops/inferium");
val glowstone = crops.getCrop("mysticalagriculture:crops/glowstone");
val dirt = crops.getCrop("mysticalagriculture:crops/dirt");
val water = crops.getCrop("mysticalagriculture:crops/water");
val fire = crops.getCrop("mysticalagriculture:crops/fire");
val ice = crops.getCrop("mysticalagriculture:crops/ice");
val bluestone = crops.create("contenttweaker:bluestone", <item:contenttweaker:bluestone_seed>, <blockstate:mysticalagriculture:redstone_crop:age=0>, 100, "dirt");
val lightbluestone = crops.create("contenttweaker:light_bluestone", <item:contenttweaker:light_bluestone_seed>, <blockstate:mysticalagriculture:redstone_crop:age=0>, 100, "dirt");
val greenstone = crops.create("contenttweaker:greebstone", <item:contenttweaker:greenstone_seed>, <blockstate:mysticalagriculture:redstone_crop:age=0>, 100, "dirt");

redstone.setGrowthTicks(100);
wood.setGrowthTicks(100);
inferium.setGrowthTicks(100);
glowstone.setGrowthTicks(100);
water.setGrowthTicks(100);
fire.setGrowthTicks(100);
ice.setGrowthTicks(100);
bluestone.addDrop(<item:contenttweaker:bluestone>, 1);
lightbluestone.addDrop(<item:contenttweaker:light_bluestone>, 1);
greenstone.addDrop(<item:contenttweaker:greenstone>, 1);
