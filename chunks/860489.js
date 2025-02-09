n.d(t, {
    P0: () => a,
    ZP: () => l
});
var i,
    r = n(818083),
    a = (((i = {})[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.SUMMER_2024 = 1)] = 'SUMMER_2024'), i);
let s = (0, r.B)({
        kind: 'user',
        id: '2024-07_shy_project',
        label: 'Shy Project Marketing Variation',
        defaultConfig: { variant: 0 },
        treatments: [
            {
                id: 1,
                label: 'Summer 2024',
                config: { variant: 1 }
            }
        ]
    }),
    l = (e) => s.useExperiment({ location: e }).variant;
