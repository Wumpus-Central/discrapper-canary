var r = n(264572).Buffer,
    i = [
        255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
    ];
(t.encode = function (e) {
    r.isBuffer(e) || (e = new r(e));
    for (
        var t,
            n,
            i = 0,
            s = 0,
            a = 0,
            o = 0,
            l = new r(8 * ((n = Math.floor((t = e).length / 5)), t.length % 5 == 0 ? n : n + 1));
        i < e.length;
    ) {
        var u = e[i];
        a > 3
            ? ((o = ((o = u & (255 >> a)) << (a = (a + 5) % 8)) | ((i + 1 < e.length ? e[i + 1] : 0) >> (8 - a))), i++)
            : ((o = (u >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && i++),
            (l[s] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(o)),
            s++;
    }
    for (i = s; i < l.length; i++) l[i] = 61;
    return l;
}),
    (t.decode = function (e) {
        var t,
            n = 0,
            s = 0,
            a = 0;
        r.isBuffer(e) || (e = new r(e));
        for (var o = new r(Math.ceil((5 * e.length) / 8)), l = 0; l < e.length && 61 != e[l]; l++) {
            var u = e[l] - 48;
            if (u < i.length)
                (s = i[u]),
                    n <= 3
                        ? 0 == (n = (n + 5) % 8)
                            ? ((t |= s), (o[a] = t), a++, (t = 0))
                            : (t |= 255 & (s << (8 - n)))
                        : ((t |= 255 & (s >>> (n = (n + 5) % 8))), (o[a] = t), a++, (t = 255 & (s << (8 - n))));
            else throw Error("Invalid input - it is not base32 encoded string");
        }
        return o.slice(0, a);
    });
