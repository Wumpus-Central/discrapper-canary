n.d(t, { Z: () => s });
var i = n(799429),
    r = n(764303),
    a = n(404347);
function s(e, t) {
    if (null == e) return {};
    var n,
        s,
        o = (0, a.Z)(e, t);
    if (i) {
        var l = i(e);
        for (s = 0; s < l.length; s++) (n = l[s]), !(r(t).call(t, n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    }
    return o;
}
