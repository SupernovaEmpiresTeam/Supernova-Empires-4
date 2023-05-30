

onEvent('recipes', event => {
    
    // Iron / Gold

    event.shapeless('minecraft:gold_ingot', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), '8x minecraft:iron_ingot'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone'),
    
    event.shapeless('8x minecraft:iron_ingot', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), 'minecraft:gold_ingot'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone'),

    // Ender Pearl
    
    event.shapeless('minecraft:ender_pearl', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), '4x minecraft:iron_ingot'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone'),

    // Gold / Diamond

    event.shapeless('minecraft:diamond', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), '4x minecraft:gold_ingot'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone'),

    event.shapeless('4x minecraft:gold_ingot', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), 'minecraft:diamond'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone'),

    // Diamond / Emerald

    event.shapeless('minecraft:emerald', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), '2x minecraft:diamond'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone'),

    event.shapeless('2x minecraft:diamond', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), 'minecraft:emerald'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone'),

    // Coal / Charcoal

    event.shapeless('4x minecraft:charcoal', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), 'minecraft:coal'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone'),

    event.shapeless('minecraft:coal', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), '4x minecraft:charcoal'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone'),

    // Fuel from ProjectE

    event.shapeless('projecte:alchemical_coal', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), '4x minecraft:coal'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone')

    event.shapeless('4x minecraft:coal', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), 'projecte:alchemical_coal'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone')

    event.shapeless('projecte:mobius_fuel', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), '4x projecte:alchemical_coal'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone')

    event.shapeless('4x projecte:alchemical_coal', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), 'projecte:mobius_fuel'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone')

    event.shapeless('projecte:aeternalis_fuel', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), '4x projecte:mobius_fuel'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone')

    event.shapeless('4x projecte:mobius_fuel', [
        Item.of('kubejs:transmutation_stone').ignoreNBT(), 'projecte:aeternalis_fuel'
    ]).damageIngredient('kubejs:transmutation_stone', 1).keepIngredient('kubejs:transmutation_stone')
    

})

