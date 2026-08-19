"use strict";
e.exports = function (e, t) {
    var r = t.length,
        n = e.length;
    if (n > r) return !1;
    if (n === r) return e === t;
    r: for (var o = 0, i = 0; o < n; o++) {
        for (var a = e.charCodeAt(o); i < r; ) if (t.charCodeAt(i++) === a) continue r;
        return !1;
    }
    return !0;
};
