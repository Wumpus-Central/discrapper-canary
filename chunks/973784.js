e.exports = function (e, t, r, n) {
    (t = t || "&"), (r = r || "=");
    var i = {};
    if ("string" != typeof e || 0 === e.length) return i;
    var o = /\+/g;
    e = e.split(t);
    var a = 1e3;
    n && "number" == typeof n.maxKeys && (a = n.maxKeys);
    var s = e.length;
    a > 0 && s > a && (s = a);
    for (var l = 0; l < s; ++l) {
        var u,
            c,
            f,
            d,
            p = e[l].replace(o, "%20"),
            h = p.indexOf(r);
        (h >= 0 ? ((u = p.substr(0, h)), (c = p.substr(h + 1))) : ((u = p), (c = "")),
        (f = decodeURIComponent(u)),
        (d = decodeURIComponent(c)),
        Object.prototype.hasOwnProperty.call(i, f))
            ? Array.isArray(i[f])
                ? i[f].push(d)
                : (i[f] = [i[f], d])
            : (i[f] = d);
    }
    return i;
};
