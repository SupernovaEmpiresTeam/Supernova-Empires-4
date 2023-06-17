// priority: 1

console.info('Loaded Loot Tables')

onEvent('lootjs', (event) =>{
    event
    .addEntityLootModifier("minecraft:chest")
    .randomChance(0.3)
    .thenAdd("kubejs:one_dollar");
    event
    .addEntityLootModifier("minecraft:chest")
    .randomChance(0.1)
    .thenAdd("kubejs:five_dollar");

})