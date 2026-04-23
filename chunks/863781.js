var n = e(446474),
    o = e(339626),
    i = e(598349),
    u = TypeError;
r.exports = function (r, t) {
    var e, a;
    if (
        ("string" === t && o((e = r.toString)) && !i((a = n(e, r)))) ||
        (o((e = r.valueOf)) && !i((a = n(e, r)))) ||
        ("string" !== t && o((e = r.toString)) && !i((a = n(e, r))))
    )
        return a;
    throw new u("Can't convert object to primitive value");
};
