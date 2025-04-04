(t.read = function (e, t, n, r, i) {
    var o,
        a,
        s = 8 * i - r - 1,
        l = (1 << s) - 1,
        c = l >> 1,
        u = -7,
        d = n ? i - 1 : 0,
        f = n ? -1 : 1,
        _ = e[t + d];
    for (d += f, o = _ & ((1 << -u) - 1), _ >>= -u, u += s; u > 0; o = 256 * o + e[t + d], d += f, u -= 8);
    for (a = o & ((1 << -u) - 1), o >>= -u, u += r; u > 0; a = 256 * a + e[t + d], d += f, u -= 8);
    if (0 === o) o = 1 - c;
    else {
        if (o === l) return a ? NaN : (1 / 0) * (_ ? -1 : 1);
        (a += Math.pow(2, r)), (o -= c);
    }
    return (_ ? -1 : 1) * a * Math.pow(2, o - r);
}),
    (t.write = function (e, t, n, r, i, o) {
        var a,
            s,
            l,
            c = 8 * o - i - 1,
            u = (1 << c) - 1,
            d = u >> 1,
            f = 5.960464477539062e-8 * (23 === i),
            _ = r ? 0 : o - 1,
            p = r ? 1 : -1,
            h = +(t < 0 || (0 === t && 1 / t < 0));
        for (isNaN((t = Math.abs(t))) || t === 1 / 0 ? ((s = +!!isNaN(t)), (a = u)) : ((a = Math.floor(Math.log(t) / Math.LN2)), t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)), a + d >= 1 ? (t += f / l) : (t += f * Math.pow(2, 1 - d)), t * l >= 2 && (a++, (l /= 2)), a + d >= u ? ((s = 0), (a = u)) : a + d >= 1 ? ((s = (t * l - 1) * Math.pow(2, i)), (a += d)) : ((s = t * Math.pow(2, d - 1) * Math.pow(2, i)), (a = 0))); i >= 8; e[n + _] = 255 & s, _ += p, s /= 256, i -= 8);
        for (a = (a << i) | s, c += i; c > 0; e[n + _] = 255 & a, _ += p, a /= 256, c -= 8);
        e[n + _ - p] |= 128 * h;
    });
