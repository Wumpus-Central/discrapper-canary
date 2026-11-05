var s = n(477900),
    r = n(582128),
    o = n(503698),
    c = n.n(o),
    i = n(834730),
    l = n(403581),
    a = n(821609),
    u = n(812095),
    d = n(778705),
    m = n(871123),
    x = n(741899),
    h = n(723807),
    j = n(831024),
    f = n(906383),
    v = n(421108),
    N = n(787844),
    k = n(647474),
    p = n(188275),
    I = n(682901),
    b = n(792996),
    g = n(279673);
function y(t) {
    let { Icon: e, text: n, className: r } = t;
    return (0, s.jsxs)("div", {
        className: c()(g.FS, r),
        children: [
            null != e && (0, s.jsx)(e, { size: "xs", color: "currentColor", className: g.Kk }),
            (0, s.jsx)(i.E, { variant: "body-sm/normal", color: "currentColor", children: (0, u.U)(n) }),
        ],
    });
}
function A(t) {
    let { applicationId: e, coupon: n, analyticsLocations: r } = t,
        o = e === p.S3 && p.xO.has(n.skuId),
        c = (0, x.N)("slayer_storefront_storefront_banner", o);
    return (0, s.jsx)(N.d, {
        applicationId: e,
        coupon: n,
        discountPercent: o && c?.offerSkuId === n.skuId ? c.discountPercent : void 0,
        analyticsLocations: r,
        surface: "storefront",
    });
}
n.d(
    e,
    {},
    {
        M: function (t) {
            let { applicationId: e, analyticsLocations: n } = t,
                o = (0, j.u)({ surface: "storefront_banner", applicationId: e }),
                i = (0, f.Pc)(o),
                u = o?.endsAt ?? null,
                x = (0, v.tm)(u),
                N = (0, h.h)(o),
                p = r.useCallback(() => {
                    (0, d.A)({
                        subscriptionTier: I.pe.TIER_2,
                        analyticsLocations: n,
                        applicationId: e,
                        ...(0, m.zl)(o?.rewardRequirements ?? []),
                    });
                }, [n, e, o]);
            if (null == o || x) return null;
            if ((0, f.ad)(i))
                return (0, s.jsx)(k.A, {
                    color: "nitro-pink",
                    sticky: !0,
                    children: (0, s.jsxs)("div", {
                        className: c()(g.kL, g.OQ),
                        children: [
                            (0, s.jsx)(y, { Icon: l.NitroWheelIcon, text: o.text }),
                            (0, s.jsxs)("div", {
                                className: g.jZ,
                                children: [
                                    (0, s.jsx)(k.S, { endDatetime: o.endsAt }),
                                    (0, s.jsx)(a.$, {
                                        variant: "expressive",
                                        size: "sm",
                                        icon: l.NitroWheelIcon,
                                        text: b.intl.string(b.t.pj0XBN),
                                        onClick: p,
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            if (null != N)
                return (0, s.jsxs)(k.A, {
                    className: g.kL,
                    color: "nitro-pink",
                    sticky: !0,
                    children: [
                        (0, s.jsx)(y, { Icon: l.NitroWheelIcon, text: o.text }),
                        (0, s.jsxs)("div", {
                            className: g.jZ,
                            children: [
                                (0, s.jsx)(k.S, { endDatetime: o.endsAt }),
                                (0, s.jsx)(A, { applicationId: e, coupon: N, analyticsLocations: n }),
                            ],
                        }),
                    ],
                });
            let S = "nitro" === o.flavor,
                C = S ? l.NitroWheelIcon : o.Icon;
            return (0, s.jsxs)(k.A, {
                sticky: !0,
                color: S ? "nitro-pink" : void 0,
                children: [
                    (0, s.jsx)(y, { Icon: C, text: o.text, className: g.kL }),
                    (0, s.jsx)(k.S, { endDatetime: o.endsAt }),
                ],
            });
        },
    },
);
