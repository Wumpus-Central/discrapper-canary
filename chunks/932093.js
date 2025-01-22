(n.read = function (e, n, r, i, a) {
    var o,
        s,
        l = 8 * a - i - 1,
        u = (1 << l) - 1,
        c = u >> 1,
        d = -7,
        f = r ? a - 1 : 0,
        p = r ? -1 : 1,
        h = e[n + f];
    for (f += p, o = h & ((1 << -d) - 1), h >>= -d, d += l; d > 0; o = 256 * o + e[n + f], f += p, d -= 8);
    for (s = o & ((1 << -d) - 1), o >>= -d, d += i; d > 0; s = 256 * s + e[n + f], f += p, d -= 8);
    if (0 === o) o = 1 - c;
    else {
        if (o === u) return s ? NaN : (1 / 0) * (h ? -1 : 1);
        (s += Math.pow(2, i)), (o -= c);
    }
    return (h ? -1 : 1) * s * Math.pow(2, o - i);
}),
    (n.write = function (e, n, r, i, a, o) {
        var s,
            l,
            u,
            c = 8 * o - a - 1,
            d = (1 << c) - 1,
            f = d >> 1,
            p = 23 === a ? 5.960464477539062e-8 : 0,
            h = i ? 0 : o - 1,
            _ = i ? 1 : -1,
            m = n < 0 || (0 === n && 1 / n < 0) ? 1 : 0;
        for (isNaN((n = Math.abs(n))) || n === 1 / 0 ? ((l = isNaN(n) ? 1 : 0), (s = d)) : ((s = Math.floor(Math.log(n) / Math.LN2)), n * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)), s + f >= 1 ? (n += p / u) : (n += p * Math.pow(2, 1 - f)), n * u >= 2 && (s++, (u /= 2)), s + f >= d ? ((l = 0), (s = d)) : s + f >= 1 ? ((l = (n * u - 1) * Math.pow(2, a)), (s += f)) : ((l = n * Math.pow(2, f - 1) * Math.pow(2, a)), (s = 0))); a >= 8; e[r + h] = 255 & l, h += _, l /= 256, a -= 8);
        for (s = (s << a) | l, c += a; c > 0; e[r + h] = 255 & s, h += _, s /= 256, c -= 8);
        e[r + h - _] |= 128 * m;
    });
