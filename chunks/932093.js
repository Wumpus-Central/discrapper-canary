(t.read = function (e, t, n, i, r) {
    var a,
        s,
        o = 8 * r - i - 1,
        l = (1 << o) - 1,
        u = l >> 1,
        c = -7,
        d = n ? r - 1 : 0,
        f = n ? -1 : 1,
        _ = e[t + d];
    for (d += f, a = _ & ((1 << -c) - 1), _ >>= -c, c += o; c > 0; a = 256 * a + e[t + d], d += f, c -= 8);
    for (s = a & ((1 << -c) - 1), a >>= -c, c += i; c > 0; s = 256 * s + e[t + d], d += f, c -= 8);
    if (0 === a) a = 1 - u;
    else {
        if (a === l) return s ? NaN : (1 / 0) * (_ ? -1 : 1);
        (s += Math.pow(2, i)), (a -= u);
    }
    return (_ ? -1 : 1) * s * Math.pow(2, a - i);
}),
    (t.write = function (e, t, n, i, r, a) {
        var s,
            o,
            l,
            u = 8 * a - r - 1,
            c = (1 << u) - 1,
            d = c >> 1,
            f = 23 === r ? 5.960464477539062e-8 : 0,
            _ = i ? 0 : a - 1,
            p = i ? 1 : -1,
            h = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (isNaN((t = Math.abs(t))) || t === 1 / 0 ? ((o = isNaN(t) ? 1 : 0), (s = c)) : ((s = Math.floor(Math.log(t) / Math.LN2)), t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)), s + d >= 1 ? (t += f / l) : (t += f * Math.pow(2, 1 - d)), t * l >= 2 && (s++, (l /= 2)), s + d >= c ? ((o = 0), (s = c)) : s + d >= 1 ? ((o = (t * l - 1) * Math.pow(2, r)), (s += d)) : ((o = t * Math.pow(2, d - 1) * Math.pow(2, r)), (s = 0))); r >= 8; e[n + _] = 255 & o, _ += p, o /= 256, r -= 8);
        for (s = (s << r) | o, u += r; u > 0; e[n + _] = 255 & s, _ += p, s /= 256, u -= 8);
        e[n + _ - p] |= 128 * h;
    });
