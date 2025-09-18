t.d(n, { m: () => o });
var l = t(427164),
    i = t(438379);
let r = (0, l.le)({
    name: "2025-09-user-profile-application-widgets-viewing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function o(e) {
    let { location: n, autoTrackExposure: t = !0 } = e,
        l = (0, i.J)({
            location: n,
            autoTrackExposure: t,
        }),
        o = r.useConfig({ location: n }).enabled;
    return !l && o;
}
