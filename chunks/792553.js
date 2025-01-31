t(306872)(r, '__esModule', { value: !0 }),
    (r.default = void 0),
    (r.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-pressed': null
        },
        relatedConcepts: [
            {
                concept: {
                    attributes: [
                        {
                            constraints: ['set'],
                            name: 'aria-pressed'
                        },
                        {
                            name: 'type',
                            value: 'checkbox'
                        }
                    ],
                    name: 'input'
                },
                module: 'HTML'
            },
            {
                concept: {
                    attributes: [
                        {
                            name: 'aria-expanded',
                            value: 'false'
                        }
                    ],
                    name: 'summary'
                },
                module: 'HTML'
            },
            {
                concept: {
                    attributes: [
                        {
                            name: 'aria-expanded',
                            value: 'true'
                        }
                    ],
                    constraints: ['direct descendant of details element with the open attribute defined'],
                    name: 'summary'
                },
                module: 'HTML'
            },
            {
                concept: {
                    attributes: [
                        {
                            name: 'type',
                            value: 'button'
                        }
                    ],
                    name: 'input'
                },
                module: 'HTML'
            },
            {
                concept: {
                    attributes: [
                        {
                            name: 'type',
                            value: 'image'
                        }
                    ],
                    name: 'input'
                },
                module: 'HTML'
            },
            {
                concept: {
                    attributes: [
                        {
                            name: 'type',
                            value: 'reset'
                        }
                    ],
                    name: 'input'
                },
                module: 'HTML'
            },
            {
                concept: {
                    attributes: [
                        {
                            name: 'type',
                            value: 'submit'
                        }
                    ],
                    name: 'input'
                },
                module: 'HTML'
            },
            {
                concept: { name: 'button' },
                module: 'HTML'
            },
            {
                concept: { name: 'trigger' },
                module: 'XForms'
            }
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'command']]
    });
