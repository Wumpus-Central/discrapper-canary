"use strict";
function t(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
e.exports = function (e, n, r, i) {
    (n = n || "&"), (r = r || "=");
    var a = {};
    if ("string" != typeof e || 0 === e.length) return a;
    var s = /\+/g;
    e = e.split(n);
    var o = 1e3;
    i && "number" == typeof i.maxKeys && (o = i.maxKeys);
    var l = e.length;
    o > 0 && l > o && (l = o);
    for (var u = 0; u < l; ++u) {
        var c,
            d,
            _,
            f,
            p = e[u].replace(s, "%20"),
            h = p.indexOf(r);
        h >= 0 ? ((c = p.substr(0, h)), (d = p.substr(h + 1))) : ((c = p), (d = "")),
            (_ = decodeURIComponent(c)),
            (f = decodeURIComponent(d)),
            t(a, _) ? (Array.isArray(a[_]) ? a[_].push(f) : (a[_] = [a[_], f])) : (a[_] = f);
    }
    return a;
};
