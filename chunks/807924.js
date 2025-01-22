var i = r(126387),
    a = r(493623),
    o = r(67966),
    s = r(343713),
    l = r(205208),
    u = r(464826),
    c = r(544338),
    d = r(581206),
    f = r(740078),
    p = function (e, n) {
        return (e = 'function' == typeof e ? e(Object.assign({}, n.rects, { placement: n.placement })) : e), (0, c.Z)('number' != typeof e ? e : (0, d.Z)(e, f.mv));
    };
function h(e) {
    var n,
        r = e.state,
        o = e.name,
        c = e.options,
        d = r.elements.arrow,
        h = r.modifiersData.popperOffsets,
        _ = (0, i.Z)(r.placement),
        m = (0, l.Z)(_),
        g = [f.t$, f.F2].indexOf(_) >= 0 ? 'height' : 'width';
    if (!!d && !!h) {
        var E = p(c.padding, r),
            v = (0, a.Z)(d),
            y = 'y' === m ? f.we : f.t$,
            b = 'y' === m ? f.I : f.F2,
            I = r.rects.reference[g] + r.rects.reference[m] - h[m] - r.rects.popper[g],
            T = h[m] - r.rects.reference[m],
            S = (0, s.Z)(d),
            A = S ? ('y' === m ? S.clientHeight || 0 : S.clientWidth || 0) : 0,
            C = I / 2 - T / 2,
            N = E[y],
            R = A - v[g] - E[b],
            O = A / 2 - v[g] / 2 + C,
            D = (0, u.u)(N, O, R),
            L = m;
        r.modifiersData[o] = (((n = {})[L] = D), (n.centerOffset = D - O), n);
    }
}
function _(e) {
    var n = e.state,
        r = e.options.element,
        i = void 0 === r ? '[data-popper-arrow]' : r;
    if (null != i && ('string' != typeof i || !!(i = n.elements.popper.querySelector(i))) && !!(0, o.Z)(n.elements.popper, i)) n.elements.arrow = i;
}
n.Z = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: h,
    effect: _,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
};
