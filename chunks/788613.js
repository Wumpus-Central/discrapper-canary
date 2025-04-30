n.r(t), n.d(t, { default: () => o });
var r = n(217224),
    i = n(528734),
    a = n(951516);
function o(e, t) {
    (0, a.Z)(2, arguments);
    var n = (0, i.default)(e),
        o = (0, r.Z)(t);
    if (isNaN(o)) return new Date(NaN);
    if (!o) return n;
    var s = n.getDate(),
        l = new Date(n.getTime());
    return (l.setMonth(n.getMonth() + o + 1, 0), s >= l.getDate()) ? l : (n.setFullYear(l.getFullYear(), l.getMonth(), s), n);
}
