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
                "item": "minecraft:netherite_ingot"
              }
        },
        result: {
            item: 'minecraft:netherite_helmet'
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
                "item": "minecraft:netherite_ingot"
              }
        },
        result: {
            item: 'minecraft:netherite_chestplate'
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
                "item": "minecraft:netherite_ingot"
              }
        },
        result: {
            item: 'minecraft:netherite_leggings'
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
                "item": "minecraft:netherite_ingot"
              }
        },
        result: {
            item: 'minecraft:netherite_boots'
        }
    })

  })