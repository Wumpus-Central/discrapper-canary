r.d(t, {
    FF: () => o,
    KS: () => i,
    eN: () => a
});
var n = r(818083),
    l = r(987338);
let i = (0, n.B)({
        kind: 'user',
        id: '2025-06_collectibles_browse',
        label: 'Collectibles Browse Experiment',
        commonTriggerPoint: l.$P.COLLECTIBLES_SHOP_OPEN,
        defaultConfig: {
            filterEnabled: !1,
            searchEnabled: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Enable collectibles browse',
                config: {
                    filterEnabled: !0,
                    searchEnabled: !0
                }
            },
            {
                id: 2,
                label: 'Enable collectibles browse with only filter',
                config: {
                    filterEnabled: !0,
                    searchEnabled: !1
                }
            }
        ]
    }),
    o = (e) => i.useExperiment({ location: e }).filterEnabled,
    a = (e) => i.useExperiment({ location: e }).searchEnabled;
