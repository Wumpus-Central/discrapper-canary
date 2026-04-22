"use strict";
e.exports = function (e, t, n, r) {
    (t = t || "&"), (n = n || "=");
    var i = {};
    if ("string" != typeof e || 0 === e.length) return i;
    var s = /\+/g;
    e = e.split(t);
    var a = 1e3;
    r && "number" == typeof r.maxKeys && (a = r.maxKeys);
    var o = e.length;
    a > 0 && o > a && (o = a);
    for (var l = 0; l < o; ++l) {
        var u,
            d,
            c,
            _,
            f = e[l].replace(s, "%20"),
            E = f.indexOf(n);
        (E >= 0 ? ((u = f.substr(0, E)), (d = f.substr(E + 1))) : ((u = f), (d = "")),
        (c = decodeURIComponent(u)),
        (_ = decodeURIComponent(d)),
        Object.prototype.hasOwnProperty.call(i, c))
            ? Array.isArray(i[c])
                ? i[c].push(_)
                : (i[c] = [i[c], _])
            : (i[c] = _);
    }
    return i;
};
