var i = n(945810),
    r = n(189916);
let a = (0, i.mj)({
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
            let t = a.getConfig({ location: e });
            return t.enabled && t.questHomeRedirect;
        },
        dp: function (e) {
            return a.useConfig({ location: e }).enabled;
        },
        kV: function (e) {
            return (0, r.Tn)(e) && !(0, r.Aq)();
        },
    },
);
