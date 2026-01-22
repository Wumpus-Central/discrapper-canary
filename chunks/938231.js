var r = n(574366),
    i = n(587779),
    a = n(926226),
    s = n(305327),
    o = 1 / 0,
    l = r ? r.prototype : void 0,
    c = l ? l.toString : void 0;

function u(e) {
    if ("string" == typeof e) return e;
    if (a(e)) return i(e, u) + "";
    if (s(e)) return c ? c.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -o ? "-0" : t;
}
e.exports = u;
