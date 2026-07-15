var n = r(484847),
    o = r(40956),
    a = r(326487),
    i = Object.prototype,
    u = Function.prototype.toString,
    l = i.hasOwnProperty,
    s = u.call(Object);
e.exports = function (e) {
    if (!a(e) || "[object Object]" != n(e)) return !1;
    var t = o(e);
    if (null === t) return !0;
    var r = l.call(t, "constructor") && t.constructor;
    return "function" == typeof r && r instanceof r && u.call(r) == s;
};
