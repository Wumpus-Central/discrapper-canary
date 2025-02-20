n.r(t), n.d(t, { default: () => a });
var r = n(217224),
    i = n(528734),
    o = n(951516);
function a(e, t) {
    (0, o.Z)(2, arguments);
    var n = (0, i.default)(e),
        a = (0, r.Z)(t);
    if (isNaN(a)) return new Date(NaN);
    if (!a) return n;
    var s = n.getDate(),
        l = new Date(n.getTime());
    return (l.setMonth(n.getMonth() + a + 1, 0), s >= l.getDate()) ? l : (n.setFullYear(l.getFullYear(), l.getMonth(), s), n);
}
