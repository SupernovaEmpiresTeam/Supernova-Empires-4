onEvent('item.registry.armor_tiers', arms => {
	arms.add('fbmodium', tier => {
		tier.durabilityMultiplier = 15
		tier.slotProtections = [30, 36, 40, 30]
		tier.enchantmentValue = 9
		tier.equipSound = 'minecraft:item.armor.equip_iron'
		tier.repairIngredient = '#forge:ingots/fbmodium'
		tier.toughness = 50.0
	tier.knockbackResistance = 10.0
	})
	arms.add('nether_infused_fbmodium', tier => {
		tier.durabilityMultiplier = 15
		tier.slotProtections = [42, 48, 50, 42]
		tier.enchantmentValue = 19
		tier.equipSound = 'minecraft:item.armor.equip_iron'
		tier.repairIngredient = '#forge:ingots/netherfbmodium'
		tier.toughness = 80.0
		tier.knockbackResistance = 50.0
	})
	arms.add('end_infused_fbmodium', tier => {
		tier.durabilityMultiplier = 15
		tier.slotProtections = [200, 500, 600, 200]
		tier.enchantmentValue = 39
		tier.equipSound = 'minecraft:item.armor.equip_iron'
		tier.repairIngredient = '#forge:ingots/endfbmodium'
		tier.toughness = 130.0
		tier.knockbackResistance = 100.0
	})
	arms.add('ultimate_infused_fbmodium', tier => {
		tier.durabilityMultiplier = 15
		tier.slotProtections = [999, 999, 999, 999]
		tier.enchantmentValue = 99
		tier.equipSound = 'minecraft:item.armor.equip_iron'
		tier.repairIngredient = '#forge:ingots/ultimatefbmodium'
		tier.toughness = 1000.0
		tier.knockbackResistance = 1000.0
	})
})
