

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
              "item": "lazierae2:universal_press"
            },
            "M": {
              "item": "kubejs:machine_casing"
            },
            "P": {
              "item": "appliedenergistics2:purified_certus_quartz_crystal"
            }
        },
        result: {
            "item": "lazierae2:etcher"
        }
      })

  })