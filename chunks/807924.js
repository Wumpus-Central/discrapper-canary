n.d(t, { Z: () => p });
var r = n(126387),
    i = n(493623),
    a = n(67966),
    o = n(343713),
    s = n(205208),
    l = n(464826),
    c = n(544338),
    u = n(581206),
    d = n(740078),
    f = function (e, t) {
        return (
            (e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
            (0, c.Z)("number" != typeof e ? e : (0, u.Z)(e, d.mv))
        );
    };
let p = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t,
            n = e.state,
            a = e.name,
            c = e.options,
            u = n.elements.arrow,
            p = n.modifiersData.popperOffsets,
            _ = (0, r.Z)(n.placement),
            m = (0, s.Z)(_),
            h = [d.t$, d.F2].indexOf(_) >= 0 ? "height" : "width";
        if (u && p) {
            var g = f(c.padding, n),
                E = (0, i.Z)(u),
                b = "y" === m ? d.we : d.t$,
                y = "y" === m ? d.I : d.F2,
                O = n.rects.reference[h] + n.rects.reference[m] - p[m] - n.rects.popper[h],
                v = p[m] - n.rects.reference[m],
                S = (0, o.Z)(u),
                I = S ? ("y" === m ? S.clientHeight || 0 : S.clientWidth || 0) : 0,
                T = O / 2 - v / 2,
                A = g[b],
                C = I - E[h] - g[y],
                N = I / 2 - E[h] / 2 + T,
                P = (0, l.u)(A, N, C),
                R = m;
            n.modifiersData[a] = ((t = {}), (t[R] = P), (t.centerOffset = P - N), t);
        }
    },
    effect: function (e) {
        var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
        if (null != r)
            ("string" != typeof r || (r = t.elements.popper.querySelector(r))) &&
                (0, a.Z)(t.elements.popper, r) &&
                (t.elements.arrow = r);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
};
