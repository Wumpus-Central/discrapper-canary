"use strict";
r.d(t, { k: () => i });
var n = r(672722),
    o = r(132803),
    i = function (e, t, r) {
        if (o.is.fun(e)) return e;
        if (o.is.arr(e)) return i({ range: e, output: t, extrapolate: r });
        if (o.is.str(e.output[0])) return n.createStringInterpolator(e);
        var a = e.output,
            s = e.range || [0, 1],
            l = e.extrapolateLeft || e.extrapolate || "extend",
            u = e.extrapolateRight || e.extrapolate || "extend",
            c =
                e.easing ||
                function (e) {
                    return e;
                };
        return function (t) {
            var r = (function (e, t) {
                for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
                return r - 1;
            })(t, s);
            return (function (e, t, r, n, o, i, a, s, l) {
                var u = l ? l(e) : e;
                if (u < t)
                    if ("identity" === a) return u;
                    else "clamp" === a && (u = t);
                if (u > r)
                    if ("identity" === s) return u;
                    else "clamp" === s && (u = r);
                return n === o
                    ? n
                    : t === r
                      ? e <= t
                          ? n
                          : o
                      : (t === -1 / 0 ? (u = -u) : r === 1 / 0 ? (u -= t) : (u = (u - t) / (r - t)),
                        (u = i(u)),
                        n === -1 / 0 ? (u = -u) : o === 1 / 0 ? (u += n) : (u = u * (o - n) + n),
                        u);
            })(t, s[r], s[r + 1], a[r], a[r + 1], c, l, u, e.map);
        };
    };
