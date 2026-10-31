n.d(t, { A: () => l, t: () => s });
let i = (0, n(945810).mj)({
    name: "2026-03-soundmoji-sending",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function l(e) {
    let { location: t } = e;
    return i.getConfig({ location: t }).enabled;
}
function s(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
}
