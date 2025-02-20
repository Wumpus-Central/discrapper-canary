var r = a(402428),
    n = a(42848),
    o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    _ = /^\w*$/;
t.exports = function (t, e) {
    if (r(t)) return !1;
    var a = typeof t;
    return !!('number' == a || 'symbol' == a || 'boolean' == a || null == t || n(t)) || _.test(t) || !o.test(t) || (null != e && t in Object(e));
};
