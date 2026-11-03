t.d(n, { A: () => i, t: () => l });
let s = (0, t(945810).mj)({
    name: "2026-03-soundmoji-sending",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e) {
    let { location: n } = e;
    return s.getConfig({ location: n }).enabled;
}
function l(e) {
    let { location: n } = e;
    return s.useConfig({ location: n }).enabled;
}
