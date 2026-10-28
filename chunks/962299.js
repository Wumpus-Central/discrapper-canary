n.d(e, { M: () => y });
var s = n(477900),
    r = n(582128),
    c = n(503698),
    o = n.n(c),
    i = n(834730),
    l = n(403581),
    a = n(821609),
    u = n(812095),
    d = n(75678),
    x = n(871123),
    m = n(741899),
    h = n(723807),
    j = n(831024),
    f = n(906383),
    v = n(421108),
    k = n(862577),
    p = n(647474),
    N = n(188275),
    g = n(202541),
    I = n(105292),
    A = n(279673);
function b(t) {
    let { Icon: e, text: n, className: r } = t;
    return (0, s.jsxs)("div", {
        className: o()(A.FS, r),
        children: [
            null != e && (0, s.jsx)(e, { size: "xs", color: "currentColor", className: A.Kk }),
            (0, s.jsx)(i.E, { variant: "text-sm/normal", color: "currentColor", children: (0, u.U)(n) }),
        ],
    });
}
function S(t) {
    let { applicationId: e, coupon: n, analyticsLocations: r } = t,
        c = e === N.S3 && N.xO.has(n.skuId),
        o = (0, m.N)("slayer_storefront_storefront_banner", c);
    return (0, s.jsx)(k.d, {
        applicationId: e,
        coupon: n,
        discountPercent: c && o?.offerSkuId === n.skuId ? o.discountPercent : void 0,
        analyticsLocations: r,
        surface: "storefront",
    });
}
function y(t) {
    let { applicationId: e, analyticsLocations: n } = t,
        c = (0, j.u)({ surface: "storefront_banner", applicationId: e }),
        i = (0, f.Pc)(c),
        u = c?.endsAt ?? null,
        m = (0, v.tm)(u),
        k = (0, h.h)(c),
        N = r.useCallback(() => {
            (0, d.A)({
                subscriptionTier: g.pe.TIER_2,
                analyticsLocations: n,
                applicationId: e,
                ...(0, x.zl)(c?.rewardRequirements ?? []),
            });
        }, [n, e, c]);
    if (null == c || m) return null;
    if ((0, f.ad)(i))
        return (0, s.jsx)(p.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, s.jsxs)("div", {
                className: o()(A.kL, A.OQ),
                children: [
                    (0, s.jsx)(b, { Icon: l.t, text: c.text }),
                    (0, s.jsxs)("div", {
                        className: A.jZ,
                        children: [
                            (0, s.jsx)(p.S, { endDatetime: c.endsAt }),
                            (0, s.jsx)(a.$, {
                                variant: "expressive",
                                size: "sm",
                                icon: l.t,
                                text: I.intl.string(I.t.pj0XBN),
                                onClick: N,
                            }),
                        ],
                    }),
                ],
            }),
        });
    if (null != k)
        return (0, s.jsxs)(p.A, {
            className: A.kL,
            color: "nitro-pink",
            sticky: !0,
            children: [
                (0, s.jsx)(b, { Icon: l.t, text: c.text }),
                (0, s.jsxs)("div", {
                    className: A.jZ,
                    children: [
                        (0, s.jsx)(p.S, { endDatetime: c.endsAt }),
                        (0, s.jsx)(S, { applicationId: e, coupon: k, analyticsLocations: n }),
                    ],
                }),
            ],
        });
    let y = "nitro" === c.flavor,
        C = y ? l.t : c.Icon;
    return (0, s.jsxs)(p.A, {
        sticky: !0,
        color: y ? "nitro-pink" : void 0,
        children: [
            (0, s.jsx)(b, { Icon: C, text: c.text, className: A.kL }),
            (0, s.jsx)(p.S, { endDatetime: c.endsAt }),
        ],
    });
}
