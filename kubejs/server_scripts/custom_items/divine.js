
onEvent('recipes', event => {
    
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AAAAAAAAA",
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
    

})