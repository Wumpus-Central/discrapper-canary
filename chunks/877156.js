t.d(n, { A: () => S });
var i = t(627968),
    l = t(64700),
    r = t(311907),
    s = t(732955),
    a = t(397927),
    o = t(775602),
    u = t(688810),
    d = t(920064),
    c = t(674658),
    p = t(898461),
    m = t(837015),
    E = t(61750),
    _ = t(369496),
    P = t(550111),
    T = t(287809),
    h = t(482132),
    x = t(758836),
    g = t(985018),
    I = t(401506);
function S(e) {
    let { rewardSkuId: n, onClose: t } = e,
        S = (0, r.bG)([T.default], () => T.default.getCurrentUser()),
        A = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        { analyticsLocations: f } = (0, u.Ay)(),
        j = a._3J.SIZE_32,
        { product: M, isFetching: R } = (0, c.q)(n),
        [C, y] = l.useState(!1),
        N = M?.items[0],
        {
            isNameplateReward: O,
            nameplateData: v,
            rewardDeco: b,
        } = l.useMemo(
            () =>
                null == N
                    ? { isNameplateReward: !1, nameplateData: null, rewardDeco: void 0 }
                    : (0, m.F)(N)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: N.skuId,
                                src: N.asset,
                                palette: (0, _.H6)(N.palette ?? "sky"),
                                imgAlt: N.label,
                            },
                            rewardDeco: void 0,
                        }
                      : (0, p.T)(N)
                        ? { isNameplateReward: !1, nameplateData: null, rewardDeco: (0, d.A)(N.asset, j, !A) }
                        : { isNameplateReward: !1, nameplateData: null, rewardDeco: void 0 },
            [N, j, A],
        );
    return (0, i.jsx)(h.UX, {
        children: (0, i.jsx)(s.jlY, {
            children: (0, i.jsxs)("div", {
                className: I.W,
                children: [
                    O && null != v
                        ? (0, i.jsx)("div", {
                              className: I.D,
                              onMouseEnter: () => y(!0),
                              onMouseLeave: () => y(!1),
                              children: (0, i.jsx)(P.a, {
                                  user: S,
                                  nameplate: null,
                                  nameplateData: v,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: C,
                              }),
                          })
                        : (0, i.jsx)(a.JsQ, {
                              "aria-label": S?.username,
                              size: j,
                              src: S?.getAvatarURL(void 0, (0, a.FT9)(j), !A),
                              avatarDecoration: b,
                          }),
                    (0, i.jsx)(s.$nd, {
                        variant: "primary",
                        text: g.intl.string(g.t.kMYVwv),
                        loading: R,
                        onClick: () => {
                            null != M &&
                                (t(),
                                (0, E.A)({
                                    product: M,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: f,
                                    purchaseType: x.gs.PROMOTIONAL,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
