t.d(n, { b: () => a });
function a(e, n, t, a) {
    var r = t ? t.call(a, e, n) : void 0;
    if (void 0 !== r) return !!r;
    if (e === n) return !0;
    if ("object" != typeof e || !e || "object" != typeof n || !n) return !1;
    var i = Object.keys(e),
        u = Object.keys(n);
    if (i.length !== u.length) return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(n), o = 0; o < i.length; o++) {
        var l = i[o];
        if (!s(l)) return !1;
        var d = e[l],
            c = n[l];
        if (!1 === (r = t ? t.call(a, d, c, l) : void 0) || (void 0 === r && d !== c)) return !1;
    }
    return !0;
}
