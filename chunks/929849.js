"use strict";
r.d(t, { k: () => a });
var n = r(672722),
    s = r(132803),
    a = function (e, t, r) {
        if (s.is.fun(e)) return e;
        if (s.is.arr(e)) return a({ range: e, output: t, extrapolate: r });
        if (s.is.str(e.output[0])) return n.createStringInterpolator(e);
        var o = e.output,
            i = e.range || [0, 1],
            u = e.extrapolateLeft || e.extrapolate || "extend",
            c = e.extrapolateRight || e.extrapolate || "extend",
            l =
                e.easing ||
                function (e) {
                    return e;
                };
        return function (t) {
            var r = (function (e, t) {
                for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
                return r - 1;
            })(t, i);
            return (function (e, t, r, n, s, a, o, i, u) {
                var c = u ? u(e) : e;
                if (c < t)
                    if ("identity" === o) return c;
                    else "clamp" === o && (c = t);
                if (c > r)
                    if ("identity" === i) return c;
                    else "clamp" === i && (c = r);
                return n === s
                    ? n
                    : t === r
                      ? e <= t
                          ? n
                          : s
                      : (t === -1 / 0 ? (c = -c) : r === 1 / 0 ? (c -= t) : (c = (c - t) / (r - t)),
                        (c = a(c)),
                        n === -1 / 0 ? (c = -c) : s === 1 / 0 ? (c += n) : (c = c * (s - n) + n),
                        c);
            })(t, i[r], i[r + 1], o[r], o[r + 1], l, u, c, e.map);
        };
    };
