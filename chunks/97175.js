n.d(t, { Z: () => a });
var r = n(799429),
    i = n(764303),
    o = n(404347);
function a(e, t) {
    if (null == e) return {};
    var n,
        a,
        s = (0, o.Z)(e, t);
    if (r) {
        var l = r(e);
        for (a = 0; a < l.length; a++) (n = l[a]), !(i(t).call(t, n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    }
    return s;
}
