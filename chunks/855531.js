var i = n(945810),
    r = n(773527),
    a = n(221596);
let s = (0, i.mj)({
    kind: "user",
    name: "2026-09-hexagon-campaign-client",
    defaultConfig: { enabled: !1, questHomeRedirect: !1 },
    variations: {
        0: { enabled: !1, questHomeRedirect: !1 },
        1: { enabled: !0, questHomeRedirect: !0 },
        2: { enabled: !0, questHomeRedirect: !1 },
    },
});
n.d(
    t,
    {},
    {
        dc: function (e) {
            if ((0, r.Aq)()) return !1;
            let t = s.getConfig({ location: e });
            return t.enabled && t.questHomeRedirect;
        },
        dp: function (e) {
            return s.useConfig({ location: e }).enabled;
        },
        iA: function (e) {
            return s.getConfig({ location: e }).enabled;
        },
        kV: function (e) {
            let t = (0, r.Tn)(e),
                { enabled: n } = s.useConfig(
                    { location: a.rE.QUEST_HOME_HERO_SHELF_DESKTOP },
                    { autoTrackExposure: t },
                );
            return t && n && !(0, r.Aq)();
        },
    },
);
