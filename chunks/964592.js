n.d(e, { A: () => m });
var i = n(627968);
n(64700);
var s = n(17928),
    l = n(477782),
    r = n(964355),
    a = n(827343),
    u = n(51760),
    o = n(824744),
    c = n(723702),
    d = n(985018);
function m(t) {
    let e = (0, s.bG)([u.Ay], () => (0, o.M)(u.Ay.getOutputVolume()));
    return (0, i.jsx)(l.aK, {
        id: "output",
        label: d.intl.string(d.t.eATD2B),
        control: (n, s) =>
            (0, i.jsx)(r.i, {
                ...n,
                ref: s,
                value: e,
                maxValue: c.isPlatformEmbedded ? 200 : 100,
                onChange: (e) => a.A.setOutputVolume((0, o.w)(e), { analyticsLocations: t }),
                "aria-label": d.intl.string(d.t.eATD2B),
            }),
    });
}
