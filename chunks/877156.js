t.d(n, { A: () => g });
var l = t(627968),
    i = t(64700),
    r = t(311907),
    s = t(732955),
    a = t(397927),
    o = t(775602),
    u = t(688810),
    d = t(912140),
    c = t(674658),
    p = t(780898),
    m = t(512213),
    E = t(898461),
    _ = t(837015),
    x = t(61750),
    S = t(287809),
    P = t(482132),
    T = t(758836),
    I = t(985018),
    h = t(401506);
function g(e) {
    let { rewardSkuId: n, onClose: t } = e,
        g = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        A = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        { analyticsLocations: f } = (0, u.Ay)(),
        j = a._3J.SIZE_32,
        { product: R, isFetching: M } = (0, c.q)(n),
        [C, y] = i.useState(!1),
        N = R?.items[0],
        {
            isNameplateReward: O,
            nameplateData: v,
            rewardAvatarDecorationSrc: b,
        } = i.useMemo(
            () =>
                null == N
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, _.F)(N)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: N.skuId,
                                src: N.asset,
                                palette: (0, p.H6)(N.palette ?? "sky"),
                                imgAlt: N.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, E.T)(N)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, d.A)({
                                  legacyAssetId: N.asset,
                                  skuId: N.skuId,
                                  size: j,
                                  canAnimate: !A,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [N, j, A],
        );
    return (0, l.jsx)(P.UX, {
        children: (0, l.jsx)(s.jlY, {
            children: (0, l.jsxs)("div", {
                className: h.W,
                children: [
                    O && null != v
                        ? (0, l.jsx)("div", {
                              className: h.D,
                              onMouseEnter: () => y(!0),
                              onMouseLeave: () => y(!1),
                              children: (0, l.jsx)(m.a, {
                                  user: g,
                                  nameplate: null,
                                  nameplateData: v,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: C,
                              }),
                          })
                        : (0, l.jsx)(a.JsQ, {
                              "aria-label": g?.username,
                              size: j,
                              src: g?.getAvatarURL(void 0, (0, a.FT9)(j), !A),
                              avatarDecoration: b,
                          }),
                    (0, l.jsx)(s.$nd, {
                        variant: "primary",
                        text: I.intl.string(I.t.kMYVwv),
                        loading: M,
                        onClick: () => {
                            null != R &&
                                (t(),
                                (0, x.A)({
                                    product: R,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: f,
                                    purchaseType: T.gs.PROMOTIONAL,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
