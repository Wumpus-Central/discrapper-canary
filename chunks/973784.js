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
    for (var c = 0; c < l; ++c) {
        var u,
            d,
            f,
            p,
            _ = e[c].replace(s, "%20"),
            h = _.indexOf(r);
        h >= 0 ? ((u = _.substr(0, h)), (d = _.substr(h + 1))) : ((u = _), (d = "")),
            (f = decodeURIComponent(u)),
            (p = decodeURIComponent(d)),
            t(a, f) ? (Array.isArray(a[f]) ? a[f].push(p) : (a[f] = [a[f], p])) : (a[f] = p);
    }
    return a;
};
