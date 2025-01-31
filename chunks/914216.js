n.d(t, { Z: () => s });
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
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
        commonTriggerPoint: r.$P.CONNECTION_OPEN
    }),
    s = (e) => a.getCurrentConfig({ location: e }).enabled;
