r.d(t, { F: () => o });
var n = r(818083),
    l = r(987338);
let i = (0, n.B)({
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
    o = (e) => i.useExperiment({ location: e }).collectiblesBrowseEnabled;
