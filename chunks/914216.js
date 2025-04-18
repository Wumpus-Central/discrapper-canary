n.d(t, { Z: () => o });
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
        kind: 'user',
        id: '2024-12_shop_link_mention',
        label: 'Collectibles Shop Link Mention Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Render shop link as mention',
                config: { enabled: !0 }
            }
        ],
        commonTriggerPoint: i.$P.CONNECTION_OPEN
    }),
    o = (e) => a.getCurrentConfig({ location: e }).enabled;
