n.d(t, {
    P0: function () {
        return r;
    }
});
var i,
    r,
    s = n(818083);
((i = r || (r = {}))[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.SUMMER_2024 = 1)] = 'SUMMER_2024');
let a = (0, s.B)({
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
});
t.ZP = (e) => a.useExperiment({ location: e }).variant;
