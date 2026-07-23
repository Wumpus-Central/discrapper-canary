n.d(t, { J9: () => s, VV: () => i });
var a = n(945810);
let l = (0, a.mj)({
        name: "2026-04-badge-discovery",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    r = (0, a.mj)({
        name: "2026-05-badge-discovery-milestone-2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function s(e) {
    let { location: t } = e;
    return l.useConfig({ location: t }).enabled;
}
function i(e) {
    let { location: t } = e;
    return r.useConfig({ location: t }).enabled;
}
