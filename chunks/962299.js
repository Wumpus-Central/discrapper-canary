n.d(e, { M: () => N });
var r = n(477900),
    l = n(582128),
    s = n(403581),
    c = n(834730),
    o = n(821609),
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
function N(t) {
    let { applicationId: e, analyticsLocations: n } = t,
        N = (0, x.F)("storefront_banner", { applicationId: e }),
        k = (0, d.W8)(),
        p = N?.endsAt ?? null,
        [, g] = l.useReducer((t) => t + 1, 0);
    (0, i.A)(g, null != p ? 1e3 : null);
    let b = null != p && null == (0, m.ZH)(p),
        A = l.useCallback(() => {
            (0, u.A)({ subscriptionTier: v.pe.TIER_2, analyticsLocations: n, applicationId: e });
        }, [n, e]);
    if (null == N || b) return null;
    if ("nitro" === N.flavor && !k)
        return (0, r.jsx)(h.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, r.jsxs)("div", {
                className: f.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: f.FS,
                        children: [
                            (0, r.jsx)(s.t, { size: "xs", color: "currentColor", className: f.Kk }),
                            (0, r.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "currentColor",
                                children: (0, a.U)(N.text),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: s.t,
                        text: j.intl.string(j.t.pj0XBN),
                        onClick: A,
                    }),
                ],
            }),
        });
    let C = "nitro" === N.flavor;
    return (0, r.jsx)(h.e, {
        sticky: !0,
        Icon: C ? s.t : N.Icon,
        endDatetime: N.endsAt,
        color: C ? "nitro-pink" : void 0,
        children: (0, r.jsx)(c.E, { variant: "text-sm/normal", color: "currentColor", children: (0, a.U)(N.text) }),
    });
}
