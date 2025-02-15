var r = a(402428),
    n = a(42848),
    _ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    o = /^\w*$/;
t.exports = function (t, e) {
    if (r(t)) return !1;
    var a = typeof t;
    return !!('number' == a || 'symbol' == a || 'boolean' == a || null == t || n(t)) || o.test(t) || !_.test(t) || (null != e && t in Object(e));
};
