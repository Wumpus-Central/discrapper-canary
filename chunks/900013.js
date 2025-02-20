var r = n(649786),
    i = n(436091),
    o = n(682653),
    a = n(661233);
function s(e, t, n) {
    if (!a(n)) return !1;
    var s = typeof t;
    return ('number' == s ? !!(i(n) && o(t, n.length)) : 'string' == s && t in n) && r(n[t], e);
}
e.exports = s;
