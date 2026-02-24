var r = n(264572).Buffer,
    i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    s = [
        255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
    ];
function a(e) {
    var t = Math.floor(e.length / 5);
    return e.length % 5 == 0 ? t : t + 1;
}
(t.encode = function (e) {
    r.isBuffer(e) || (e = new r(e));
    for (var t = 0, n = 0, s = 0, o = 0, l = new r(8 * a(e)); t < e.length; ) {
        var u = e[t];
        s > 3
            ? ((o = ((o = u & (255 >> s)) << (s = (s + 5) % 8)) | ((t + 1 < e.length ? e[t + 1] : 0) >> (8 - s))), t++)
            : ((o = (u >> (8 - (s + 5))) & 31), 0 == (s = (s + 5) % 8) && t++),
            (l[n] = i.charCodeAt(o)),
            n++;
    }
    for (t = n; t < l.length; t++) l[t] = 61;
    return l;
}),
    (t.decode = function (e) {
        var t,
            n = 0,
            i = 0,
            a = 0;
        r.isBuffer(e) || (e = new r(e));
        for (var o = new r(Math.ceil((5 * e.length) / 8)), l = 0; l < e.length && 61 != e[l]; l++) {
            var u = e[l] - 48;
            if (u < s.length)
                (i = s[u]),
                    n <= 3
                        ? 0 == (n = (n + 5) % 8)
                            ? ((t |= i), (o[a] = t), a++, (t = 0))
                            : (t |= 255 & (i << (8 - n)))
                        : ((t |= 255 & (i >>> (n = (n + 5) % 8))), (o[a] = t), a++, (t = 255 & (i << (8 - n))));
            else throw Error("Invalid input - it is not base32 encoded string");
        }
        return o.slice(0, a);
    });
