n.d(t, { A: () => d });
var e = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    u = n(522265),
    r = n(649045),
    s = n(470613);
let o = {
    header: { pixels: 20, className: s.wx },
    sidebar: { pixels: 32, className: s.pz },
    card: { pixels: 40, className: s.Nr },
    list: { pixels: 44, className: s.p_ },
    dialog: { pixels: 48, className: s.r3 },
};
function d(l) {
    let { project: t, size: n, className: i } = l,
        { pixels: d, className: c } = o[n],
        { url: p, glyphSize: f } = (0, u.A)(t, d);
    return null == p
        ? (0, e.jsx)(r.A, { applicationId: t.application_id, name: t.name, glyphSize: f, className: a()(s.Gt, c, i) })
        : (0, e.jsx)("img", { alt: "", src: p, className: a()(s.Gt, s.Sl, c, i) });
}
