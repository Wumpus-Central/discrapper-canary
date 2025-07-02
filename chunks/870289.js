n.d(t, { F: () => a });
var r = n(818083),
    l = n(987338);
let i = (0, r.B)({
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
    a = (e) => i.useExperiment({ location: e }).collectiblesBrowseEnabled;
