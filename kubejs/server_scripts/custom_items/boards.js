

onEvent('recipes', event => {

    event.shaped('4x kubejs:logic_board', [
        'MRM',
        'RSR',
        'MRM'
    ],
    {
        M: 'kubejs:module_base',
        S: 'kubejs:steel_ingot',
        R: 'minecraft:redstone'
    })

  })