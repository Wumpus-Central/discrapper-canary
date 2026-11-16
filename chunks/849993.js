n.d(t, { o: () => c, H: () => u });
var i = n(988468),
    r = n(287809),
    a = n(312809),
    s = n(734066),
    l = n(945810);
let o = { enabled: !1 },
    d = (0, l.mj)({
        name: "2026-11-autoclips-ea-upsell",
        kind: "user",
        defaultConfig: o,
        variations: { 0: o, 1: { enabled: !0 } },
    });
function c(e) {
    return (
        (!!(0, s.ri)(i.Ay) || !!(0, s.cB)()) &&
        ((0, s.qj)(r.default.getCurrentUser())
            ? a.A.getConfig({ location: e }).marketingEnabled
            : d.getConfig({ location: e }).enabled)
    );
}
function u(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = (0, s.W1)(),
        r = (0, s.Vl)(),
        l = n && i,
        { marketingEnabled: o } = a.A.useConfig({ location: e }, { autoTrackExposure: l && r }),
        { enabled: c } = ((t = { autoTrackExposure: l && !r }), d.useConfig({ location: e }, t));
    return !!l && (r ? o : c);
}
