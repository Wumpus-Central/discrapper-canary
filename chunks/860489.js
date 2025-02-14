n.d(t, {
    P0: () => r,
    ZP: () => a
});
var i,
    s = n(818083),
    r = (((i = {})[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.SUMMER_2024 = 1)] = 'SUMMER_2024'), i);
let l = (0, s.B)({
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
    a = (e) => l.useExperiment({ location: e }).variant;
