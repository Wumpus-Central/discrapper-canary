n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(690868);
function l(e) {
    var t;
    let { name: n, className: i, state: l, isInline: c, onClick: u } = e,
        d = n + (c ? ":" : ""),
        f = null;
    (null == l ? void 0 : l.isActive) && !c
        ? (f = o.vu)
        : (null == l || null == (t = l.lastValidationResult) ? void 0 : t.success) === !1
          ? (f = o.z3)
          : (null == l ? void 0 : l.hasValue) && !c && (f = o.hZ);
    let p = (0, r.jsx)(s.Text, {
        variant: c ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: a()(o.uK, { [o.mG]: c }, f, i),
        children: d,
    });
    return null == u
        ? p
        : (0, r.jsx)(s.DUT, {
              className: o.vk,
              onClick: () => u(n),
              children: p,
          });
}
