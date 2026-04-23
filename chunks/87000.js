"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(317097),
    a = n(17928),
    o = n(661531),
    d = n(602853),
    c = n(173936),
    u = n(775602),
    _ = n(394549);
let h = o.A.unsafe_rawColors.PRIMARY_300,
    p = o.A.unsafe_rawColors.WHITE,
    m = o.A.unsafe_rawColors.PRIMARY_630;
function g(e) {
    let { color: t, size: n, forcedIconColor: s, className: o, iconClassName: g } = e,
        [x, f] = (0, a.yK)([u.A], () => [u.A.desaturateUserColors, u.A.saturation]),
        A = (0, d.r)(h).hex(),
        E = t ?? A,
        I = (0, r.$k)((0, r.LX)(E), !1, x ? f : null),
        v = (0, d.r)(p).hex(),
        j = (0, d.r)(m).hex(),
        C =
            null != s
                ? s
                : (function (e) {
                      let { backgroundColor: t, colors: n } = e,
                          [i, s] = n,
                          l = "string" == typeof t ? (0, r.LX)(t) : t,
                          a = "string" == typeof i ? (0, r.LX)(i) : i,
                          o = "string" == typeof s ? (0, r.LX)(s) : s;
                      return (0, r.bJ)(l, a) > (0, r.bJ)(l, o) ? i : s;
                  })({ backgroundColor: E, colors: [v, j] }),
        N = n / 8;
    return (0, i.jsx)("div", {
        style: { background: I, width: n, height: n, borderRadius: n, lineHeight: `${n}px` },
        className: o,
        children: (0, i.jsx)(c.q, {
            size: "custom",
            color: C,
            className: l()(_.w, g),
            width: n - 2 * N,
            height: n - 2 * N,
            style: { margin: N },
        }),
    });
}
