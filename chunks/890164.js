n.d(t, { W1: () => r, lX: () => a });
var i = n(945810),
    s = n(945939);
let l = (0, i.mj)({
        name: "2026-02-private-profiles",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = (e) => {
        let t = l.useConfig({ location: e }).enabled,
            n = (0, s.Q6)(e);
        return t || n;
    },
    r = (e) => l.getConfig({ location: e }).enabled || (0, s.De)(e);
