var r = n(926226),
    i = n(305327),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    s = /^\w*$/;
e.exports = function (e, t) {
    if (r(e)) return !1;
    var n = typeof e;
    return (
        !!("number" == n || "symbol" == n || "boolean" == n || null == e || i(e)) ||
        s.test(e) ||
        !a.test(e) ||
        (null != t && e in Object(t))
    );
};
