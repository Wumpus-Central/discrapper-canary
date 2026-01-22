n.d(t, {
    A: () => p,
});
var r = n(559751),
    i = n(726402),
    a = n(865645),
    s = n(821085),
    o = n(264816),
    l = n(461464),
    c = n(125685),
    u = n(658614),
    d = n(140851),
    f = function (e, t) {
        return (
            (e =
                "function" == typeof e
                    ? e(
                          Object.assign({}, t.rects, {
                              placement: t.placement,
                          }),
                      )
                    : e),
            (0, c.A)("number" != typeof e ? e : (0, u.A)(e, d.OM))
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
            _ = (0, r.A)(n.placement),
            h = (0, o.A)(_),
            m = [d.kb, d.pG].indexOf(_) >= 0 ? "height" : "width";
        if (u && p) {
            var g = f(c.padding, n),
                E = (0, i.A)(u),
                b = "y" === h ? d.Mn : d.kb,
                y = "y" === h ? d.sQ : d.pG,
                O = n.rects.reference[m] + n.rects.reference[h] - p[h] - n.rects.popper[m],
                A = p[h] - n.rects.reference[h],
                v = (0, s.A)(u),
                S = v ? ("y" === h ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
                I = O / 2 - A / 2,
                T = g[b],
                C = S - E[m] - g[y],
                N = S / 2 - E[m] / 2 + I,
                R = (0, l.u)(T, N, C),
                w = h;
            n.modifiersData[a] = ((t = {}), (t[w] = R), (t.centerOffset = R - N), t);
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
