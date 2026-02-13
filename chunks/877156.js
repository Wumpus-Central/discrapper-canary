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
    g = t(235986),
    x = t(369496),
    _ = t(550111),
    h = t(287809),
    T = t(482132),
    P = t(758836),
    A = t(985018),
    I = t(401506);
function S(e) {
    let { rewardSkuId: n, onClose: t } = e,
        S = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        j = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        { analyticsLocations: f } = (0, u.Ay)(),
        R = a._3J.SIZE_32,
        { product: C, isFetching: M } = (0, c.q)(n),
        [N, y] = l.useState(!1),
        b = C?.items[0],
        {
            isNameplateReward: O,
            nameplateData: v,
            rewardDeco: k,
        } = l.useMemo(
            () =>
                null == b
                    ? { isNameplateReward: !1, nameplateData: null, rewardDeco: void 0 }
                    : (0, m.F)(b)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: b.skuId,
                                src: b.asset,
                                palette: (0, x.H6)(b.palette ?? "sky"),
                                imgAlt: b.label,
                            },
                            rewardDeco: void 0,
                        }
                      : (0, p.T)(b)
                        ? { isNameplateReward: !1, nameplateData: null, rewardDeco: (0, d.A)(b.asset, R, !j) }
                        : { isNameplateReward: !1, nameplateData: null, rewardDeco: void 0 },
            [b, R, j],
        );
    return (0, i.jsx)(T.UX, {
        children: (0, i.jsx)(a.jlY, {
            align: g.A.Align.CENTER,
            "data-migration-pending": !0,
            children: (0, i.jsxs)("div", {
                className: I.W,
                children: [
                    O && null != v
                        ? (0, i.jsx)("div", {
                              className: I.D,
                              onMouseEnter: () => y(!0),
                              onMouseLeave: () => y(!1),
                              children: (0, i.jsx)(_.a, {
                                  user: S,
                                  nameplate: null,
                                  nameplateData: v,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: N,
                              }),
                          })
                        : (0, i.jsx)(a.JsQ, {
                              "aria-label": S?.username,
                              size: R,
                              src: S?.getAvatarURL(void 0, (0, a.FT9)(R), !j),
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
