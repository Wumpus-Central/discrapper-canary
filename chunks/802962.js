var n = r(264572).Buffer,
    o = [
        255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
    ];
(t.encode = function (e) {
    n.isBuffer(e) || (e = new n(e));
    for (
        var t,
            r,
            o = 0,
            i = 0,
            a = 0,
            s = 0,
            l = new n(8 * ((r = Math.floor((t = e).length / 5)), t.length % 5 == 0 ? r : r + 1));
        o < e.length;
    ) {
        var u = e[o];
        a > 3
            ? ((s = ((s = u & (255 >> a)) << (a = (a + 5) % 8)) | ((o + 1 < e.length ? e[o + 1] : 0) >> (8 - a))), o++)
            : ((s = (u >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && o++),
            (l[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(s)),
            i++;
    }
    for (o = i; o < l.length; o++) l[o] = 61;
    return l;
}),
    (t.decode = function (e) {
        var t,
            r = 0,
            i = 0,
            a = 0;
        n.isBuffer(e) || (e = new n(e));
        for (var s = new n(Math.ceil((5 * e.length) / 8)), l = 0; l < e.length && 61 != e[l]; l++) {
            var u = e[l] - 48;
            if (u < o.length)
                (i = o[u]),
                    r <= 3
                        ? 0 == (r = (r + 5) % 8)
                            ? ((t |= i), (s[a] = t), a++, (t = 0))
                            : (t |= 255 & (i << (8 - r)))
                        : ((t |= 255 & (i >>> (r = (r + 5) % 8))), (s[a] = t), a++, (t = 255 & (i << (8 - r))));
            else throw Error("Invalid input - it is not base32 encoded string");
        }
        return s.slice(0, a);
    });
