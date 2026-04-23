n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(477782),
    r = n(964355),
    a = n(827343),
    o = n(430452),
    u = n(824744),
    c = n(723702),
    d = n(985018);
function m(e) {
    let t = (0, l.bG)([o.Ay], () => (0, u.M)(o.Ay.getOutputVolume()));
    return (0, i.jsx)(s.aK, {
        id: "output",
        label: d.intl.string(d.t.eATD2B),
        control: (n, l) =>
            (0, i.jsx)(r.i, {
                ...n,
                ref: l,
                value: t,
                maxValue: c.isPlatformEmbedded ? 200 : 100,
                onChange: (t) => a.A.setOutputVolume((0, u.w)(t), { analyticsLocations: e }),
                "aria-label": d.intl.string(d.t.eATD2B),
            }),
    });
}
