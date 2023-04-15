// priority: 0


console.info('Tags Loaded')


onEvent('entity_type.tags', event => {
	event.get('industrialforegoing:mob_imprisonment_tool_blacklist')
	event.remove('industrialforegoing:mob_imprisonment_tool_blacklist', 'minecraft:mule')
  })