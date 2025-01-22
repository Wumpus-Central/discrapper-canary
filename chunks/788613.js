r.r(n),
    r.d(n, {
        default: function () {
            return s;
        }
    });
var i = r(217224),
    a = r(528734),
    o = r(951516);
function s(e, n) {
    (0, o.Z)(2, arguments);
    var r = (0, a.default)(e),
        s = (0, i.Z)(n);
    if (isNaN(s)) return new Date(NaN);
    if (!s) return r;
    var l = r.getDate(),
        u = new Date(r.getTime());
    return (u.setMonth(r.getMonth() + s + 1, 0), l >= u.getDate()) ? u : (r.setFullYear(u.getFullYear(), u.getMonth(), l), r);
}
