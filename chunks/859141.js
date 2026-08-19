e.exports = function (e, t, r, n) {
    var o = r ? r.call(n, e, t) : void 0;
    if (void 0 !== o) return !!o;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var i = Object.keys(e),
        a = Object.keys(t);
    if (i.length !== a.length) return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < i.length; l++) {
        var u = i[l];
        if (!s(u)) return !1;
        var c = e[u],
            f = t[u];
        if (!1 === (o = r ? r.call(n, c, f, u) : void 0) || (void 0 === o && c !== f)) return !1;
    }
    return !0;
};
