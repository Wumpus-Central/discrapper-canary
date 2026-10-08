n.d(t, { A: () => m });
var l = n(477900);
n(582128);
var a = n(503698),
    i = n.n(a),
    r = n(323384),
    s = n(661531),
    u = n(627363),
    o = n(486020),
    d = n(470613);
let c = { md: { pixels: 40, className: d.md }, lg: { pixels: 44, className: d.lg } };
function m(e) {
    let { project: t, size: n, className: a, placeholderClassName: m } = e,
        f = t.preview_application_id ?? t.application_id,
        { data: h } = (0, u.YY)(f),
        { pixels: g, className: x } = c[n];
    return h?.icon == null
        ? (0, l.jsx)("div", {
              className: i()(d.Gt, d.qf, x, a, m),
              "aria-hidden": !0,
              children: (0, l.jsx)(r.k, { size: "custom", width: 20, height: 20, color: s.A.colors.ICON_MUTED }),
          })
        : (0, l.jsx)("img", {
              alt: "",
              src: o.Ay.getApplicationIconURL({ id: f, icon: h.icon, size: g }),
              className: i()(d.Gt, d.Sl, x, a),
          });
}
