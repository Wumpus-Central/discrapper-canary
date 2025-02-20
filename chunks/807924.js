n.d(t, { Z: () => p });
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
let p = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t,
            n = e.state,
            o = e.name,
            c = e.options,
            u = n.elements.arrow,
            p = n.modifiersData.popperOffsets,
            _ = (0, r.Z)(n.placement),
            h = (0, s.Z)(_),
            m = [d.t$, d.F2].indexOf(_) >= 0 ? 'height' : 'width';
        if (u && p) {
            var g = f(c.padding, n),
                E = (0, i.Z)(u),
                v = 'y' === h ? d.we : d.t$,
                b = 'y' === h ? d.I : d.F2,
                y = n.rects.reference[m] + n.rects.reference[h] - p[h] - n.rects.popper[m],
                O = p[h] - n.rects.reference[h],
                S = (0, a.Z)(u),
                I = S ? ('y' === h ? S.clientHeight || 0 : S.clientWidth || 0) : 0,
                T = y / 2 - O / 2,
                N = g[v],
                A = I - E[m] - g[b],
                C = I / 2 - E[m] / 2 + T,
                R = (0, l.u)(N, C, A),
                P = h;
            n.modifiersData[o] = (((t = {})[P] = R), (t.centerOffset = R - C), t);
        }
    },
    effect: function (e) {
        var t = e.state,
            n = e.options.element,
            r = void 0 === n ? '[data-popper-arrow]' : n;
        null != r && ('string' != typeof r || (r = t.elements.popper.querySelector(r))) && (0, o.Z)(t.elements.popper, r) && (t.elements.arrow = r);
    },
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
};
