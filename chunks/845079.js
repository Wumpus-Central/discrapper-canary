n.d(l, { A: () => p });
var e = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    u = n(323384),
    r = n(105840),
    s = n(522265),
    o = n(470613);
function d(t) {
    let { project: l, glyphSize: n, className: i } = t,
        { character: a, backgroundColor: s, foregroundColor: o } = (0, r.A)(l.application_id, l.name);
    return (0, e.jsx)("div", {
        className: i,
        style: { backgroundColor: s, color: o },
        "aria-hidden": !0,
        children: a ?? (0, e.jsx)(u.k, { size: "custom", width: n, height: n, color: "currentColor" }),
    });
}
let c = {
    header: { pixels: 20, className: o.wx },
    sidebar: { pixels: 32, className: o.pz },
    card: { pixels: 40, className: o.Nr },
    list: { pixels: 44, className: o.p_ },
    dialog: { pixels: 48, className: o.r3 },
};
function p(t) {
    let { project: l, size: n, className: i } = t,
        { pixels: u, className: r } = c[n],
        { url: p, glyphSize: h } = (0, s.A)(l, u);
    return null == p
        ? (0, e.jsx)(d, { project: l, glyphSize: h, className: a()(o.Gt, o.qf, r, i) })
        : (0, e.jsx)("img", { alt: "", src: p, className: a()(o.Gt, o.Sl, r, i) });
}
