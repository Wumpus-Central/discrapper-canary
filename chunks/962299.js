n.d(e, { M: () => p });
var r = n(477900),
    s = n(582128),
    l = n(503698),
    c = n.n(l),
    o = n(403581),
    i = n(834730),
    a = n(821609),
    u = n(812095),
    d = n(75678),
    m = n(871123),
    x = n(831024),
    h = n(906383),
    j = n(421108),
    v = n(647474),
    f = n(202541),
    k = n(375708),
    N = n(279673);
function p(t) {
    let { applicationId: e, analyticsLocations: n } = t,
        l = (0, x.u)({ surface: "storefront_banner", applicationId: e }),
        p = (0, h.Pc)(l),
        g = l?.endsAt ?? null,
        C = (0, j.tm)(g),
        b = s.useCallback(() => {
            (0, d.A)({
                subscriptionTier: f.pe.TIER_2,
                analyticsLocations: n,
                applicationId: e,
                ...(0, m.zl)(l?.rewardRequirements ?? []),
            });
        }, [n, e, l]);
    if (null == l || C) return null;
    if ((0, h.ad)(p))
        return (0, r.jsx)(v.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, r.jsxs)("div", {
                className: c()(N.kL, N.OQ),
                children: [
                    (0, r.jsxs)("div", {
                        className: N.FS,
                        children: [
                            (0, r.jsx)(o.t, { size: "xs", color: "currentColor", className: N.Kk }),
                            (0, r.jsx)(i.E, {
                                variant: "text-sm/normal",
                                color: "currentColor",
                                children: (0, u.U)(l.text),
                            }),
                        ],
                    }),
                    (0, r.jsx)(a.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: o.t,
                        text: k.intl.string(k.t.pj0XBN),
                        onClick: b,
                    }),
                ],
            }),
        });
    let A = "nitro" === l.flavor;
    return (0, r.jsx)(v.e, {
        contentClassName: N.kL,
        sticky: !0,
        Icon: A ? o.t : l.Icon,
        endDatetime: l.endsAt,
        color: A ? "nitro-pink" : void 0,
        children: (0, r.jsx)(i.E, { variant: "text-sm/normal", color: "currentColor", children: (0, u.U)(l.text) }),
    });
}
