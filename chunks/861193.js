"use strict";
function i(e) {
    return "/" === e.charAt(0);
}
function r(e, t) {
    for (var n = t, i = n + 1, r = e.length; i < r; n += 1, i += 1) e[n] = e[i];
    e.pop();
}
n.d(t, { A: () => s });
let s = function (e, t) {
    void 0 === t && (t = "");
    var n,
        s = (e && e.split("/")) || [],
        a = (t && t.split("/")) || [],
        o = e && i(e),
        l = t && i(t),
        u = o || l;
    if ((e && i(e) ? (a = s) : s.length && (a.pop(), (a = a.concat(s))), !a.length)) return "/";
    if (a.length) {
        var c = a[a.length - 1];
        n = "." === c || ".." === c || "" === c;
    } else n = !1;
    for (var d = 0, _ = a.length; _ >= 0; _--) {
        var h = a[_];
        "." === h ? r(a, _) : ".." === h ? (r(a, _), d++) : d && (r(a, _), d--);
    }
    if (!u) for (; d--; ) a.unshift("..");
    !u || "" === a[0] || (a[0] && i(a[0])) || a.unshift("");
    var f = a.join("/");
    return n && "/" !== f.substr(-1) && (f += "/"), f;
};
