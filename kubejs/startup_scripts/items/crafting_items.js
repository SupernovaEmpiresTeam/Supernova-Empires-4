

onEvent('item.registry', event => {

    // Items to use in craftings

    event.create('disk_cable').displayName('Disk Cable')
    event.create('disk_casing').displayName('Disk Casing')
    event.create('logic_board').displayName('Logic Board')
    event.create('module_base').displayName('Module Base')
    event.create('machine_casing').displayName('Machine Casing')
    event.create('energy_module').displayName('Energy Module')
    event.create('universal_upgrade_core').displayName('Universal Upgrade Core')
    event.create('universal_upgrade_cover').displayName('Universal Upgrade Cover')
    event.create('universal_upgrade').displayName('Universal Upgrade')
    event.create('silicon').displayName('Silicon')
    event.create('hammer').type('shovel').tier('stone').displayName('Hammer').maxDamage(2000)
    event.create('transmutation_stone').displayName('Transmutation Stone').maxDamage(5000)

})
