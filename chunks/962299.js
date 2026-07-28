n.d(e, { M: () => p });
var r = n(477900),
    l = n(582128),
    s = n(403581),
    o = n(834730),
    c = n(821609),
    i = n(396583),
    a = n(812095),
    u = n(532794),
    d = n(69236),
    x = n(31969),
    m = n(421108),
    h = n(647474),
    v = n(202541),
    j = n(375708),
    f = n(848618);
function p(t) {
    let { applicationId: e, analyticsLocations: n } = t,
        p = (0, x.F)("storefront_banner", { applicationId: e }),
        N = (0, d.W8)(),
        g = p?.endsAt ?? null,
        [, k] = l.useReducer((t) => t + 1, 0);
    (0, i.A)(k, null != g ? 1e3 : null);
    let b = null != g && null == (0, m.Z)(g),
        A = l.useCallback(() => {
            (0, u.A)({ subscriptionTier: v.pe.TIER_2, analyticsLocations: n, applicationId: e });
        }, [n, e]);
    if (null == p || b) return null;
    if ("nitro" === p.flavor && !N)
        return (0, r.jsx)(h.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, r.jsxs)("div", {
                className: f.k,
                children: [
                    (0, r.jsxs)("div", {
                        className: f.F,
                        children: [
                            (0, r.jsx)(s.t, { size: "xs", color: "currentColor" }),
                            (0, r.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "currentColor",
                                children: (0, a.U)(p.text),
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: s.t,
                        text: j.intl.string(j.t.pj0XBN),
                        onClick: A,
                    }),
                ],
            }),
        });
    let C = "nitro" === p.flavor;
    return (0, r.jsx)(h.e, {
        sticky: !0,
        Icon: C ? s.t : p.Icon,
        endDatetime: p.endsAt,
        color: C ? "nitro-pink" : void 0,
        children: (0, r.jsx)(o.E, { variant: "text-sm/normal", color: "currentColor", children: (0, a.U)(p.text) }),
    });
}
