var r = n(31289),
    i = n(752909),
    a = n(978260),
    s = n(646344);
e.exports = function (e, t, n) {
    if (!s(n)) return !1;
    var o = typeof t;
    return ("number" == o ? !!(i(n) && a(t, n.length)) : "string" == o && t in n) && r(n[t], e);
};
