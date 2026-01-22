var r = n(416412),
    i = n(969474),
    a = n(615861),
    s = n(509185);
e.exports = function (e, t, n) {
    if (!s(n)) return !1;
    var o = typeof t;
    return ("number" == o ? !!(i(n) && a(t, n.length)) : "string" == o && t in n) && r(n[t], e);
};
