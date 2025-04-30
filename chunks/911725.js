var r = n(754793),
    i = !0,
    a = !0;
try {
    String.fromCharCode.apply(null, [0]);
} catch (e) {
    i = !1;
}
try {
    String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e) {
    a = !1;
}
for (var o = new r.Buf8(256), s = 0; s < 256; s++) o[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
function l(e, t) {
    if (t < 65534 && ((e.subarray && a) || (!e.subarray && i))) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
    for (var n = '', o = 0; o < t; o++) n += String.fromCharCode(e[o]);
    return n;
}
(o[254] = o[254] = 1),
    (t.string2buf = function (e) {
        var t,
            n,
            i,
            a,
            o,
            s = e.length,
            l = 0;
        for (a = 0; a < s; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), a++), (l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
        for (o = 0, t = new r.Buf8(l), a = 0; o < l; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), a++), n < 128 ? (t[o++] = n) : (n < 2048 ? (t[o++] = 192 | (n >>> 6)) : (n < 65536 ? (t[o++] = 224 | (n >>> 12)) : ((t[o++] = 240 | (n >>> 18)), (t[o++] = 128 | ((n >>> 12) & 63))), (t[o++] = 128 | ((n >>> 6) & 63))), (t[o++] = 128 | (63 & n)));
        return t;
    }),
    (t.buf2binstring = function (e) {
        return l(e, e.length);
    }),
    (t.binstring2buf = function (e) {
        for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
        return t;
    }),
    (t.buf2string = function (e, t) {
        var n,
            r,
            i,
            a,
            s = t || e.length,
            c = Array(2 * s);
        for (r = 0, n = 0; n < s; ) {
            if ((i = e[n++]) < 128) {
                c[r++] = i;
                continue;
            }
            if ((a = o[i]) > 4) {
                (c[r++] = 65533), (n += a - 1);
                continue;
            }
            for (i &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < s; ) (i = (i << 6) | (63 & e[n++])), a--;
            if (a > 1) {
                c[r++] = 65533;
                continue;
            }
            i < 65536 ? (c[r++] = i) : ((i -= 65536), (c[r++] = 55296 | ((i >> 10) & 1023)), (c[r++] = 56320 | (1023 & i)));
        }
        return l(c, r);
    }),
    (t.utf8border = function (e, t) {
        var n;
        for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && (192 & e[n]) == 128; ) n--;
        return n < 0 || 0 === n ? t : n + o[e[n]] > t ? n : t;
    });
