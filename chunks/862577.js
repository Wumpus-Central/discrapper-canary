(n.d(t, { d: () => x }), n(321073));
var l = n(477900),
    r = n(582128),
    i = n(696292),
    a = n(17928),
    u = n(638495),
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
    g = n(174459),
    N = n(188275),
    O = n(652215);
let h = "social-layer-storefront-coupon-purchase-complete-modal";
var P = n(317560),
    v = n(961270),
    y = n(105292),
    R = n(923584);
function x(e) {
    let { applicationId: t, coupon: x, discountPercent: _, analyticsLocations: w, surface: b = "storefront" } = e,
        { skuId: L, applicationId: D } = x,
        M = (0, u.k)(),
        [F, B] = r.useState(!1),
        G = (0, a.bG)([k.A], () => k.A.getCurrentBalance()),
        T = (0, a.bG)([p.A], () => {
            var e;
            let t;
            return (
                (e = p.A.getPricesForSkuId(L)),
                (t = e?.[m.QK.SELF_PURCHASE]?.userPrice?.find((e) => e.currency === O.Yri.DISCORD_ORB)),
                t?.amount ?? null
            );
        });
    r.useEffect(() => {
        (null == p.A.getPricesForSkuId(L) && (0, f.N4)({ skuIds: [L] }),
            null == k.A.getCurrentBalance() && (0, E.Bf)());
    }, [L]);
    let j = r.useCallback(async () => {
            if (!F) {
                B(!0);
                try {
                    let e = [];
                    (null == I.A.get(L) && e.push((0, c.fM)(L)),
                        null == p.A.getPricesForSkuId(L) && e.push((0, f.N4)({ skuIds: [L] })),
                        e.length > 0 && (await Promise.all(e)),
                        await (0, C.B4)({
                            skuId: L,
                            applicationId: D,
                            contextKey: M,
                            analyticsLocations: w,
                            onComplete: () => {
                                ((0, A.ap)(t, { forceFetch: !0 }),
                                    (function (e) {
                                        let { contextKey: t, ...r } = e,
                                            i = t ?? (0, S.getInteractingModalContext)();
                                        (0, S.openModalLazy)(
                                            async () => {
                                                let { SocialLayerStorefrontCouponPurchaseCompleteModal: e } = await n
                                                    .e("881568")
                                                    .then(n.bind(n, 822563));
                                                return function (t) {
                                                    return (0, l.jsx)(e, { ...t, ...r });
                                                };
                                            },
                                            {
                                                modalKey: h,
                                                contextKey: i,
                                                stackingBehavior: "replaceAll",
                                                onCloseRequest: () => (0, S.closeModal)(h, i),
                                                onCloseCallback: () => {
                                                    g.default.track(O.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                                                        type: N.nI,
                                                        application_id: r.applicationId,
                                                        sku_id: r.skuId,
                                                        location_stack: r.analyticsLocations,
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
                                        contextKey: M,
                                    }));
                            },
                        }));
                } finally {
                    B(!1);
                }
            }
        }, [w, t, D, _, F, M, L, b]),
        K = "pdp" === b ? "overlay-primary" : "expressive";
    return null != G && null != T && G < T
        ? (0, l.jsx)(o.$, {
              variant: K,
              size: "sm",
              icon: s.C,
              text: y.intl.string(y.t.SymzJC),
              onClick: () => {
                  ((0, d.m)({ fromContent: i.u.SOCIAL_LAYER_STOREFRONT }), (0, P.j)(M));
              },
          })
        : (0, l.jsx)(o.$, {
              variant: K,
              size: "sm",
              icon: s.C,
              text: "pdp" === b && null != T ? String(T) : y.intl.string(R.default.BxjHiu),
              "aria-label":
                  "pdp" === b && null != T ? y.intl.formatToPlainString(v.default.lTwxHh, { orbAmount: T }) : void 0,
              loading: F || ("pdp" === b && (null == T || null == G)),
              onClick: j,
          });
}
