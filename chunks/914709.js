var r = n(961123),
    i = n(841566),
    a = n(290677),
    o = n(682653),
    s = n(720815),
    l = n(278757);
e.exports = function (e, t, n) {
    t = r(t, e);
    for (var c = -1, u = t.length, d = !1; ++c < u; ) {
        var _ = l(t[c]);
        if (!(d = null != e && n(e, _))) break;
        e = e[_];
    }
    return d || ++c != u ? d : !!(u = null == e ? 0 : e.length) && s(u) && o(_, u) && (a(e) || i(e));
};
