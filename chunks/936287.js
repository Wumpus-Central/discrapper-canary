(t.read = function (e, t, n, r, i) {
    var a,
        s,
        o = 8 * i - r - 1,
        l = (1 << o) - 1,
        c = l >> 1,
        u = -7,
        d = n ? i - 1 : 0,
        f = n ? -1 : 1,
        p = e[t + d];
    for (d += f, a = p & ((1 << -u) - 1), p >>= -u, u += o; u > 0; a = 256 * a + e[t + d], d += f, u -= 8);
    for (s = a & ((1 << -u) - 1), a >>= -u, u += r; u > 0; s = 256 * s + e[t + d], d += f, u -= 8);
    if (0 === a) a = 1 - c;
    else {
        if (a === l) return s ? NaN : (1 / 0) * (p ? -1 : 1);
        (s += Math.pow(2, r)), (a -= c);
    }
    return (p ? -1 : 1) * s * Math.pow(2, a - r);
}),
    (t.write = function (e, t, n, r, i, a) {
        var s,
            o,
            l,
            c = 8 * a - i - 1,
            u = (1 << c) - 1,
            d = u >> 1,
            f = 5.960464477539062e-8 * (23 === i),
            p = r ? 0 : a - 1,
            _ = r ? 1 : -1,
            h = +(t < 0 || (0 === t && 1 / t < 0));
        for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
                ? ((o = +!!isNaN(t)), (s = u))
                : ((s = Math.floor(Math.log(t) / Math.LN2)),
                  t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                  s + d >= 1 ? (t += f / l) : (t += f * Math.pow(2, 1 - d)),
                  t * l >= 2 && (s++, (l /= 2)),
                  s + d >= u
                      ? ((o = 0), (s = u))
                      : s + d >= 1
                        ? ((o = (t * l - 1) * Math.pow(2, i)), (s += d))
                        : ((o = t * Math.pow(2, d - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            e[n + p] = 255 & o, p += _, o /= 256, i -= 8
        );
        for (s = (s << i) | o, c += i; c > 0; e[n + p] = 255 & s, p += _, s /= 256, c -= 8);
        e[n + p - _] |= 128 * h;
    });
