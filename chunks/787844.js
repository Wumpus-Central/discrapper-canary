(n.d(t, { d: () => b }), n(321073));
var r = n(477900),
    l = n(582128),
    i = n(696292),
    u = n(855986),
    a = n(638495),
    o = n(821609),
    s = n(318254),
    c = n(830382),
    d = n(216934),
    p = n(561573),
    f = n(828596),
    m = n(288106),
    E = n(786953),
    I = n(505274),
    k = n(652165),
    A = n(67480),
    O = n(733391),
    S = n(192308),
    C = n(129230),
    N = n(188275),
    g = n(652215);
let h = "social-layer-storefront-coupon-purchase-complete-modal";
var P = n(317560),
    v = n(25082),
    R = n(792996),
    y = n(17268);
function b(e) {
    let { applicationId: t, coupon: b, discountPercent: x, analyticsLocations: _, surface: w = "storefront" } = e,
        { skuId: L, applicationId: D } = b,
        F = (0, a.k)(),
        [B, G] = l.useState(!1),
        M = (0, u.bG)([I.A], () => I.A.getCurrentBalance()),
        T = (0, u.bG)([p.A], () => {
            var e;
            let t;
            return (
                (e = p.A.getPricesForSkuId(L)),
                (t = e?.[m.QK.SELF_PURCHASE]?.userPrice?.find((e) => e.currency === g.Yri.DISCORD_ORB)),
                t?.amount ?? null
            );
        });
    l.useEffect(() => {
        (null == p.A.getPricesForSkuId(L) && (0, f.N4)({ skuIds: [L] }),
            null == I.A.getCurrentBalance() && (0, E.Bf)());
    }, [L]);
    let j = l.useCallback(async () => {
            if (!B) {
                G(!0);
                try {
                    let e = [];
                    (null == A.A.get(L) && e.push((0, c.fM)(L)),
                        null == p.A.getPricesForSkuId(L) && e.push((0, f.N4)({ skuIds: [L] })),
                        e.length > 0 && (await Promise.all(e)),
                        await (0, k.B4)({
                            skuId: L,
                            applicationId: D,
                            contextKey: F,
                            analyticsLocations: _,
                            onComplete: () => {
                                ((0, O.ap)(t, { forceFetch: !0 }),
                                    (function (e) {
                                        let { contextKey: t, ...l } = e,
                                            i = t ?? (0, S.lx)();
                                        (0, S.mM)(
                                            async () => {
                                                let { SocialLayerStorefrontCouponPurchaseCompleteModal: e } = await n
                                                    .e(108770)
                                                    .then(n.bind(n, 783481));
                                                return function (t) {
                                                    return (0, r.jsx)(e, { ...t, ...l });
                                                };
                                            },
                                            {
                                                modalKey: h,
                                                contextKey: i,
                                                stackingBehavior: "replaceAll",
                                                onCloseRequest: () => (0, S.Oo)(h, i),
                                                onCloseCallback: () => {
                                                    C.default.track(g.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                                                        type: N.nI,
                                                        application_id: l.applicationId,
                                                        sku_id: l.skuId,
                                                        location_stack: l.analyticsLocations,
                                                    });
                                                },
                                            },
                                        );
                                    })({
                                        applicationId: t,
                                        skuId: L,
                                        discountPercent: x,
                                        surface: w,
                                        analyticsLocations: _,
                                        contextKey: F,
                                    }));
                            },
                        }));
                } finally {
                    G(!1);
                }
            }
        }, [_, t, D, x, B, F, L, w]),
        K = "pdp" === w ? "overlay-primary" : "expressive";
    return null != M && null != T && M < T
        ? (0, r.jsx)(o.$, {
              variant: K,
              size: "sm",
              icon: s.OrbsIcon,
              text: R.intl.string(R.t.SymzJC),
              onClick: () => {
                  ((0, d.m)({ fromContent: i.u.SOCIAL_LAYER_STOREFRONT }), (0, P.j)(F));
              },
          })
        : (0, r.jsx)(o.$, {
              variant: K,
              size: "sm",
              icon: s.OrbsIcon,
              text: "pdp" === w && null != T ? String(T) : R.intl.string(y.default.BxjHiu),
              "aria-label":
                  "pdp" === w && null != T ? R.intl.formatToPlainString(v.default.lTwxHh, { orbAmount: T }) : void 0,
              loading: B || ("pdp" === w && (null == T || null == M)),
              onClick: j,
          });
}
