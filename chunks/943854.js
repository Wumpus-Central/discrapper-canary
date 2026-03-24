var n = r(744439),
    i = r(261010),
    o = r(115455),
    a = r(926226),
    s = r(752909),
    u = r(758513),
    c = r(412998),
    l = r(481702),
    f = Object.prototype.hasOwnProperty;
t.exports = function (t) {
    if (null == t) return !0;
    if (s(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || u(t) || l(t) || o(t)))
        return !t.length;
    var e = i(t);
    if ("[object Map]" == e || "[object Set]" == e) return !t.size;
    if (c(t)) return !n(t).length;
    for (var r in t) if (f.call(t, r)) return !1;
    return !0;
};
