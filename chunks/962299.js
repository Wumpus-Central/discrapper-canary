(n.d(e, { M: () => O }), n(321073));
var r = n(477900),
    s = n(582128),
    l = n(503698),
    i = n.n(l),
    c = n(696292),
    a = n(17928),
    o = n(834730),
    u = n(403581),
    d = n(821609),
    m = n(318254),
    x = n(830382),
    f = n(812095),
    h = n(75678),
    k = n(216934),
    j = n(561573),
    p = n(828596),
    v = n(288106),
    g = n(786953),
    A = n(505274),
    I = n(652165),
    N = n(67480),
    C = n(871123),
    S = n(733391),
    b = n(831024),
    y = n(906383),
    R = n(421108),
    E = n(647474),
    L = n(652215),
    w = n(202541),
    D = n(105292),
    B = n(1889),
    z = n(279673);
function F(t) {
    let { Icon: e, text: n, className: s } = t;
    return (0, r.jsxs)("div", {
        className: i()(z.FS, s),
        children: [
            null != e && (0, r.jsx)(e, { size: "xs", color: "currentColor", className: z.Kk }),
            (0, r.jsx)(o.E, { variant: "text-sm/normal", color: "currentColor", children: (0, f.U)(n) }),
        ],
    });
}
function O(t) {
    let { applicationId: e, analyticsLocations: n } = t,
        l = (0, b.u)({ surface: "storefront_banner", applicationId: e }),
        c = (0, y.Pc)(l),
        a = l?.endsAt ?? null,
        o = (0, R.tm)(a),
        m = s.useMemo(
            () =>
                (function (t) {
                    let e = (t ?? []).filter(C.Ww);
                    if (1 !== e.length) return null;
                    let n = e[0];
                    return 1 !== n.skuIds.length ? null : { applicationId: n.applicationId, skuId: n.skuIds[0] };
                })(l?.rewardRequirements),
            [l?.rewardRequirements],
        ),
        x = s.useCallback(() => {
            (0, h.A)({
                subscriptionTier: w.pe.TIER_2,
                analyticsLocations: n,
                applicationId: e,
                ...(0, C.zl)(l?.rewardRequirements ?? []),
            });
        }, [n, e, l]);
    if (null == l || o) return null;
    if ((0, y.ad)(c))
        return (0, r.jsx)(E.A, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, r.jsxs)("div", {
                className: i()(z.kL, z.OQ),
                children: [
                    (0, r.jsx)(F, { Icon: u.t, text: l.text }),
                    (0, r.jsxs)("div", {
                        className: z.jZ,
                        children: [
                            (0, r.jsx)(E.S, { endDatetime: l.endsAt }),
                            (0, r.jsx)(d.$, {
                                variant: "expressive",
                                size: "sm",
                                icon: u.t,
                                text: D.intl.string(D.t.pj0XBN),
                                onClick: x,
                            }),
                        ],
                    }),
                ],
            }),
        });
    if (null != m && l.rewardStatus !== v.GM.EARNED && l.rewardStatus !== v.GM.CONSUMED)
        return (0, r.jsxs)(E.A, {
            className: z.kL,
            color: "nitro-pink",
            sticky: !0,
            children: [
                (0, r.jsx)(F, { Icon: u.t, text: l.text }),
                (0, r.jsxs)("div", {
                    className: z.jZ,
                    children: [
                        (0, r.jsx)(E.S, { endDatetime: l.endsAt }),
                        (0, r.jsx)(P, {
                            applicationId: m.applicationId,
                            skuId: m.skuId,
                            analyticsLocations: n,
                            onComplete: () => {
                                (0, S.ap)(e, { forceFetch: !0 });
                            },
                        }),
                    ],
                }),
            ],
        });
    let f = "nitro" === l.flavor,
        k = f ? u.t : l.Icon;
    return (0, r.jsxs)(E.A, {
        sticky: !0,
        color: f ? "nitro-pink" : void 0,
        children: [
            (0, r.jsx)(F, { Icon: k, text: l.text, className: z.kL }),
            (0, r.jsx)(E.S, { endDatetime: l.endsAt }),
        ],
    });
}
function P(t) {
    let { applicationId: e, skuId: n, onComplete: l, analyticsLocations: i } = t,
        [o, u] = s.useState(!1),
        f = (0, a.bG)([A.A], () => A.A.getCurrentBalance()),
        h = (0, a.bG)([j.A], () => {
            var t;
            let e;
            return (
                (t = j.A.getPricesForSkuId(n)),
                (e = t?.[v.QK.SELF_PURCHASE]?.userPrice?.find((t) => t.currency === L.Yri.DISCORD_ORB)),
                e?.amount ?? null
            );
        });
    s.useEffect(() => {
        (null == j.A.getPricesForSkuId(n) && (0, p.N4)({ skuIds: [n] }),
            null == A.A.getCurrentBalance() && (0, g.Bf)());
    }, [n]);
    let C = s.useCallback(async () => {
        if (!o) {
            u(!0);
            try {
                let t = [];
                (null == N.A.get(n) && t.push((0, x.fM)(n)),
                    null == j.A.getPricesForSkuId(n) && t.push((0, p.N4)({ skuIds: [n] })),
                    t.length > 0 && (await Promise.all(t)),
                    await (0, I.B4)({ skuId: n, applicationId: e, analyticsLocations: i, onComplete: l }));
            } finally {
                u(!1);
            }
        }
    }, [i, e, o, l, n]);
    return null != f && null != h && f < h
        ? (0, r.jsx)(d.$, {
              variant: "expressive",
              size: "sm",
              icon: m.C,
              text: D.intl.string(D.t.SymzJC),
              onClick: () => (0, k.m)({ fromContent: c.u.SOCIAL_LAYER_STOREFRONT }),
          })
        : (0, r.jsx)(d.$, {
              variant: "expressive",
              size: "sm",
              icon: m.C,
              text: D.intl.string(B.default.BxjHiu),
              loading: o,
              onClick: C,
          });
}
