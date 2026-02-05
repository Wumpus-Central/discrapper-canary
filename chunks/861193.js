"use strict";
function r(e) {
    return "/" === e.charAt(0);
}
function i(e, t) {
    for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
    e.pop();
}
n.d(t, { A: () => a });
let a = function (e, t) {
    void 0 === t && (t = "");
    var n,
        a = (e && e.split("/")) || [],
        s = (t && t.split("/")) || [],
        o = e && r(e),
        l = t && r(t),
        u = o || l;
    if ((e && r(e) ? (s = a) : a.length && (s.pop(), (s = s.concat(a))), !s.length)) return "/";
    if (s.length) {
        var c = s[s.length - 1];
        n = "." === c || ".." === c || "" === c;
    } else n = !1;
    for (var d = 0, _ = s.length; _ >= 0; _--) {
        var f = s[_];
        "." === f ? i(s, _) : ".." === f ? (i(s, _), d++) : d && (i(s, _), d--);
    }
    if (!u) for (; d--; ) s.unshift("..");
    !u || "" === s[0] || (s[0] && r(s[0])) || s.unshift("");
    var p = s.join("/");
    return n && "/" !== p.substr(-1) && (p += "/"), p;
};
