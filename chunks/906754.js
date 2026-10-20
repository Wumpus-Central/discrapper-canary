t.d(n, { A: () => c });
var l = t(477900);
t(582128);
var a = t(503698),
    i = t.n(a),
    r = t(548118),
    o = t(936755),
    s = t(978110);
let c = function (e) {
    let { guild: n, children: t } = e,
        a =
            null != n
                ? (0, l.jsx)(r.Ay, {
                      guild: n,
                      size: r.Ay.Sizes.MEDIUM,
                      className: i()(s.Kk, null == n.icon ? s.HO : s.FP),
                      active: !0,
                  })
                : null;
    return (0, l.jsxs)("span", {
        children: [(0, l.jsx)(o.A, { children: a }), (0, l.jsx)("span", { className: s.UU, children: t })],
    });
};
