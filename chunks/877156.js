t.d(n, {
    A: () => A,
}),
    t(896048);
var r = t(627968),
    l = t(64700),
    i = t(311907),
    s = t(732955),
    a = t(397927),
    o = t(775602),
    u = t(688810),
    c = t(920064),
    d = t(674658),
    p = t(898461),
    m = t(837015),
    g = t(61750),
    f = t(235986),
    E = t(369496),
    j = t(550111),
    x = t(287809),
    h = t(482132),
    T = t(758836),
    P = t(985018),
    S = t(401506);

function A(e) {
    let { rewardSkuId: n, onClose: t } = e,
        A = (0, i.bG)([x.default], () => x.default.getCurrentUser()),
        b = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        { analyticsLocations: y } = (0, u.Ay)(),
        I = a._3J.SIZE_32,
        { product: O, isFetching: v } = (0, d.q)(n),
        [_, N] = l.useState(!1),
        C = null == O ? void 0 : O.items[0],
        {
            isNameplateReward: M,
            nameplateData: R,
            rewardDeco: k,
        } = l.useMemo(() => {
            if (null == C)
                return {
                    isNameplateReward: !1,
                    nameplateData: null,
                    rewardDeco: void 0,
                };
            if ((0, m.F)(C)) {
                var e;
                return {
                    isNameplateReward: !0,
                    nameplateData: {
                        src: C.asset,
                        palette: (0, E.H6)(null != (e = C.palette) ? e : "sky"),
                        imgAlt: C.label,
                    },
                    rewardDeco: void 0,
                };
            }
            return (0, p.T)(C)
                ? {
                      isNameplateReward: !1,
                      nameplateData: null,
                      rewardDeco: (0, c.A)(C.asset, I, !b),
                  }
                : {
                      isNameplateReward: !1,
                      nameplateData: null,
                      rewardDeco: void 0,
                  };
        }, [C, I, b]);
    return (0, r.jsx)(h.UX, {
        children: (0, r.jsx)(a.jlY, {
            align: f.A.Align.CENTER,
            "data-migration-pending": !0,
            children: (0, r.jsxs)("div", {
                className: S.W,
                children: [
                    M && null != R
                        ? (0, r.jsx)("div", {
                              className: S.D,
                              onMouseEnter: () => N(!0),
                              onMouseLeave: () => N(!1),
                              children: (0, r.jsx)(j.a, {
                                  user: A,
                                  nameplate: null,
                                  nameplateData: R,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: _,
                              }),
                          })
                        : (0, r.jsx)(a.JsQ, {
                              "aria-label": null == A ? void 0 : A.username,
                              size: I,
                              src: null == A ? void 0 : A.getAvatarURL(void 0, (0, a.FT9)(I), !b),
                              avatarDecoration: k,
                          }),
                    (0, r.jsx)(s.$nd, {
                        variant: "primary",
                        text: P.intl.string(P.t.kMYVwv),
                        loading: v,
                        onClick: () => {
                            null != O &&
                                (t(),
                                (0, g.A)({
                                    product: O,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: y,
                                    purchaseType: T.gs.PROMOTIONAL,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
