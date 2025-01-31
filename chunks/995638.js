n.r(t), n.d(t, { default: () => o });
var i = n(424421),
    r = n(767629),
    a = n(951516),
    s = 86400000;
function o(e, t) {
    (0, a.Z)(2, arguments);
    var n = (0, r.default)(e),
        o = (0, r.default)(t);
    return Math.round((n.getTime() - (0, i.Z)(n) - (o.getTime() - (0, i.Z)(o))) / s);
}
