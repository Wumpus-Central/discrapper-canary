t.d(n, { A: () => I });
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
    g = t(235986),
    _ = t(369496),
    x = t(550111),
    T = t(287809),
    h = t(482132),
    P = t(758836),
    A = t(985018),
    S = t(401506);
function I(e) {
    let { rewardSkuId: n, onClose: t } = e,
        I = (0, r.bG)([T.default], () => T.default.getCurrentUser()),
        j = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        { analyticsLocations: f } = (0, u.Ay)(),
        R = a._3J.SIZE_32,
        { product: C, isFetching: M } = (0, c.q)(n),
        [N, y] = l.useState(!1),
        O = C?.items[0],
        {
            isNameplateReward: b,
            nameplateData: v,
            rewardDeco: k,
        } = l.useMemo(
            () =>
                null == O
                    ? { isNameplateReward: !1, nameplateData: null, rewardDeco: void 0 }
                    : (0, m.F)(O)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: { src: O.asset, palette: (0, _.H6)(O.palette ?? "sky"), imgAlt: O.label },
                            rewardDeco: void 0,
                        }
                      : (0, p.T)(O)
                        ? { isNameplateReward: !1, nameplateData: null, rewardDeco: (0, d.A)(O.asset, R, !j) }
                        : { isNameplateReward: !1, nameplateData: null, rewardDeco: void 0 },
            [O, R, j],
        );
    return (0, i.jsx)(h.UX, {
        children: (0, i.jsx)(a.jlY, {
            align: g.A.Align.CENTER,
            "data-migration-pending": !0,
            children: (0, i.jsxs)("div", {
                className: S.W,
                children: [
                    b && null != v
                        ? (0, i.jsx)("div", {
                              className: S.D,
                              onMouseEnter: () => y(!0),
                              onMouseLeave: () => y(!1),
                              children: (0, i.jsx)(x.a, {
                                  user: I,
                                  nameplate: null,
                                  nameplateData: v,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: N,
                              }),
                          })
                        : (0, i.jsx)(a.JsQ, {
                              "aria-label": I?.username,
                              size: R,
                              src: I?.getAvatarURL(void 0, (0, a.FT9)(R), !j),
                              avatarDecoration: k,
                          }),
                    (0, i.jsx)(s.$nd, {
                        variant: "primary",
                        text: A.intl.string(A.t.kMYVwv),
                        loading: M,
                        onClick: () => {
                            null != C &&
                                (t(),
                                (0, E.A)({
                                    product: C,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: f,
                                    purchaseType: P.gs.PROMOTIONAL,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
