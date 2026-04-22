n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(364840),
    a = n(821609),
    o = n(778712),
    u = n(97808),
    d = n(775602),
    c = n(688810),
    p = n(912140),
    m = n(674658),
    E = n(780898),
    S = n(512213),
    _ = n(898461),
    I = n(837015),
    P = n(61750),
    A = n(287809),
    x = n(482132),
    h = n(758836),
    T = n(985018),
    g = n(258915);
function f(e) {
    let { rewardSkuId: t, onClose: n } = e,
        f = (0, r.bG)([A.default], () => A.default.getCurrentUser()),
        j = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        { analyticsLocations: R } = (0, c.Ay)(),
        M = o._3.SIZE_32,
        { product: C, isFetching: y } = (0, m.q)(t),
        [N, k] = i.useState(!1),
        b = C?.items[0],
        {
            isNameplateReward: O,
            nameplateData: v,
            rewardAvatarDecorationSrc: w,
        } = i.useMemo(
            () =>
                null == b
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, I.F)(b)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: b.skuId,
                                src: b.asset,
                                palette: (0, E.H6)(b.palette ?? "sky"),
                                imgAlt: b.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, _.T)(b)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, p.A)({
                                  legacyAssetId: b.asset,
                                  skuId: b.skuId,
                                  size: M,
                                  canAnimate: !j,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [b, M, j],
        );
    return (0, l.jsx)(x.UX, {
        children: (0, l.jsx)(s.j, {
            children: (0, l.jsxs)("div", {
                className: g.W,
                children: [
                    O && null != v
                        ? (0, l.jsx)("div", {
                              className: g.D,
                              onMouseEnter: () => k(!0),
                              onMouseLeave: () => k(!1),
                              children: (0, l.jsx)(S.a, {
                                  user: f,
                                  nameplate: null,
                                  nameplateData: v,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: N,
                              }),
                          })
                        : (0, l.jsx)(u.Js, {
                              "aria-label": f?.username,
                              size: M,
                              src: f?.getAvatarURL(void 0, (0, o.FT)(M), !j),
                              avatarDecoration: w,
                          }),
                    (0, l.jsx)(a.$, {
                        variant: "primary",
                        text: T.intl.string(T.t.kMYVwv),
                        loading: y,
                        onClick: () => {
                            null != C &&
                                (n(),
                                (0, P.A)({
                                    product: C,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: R,
                                    purchaseType: h.gs.PROMOTIONAL,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
