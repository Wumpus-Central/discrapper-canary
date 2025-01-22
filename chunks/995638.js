r.r(n),
    r.d(n, {
        default: function () {
            return l;
        }
    });
var i = r(424421),
    a = r(767629),
    o = r(951516),
    s = 86400000;
function l(e, n) {
    (0, o.Z)(2, arguments);
    var r = (0, a.default)(e),
        l = (0, a.default)(n);
    return Math.round((r.getTime() - (0, i.Z)(r) - (l.getTime() - (0, i.Z)(l))) / s);
}
