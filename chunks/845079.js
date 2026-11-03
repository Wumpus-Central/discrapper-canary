e.d(s, { A: () => m });
var l = e(477900);
e(582128);
var i = e(503698),
    p = e.n(i),
    c = e(522265),
    t = e(649045),
    r = e(470613);
let d = {
    header: { pixels: 20, className: r.wx },
    sidebar: { pixels: 32, className: r.pz },
    card: { pixels: 40, className: r.Nr },
    list: { pixels: 44, className: r.p_ },
    dialog: { pixels: 48, className: r.r3 },
};
function m(a) {
    let { project: s, size: e, className: i } = a,
        { pixels: m, className: n } = d[e],
        { url: N, glyphSize: x } = (0, c.A)(s, m);
    return null == N
        ? (0, l.jsx)(t.A, { applicationId: s.application_id, name: s.name, glyphSize: x, className: p()(r.Gt, n, i) })
        : (0, l.jsx)("img", { alt: "", src: N, className: p()(r.Gt, r.Sl, n, i) });
}
