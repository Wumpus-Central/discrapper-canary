n.d(t, { Z: () => i });
var r = n(576951),
    o = n(742230),
    a = n(811144);
function i(e, t) {
    if (null == e) return {};
    var n,
        i,
        s = (0, a.Z)(e, t);
    if (r) {
        var c = r(e);
        for (i = 0; i < c.length; i++) (n = c[i]), -1 === o(t).call(t, n) && {}.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    }
    return s;
}
