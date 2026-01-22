n.d(t, {
    A: () => p,
    k: () => f,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(397927),
    o = n(961350),
    c = n(61881),
    u = n(633098),
    d = n(855255);

function f(e) {
    let t = (0, a.bG)([o.default], () => o.default.getId() === e),
        n = (0, s.VUy)(),
        r = (0, a.bG)([c.A], () => c.A.hasUnsavedChanges());
    return t && (n || r);
}

function p(e) {
    let { userId: t, className: n } = e,
        l = (0, a.bG)([o.default], () => o.default.getId() === t),
        c = (0, s.VUy)();
    return l
        ? (0, r.jsx)("div", {
              className: i()(d.kL, n),
              children: c
                  ? (0, r.jsx)(s.Smm, {
                        className: d.Wg,
                    })
                  : (0, r.jsx)(u.A, {
                        className: d.ZS,
                    }),
          })
        : null;
}
