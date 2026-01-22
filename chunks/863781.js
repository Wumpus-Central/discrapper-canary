var r = n(446474),
    i = n(339626),
    a = n(598349),
    s = TypeError;
e.exports = function (e, t) {
    var n, o;
    if (
        ("string" === t && i((n = e.toString)) && !a((o = r(n, e)))) ||
        (i((n = e.valueOf)) && !a((o = r(n, e)))) ||
        ("string" !== t && i((n = e.toString)) && !a((o = r(n, e))))
    )
        return o;
    throw new s("Can't convert object to primitive value");
};
