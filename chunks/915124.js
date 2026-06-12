var i = n(416412),
    r = n(969474),
    s = n(615861),
    a = n(509185);
e.exports = function (e, t, n) {
    if (!a(n)) return !1;
    var o = typeof t;
    return ("number" == o ? !!(r(n) && s(t, n.length)) : "string" == o && t in n) && i(n[t], e);
};
