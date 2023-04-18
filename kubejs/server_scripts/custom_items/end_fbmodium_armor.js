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
                "item": "kubejs:end_infused_fbmodium_ingot"
              }
        },
        result: {
            item: 'kubejs:end_infused_helmet'
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
                "item": "kubejs:end_infused_fbmodium_ingot"
              }
        },
        result: {
            item: 'kubejs:end_infused_chestplate'
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
                "item": "kubejs:end_infused_fbmodium_ingot"
              }
        },
        result: {
            item: 'kubejs:end_infused_leggings'
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
                "item": "kubejs:end_infused_fbmodium_ingot"
              }
        },
        result: {
            item: 'kubejs:end_infused_boots'
        }
    })

  })