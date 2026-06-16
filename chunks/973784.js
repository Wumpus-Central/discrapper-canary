"use strict";
e.exports = function (e, t, n, i) {
    (t = t || "&"), (n = n || "=");
    var r = {};
    if ("string" != typeof e || 0 === e.length) return r;
    var s = /\+/g;
    e = e.split(t);
    var a = 1e3;
    i && "number" == typeof i.maxKeys && (a = i.maxKeys);
    var o = e.length;
    a > 0 && o > a && (o = a);
    for (var l = 0; l < o; ++l) {
        var u,
            c,
            d,
            _,
            h = e[l].replace(s, "%20"),
            f = h.indexOf(n);
        (f >= 0 ? ((u = h.substr(0, f)), (c = h.substr(f + 1))) : ((u = h), (c = "")),
        (d = decodeURIComponent(u)),
        (_ = decodeURIComponent(c)),
        Object.prototype.hasOwnProperty.call(r, d))
            ? Array.isArray(r[d])
                ? r[d].push(_)
                : (r[d] = [r[d], _])
            : (r[d] = _);
    }
    return r;
};
