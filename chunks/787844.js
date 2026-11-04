(n.d(t, { d: () => x }), n(321073));
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
    k = n(505274),
    C = n(652165),
    I = n(67480),
    A = n(733391),
    S = n(192308),
    N = n(129230),
    O = n(188275),
    g = n(652215);
let h = "social-layer-storefront-coupon-purchase-complete-modal";
var P = n(317560),
    v = n(25082),
    R = n(792996),
    y = n(17268);
function x(e) {
    let { applicationId: t, coupon: x, discountPercent: _, analyticsLocations: w, surface: b = "storefront" } = e,
        { skuId: L, applicationId: D } = x,
        F = (0, a.k)(),
        [B, G] = l.useState(!1),
        M = (0, u.bG)([k.A], () => k.A.getCurrentBalance()),
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
            null == k.A.getCurrentBalance() && (0, E.Bf)());
    }, [L]);
    let j = l.useCallback(async () => {
            if (!B) {
                G(!0);
                try {
                    let e = [];
                    (null == I.A.get(L) && e.push((0, c.fM)(L)),
                        null == p.A.getPricesForSkuId(L) && e.push((0, f.N4)({ skuIds: [L] })),
                        e.length > 0 && (await Promise.all(e)),
                        await (0, C.B4)({
                            skuId: L,
                            applicationId: D,
                            contextKey: F,
                            analyticsLocations: w,
                            onComplete: () => {
                                ((0, A.ap)(t, { forceFetch: !0 }),
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
                                                    N.default.track(g.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                                                        type: O.nI,
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
                                        discountPercent: _,
                                        surface: b,
                                        analyticsLocations: w,
                                        contextKey: F,
                                    }));
                            },
                        }));
                } finally {
                    G(!1);
                }
            }
        }, [w, t, D, _, B, F, L, b]),
        K = "pdp" === b ? "overlay-primary" : "expressive";
    return null != M && null != T && M < T
        ? (0, r.jsx)(o.$, {
              variant: K,
              size: "sm",
              icon: s.C,
              text: R.intl.string(R.t.SymzJC),
              onClick: () => {
                  ((0, d.m)({ fromContent: i.u.SOCIAL_LAYER_STOREFRONT }), (0, P.j)(F));
              },
          })
        : (0, r.jsx)(o.$, {
              variant: K,
              size: "sm",
              icon: s.C,
              text: "pdp" === b && null != T ? String(T) : R.intl.string(y.default.BxjHiu),
              "aria-label":
                  "pdp" === b && null != T ? R.intl.formatToPlainString(v.default.lTwxHh, { orbAmount: T }) : void 0,
              loading: B || ("pdp" === b && (null == T || null == M)),
              onClick: j,
          });
}
