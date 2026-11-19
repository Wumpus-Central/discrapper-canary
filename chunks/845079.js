var l = e(477900);
e(582128);
var i = e(503698),
    p = e.n(i),
    c = e(522265),
    t = e(104299),
    r = e(470613);
let m = {
    header: { pixels: 20, className: r.wx },
    title: { pixels: 24, className: r.DD },
    sidebar: { pixels: 32, className: r.pz },
    card: { pixels: 40, className: r.Nr },
    list: { pixels: 44, className: r.p_ },
    dialog: { pixels: 48, className: r.r3 },
};
e.d(
    a,
    {},
    {
        A: function (s) {
            let { project: a, size: e, className: i } = s,
                { pixels: d, className: n } = m[e],
                { url: N, glyphSize: x } = (0, c.A)(a, d);
            return null == N
                ? (0, l.jsx)(t.A, {
                      applicationId: a.application_id,
                      name: a.name,
                      glyphSize: x,
                      className: p()(r.Gt, n, i),
                  })
                : (0, l.jsx)("img", { alt: "", src: N, className: p()(r.Gt, r.Sl, n, i) });
        },
    },
);
