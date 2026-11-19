e.d(n, { A: () => i });
var t = e(575223),
    a = e(29583),
    f = e(618027),
    o = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (r) {
            return r < 0 ? Math.ceil(r) : Math.floor(r);
        },
    };
function i(r, n, e) {
    (0, f.A)(2, arguments);
    var i,
        u =
            (function (r, n) {
                return ((0, f.A)(2, arguments), (0, a.default)(r).getTime() - (0, a.default)(n).getTime());
            })(r, n) / t.s0;
    return ((i = null == e ? void 0 : e.roundingMethod) ? o[i] : o.trunc)(u);
}
