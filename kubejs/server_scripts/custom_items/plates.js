

onEvent('recipes', event => {
    
    event.shapeless('kubejs:draconium_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:draconium_ingot'
    ]).damageIngredient(0).keepIngredient('kubejs:hammer'),

    event.shapeless('kubejs:awakened_draconium_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:awakened_draconium_ingot'
    ]),

    event.shapeless('kubejs:osmium_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:osmium_ingot'
    ]),

    event.shapeless('kubejs:copper_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:copper_ingot'
    ]),

    event.shapeless('kubejs:bronze_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:bronze_ingot'
    ]),

    event.shapeless('kubejs:aluminium_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:aluminium_ingot'
    ]),

    event.shapeless('kubejs:steel_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:steel_ingot'
    ]),

    event.shapeless('kubejs:tin_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:tin_ingot'
    ]),

    event.shapeless('kubejs:nickel_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:nickel_ingot'
    ]),

    event.shapeless('kubejs:lead_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:lead_ingot'
    ]),

    event.shapeless('kubejs:silver_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:silver_ingot'
    ]),

    event.shapeless('kubejs:electrum_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:electrum_ingot'
    ]),

    event.shapeless('kubejs:uranium_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:uranium_ingot'
    ]),

    event.shapeless('kubejs:dark_steel_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:dark_steel_ingot'
    ]),

    event.shapeless('kubejs:constantan_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:constantan_ingot'
    ]),

    event.shapeless('kubejs:blue_iron_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:blue_iron_ingot'
    ]),

    event.shapeless('kubejs:fbmodium_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:fbmodium_ingot'
    ]),

    event.shapeless('kubejs:nether_infused_fbmodium_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:nether_infused_fbmodium_ingot'
    ]),

    event.shapeless('kubejs:end_infused_fbmodium_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:end_infused_fbmodium_ingot'
    ]),

    event.shapeless('kubejs:ultimate_infused_fbmodium_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:ultimate_infused_fbmodium_ingot'
    ]),

    event.shapeless('kubejs:bluestone_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:bluestone_ingot'
    ]),

    event.shapeless('kubejs:light_bluestone_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:light_bluestone_ingot'
    ]),

    event.shapeless('kubejs:greenstone_plate', [
        Item.of('kubejs:hammer').ignoreNBT(), 'kubejs:greenstone_ingot'
    ])

})

