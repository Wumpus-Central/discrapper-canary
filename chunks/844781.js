var r = n(402428),
    i = n(42848),
    o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    a = /^\w*$/;
e.exports = function (e, t) {
    if (r(e)) return !1;
    var n = typeof e;
    return !!('number' == n || 'symbol' == n || 'boolean' == n || null == e || i(e)) || a.test(e) || !o.test(e) || (null != t && e in Object(t));
};
