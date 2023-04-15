// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	event.shapeless('5x kubejs:one_dollar',
        [
            'kubejs:five_dollar'
        ]),
    
    event.shapeless('10x kubejs:one_dollar',
        [
            'kubejs:ten_dollar'
        ]),
    
    event.shapeless('20x kubejs:one_dollar',
        [
            'kubejs:twenty_dollar'
        ]),

    event.shapeless('50x kubejs:one_dollar',
        [
            'kubejs:fifty_dollar'
        ]),

    
    // Five Dollars

    event.shapeless('kubejs:five_dollar',
        [
            '5x kubejs:one_dollar'
        ]),

    event.shapeless('2x kubejs:five_dollar',
        [
            'kubejs:ten_dollar'
        ]
    ),
    
    event.shapeless('4x kubejs:five_dollar',
        [
            'kubejs:twenty_dollar'
        ]
    ),

    event.shapeless('10x kubejs:five_dollar',
        [
            'kubejs:fifty_dollar'
        ]
    ),

    event.shapeless('20x kubejs:five_dollar',
        [
            'kubejs:one_hundred_dollar'
        ]
    ),

    // Ten Dollars

    event.shapeless('kubejs:ten_dollar',
        [
            "2x kubejs:five_dollar"
        ]),

    event.shapeless('2x kubejs:ten_dollar',
        [
            'kubejs:twenty_dollar'
        ]),
    
    event.shapeless('5x kubejs:ten_dollar',
        [
            'kubejs:fifty_dollar'
        ]),
    
    event.shapeless('10x kubejs:ten_dollar',
        [
            'kubejs:one_hundred_dollar'
        ]),
    
    event.shapeless('50x kubejs:ten_dollar',
        [
            'kubejs:five_hundred_dollar'
        ])

    // Twenty Dollars

    event.shapeless('kubejs:twenty_dollar',
        [
            '2x kubejs:ten_dollar'
        ]),

    event.shapeless('kubejs:twenty_dollar',
        [
            '4x kubejs:five_dollar'
        ]),
    
    event.shapeless('4x kubejs:twenty_dollar',
        [
            'kubejs:one_hundred_dollar'
        ])
    
    // Fifty Dollars
    
    event.shapeless('kubejs:fifty_dollar',
        [
            'kubejs:ten_dollar',
            '2x kubejs:twenty_dollar'
        ]),
    
    event.shapeless('kubejs:fifty_dollar',
        [
            '5x kubejs:ten_dollar'
        ]),
    
    event.shapeless('2x kubejs:fifty_dollar',
        [
            'kubejs:one_hundred_dollar'
        ]),
    
    event.shapeless('10x kubejs:fifty_dollar',
        [
            'kubejs:five_hundred_dollar'
        ]),
    
    event.shapeless('20x kubejs:fifty_dollar',
        [
            'kubejs:one_thousand_dollar'
        ]),
	
	// One Hundred Dollars

    event.shapeless('kubejs:one_hundred_dollar',
        [
            '2x kubejs:fifty_dollar'
        ]),

    event.shapeless('kubejs:one_hundred_dollar',
        [
            '5x kubejs:twenty_dollar'
        ]),

    event.shapeless('5x kubejs:one_hundred_dollar',
        [
            'kubejs:five_hundred_dollar'
        ]),

    event.shapeless('10x kubejs:one_hundred_dollar',
        [
            'kubejs:one_thousand_dollar'
        ]),
    
    event.shapeless('50x kubejs:one_hundred_dollar',
        [
            'kubejs:five_thousand_dollar'
        ]),

    
    // Five Hunderd Dollars

    event.shapeless('kubejs:five_hundred_dollar',
        [
            '5x kubejs:one_hundred_dollar'
        ]),
    
    event.shapeless('2x kubejs:five_hundred_dollar',
        [
            'kubejs:one_thousand_dollar'
        ]),
    
    event.shapeless('10x kubejs:five_hundred_dollar',
        [
            'kubejs:five_thousand_dollar'
        ]),

    event.shapeless('20x kubejs:five_hundred_dollar',
        [
            'kubejs:ten_thousand_dollar'
        ]),

    // One Thousand Dollars

    event.shapeless('kubejs:one_thousand_dollar',
        [
            '2x kubejs:five_hundred_dollar'
        ]),
    
    event.shapeless('5x kubejs:one_thousand_dollar',
        [
            'kubejs:five_thousand_dollar'
        ]),

    event.shapeless('10x kubejs:one_thousand_dollar',
        [
            'kubejs:ten_thousand_dollar'
        ]),
    
    // Five Thousand Dollars

    event.shapeless('kubejs:five_thousand_dollar',
        [
            '5x kubejs:one_thousand_dollar'
        ]),
    
    event.shapeless('2x kubejs:five_thousand_dollar',
        [
            'kubejs:ten_thousand_dollar'
        ]),
    
    // Ten Thousand Dollars

    event.shapeless('kubejs:ten_thousand_dollar',
        [
            '2x kubejs:five_thousand_dollar'
        ])
})
