r.d(t, { b: () => n });
function n(e, t, r, n) {
    var i = r ? r.call(n, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var o = Object.keys(e),
        a = Object.keys(t);
    if (o.length !== a.length) return !1;
    for (var u = Object.prototype.hasOwnProperty.bind(t), c = 0; c < o.length; c++) {
        var s = o[c];
        if (!u(s)) return !1;
        var l = e[s],
            d = t[s];
        if (!1 === (i = r ? r.call(n, l, d, s) : void 0) || (void 0 === i && l !== d)) return !1;
    }
    return !0;
}
