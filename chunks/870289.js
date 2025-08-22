n.d(t, {
    FF: () => s,
    KS: () => a,
    eN: () => i,
});
var r = n(818083),
    l = n(987338);
let a = (0, r.B)({
        kind: "user",
        id: "2025-06_collectibles_browse",
        label: "Collectibles Browse Experiment",
        commonTriggerPoint: l.$P.COLLECTIBLES_SHOP_OPEN,
        defaultConfig: {
            filterEnabled: !1,
            searchEnabled: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Enable collectibles browse",
                config: {
                    filterEnabled: !0,
                    searchEnabled: !0,
                },
            },
            {
                id: 2,
                label: "Enable collectibles browse with only filter",
                config: {
                    filterEnabled: !0,
                    searchEnabled: !1,
                },
            },
        ],
    }),
    s = (e) => a.useExperiment({ location: e }).filterEnabled,
    i = (e) => a.useExperiment({ location: e }).searchEnabled;
