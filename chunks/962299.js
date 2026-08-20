n.d(e, { M: () => N });
var r = n(477900),
    l = n(582128),
    s = n(403581),
    c = n(834730),
    o = n(821609),
    i = n(396583),
    a = n(812095),
    u = n(532794),
    d = n(871123),
    m = n(69236),
    x = n(31969),
    h = n(421108),
    v = n(647474),
    j = n(202541),
    f = n(375708),
    k = n(279673);
function N(t) {
    let { applicationId: e, analyticsLocations: n } = t,
        N = (0, x.F)("storefront_banner", { applicationId: e }),
        p = (0, m.W8)(),
        g = N?.endsAt ?? null,
        [, b] = l.useReducer((t) => t + 1, 0);
    (0, i.A)(b, null != g ? 1e3 : null);
    let C = null != g && null == (0, h.ZH)(g),
        A = l.useCallback(() => {
            (0, u.A)({
                subscriptionTier: j.pe.TIER_2,
                analyticsLocations: n,
                applicationId: e,
                ...(0, d.zl)(N?.rewardRequirements ?? []),
            });
        }, [n, e, N]);
    if (null == N || C) return null;
    if ("nitro" === N.flavor && !p)
        return (0, r.jsx)(v.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, r.jsxs)("div", {
                className: k.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: k.FS,
                        children: [
                            (0, r.jsx)(s.t, { size: "xs", color: "currentColor", className: k.Kk }),
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
                        text: f.intl.string(f.t.pj0XBN),
                        onClick: A,
                    }),
                ],
            }),
        });
    let y = "nitro" === N.flavor;
    return (0, r.jsx)(v.e, {
        sticky: !0,
        Icon: y ? s.t : N.Icon,
        endDatetime: N.endsAt,
        color: y ? "nitro-pink" : void 0,
        children: (0, r.jsx)(c.E, { variant: "text-sm/normal", color: "currentColor", children: (0, a.U)(N.text) }),
    });
}
