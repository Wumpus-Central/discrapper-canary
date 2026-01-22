n.d(t, { H: () => s });
var r = n(945810),
    i = n(128319);
let a = (0, r.mj)({
    name: "2025-12-mobile-golive-tile-resolution",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = i.p.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n ? a.definition.defaultConfig : a.getConfig({ location: e });
}
