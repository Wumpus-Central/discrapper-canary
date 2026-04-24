"use strict";
e.exports = function (e, r) {
    var t = r.length,
        n = e.length;
    if (n > t) return !1;
    if (n === t) return e === r;
    e: for (var o = 0, i = 0; o < n; o++) {
        for (var a = e.charCodeAt(o); i < t; ) if (r.charCodeAt(i++) === a) continue e;
        return !1;
    }
    return !0;
};
