n.d(t, { D: () => r });
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2025-02_name_plate_experiment',
        label: 'Name Plate Experiment',
        defaultConfig: {
            canSee: !1,
            canBuy: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Can see',
                config: {
                    canSee: !0,
                    canBuy: !1
                }
            },
            {
                id: 2,
                label: 'Can see and buy',
                config: {
                    canSee: !0,
                    canBuy: !0
                }
            }
        ]
    }),
    r = (e) => i.useExperiment({ location: e });
