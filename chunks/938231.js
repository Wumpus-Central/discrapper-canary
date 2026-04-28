var n = e(574366),
    o = e(587779),
    i = e(926226),
    f = e(305327),
    u = 1 / 0,
    s = n ? n.prototype : void 0,
    a = s ? s.toString : void 0;
t.exports = function t(r) {
    if ("string" == typeof r) return r;
    if (i(r)) return o(r, t) + "";
    if (f(r)) return a ? a.call(r) : "";
    var e = r + "";
    return "0" == e && 1 / r == -u ? "-0" : e;
};
