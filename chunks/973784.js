e.exports = function (e, t, r, n) {
    ((t = t || "&"), (r = r || "="));
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
            p,
            d = e[l].replace(o, "%20"),
            h = d.indexOf(r);
        (h >= 0 ? ((u = d.substr(0, h)), (c = d.substr(h + 1))) : ((u = d), (c = "")),
        (f = decodeURIComponent(u)),
        (p = decodeURIComponent(c)),
        Object.prototype.hasOwnProperty.call(i, f))
            ? Array.isArray(i[f])
                ? i[f].push(p)
                : (i[f] = [i[f], p])
            : (i[f] = p);
    }
    return i;
};
