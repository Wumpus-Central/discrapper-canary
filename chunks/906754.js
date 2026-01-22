n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(263063),
    o = n(936755),
    l = n(746160);
let c = function (e) {
    let { guild: t, children: n } = e,
        i =
            null != t
                ? (0, r.jsx)(s.A, {
                      guild: t,
                      size: s.A.Sizes.MEDIUM,
                      className: a()(l.Kk, null == t.icon ? l.HO : l.FP),
                      active: !0,
                  })
                : null;
    return (0, r.jsxs)("span", {
        children: [
            (0, r.jsx)(o.A, {
                children: i,
            }),
            (0, r.jsx)("span", {
                className: l.UU,
                children: n,
            }),
        ],
    });
};
