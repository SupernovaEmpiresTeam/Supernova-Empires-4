onEvent('recipes', event => {
    
    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 1000000,
        input: {
            item: 'projecte:klein_star_omega'
        },
        ingredients : [

            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:gold\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:gold\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:gold\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:gold\"}"
            },

            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:bluestone\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:bluestone\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:bluestone\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:bluestone\"}"
            },

            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:blue_iron\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:blue_iron\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:blue_iron\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:blue_iron\"}"
            },

            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:iron\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:iron\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:iron\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:iron\"}"
            },

            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:supremium\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:supremium\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:supremium\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:supremium\"}"
            },

            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:redstone\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:redstone\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:redstone\"}"
            },
            {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:redstone\"}"
            },
        ],
        result: {
            item: "kubejs:fbmodium_ingot",
            count: 4
        }
    })

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 2000000,
        input: {
            item: 'kubejs:fbmodium_ingot'
        },
        ingredients : [
            {
                "item": "minecraft:nether_star"
              },
              {
                "item": "minecraft:nether_star"
              },
              {
                "item": "minecraft:nether_star"
              },
              {
                "item": "minecraft:nether_star"
              },
              {
                "item": "minecraft:netherite_ingot"
              },
              {
                "item": "minecraft:netherite_ingot"
              },
              {
                "item": "minecraft:netherite_ingot"
              },
              {
                "item": "minecraft:netherite_ingot"
              }
        ],
        result: {
            item: "kubejs:nether_infused_fbmodium_ingot",
            count: 1
        }
    })

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 2000000,
        input: {
            item: 'kubejs:nether_infused_fbmodium_ingot'
        },
        ingredients : [
            {
                "item": "extendedcrafting:ender_star"
              },
              {
                "item": "extendedcrafting:ender_star"
              },
              {
                "item": "extendedcrafting:ender_star"
              },
              {
                "item": "extendedcrafting:ender_star"
              },
              {
                "tag": "forge:ores/draconium"
              },
              {
                "tag": "forge:ores/draconium"
              },
              {
                "tag": "forge:ores/draconium"
              },
              {
                "tag": "forge:ores/draconium"
              }
        ],
        result: {
            item: "kubejs:end_infused_fbmodium_ingot",
            count: 1
        }
    })

    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 2500000,
        input: {
            item: 'kubejs:end_infused_fbmodium_ingot'
        },
        ingredients : [
            {
                "item": "projecte:red_matter"
              },
              {
                "item": "projecte:red_matter"
              },
              {
                "item": "projecte:red_matter"
              },
              {
                "item": "projecte:red_matter"
              },
              {
                "item": "draconicevolution:dragon_heart"
              },
              {
                "item": "draconicevolution:dragon_heart"
              },
              {
                "item": "draconicevolution:dragon_heart"
              },
              {
                "item": "draconicevolution:dragon_heart"
              }
        ],
        result: {
            item: "kubejs:ultimate_infused_fbmodium_ingot",
            count: 1
        }
    })

  })