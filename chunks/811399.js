n.d(t, { d: () => s });
var r = n(818083),
    i = n(497505),
    o = n(46140);
let a = (0, r.B)({
        id: '2025-07_quest_brand_safety_context',
        kind: 'user',
        label: 'Quest brand safety context',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    s = (e) => {
        let t = e === i.jn.QUEST_BAR_MOBILE ? o.dr.QUESTS_BAR_MOBILE : o.dr.QUESTS_BAR;
        return a.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
    };
