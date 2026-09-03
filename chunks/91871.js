e.exports = function (e, t) {
    var r = t.length,
        n = e.length;
    if (n > r) return !1;
    if (n === r) return e === t;
    r: for (var i = 0, o = 0; i < n; i++) {
        for (var a = e.charCodeAt(i); o < r; ) if (t.charCodeAt(o++) === a) continue r;
        return !1;
    }
    return !0;
};
