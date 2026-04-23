var r = n(574366),
    i = n(587779),
    s = n(926226),
    a = n(305327),
    o = 1 / 0,
    l = r ? r.prototype : void 0,
    u = l ? l.toString : void 0;
e.exports = function e(t) {
    if ("string" == typeof t) return t;
    if (s(t)) return i(t, e) + "";
    if (a(t)) return u ? u.call(t) : "";
    var n = t + "";
    return "0" == n && 1 / t == -o ? "-0" : n;
};
