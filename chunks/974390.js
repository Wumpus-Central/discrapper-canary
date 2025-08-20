n.d(t, { h: () => s });
var r = n(818083),
    i = n(520278),
    a = n(46140);
let o = (0, r.B)({
    id: "2025-02_quest_home_static_image",
    kind: "user",
    label: "Quest Home Static Image Experiment",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 0,
            label: "Control",
            config: { enabled: !1 },
        },
        {
            id: 1,
            label: "Enabled",
            config: { enabled: !0 },
        },
    ],
});
function s(e, t) {
    return (0, i.J)(o, a.S7.QUEST_HOME_FORCE_STATIC_IMAGE, e, t);
}
