"use strict";
n.d(t, { A: () => _ });
var r = n(559751),
    i = n(726402),
    s = n(865645),
    a = n(821085),
    o = n(264816),
    l = n(461464),
    u = n(125685),
    c = n(658614),
    d = n(140851);
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
            p = n.modifiersData.popperOffsets,
            h = (0, r.A)(n.placement),
            E = (0, o.A)(h),
            m = [d.kb, d.pG].indexOf(h) >= 0 ? "height" : "width";
        if (f && p) {
            var g,
                A =
                    ((g = _.padding),
                    (g = "function" == typeof g ? g(Object.assign({}, n.rects, { placement: n.placement })) : g),
                    (0, u.A)("number" != typeof g ? g : (0, c.A)(g, d.OM))),
                I = (0, i.A)(f),
                T = "y" === E ? d.Mn : d.kb,
                S = "y" === E ? d.sQ : d.pG,
                y = n.rects.reference[m] + n.rects.reference[E] - p[E] - n.rects.popper[m],
                N = p[E] - n.rects.reference[E],
                v = (0, a.A)(f),
                C = v ? ("y" === E ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
                O = A[T],
                R = C - I[m] - A[S],
                b = C / 2 - I[m] / 2 + (y / 2 - N / 2),
                D = (0, l.u)(O, b, R);
            n.modifiersData[s] = (((t = {})[E] = D), (t.centerOffset = D - b), t);
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
