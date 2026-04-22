"use strict";
n.d(t, { A: () => _ });
var r = n(559751),
    i = n(726402),
    s = n(865645),
    a = n(821085),
    o = n(264816),
    l = n(461464),
    u = n(125685),
    d = n(658614),
    c = n(140851);
let _ = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t,
            n = e.state,
            s = e.name,
            _ = e.options,
            f = n.elements.arrow,
            E = n.modifiersData.popperOffsets,
            h = (0, r.A)(n.placement),
            p = (0, o.A)(h),
            m = [c.kb, c.pG].indexOf(h) >= 0 ? "height" : "width";
        if (f && E) {
            var g,
                A =
                    ((g = _.padding),
                    (g = "function" == typeof g ? g(Object.assign({}, n.rects, { placement: n.placement })) : g),
                    (0, u.A)("number" != typeof g ? g : (0, d.A)(g, c.OM))),
                I = (0, i.A)(f),
                T = "y" === p ? c.Mn : c.kb,
                S = "y" === p ? c.sQ : c.pG,
                y = n.rects.reference[m] + n.rects.reference[p] - E[p] - n.rects.popper[m],
                N = E[p] - n.rects.reference[p],
                O = (0, a.A)(f),
                R = O ? ("y" === p ? O.clientHeight || 0 : O.clientWidth || 0) : 0,
                v = A[T],
                C = R - I[m] - A[S],
                b = R / 2 - I[m] / 2 + (y / 2 - N / 2),
                D = (0, l.u)(v, b, C);
            n.modifiersData[s] = (((t = {})[p] = D), (t.centerOffset = D - b), t);
        }
    },
    effect: function (e) {
        var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
        null == r ||
            (("string" != typeof r || (r = t.elements.popper.querySelector(r))) &&
                (0, s.A)(t.elements.popper, r) &&
                (t.elements.arrow = r));
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
};
