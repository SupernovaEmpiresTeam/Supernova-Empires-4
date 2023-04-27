onEvent('item.registry.tool_tiers', event => {
    event.add('olympus', tier => {
      tier.uses = 900000
      tier.speed = 77.7
      tier.attackDamageBonus = 1000000.2
      tier.level = 20
      tier.enchantmentValue = 0
      tier.repairIngredient = 'minecraft:portal_frame'
    })
  })