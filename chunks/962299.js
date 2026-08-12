r.d(e, { M: () => k });
var n = r(477900),
    l = r(582128),
    s = r(403581),
    c = r(834730),
    o = r(821609),
    i = r(396583),
    a = r(812095),
    u = r(532794),
    d = r(871123),
    m = r(69236),
    x = r(31969),
    h = r(421108),
    v = r(647474),
    j = r(202541),
    f = r(375708),
    N = r(848618);
function k(t) {
    let { applicationId: e, analyticsLocations: r } = t,
        k = (0, x.F)("storefront_banner", { applicationId: e }),
        p = (0, m.W8)(),
        g = k?.endsAt ?? null,
        [, b] = l.useReducer((t) => t + 1, 0);
    (0, i.A)(b, null != g ? 1e3 : null);
    let A = null != g && null == (0, h.ZH)(g),
        C = l.useCallback(() => {
            (0, u.A)({
                subscriptionTier: j.pe.TIER_2,
                analyticsLocations: r,
                applicationId: e,
                ...(0, d.zl)(k?.rewardRequirements ?? []),
            });
        }, [r, e, k]);
    if (null == k || A) return null;
    if ("nitro" === k.flavor && !p)
        return (0, n.jsx)(v.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, n.jsxs)("div", {
                className: N.kL,
                children: [
                    (0, n.jsxs)("div", {
                        className: N.FS,
                        children: [
                            (0, n.jsx)(s.t, { size: "xs", color: "currentColor", className: N.Kk }),
                            (0, n.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "currentColor",
                                children: (0, a.U)(k.text),
                            }),
                        ],
                    }),
                    (0, n.jsx)(o.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: s.t,
                        text: f.intl.string(f.t.pj0XBN),
                        onClick: C,
                    }),
                ],
            }),
        });
    let y = "nitro" === k.flavor;
    return (0, n.jsx)(v.e, {
        sticky: !0,
        Icon: y ? s.t : k.Icon,
        endDatetime: k.endsAt,
        color: y ? "nitro-pink" : void 0,
        children: (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "currentColor", children: (0, a.U)(k.text) }),
    });
}
