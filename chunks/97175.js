r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(799429),
    a = r(764303),
    o = r(404347);
function s(e, n) {
    if (null == e) return {};
    var r,
        s,
        l = (0, o.Z)(e, n);
    if (i) {
        var u = i(e);
        for (s = 0; s < u.length; s++) {
            if (((r = u[s]), !(a(n).call(n, r) >= 0))) Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        }
    }
    return l;
}
