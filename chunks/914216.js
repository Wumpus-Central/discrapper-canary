r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
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
        commonTriggerPoint: a.$P.CONNECTION_OPEN
    }),
    s = (e) => o.getCurrentConfig({ location: e }).enabled;
