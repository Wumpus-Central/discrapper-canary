n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(477782),
    r = n(964355),
    a = n(827343),
    u = n(51760),
    o = n(824744),
    d = n(723702),
    c = n(985018);
function h(e) {
    let t = (0, l.bG)([u.Ay], () => (0, o.M)(u.Ay.getOutputVolume()));
    return (0, i.jsx)(s.aK, {
        id: "output",
        label: c.intl.string(c.t.eATD2B),
        control: (n, l) =>
            (0, i.jsx)(r.i, {
                ...n,
                ref: l,
                value: t,
                maxValue: d.isPlatformEmbedded ? 200 : 100,
                onChange: (t) => a.A.setOutputVolume((0, o.w)(t), { analyticsLocations: e }),
                "aria-label": c.intl.string(c.t.eATD2B),
            }),
    });
}
