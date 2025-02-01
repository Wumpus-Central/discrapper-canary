var i = n(961123),
    r = n(278757);
function a(e, t) {
    t = i(t, e);
    for (var n = 0, a = t.length; null != e && n < a; ) e = e[r(t[n++])];
    return n && n == a ? e : void 0;
}
e.exports = a;
