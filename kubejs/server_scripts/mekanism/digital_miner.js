onEvent('recipes', event => {
    
    // Helmet

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAAAA",
            "BBBBBBBBB",
            "AAAAAAAAA",
            "DDDFFFDDD",
            "EEEFGFEEE",
            "DDDFFFDDD",
            "BBBBBBBBB",
            "AAAAAAAAA",
            "BBBBBBBBB"
          ],
        key: {
            "A": {
                "item": "appliedenergistics2:fluix_crystal"
            },
            "B": {
                "item": "cagedmobs:star_infused_netherite_ingot"
            },
            "D": {
                "item": "extendedcrafting:ender_star"
            },
            "E": {
                "item": "mekanism:logistical_sorter"
            },
            "F": {
                "item": "mekanism:robit"
            },
            "G": {
                "item": "rftoolsbuilder:builder"
            }
        },
        result: {
            item: 'mekanism:digital_miner'
        }
    })

  })