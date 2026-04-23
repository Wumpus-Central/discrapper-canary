"use strict";
function r(e) {
    return "/" === e.charAt(0);
}
function i(e, t) {
    for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
    e.pop();
}
n.d(t, { A: () => s });
let s = function (e, t) {
    void 0 === t && (t = "");
    var n,
        s = (e && e.split("/")) || [],
        a = (t && t.split("/")) || [],
        o = e && r(e),
        l = t && r(t),
        u = o || l;
    if ((e && r(e) ? (a = s) : s.length && (a.pop(), (a = a.concat(s))), !a.length)) return "/";
    if (a.length) {
        var c = a[a.length - 1];
        n = "." === c || ".." === c || "" === c;
    } else n = !1;
    for (var d = 0, _ = a.length; _ >= 0; _--) {
        var f = a[_];
        "." === f ? i(a, _) : ".." === f ? (i(a, _), d++) : d && (i(a, _), d--);
    }
    if (!u) for (; d--; ) a.unshift("..");
    !u || "" === a[0] || (a[0] && r(a[0])) || a.unshift("");
    var p = a.join("/");
    return n && "/" !== p.substr(-1) && (p += "/"), p;
};
