var r = n(477900),
    s = n(582128),
    o = n(503698),
    c = n.n(o),
    l = n(834730),
    i = n(28863),
    a = n(403581),
    u = n(821609),
    d = n(812095),
    m = n(778705),
    x = n(871123),
    h = n(741899),
    j = n(723807),
    f = n(831024),
    k = n(906383),
    v = n(421108),
    N = n(787844),
    p = n(647474),
    b = n(188275),
    I = n(682901),
    g = n(792996),
    y = n(279673);
function A(t) {
    let { Icon: e, text: n, termsUrl: s, className: o } = t;
    return (0, r.jsxs)("div", {
        className: c()(y.FS, o),
        children: [
            null != e && (0, r.jsx)(e, { size: "xs", color: "currentColor", className: y.Kk }),
            (0, r.jsxs)(l.E, {
                variant: "body-sm/normal",
                color: "currentColor",
                children: [
                    (0, d.U)(n),
                    null != s &&
                        (0, r.jsx)(i.Anchor, {
                            href: s,
                            target: "_blank",
                            className: y.nf,
                            children: g.intl.string(g.t.WQdkbb),
                        }),
                ],
            }),
        ],
    });
}
function S(t) {
    let { applicationId: e, coupon: n, analyticsLocations: s } = t,
        o = e === b.S3 && b.xO.has(n.skuId),
        c = (0, h.N)("slayer_storefront_storefront_banner", o);
    return (0, r.jsx)(N.d, {
        applicationId: e,
        coupon: n,
        discountPercent: o && c?.offerSkuId === n.skuId ? c.discountPercent : void 0,
        analyticsLocations: s,
        surface: "storefront",
    });
}
n.d(
    e,
    {},
    {
        M: function (t) {
            let { applicationId: e, analyticsLocations: n } = t,
                o = (0, f.u)({ surface: "storefront_banner", applicationId: e }),
                l = (0, k.Pc)(o),
                i = o?.endsAt ?? null,
                d = (0, v.tm)(i),
                h = (0, j.h)(o),
                N = s.useCallback(() => {
                    (0, m.A)({
                        subscriptionTier: I.pe.TIER_2,
                        analyticsLocations: n,
                        applicationId: e,
                        ...(0, x.zl)(o?.rewardRequirements ?? []),
                    });
                }, [n, e, o]);
            if (null == o || d) return null;
            let C = e === b.S3 ? (0, b.X3)(e) : void 0;
            if ((0, k.ad)(l))
                return (0, r.jsx)(p.A, {
                    color: "nitro-pink",
                    sticky: !0,
                    children: (0, r.jsxs)("div", {
                        className: c()(y.kL, y.OQ),
                        children: [
                            (0, r.jsx)(A, { Icon: a.NitroWheelIcon, text: o.text, termsUrl: C }),
                            (0, r.jsxs)("div", {
                                className: y.jZ,
                                children: [
                                    (0, r.jsx)(p.S, { endDatetime: o.endsAt }),
                                    (0, r.jsx)(u.$, {
                                        variant: "expressive",
                                        size: "sm",
                                        icon: a.NitroWheelIcon,
                                        text: g.intl.string(g.t.pj0XBN),
                                        onClick: N,
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            if (null != h)
                return (0, r.jsxs)(p.A, {
                    className: y.kL,
                    color: "nitro-pink",
                    sticky: !0,
                    children: [
                        (0, r.jsx)(A, { Icon: a.NitroWheelIcon, text: o.text, termsUrl: C }),
                        (0, r.jsxs)("div", {
                            className: y.jZ,
                            children: [
                                (0, r.jsx)(p.S, { endDatetime: o.endsAt }),
                                (0, r.jsx)(S, { applicationId: e, coupon: h, analyticsLocations: n }),
                            ],
                        }),
                    ],
                });
            let L = "nitro" === o.flavor,
                _ = L ? a.NitroWheelIcon : o.Icon;
            return (0, r.jsxs)(p.A, {
                sticky: !0,
                color: L ? "nitro-pink" : void 0,
                children: [
                    (0, r.jsx)(A, { Icon: _, text: o.text, termsUrl: C, className: y.kL }),
                    (0, r.jsx)(p.S, { endDatetime: o.endsAt }),
                ],
            });
        },
    },
);
