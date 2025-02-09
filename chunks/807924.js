n.d(t, { Z: () => _ });
var i = n(126387),
    r = n(493623),
    a = n(67966),
    s = n(343713),
    o = n(205208),
    l = n(464826),
    u = n(544338),
    c = n(581206),
    d = n(740078),
    f = function (e, t) {
        return (e = 'function' == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e), (0, u.Z)('number' != typeof e ? e : (0, c.Z)(e, d.mv));
    };
let _ = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t,
            n = e.state,
            a = e.name,
            u = e.options,
            c = n.elements.arrow,
            _ = n.modifiersData.popperOffsets,
            p = (0, i.Z)(n.placement),
            h = (0, o.Z)(p),
            m = [d.t$, d.F2].indexOf(p) >= 0 ? 'height' : 'width';
        if (c && _) {
            var g = f(u.padding, n),
                E = (0, r.Z)(c),
                v = 'y' === h ? d.we : d.t$,
                y = 'y' === h ? d.I : d.F2,
                I = n.rects.reference[m] + n.rects.reference[h] - _[h] - n.rects.popper[m],
                T = _[h] - n.rects.reference[h],
                b = (0, s.Z)(c),
                S = b ? ('y' === h ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
                A = I / 2 - T / 2,
                N = g[v],
                C = S - E[m] - g[y],
                R = S / 2 - E[m] / 2 + A,
                O = (0, l.u)(N, R, C),
                D = h;
            n.modifiersData[a] = (((t = {})[D] = O), (t.centerOffset = O - R), t);
        }
    },
    effect: function (e) {
        var t = e.state,
            n = e.options.element,
            i = void 0 === n ? '[data-popper-arrow]' : n;
        null != i && ('string' != typeof i || (i = t.elements.popper.querySelector(i))) && (0, a.Z)(t.elements.popper, i) && (t.elements.arrow = i);
    },
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
};
