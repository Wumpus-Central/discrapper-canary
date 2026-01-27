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
            s = 0,
            i = 0,
            a = 0,
            c = new n(8 * ((r = Math.floor((t = e).length / 5)), t.length % 5 == 0 ? r : r + 1));
        o < e.length;
    ) {
        var l = e[o];
        i > 3
            ? ((a = ((a = l & (255 >> i)) << (i = (i + 5) % 8)) | ((o + 1 < e.length ? e[o + 1] : 0) >> (8 - i))), o++)
            : ((a = (l >> (8 - (i + 5))) & 31), 0 == (i = (i + 5) % 8) && o++),
            (c[s] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(a)),
            s++;
    }
    for (o = s; o < c.length; o++) c[o] = 61;
    return c;
}),
    (t.decode = function (e) {
        var t,
            r = 0,
            s = 0,
            i = 0;
        n.isBuffer(e) || (e = new n(e));
        for (var a = new n(Math.ceil((5 * e.length) / 8)), c = 0; c < e.length && 61 != e[c]; c++) {
            var l = e[c] - 48;
            if (l < o.length)
                (s = o[l]),
                    r <= 3
                        ? 0 == (r = (r + 5) % 8)
                            ? ((t |= s), (a[i] = t), i++, (t = 0))
                            : (t |= 255 & (s << (8 - r)))
                        : ((t |= 255 & (s >>> (r = (r + 5) % 8))), (a[i] = t), i++, (t = 255 & (s << (8 - r))));
            else throw Error("Invalid input - it is not base32 encoded string");
        }
        return a.slice(0, i);
    });
