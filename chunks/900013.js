var i = r(649786),
    a = r(436091),
    o = r(682653),
    s = r(661233);
function l(e, n, r) {
    if (!s(r)) return !1;
    var l = typeof n;
    return ('number' == l ? !!(a(r) && o(n, r.length)) : 'string' == l && n in r) && i(r[n], e);
}
e.exports = l;
