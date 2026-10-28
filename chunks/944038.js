(t.d(r, { d: () => v }), t(321073));
var n = t(477900),
    l = t(582128),
    u = t(696292),
    i = t(17928),
    a = t(638495),
    s = t(821609),
    o = t(318254),
    d = t(830382),
    c = t(216934),
    p = t(561573),
    f = t(828596),
    m = t(288106),
    E = t(786953),
    I = t(505274),
    C = t(652165),
    N = t(67480),
    S = t(733391),
    g = t(317560),
    k = t(652215),
    A = t(206285),
    P = t(105292),
    h = t(1889);
function v(e) {
    let { applicationId: r, coupon: t, analyticsLocations: v, surface: O = "storefront" } = e,
        { skuId: R, applicationId: w } = t,
        b = (0, a.k)(),
        [x, y] = l.useState(!1),
        _ = (0, i.bG)([I.A], () => I.A.getCurrentBalance()),
        D = (0, i.bG)([p.A], () => {
            var e;
            let r;
            return (
                (e = p.A.getPricesForSkuId(R)),
                (r = e?.[m.QK.SELF_PURCHASE]?.userPrice?.find((e) => e.currency === k.Yri.DISCORD_ORB)),
                r?.amount ?? null
            );
        });
    l.useEffect(() => {
        (null == p.A.getPricesForSkuId(R) && (0, f.N4)({ skuIds: [R] }),
            null == I.A.getCurrentBalance() && (0, E.Bf)());
    }, [R]);
    let F = l.useCallback(async () => {
            if (!x) {
                y(!0);
                try {
                    let e = [];
                    (null == N.A.get(R) && e.push((0, d.fM)(R)),
                        null == p.A.getPricesForSkuId(R) && e.push((0, f.N4)({ skuIds: [R] })),
                        e.length > 0 && (await Promise.all(e)),
                        await (0, C.B4)({
                            skuId: R,
                            applicationId: w,
                            contextKey: b,
                            analyticsLocations: v,
                            onComplete: () => {
                                (0, S.ap)(r, { forceFetch: !0 });
                            },
                        }));
                } finally {
                    y(!1);
                }
            }
        }, [v, r, w, x, b, R]),
        G = "pdp" === O ? "overlay-primary" : "expressive";
    return null != _ && null != D && _ < D
        ? (0, n.jsx)(s.$, {
              variant: G,
              size: "sm",
              icon: o.C,
              text: P.intl.string(P.t.SymzJC),
              onClick: () => {
                  ((0, c.m)({ fromContent: u.u.SOCIAL_LAYER_STOREFRONT }), (0, g.j)(b));
              },
          })
        : (0, n.jsx)(s.$, {
              variant: G,
              size: "sm",
              icon: o.C,
              text: "pdp" === O && null != D ? String(D) : P.intl.string(h.default.BxjHiu),
              "aria-label":
                  "pdp" === O && null != D ? P.intl.formatToPlainString(A.default.lTwxHh, { orbAmount: D }) : void 0,
              loading: x || ("pdp" === O && (null == D || null == _)),
              onClick: F,
          });
}
