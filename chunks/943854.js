var n = e(744439),
    i = e(261010),
    p = e(115455),
    o = e(926226),
    u = e(752909),
    c = e(758513),
    a = e(412998),
    f = e(481702),
    s = Object.prototype.hasOwnProperty;
r.exports = function (r) {
    if (null == r) return !0;
    if (u(r) && (o(r) || "string" == typeof r || "function" == typeof r.splice || c(r) || f(r) || p(r)))
        return !r.length;
    var t = i(r);
    if ("[object Map]" == t || "[object Set]" == t) return !r.size;
    if (a(r)) return !n(r).length;
    for (var e in r) if (s.call(r, e)) return !1;
    return !0;
};
