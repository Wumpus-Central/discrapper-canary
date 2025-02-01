var i = n(649786),
    r = n(436091),
    a = n(682653),
    s = n(661233);
function o(e, t, n) {
    if (!s(n)) return !1;
    var o = typeof t;
    return ('number' == o ? !!(r(n) && a(t, n.length)) : 'string' == o && t in n) && i(n[t], e);
}
e.exports = o;
