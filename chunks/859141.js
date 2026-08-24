e.exports = function (e, t, r, n) {
    var i = r ? r.call(n, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var o = Object.keys(e),
        a = Object.keys(t);
    if (o.length !== a.length) return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < o.length; l++) {
        var u = o[l];
        if (!s(u)) return !1;
        var c = e[u],
            f = t[u];
        if (!1 === (i = r ? r.call(n, c, f, u) : void 0) || (void 0 === i && c !== f)) return !1;
    }
    return !0;
};
