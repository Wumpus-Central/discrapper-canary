var n = e(446474),
    o = e(339626),
    i = e(598349),
    a = TypeError;
r.exports = function (r, t) {
    var e, u;
    if (
        ("string" === t && o((e = r.toString)) && !i((u = n(e, r)))) ||
        (o((e = r.valueOf)) && !i((u = n(e, r)))) ||
        ("string" !== t && o((e = r.toString)) && !i((u = n(e, r))))
    )
        return u;
    throw new a("Can't convert object to primitive value");
};
