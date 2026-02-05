"use strict";
n.d(t, { A: () => f });
var r = n(559751),
    i = n(726402),
    a = n(865645),
    s = n(821085),
    o = n(264816),
    l = n(461464),
    u = n(125685),
    c = n(658614),
    d = n(140851),
    _ = function (e, t) {
        return (
            (e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
            (0, u.A)("number" != typeof e ? e : (0, c.A)(e, d.OM))
        );
    };
let f = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t,
            n = e.state,
            a = e.name,
            u = e.options,
            c = n.elements.arrow,
            f = n.modifiersData.popperOffsets,
            p = (0, r.A)(n.placement),
            h = (0, o.A)(p),
            m = [d.kb, d.pG].indexOf(p) >= 0 ? "height" : "width";
        if (c && f) {
            var g = _(u.padding, n),
                E = (0, i.A)(c),
                A = "y" === h ? d.Mn : d.kb,
                I = "y" === h ? d.sQ : d.pG,
                T = n.rects.reference[m] + n.rects.reference[h] - f[h] - n.rects.popper[m],
                y = f[h] - n.rects.reference[h],
                S = (0, s.A)(c),
                v = S ? ("y" === h ? S.clientHeight || 0 : S.clientWidth || 0) : 0,
                C = T / 2 - y / 2,
                b = g[A],
                N = v - E[m] - g[I],
                R = v / 2 - E[m] / 2 + C,
                O = (0, l.u)(b, R, N),
                D = h;
            n.modifiersData[a] = ((t = {}), (t[D] = O), (t.centerOffset = O - R), t);
        }
    },
    effect: function (e) {
        var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
        null == r ||
            (("string" != typeof r || (r = t.elements.popper.querySelector(r))) &&
                (0, a.A)(t.elements.popper, r) &&
                (t.elements.arrow = r));
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
};
