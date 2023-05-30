
onEvent('recipes', event => {
    
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAAABAAAA",
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAAAAAAAA"
          ],
        key: {
            "A": {
              "item": "extendedcrafting:ultimate_singularity"
            },
            "B": {
              "item": "draconicevolution:chaos_shard"
            }
        },
        result: {
            "item": "kubejs:divine_ingot"
        }
      })

      event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAAA",
            "AAAAAAAA",
            "AAAAAAAA",
            "AAAAAAAA",
            "AAAAAAAA",
            "AAAAAAAA",
            "AAAAAAAA",
            "AAAAAAAA"
          ],
        key: {
            "A": {
              "item": "kubejs:divine_ingot"
            }
        },
        result: {
            "item": "kubejs:divine_block"
        }
      })

      event.shapeless('64x kubejs:divine_ingot', [
        "kubejs:divine_block"
      ]
)

event.custom({
  type: 'extendedcrafting:shaped_table',
  pattern: [
      "AAAAAAAAA",
      "AAAAAAAAA",
      "AAAAAAAAA",
      "AAAAAAAAA",
      "AAAAAAAAA",
      "AAAAAAAAA",
      "  B      ",
      " B       ",
      "B        "
    ],
  key: {
      "A": {
        "item": "kubejs:divine_ingot"
      },
      "B": {
        "item": "kubejs:bronze_rod"
      }
  },
  result: {
      "item": "kubejs:blade_of_olympus"
  }
})

})

