n.d(e, { M: () => p });
var r = n(627968),
    l = n(64700),
    s = n(403581),
    o = n(834730),
    c = n(821609),
    i = n(396583),
    a = n(532794),
    u = n(69236),
    d = n(31969),
    x = n(421108),
    m = n(920948),
    h = n(647474),
    v = n(202541),
    j = n(375708),
    f = n(444338);
function p(t) {
    let { applicationId: e, analyticsLocations: n } = t,
        p = (0, d.F)("storefront_banner", { applicationId: e }),
        N = (0, u.W8)(),
        g = p?.endsAt ?? null,
        [, k] = l.useReducer((t) => t + 1, 0);
    (0, i.A)(k, null != g ? 1e3 : null);
    let b = null != g && null == (0, x.Z)(g),
        A = l.useCallback(() => {
            (0, a.A)({ subscriptionTier: v.pe.TIER_2, analyticsLocations: n, applicationId: e });
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
                                children: (0, m.U)(p.text),
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
        children: (0, r.jsx)(o.E, { variant: "text-sm/normal", color: "currentColor", children: (0, m.U)(p.text) }),
    });
}
