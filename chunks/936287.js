(t.read = function (e, t, n, r, i) {
    var s,
        a,
        o = 8 * i - r - 1,
        l = (1 << o) - 1,
        u = l >> 1,
        c = -7,
        d = n ? i - 1 : 0,
        _ = n ? -1 : 1,
        f = e[t + d];
    for (d += _, s = f & ((1 << -c) - 1), f >>= -c, c += o; c > 0; s = 256 * s + e[t + d], d += _, c -= 8);
    for (a = s & ((1 << -c) - 1), s >>= -c, c += r; c > 0; a = 256 * a + e[t + d], d += _, c -= 8);
    if (0 === s) s = 1 - u;
    else {
        if (s === l) return a ? NaN : (1 / 0) * (f ? -1 : 1);
        (a += Math.pow(2, r)), (s -= u);
    }
    return (f ? -1 : 1) * a * Math.pow(2, s - r);
}),
    (t.write = function (e, t, n, r, i, s) {
        var a,
            o,
            l,
            u = 8 * s - i - 1,
            c = (1 << u) - 1,
            d = c >> 1,
            _ = 5960464477539062e-23 * (23 === i),
            f = r ? 0 : s - 1,
            p = r ? 1 : -1,
            h = +(t < 0 || (0 === t && 1 / t < 0));
        for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
                ? ((o = +!!isNaN(t)), (a = c))
                : ((a = Math.floor(Math.log(t) / Math.LN2)),
                  t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                  a + d >= 1 ? (t += _ / l) : (t += _ * Math.pow(2, 1 - d)),
                  t * l >= 2 && (a++, (l /= 2)),
                  a + d >= c
                      ? ((o = 0), (a = c))
                      : a + d >= 1
                        ? ((o = (t * l - 1) * Math.pow(2, i)), (a += d))
                        : ((o = t * Math.pow(2, d - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            e[n + f] = 255 & o, f += p, o /= 256, i -= 8
        );
        for (a = (a << i) | o, u += i; u > 0; e[n + f] = 255 & a, f += p, a /= 256, u -= 8);
        e[n + f - p] |= 128 * h;
    });
