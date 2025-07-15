r.d(t, { F: () => i });
var n = r(818083),
    l = r(987338);
let o = (0, n.B)({
        kind: 'user',
        id: '2025-06_collectibles_browse',
        label: 'Collectibles Browse Experiment',
        commonTriggerPoint: l.$P.COLLECTIBLES_SHOP_OPEN,
        defaultConfig: { collectiblesBrowseEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable collectibles browse',
                config: { collectiblesBrowseEnabled: !0 }
            }
        ]
    }),
    i = (e) => o.useExperiment({ location: e }).collectiblesBrowseEnabled;
