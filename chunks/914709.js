var i = n(961123),
    r = n(841566),
    a = n(290677),
    s = n(682653),
    o = n(720815),
    l = n(278757);
function u(e, t, n) {
    t = i(t, e);
    for (var u = -1, c = t.length, d = !1; ++u < c; ) {
        var f = l(t[u]);
        if (!(d = null != e && n(e, f))) break;
        e = e[f];
    }
    return d || ++u != c ? d : !!(c = null == e ? 0 : e.length) && o(c) && s(f, c) && (a(e) || r(e));
}
e.exports = u;
