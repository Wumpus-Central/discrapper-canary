var r = n(961123),
    i = n(278757);
e.exports = function (e, t) {
    t = r(t, e);
    for (var n = 0, a = t.length; null != e && n < a; ) e = e[i(t[n++])];
    return n && n == a ? e : void 0;
};
