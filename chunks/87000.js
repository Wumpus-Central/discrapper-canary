"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(317097),
    o = n(17928),
    l = n(661531),
    u = n(602853),
    c = n(173936),
    d = n(775602),
    _ = n(394549);
let f = l.A.unsafe_rawColors.PRIMARY_300,
    h = l.A.unsafe_rawColors.WHITE,
    p = l.A.unsafe_rawColors.PRIMARY_630;
function E(e) {
    let { color: t, size: n, forcedIconColor: r, className: l, iconClassName: E } = e,
        [m, g] = (0, o.yK)([d.A], () => [d.A.desaturateUserColors, d.A.saturation]),
        A = (0, u.r)(f).hex(),
        I = t ?? A,
        T = (0, a.$k)((0, a.LX)(I), !1, m ? g : null),
        S = (0, u.r)(h).hex(),
        N = (0, u.r)(p).hex(),
        y =
            null != r
                ? r
                : (function (e) {
                      let { backgroundColor: t, colors: n } = e,
                          [i, r] = n,
                          s = "string" == typeof t ? (0, a.LX)(t) : t,
                          o = "string" == typeof i ? (0, a.LX)(i) : i,
                          l = "string" == typeof r ? (0, a.LX)(r) : r;
                      return (0, a.bJ)(s, o) > (0, a.bJ)(s, l) ? i : r;
                  })({ backgroundColor: I, colors: [S, N] }),
        C = n / 8;
    return (0, i.jsx)("div", {
        style: { background: T, width: n, height: n, borderRadius: n, lineHeight: `${n}px` },
        className: l,
        children: (0, i.jsx)(c.q, {
            size: "custom",
            color: y,
            className: s()(_.w, E),
            width: n - 2 * C,
            height: n - 2 * C,
            style: { margin: C },
        }),
    });
}
