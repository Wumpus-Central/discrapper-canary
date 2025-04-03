n.d(t, { Z: () => i });
var r = n(799429),
    o = n(764303),
    a = n(404347);
function i(e, t) {
    if (null == e) return {};
    var n,
        i,
        s = (0, a.Z)(e, t);
    if (r) {
        var c = r(e);
        for (i = 0; i < c.length; i++) (n = c[i]), !(o(t).call(t, n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    }
    return s;
}
