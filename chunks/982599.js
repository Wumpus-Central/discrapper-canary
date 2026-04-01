n.d(t, { A: () => g, k: () => m });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(311907),
    r = n(397927),
    o = n(961350),
    c = n(61881),
    d = n(633098),
    u = n(44550);
function m(e) {
    let t = (0, s.bG)([o.default], () => o.default.getId() === e),
        n = (0, r.VUy)(),
        i = (0, s.bG)([c.A], () => c.A.hasUnsavedChanges());
    return t && (n || i);
}
function g(e) {
    let { userId: t, className: n } = e,
        a = (0, s.bG)([o.default], () => o.default.getId() === t),
        c = (0, r.VUy)();
    return a
        ? (0, i.jsx)("div", {
              className: l()(u.kL, n),
              children: c ? (0, i.jsx)(r.Smm, { className: u.Wg }) : (0, i.jsx)(d.A, { className: u.ZS }),
          })
        : null;
}
