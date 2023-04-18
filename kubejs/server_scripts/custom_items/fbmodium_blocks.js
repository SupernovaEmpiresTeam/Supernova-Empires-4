onEvent('recipes', event => {

    // Make Blocks

	event.shapeless('kubejs:fbmodium_block',
        [
            '9x kubejs:fbmodium_ingot'
        ]),

    event.shapeless('kubejs:nether_infused_fbmodium_block',
        [
            '9x kubejs:nether_infused_fbmodium_ingot'
        ]),

    event.shapeless('kubejs:end_infused_fbmodium_block',
        [
            '9x kubejs:end_infused_fbmodium_ingot'
        ]),

    event.shapeless('kubejs:ultimate_infused_fbmodium_block',
        [
            '9x kubejs:ultimate_infused_fbmodium_ingot'
        ]),

    // Get ingots back
    
    event.shapeless('9x kubejs:fbmodium_ingot',
        [
            'kubejs:fbmodium_block'
        ]),

    event.shapeless('9x kubejs:nether_infused_fbmodium_ingot',
        [
            'kubejs:nether_infused_fbmodium_block'
        ]),

    event.shapeless('9x kubejs:end_infused_fbmodium_ingot',
        [
            'kubejs:end_infused_fbmodium_block'
        ]),

    event.shapeless('9x kubejs:ultimate_infused_fbmodium_ingot',
        [
            'kubejs:ultimate_infused_fbmodium_block'
        ])
    
    
})
