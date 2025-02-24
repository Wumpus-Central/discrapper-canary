r.d(t, { I: () => o });
var n = r(818083),
    i = r(987338);
let l = (0, n.B)({
        kind: 'user',
        id: '2025-02_shop_anime_v3_drop_rollout',
        label: 'Shop Anime V3 drop rollout',
        defaultConfig: { isOut: !1 },
        treatments: [
            {
                id: 1,
                label: 'Anime V3 is out',
                config: { isOut: !0 }
            }
        ],
        commonTriggerPoint: i.$P.COLLECTIBLES_SHOP_OPEN
    }),
    o = (e) => l.useExperiment({ location: e }).isOut;
