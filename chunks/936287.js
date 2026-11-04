((r.read = function (t, r, e, n, o) {
    var i,
        f,
        s = 8 * o - n - 1,
        u = (1 << s) - 1,
        a = u >> 1,
        h = -7,
        p = e ? o - 1 : 0,
        c = e ? -1 : 1,
        l = t[r + p];
    for (p += c, i = l & ((1 << -h) - 1), l >>= -h, h += s; h > 0; i = 256 * i + t[r + p], p += c, h -= 8);
    for (f = i & ((1 << -h) - 1), i >>= -h, h += n; h > 0; f = 256 * f + t[r + p], p += c, h -= 8);
    if (0 === i) i = 1 - a;
    else {
        if (i === u) return f ? 0 / 0 : (l ? -1 : 1) * 2e308;
        ((f += Math.pow(2, n)), (i -= a));
    }
    return (l ? -1 : 1) * f * Math.pow(2, i - n);
}),
    (r.write = function (t, r, e, n, o, i) {
        var f,
            s,
            u,
            a = 8 * i - o - 1,
            h = (1 << a) - 1,
            p = h >> 1,
            c = 5960464477539062e-23 * (23 === o),
            l = n ? 0 : i - 1,
            y = n ? 1 : -1,
            g = +(r < 0 || (0 === r && 1 / r < 0));
        for (
            isNaN((r = Math.abs(r))) || 1 / 0 === r
                ? ((s = +!!isNaN(r)), (f = h))
                : ((f = Math.floor(Math.log(r) / Math.LN2)),
                  r * (u = Math.pow(2, -f)) < 1 && (f--, (u *= 2)),
                  f + p >= 1 ? (r += c / u) : (r += c * Math.pow(2, 1 - p)),
                  r * u >= 2 && (f++, (u /= 2)),
                  f + p >= h
                      ? ((s = 0), (f = h))
                      : f + p >= 1
                        ? ((s = (r * u - 1) * Math.pow(2, o)), (f += p))
                        : ((s = r * Math.pow(2, p - 1) * Math.pow(2, o)), (f = 0)));
            o >= 8;
            t[e + l] = 255 & s, l += y, s /= 256, o -= 8
        );
        for (f = (f << o) | s, a += o; a > 0; t[e + l] = 255 & f, l += y, f /= 256, a -= 8);
        t[e + l - y] |= 128 * g;
    }));
