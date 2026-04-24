e.exports = function (e, r) {
    var t = r.length,
        n = e.length;
    if (n > t) return !1;
    if (n === t) return e === r;
    e: for (var a = 0, o = 0; a < n; a++) {
        for (var l = e.charCodeAt(a); o < t; ) if (r.charCodeAt(o++) === l) continue e;
        return !1;
    }
    return !0;
};
