"use strict";
function n(t) {
    return "/" === t.charAt(0);
}
function o(t, r) {
    for (var e = r, n = e + 1, o = t.length; n < o; e += 1, n += 1) t[e] = t[n];
    t.pop();
}
e.d(r, { A: () => i });
let i = function (t, r) {
    void 0 === r && (r = "");
    var e,
        i = (t && t.split("/")) || [],
        f = (r && r.split("/")) || [],
        u = t && n(t),
        s = r && n(r),
        a = u || s;
    if ((t && n(t) ? (f = i) : i.length && (f.pop(), (f = f.concat(i))), !f.length)) return "/";
    if (f.length) {
        var h = f[f.length - 1];
        e = "." === h || ".." === h || "" === h;
    } else e = !1;
    for (var p = 0, c = f.length; c >= 0; c--) {
        var l = f[c];
        "." === l ? o(f, c) : ".." === l ? (o(f, c), p++) : p && (o(f, c), p--);
    }
    if (!a) for (; p--; ) f.unshift("..");
    !a || "" === f[0] || (f[0] && n(f[0])) || f.unshift("");
    var y = f.join("/");
    return e && "/" !== y.substr(-1) && (y += "/"), y;
};
