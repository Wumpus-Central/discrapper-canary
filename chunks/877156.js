n.d(t, { A: () => g });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(732955),
    a = n(397927),
    o = n(775602),
    u = n(688810),
    d = n(580314),
    c = n(674658),
    p = n(898461),
    m = n(837015),
    E = n(61750),
    _ = n(369496),
    h = n(550111),
    x = n(287809),
    S = n(482132),
    P = n(758836),
    I = n(985018),
    T = n(920144);
function g(e) {
    let { rewardSkuId: t, onClose: n } = e,
        g = (0, s.bG)([x.default], () => x.default.getCurrentUser()),
        A = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        { analyticsLocations: j } = (0, u.Ay)(),
        f = a._3J.SIZE_32,
        { product: M, isFetching: R } = (0, c.q)(t),
        [y, C] = i.useState(!1),
        v = M?.items[0],
        {
            isNameplateReward: N,
            nameplateData: O,
            rewardAvatarDecorationSrc: b,
        } = i.useMemo(
            () =>
                null == v
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, m.F)(v)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: v.skuId,
                                src: v.asset,
                                palette: (0, _.H6)(v.palette ?? "sky"),
                                imgAlt: v.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, p.T)(v)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, d.A)({
                                  legacyAssetId: v.asset,
                                  skuId: v.skuId,
                                  size: f,
                                  canAnimate: !A,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [v, f, A],
        );
    return (0, l.jsx)(S.UX, {
        children: (0, l.jsx)(r.jlY, {
            children: (0, l.jsxs)("div", {
                className: T.W,
                children: [
                    N && null != O
                        ? (0, l.jsx)("div", {
                              className: T.D,
                              onMouseEnter: () => C(!0),
                              onMouseLeave: () => C(!1),
                              children: (0, l.jsx)(h.a, {
                                  user: g,
                                  nameplate: null,
                                  nameplateData: O,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: y,
                              }),
                          })
                        : (0, l.jsx)(a.JsQ, {
                              "aria-label": g?.username,
                              size: f,
                              src: g?.getAvatarURL(void 0, (0, a.FT9)(f), !A),
                              avatarDecoration: b,
                          }),
                    (0, l.jsx)(r.$nd, {
                        variant: "primary",
                        text: I.intl.string(I.t.kMYVwv),
                        loading: R,
                        onClick: () => {
                            null != M &&
                                (n(),
                                (0, E.A)({
                                    product: M,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: j,
                                    purchaseType: P.gs.PROMOTIONAL,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
