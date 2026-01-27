t.d(n, {
    A: () => b,
}),
    t(896048);
var l = t(627968),
    r = t(64700),
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
    j = t(369496),
    E = t(550111),
    x = t(552736),
    h = t(287809),
    T = t(482132),
    P = t(758836),
    S = t(401506);

function b(e) {
    let { rewardSkuId: n, purchase: t, onClose: b } = e,
        A = (0, i.bG)([h.default], () => h.default.getCurrentUser()),
        y = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        { analyticsLocations: v } = (0, u.Ay)(),
        I = a._3J.SIZE_32,
        O = (0, x.A)(),
        _ = null == O ? void 0 : O.giftPurchaseConfirmation,
        { product: N, isFetching: C } = (0, d.q)(n),
        [M, w] = r.useState(!1),
        R = t.items[0],
        {
            isNameplateReward: k,
            nameplateData: D,
            rewardDeco: L,
        } = r.useMemo(() => {
            if (null == R)
                return {
                    isNameplateReward: !1,
                    nameplateData: null,
                    rewardDeco: void 0,
                };
            if ((0, m.F)(R)) {
                var e;
                return {
                    isNameplateReward: !0,
                    nameplateData: {
                        src: R.asset,
                        palette: (0, j.H6)(null != (e = R.palette) ? e : "sky"),
                        imgAlt: R.label,
                    },
                    rewardDeco: void 0,
                };
            }
            return (0, p.T)(R)
                ? {
                      isNameplateReward: !1,
                      nameplateData: null,
                      rewardDeco: (0, c.A)(R.asset, I, !y),
                  }
                : {
                      isNameplateReward: !1,
                      nameplateData: null,
                      rewardDeco: void 0,
                  };
        }, [R, I, y]);
    return null == _
        ? null
        : (0, l.jsx)(T.UX, {
              children: (0, l.jsx)(a.jlY, {
                  align: f.A.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, l.jsxs)("div", {
                      className: S.W,
                      children: [
                          k && null != D
                              ? (0, l.jsx)("div", {
                                    className: S.D,
                                    onMouseEnter: () => w(!0),
                                    onMouseLeave: () => w(!1),
                                    children: (0, l.jsx)(E.a, {
                                        user: A,
                                        nameplate: null,
                                        nameplateData: D,
                                        showPlaceholderUser: !0,
                                        nameplatePreviewSize: "xsmall",
                                        isHighlighted: M,
                                    }),
                                })
                              : (0, l.jsx)(a.JsQ, {
                                    "aria-label": null == A ? void 0 : A.username,
                                    size: I,
                                    src: null == A ? void 0 : A.getAvatarURL(void 0, (0, a.FT9)(I), !y),
                                    avatarDecoration: L,
                                }),
                          (0, l.jsx)(s.$nd, {
                              variant: "primary",
                              text: _.collectRewardButtonText(),
                              loading: C,
                              onClick: () => {
                                  null != N &&
                                      (b(),
                                      (0, g.A)({
                                          product: N,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: v,
                                          purchaseType: P.gs.PROMOTIONAL,
                                      }));
                              },
                          }),
                      ],
                  }),
              }),
          });
}
