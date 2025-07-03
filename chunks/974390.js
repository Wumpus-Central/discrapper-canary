n.d(t, { h: () => i });
var r = n(818083),
    o = n(520278),
    s = n(46140);
let a = (0, r.B)({
    id: '2025-02_quest_home_static_image',
    kind: 'user',
    label: 'Quest Home Static Image Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e, t) {
    return (0, o.J)(a, s.S7.QUEST_HOME_FORCE_STATIC_IMAGE, e, t);
}
