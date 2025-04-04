n.d(t, { Z: () => _ });
var r = n(126387),
    i = n(493623),
    o = n(67966),
    a = n(343713),
    s = n(205208),
    l = n(464826),
    c = n(544338),
    u = n(581206),
    d = n(740078),
    f = function (e, t) {
        return (e = 'function' == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e), (0, c.Z)('number' != typeof e ? e : (0, u.Z)(e, d.mv));
    };
let _ = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t,
            n = e.state,
            o = e.name,
            c = e.options,
            u = n.elements.arrow,
            _ = n.modifiersData.popperOffsets,
            p = (0, r.Z)(n.placement),
            h = (0, s.Z)(p),
            m = [d.t$, d.F2].indexOf(p) >= 0 ? 'height' : 'width';
        if (u && _) {
            var g = f(c.padding, n),
                E = (0, i.Z)(u),
                b = 'y' === h ? d.we : d.t$,
                y = 'y' === h ? d.I : d.F2,
                v = n.rects.reference[m] + n.rects.reference[h] - _[h] - n.rects.popper[m],
                O = _[h] - n.rects.reference[h],
                I = (0, a.Z)(u),
                S = I ? ('y' === h ? I.clientHeight || 0 : I.clientWidth || 0) : 0,
                T = v / 2 - O / 2,
                N = g[b],
                A = S - E[m] - g[y],
                C = S / 2 - E[m] / 2 + T,
                R = (0, l.u)(N, C, A),
                P = h;
            n.modifiersData[o] = ((t = {}), (t[P] = R), (t.centerOffset = R - C), t);
        }
    },
    effect: function (e) {
        var t = e.state,
            n = e.options.element,
            r = void 0 === n ? '[data-popper-arrow]' : n;
        if (null != r) ('string' != typeof r || (r = t.elements.popper.querySelector(r))) && (0, o.Z)(t.elements.popper, r) && (t.elements.arrow = r);
    },
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
};
