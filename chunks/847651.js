var n = t;
function i(e, t) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var n = [];
    if ('string' != typeof e) {
        for (var i = 0; i < e.length; i++) n[i] = 0 | e[i];
        return n;
    }
    if ('hex' === t) {
        (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e);
        for (var i = 0; i < e.length; i += 2) n.push(parseInt(e[i] + e[i + 1], 16));
    } else
        for (var i = 0; i < e.length; i++) {
            var r = e.charCodeAt(i),
                a = r >> 8,
                s = 255 & r;
            a ? n.push(a, s) : n.push(s);
        }
    return n;
}
function r(e) {
    return 1 === e.length ? '0' + e : e;
}
function a(e) {
    for (var t = '', n = 0; n < e.length; n++) t += r(e[n].toString(16));
    return t;
}
(n.toArray = i),
    (n.zero2 = r),
    (n.toHex = a),
    (n.encode = function (e, t) {
        return 'hex' === t ? a(e) : e;
    });
