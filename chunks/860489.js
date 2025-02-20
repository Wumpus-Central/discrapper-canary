n.d(t, {
    P0: () => s,
    ZP: () => l
});
var r,
    i = n(818083),
    s = (((r = {})[(r.DEFAULT = 0)] = 'DEFAULT'), (r[(r.SUMMER_2024 = 1)] = 'SUMMER_2024'), r);
let a = (0, i.B)({
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
    l = (e) => a.useExperiment({ location: e }).variant;
