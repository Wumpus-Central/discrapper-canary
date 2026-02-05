n.d(t, { A: () => m, k: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(397927),
    o = n(961350),
    d = n(61881),
    c = n(633098),
    u = n(855255);
function g(e) {
    let t = (0, r.bG)([o.default], () => o.default.getId() === e),
        n = (0, s.VUy)(),
        i = (0, r.bG)([d.A], () => d.A.hasUnsavedChanges());
    return t && (n || i);
}
function m(e) {
    let { userId: t, className: n } = e,
        l = (0, r.bG)([o.default], () => o.default.getId() === t),
        d = (0, s.VUy)();
    return l
        ? (0, i.jsx)("div", {
              className: a()(u.kL, n),
              children: d ? (0, i.jsx)(s.Smm, { className: u.Wg }) : (0, i.jsx)(c.A, { className: u.ZS }),
          })
        : null;
}
