

onEvent('recipes', event => {
    
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "PPPPPPPPP",
            "PPPPPPPPP",
            "PPPPPPPPP",
            "PPPMMMPPP",
            "PPPMUMPPP",
            "PPPMMMPPP",
            "PPPPPPPPP",
            "PPPPPPPPP",
            "PPPPPPPPP"
          ],
        key: {
            "U": {
              "item": "appliedenergistics2:molecular_assembler"
            },
            "M": {
              "item": "kubejs:machine_casing"
            },
            "P": {
              "item": "appliedenergistics2:purified_certus_quartz_crystal"
            }
        },
        result: {
            "item": "lazierae2:aggregator"
        }
      })

  })