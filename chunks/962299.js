var r = n(477900),
    s = n(582128),
    o = n(503698),
    c = n.n(o),
    i = n(834730),
    l = n(28863),
    a = n(403581),
    u = n(821609),
    d = n(812095),
    m = n(778705),
    x = n(288106),
    h = n(871123),
    j = n(741899),
    f = n(723807),
    N = n(831024),
    k = n(906383),
    v = n(421108),
    p = n(787844),
    b = n(647474),
    I = n(188275),
    g = n(682901),
    y = n(792996),
    A = n(279673);
function S(t) {
    let { Icon: e, text: n, termsUrl: s, className: o } = t;
    return (0, r.jsxs)("div", {
        className: c()(A.FS, o),
        children: [
            null != e && (0, r.jsx)(e, { size: "xs", color: "currentColor", className: A.Kk }),
            (0, r.jsxs)(i.E, {
                variant: "body-sm/normal",
                color: "currentColor",
                children: [
                    (0, d.U)(n),
                    null != s &&
                        (0, r.jsx)(l.Anchor, {
                            href: s,
                            target: "_blank",
                            className: A.nf,
                            children: y.intl.string(y.t.WQdkbb),
                        }),
                ],
            }),
        ],
    });
}
function C(t) {
    let { applicationId: e, coupon: n, analyticsLocations: s } = t,
        o = e === I.S3 && I.xO.has(n.skuId),
        c = (0, j.N)("slayer_storefront_storefront_banner", o);
    return (0, r.jsx)(p.d, {
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
                o = (0, N.u)({ surface: "storefront_banner", applicationId: e }),
                i = (0, k.Pc)(o),
                l = o?.endsAt ?? null,
                d = (0, v.tm)(l),
                j = (0, f.h)(o),
                p = s.useCallback(() => {
                    (0, m.A)({
                        subscriptionTier: g.pe.TIER_2,
                        analyticsLocations: n,
                        applicationId: e,
                        ...(0, h.zl)(o?.rewardRequirements ?? []),
                    });
                }, [n, e, o]);
            if (null == o || (d && o.rewardStatus !== x.GM.EARNED)) return null;
            let L = e === I.S3 && o.id === I.ZX ? (0, I.X3)(e) : void 0;
            if ((0, k.ad)(i))
                return (0, r.jsx)(b.A, {
                    color: "nitro-pink",
                    sticky: !0,
                    children: (0, r.jsxs)("div", {
                        className: c()(A.kL, A.OQ),
                        children: [
                            (0, r.jsx)(S, { Icon: a.NitroWheelIcon, text: o.text, termsUrl: L }),
                            (0, r.jsxs)("div", {
                                className: A.jZ,
                                children: [
                                    (0, r.jsx)(b.S, { endDatetime: o.endsAt }),
                                    (0, r.jsx)(u.$, {
                                        variant: "expressive",
                                        size: "sm",
                                        icon: a.NitroWheelIcon,
                                        text: y.intl.string(y.t.pj0XBN),
                                        onClick: p,
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            if (null != j)
                return (0, r.jsxs)(b.A, {
                    className: A.kL,
                    color: "nitro-pink",
                    sticky: !0,
                    children: [
                        (0, r.jsx)(S, { Icon: a.NitroWheelIcon, text: o.text, termsUrl: L }),
                        (0, r.jsxs)("div", {
                            className: A.jZ,
                            children: [
                                (0, r.jsx)(b.S, { endDatetime: o.endsAt }),
                                (0, r.jsx)(C, { applicationId: e, coupon: j, analyticsLocations: n }),
                            ],
                        }),
                    ],
                });
            let _ = "nitro" === o.flavor,
                D = _ ? a.NitroWheelIcon : o.Icon;
            return (0, r.jsxs)(b.A, {
                sticky: !0,
                color: _ ? "nitro-pink" : void 0,
                children: [
                    (0, r.jsx)(S, { Icon: D, text: o.text, termsUrl: L, className: A.kL }),
                    (0, r.jsx)(b.S, { endDatetime: o.endsAt }),
                ],
            });
        },
    },
);
