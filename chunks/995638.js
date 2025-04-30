n.r(t), n.d(t, { default: () => s });
var r = n(424421),
    i = n(767629),
    o = n(951516),
    a = 86400000;
function s(e, t) {
    (0, o.Z)(2, arguments);
    var n = (0, i.default)(e),
        s = (0, i.default)(t);
    return Math.round((n.getTime() - (0, r.Z)(n) - (s.getTime() - (0, r.Z)(s))) / a);
}
