"use strict";
function i(e, t, n, i) {
    var r = n ? n.call(i, e, t) : void 0;
    if (void 0 !== r) return !!r;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var s = Object.keys(e),
        a = Object.keys(t);
    if (s.length !== a.length) return !1;
    for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < s.length; l++) {
        var u = s[l];
        if (!o(u)) return !1;
        var c = e[u],
            d = t[u];
        if (!1 === (r = n ? n.call(i, c, d, u) : void 0) || (void 0 === r && c !== d)) return !1;
    }
    return !0;
}
n.d(t, { b: () => i });
