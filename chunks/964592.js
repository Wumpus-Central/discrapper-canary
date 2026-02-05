n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var a = n(311907),
    l = n(397927),
    i = n(827343),
    u = n(430452),
    s = n(824744),
    o = n(723702),
    c = n(985018);
function d(e) {
    let t = (0, a.bG)([u.A], () => (0, s.M)(u.A.getOutputVolume()));
    return (0, r.jsx)(l.aK1, {
        id: "output",
        label: c.intl.string(c.t.eATD2B),
        control: (n, a) =>
            (0, r.jsx)(l.i42, {
                ...n,
                ref: a,
                value: t,
                maxValue: o.isPlatformEmbedded ? 200 : 100,
                onChange: (t) => i.A.setOutputVolume((0, s.w)(t), { analyticsLocations: e }),
                "aria-label": c.intl.string(c.t.eATD2B),
            }),
    });
}
