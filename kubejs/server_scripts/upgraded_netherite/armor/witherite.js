onEvent('recipes', event => {
    
  // Helmet

  event.custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
          "AAAAAAAAA",
          "AA     AA",
          "AA     AA",
          "AA     AA",
          "AA     AA",
          "AA     AA"
        ],
      key: {
          "A": {
              "item": "upgradednetherite:wither_upgraded_netherite_ingot"
            }
      },
      result: {
          item: 'upgradednetherite:wither_upgraded_netherite_helmet'
      }
  })

  // Chestpalte

  event.custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
          "AA     AA",
          " AA   AA ",
          "  AAAAA  ",
          "  AAAAA  ",
          "  AAAAA  ",
          "  AAAAA  ",
          "  AAAAA  ",
          "  AAAAA  ",
          "  AAAAA  "
        ],
        key: {
          "A": {
              "item": "upgradednetherite:wither_upgraded_netherite_ingot"
            }
      },
      result: {
          item: 'upgradednetherite:wither_upgraded_netherite_chestplate'
      }
  })

  // Leggings

  event.custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
          "AAAAAAAAA",
          "AAAAAAAAA",
          "AA     AA",
          "AA     AA",
          "AA     AA",
          "AA     AA",
          "AA     AA",
          "AA     AA",
          "AA     AA"
        ],
        key: {
          "A": {
              "item": "upgradednetherite:wither_upgraded_netherite_ingot"
            }
      },
      result: {
          item: 'upgradednetherite:wither_upgraded_netherite_leggings'
      }
  })

  // Boots

  event.custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
          "AAA   AAA",
          "AAA   AAA",
          "AAA   AAA"
        ],
        key: {
          "A": {
              "item": "upgradednetherite:wither_upgraded_netherite_ingot"
            }
      },
      result: {
          item: 'upgradednetherite:wither_upgraded_netherite_boots'
      }
  })

})