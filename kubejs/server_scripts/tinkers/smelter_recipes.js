
onEvent('recipes', event => {

    // Catalyst

    event.custom({
        type: 'tconstruct:entity_melting',
        entity: {
            types: [
              "minecraft:pig",
              "minecraft:piglin",
              "minecraft:piglin_brute",
              "minecraft:zombified_piglin"
            ]
          },
          result: {
            fluid: "tconstruct:molten_gold",
            amount: 16
          },
          damage: 5
    })
})
