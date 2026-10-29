n.d(t, { N: () => a, V: () => s });
var l = n(945810),
    i = n(258204);
let r = (0, l.mj)({
    kind: "user",
    name: "2026-10-soundboard-new-sounds-badge",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s(e) {
    return r.useConfig({ location: e }).enabled;
}
function a(e, t) {
    let n = (0, i.t)(e),
        l = s(n ? t : `Invalid - ${t}`);
    return n && l;
}
