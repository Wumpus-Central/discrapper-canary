r.d(t, { k: () => o });
var n = r(672722),
    i = r(132803),
    o = function (e, t, r) {
        if (i.is.fun(e)) return e;
        if (i.is.arr(e)) return o({ range: e, output: t, extrapolate: r });
        if (i.is.str(e.output[0])) return n.createStringInterpolator(e);
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
            return (function (e, t, r, n, i, o, a, s, l) {
                var u = l ? l(e) : e;
                if (u < t)
                    if ("identity" === a) return u;
                    else "clamp" === a && (u = t);
                if (u > r)
                    if ("identity" === s) return u;
                    else "clamp" === s && (u = r);
                return n === i
                    ? n
                    : t === r
                      ? e <= t
                          ? n
                          : i
                      : (t === -1 / 0 ? (u = -u) : r === 1 / 0 ? (u -= t) : (u = (u - t) / (r - t)),
                        (u = o(u)),
                        n === -1 / 0 ? (u = -u) : i === 1 / 0 ? (u += n) : (u = u * (i - n) + n),
                        u);
            })(t, s[r], s[r + 1], a[r], a[r + 1], c, l, u, e.map);
        };
    };
