n.d(e, { M: () => b });
var s = n(477900),
    r = n(582128),
    c = n(503698),
    l = n.n(c),
    i = n(834730),
    o = n(403581),
    a = n(821609),
    u = n(812095),
    d = n(75678),
    x = n(871123),
    m = n(723807),
    h = n(831024),
    j = n(906383),
    v = n(421108),
    f = n(944038),
    k = n(647474),
    p = n(202541),
    N = n(105292),
    g = n(279673);
function A(t) {
    let { Icon: e, text: n, className: r } = t;
    return (0, s.jsxs)("div", {
        className: l()(g.FS, r),
        children: [
            null != e && (0, s.jsx)(e, { size: "xs", color: "currentColor", className: g.Kk }),
            (0, s.jsx)(i.E, { variant: "text-sm/normal", color: "currentColor", children: (0, u.U)(n) }),
        ],
    });
}
function b(t) {
    let { applicationId: e, analyticsLocations: n } = t,
        c = (0, h.u)({ surface: "storefront_banner", applicationId: e }),
        i = (0, j.Pc)(c),
        u = c?.endsAt ?? null,
        b = (0, v.tm)(u),
        I = (0, m.h)(c),
        S = r.useCallback(() => {
            (0, d.A)({
                subscriptionTier: p.pe.TIER_2,
                analyticsLocations: n,
                applicationId: e,
                ...(0, x.zl)(c?.rewardRequirements ?? []),
            });
        }, [n, e, c]);
    if (null == c || b) return null;
    if ((0, j.ad)(i))
        return (0, s.jsx)(k.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, s.jsxs)("div", {
                className: l()(g.kL, g.OQ),
                children: [
                    (0, s.jsx)(A, { Icon: o.t, text: c.text }),
                    (0, s.jsxs)("div", {
                        className: g.jZ,
                        children: [
                            (0, s.jsx)(k.S, { endDatetime: c.endsAt }),
                            (0, s.jsx)(a.$, {
                                variant: "expressive",
                                size: "sm",
                                icon: o.t,
                                text: N.intl.string(N.t.pj0XBN),
                                onClick: S,
                            }),
                        ],
                    }),
                ],
            }),
        });
    if (null != I)
        return (0, s.jsxs)(k.A, {
            className: g.kL,
            color: "nitro-pink",
            sticky: !0,
            children: [
                (0, s.jsx)(A, { Icon: o.t, text: c.text }),
                (0, s.jsxs)("div", {
                    className: g.jZ,
                    children: [
                        (0, s.jsx)(k.S, { endDatetime: c.endsAt }),
                        (0, s.jsx)(f.d, { applicationId: e, coupon: I, analyticsLocations: n }),
                    ],
                }),
            ],
        });
    let y = "nitro" === c.flavor,
        C = y ? o.t : c.Icon;
    return (0, s.jsxs)(k.A, {
        sticky: !0,
        color: y ? "nitro-pink" : void 0,
        children: [
            (0, s.jsx)(A, { Icon: C, text: c.text, className: g.kL }),
            (0, s.jsx)(k.S, { endDatetime: c.endsAt }),
        ],
    });
}
