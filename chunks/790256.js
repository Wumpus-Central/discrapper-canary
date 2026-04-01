n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(397927),
    u = n(73153),
    m = n(339048),
    g = n(736653),
    _ = n(46054),
    A = n(807055),
    x = n(264779),
    h = n(35587),
    p = n(982311),
    T = n(725807),
    f = n(212168),
    S = n(976860),
    E = n(287809),
    b = n(469778),
    C = n(45938),
    N = n(927578),
    v = n(780964),
    I = n(12901),
    j = n(840065),
    y = n(709732),
    O = n(652215),
    R = n(788868),
    P = n(985018),
    L = n(827033);
function D(e) {
    let t,
        { outboundPromotion: n, code: l, addClaimedOutboundPromotionCode: r, disabled: o } = e,
        [d, u] = s.useState(!1),
        [m, h] = s.useState(!1),
        T = () => u((e) => !e),
        f = (0, g.Ay)(),
        S = (0, x.WD)(n.id, f),
        E = null != l,
        b = (0, A.A)(n, E);
    E && d
        ? (t = P.intl.format(P.t.pkxVx6, { endDate: b, onClickDetails: T }))
        : E && !d
          ? (t = P.intl.format(P.t["4sFeob"], { endDate: b, onClickDetails: T }))
          : !E && d
            ? (t = P.intl.format(P.t["RBnE+l"], { endDate: b, onClickDetails: T }))
            : E || d || (t = P.intl.format(P.t["57+7Qn"], { endDate: b, onClickDetails: T }));
    let C = E ? P.intl.string(P.t["2cHUti"]) : P.intl.string(P.t.O13yhz),
        N = s.useCallback(() => h(!1), []),
        { outboundTitle: v, outboundTermsAndConditions: I } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(L.uI, L.AX),
                children: [
                    (0, i.jsxs)("div", {
                        className: L.gE,
                        children: [
                            (0, i.jsxs)("div", {
                                className: L.At,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: L.$G,
                                        children: (0, i.jsx)("img", { alt: "", src: S, className: L.IJ }),
                                    }),
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(c.Heading, { variant: "heading-md/semibold", children: v }),
                                            (0, i.jsx)(c.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: L.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !o && (0, i.jsx)(c.Button, { text: C, onClick: () => h(!0), disabled: o, size: "sm" }),
                        ],
                    }),
                    d &&
                        (0, i.jsx)(c.Text, {
                            className: L.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: _.A.parse(I, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            m &&
                (0, i.jsx)(c.aFV, {
                    renderModal: (e) =>
                        (0, i.jsx)(p.A, { ...e, onClose: N, onClaim: r, code: l, outboundPromotion: n }),
                    onCloseRequest: N,
                }),
        ],
    });
}
let G = function () {
    let e = (0, d.yK)([b.A], () => b.A.getGiftable()),
        [t, n] = o().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        l = (0, d.bG)([E.default], () => N.Ay.isPremiumExactly(E.default.getCurrentUser(), R.PremiumTypes.TIER_2)),
        r = (0, d.bG)([E.default], () => !N.Ay.isPremium(E.default.getCurrentUser())),
        g = o().groupBy(t, (e) => (0, C.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [_, A] = s.useState(!1);
    s.useEffect(() => {
        u.h.wait(() => {
            (0, m.XJ)().then(() => A(!0));
        });
    }, []);
    let {
            promotionsLoaded: x,
            activeOutboundPromotions: p,
            claimedEndedOutboundPromotions: G,
            claimedOutboundPromotionCodeMap: M,
            addClaimedOutboundPromotionCode: k,
        } = (0, h.y7)(),
        U = p.length + G.length > 0,
        w = r && U;
    return _ && x
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (function () {
                      let e = n.find((e) => e.giftCodeBatchId === R.FB && !e.consumed),
                          t = n.filter((e) => e.giftCodeBatchId === R.Bu && !e.consumed) ?? [],
                          [s, r] = o().partition(t, (e) => {
                              let { subscriptionPlanId: t } = e;
                              return t === R.gD.PREMIUM_YEAR_TIER_2;
                          }),
                          d = (0, i.jsx)(c.Heading, {
                              variant: "heading-md/semibold",
                              children: U ? P.intl.string(P.t.wFsj3B) : void 0,
                          }),
                          u = w
                              ? (0, i.jsxs)("div", {
                                    className: L.uo,
                                    children: [
                                        (0, i.jsx)(c.tvc, {
                                            size: "md",
                                            color: c.LU0.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                            className: L.PC,
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            className: L.Qw,
                                            children: P.intl.format(P.t.G4fwxK, {
                                                onClick: () => {
                                                    (0, I.default)(), (0, S.pX)(O.BVt.APPLICATION_STORE);
                                                },
                                            }),
                                        }),
                                        (0, i.jsx)(T.A, {
                                            showGradient: !0,
                                            className: L.aA,
                                            subscriptionTier: R.pe.TIER_2,
                                            textOptions: { textOverride: P.intl.string(P.t.mr4K7D) },
                                        }),
                                    ],
                                })
                              : null;
                      return (0, i.jsxs)("div", {
                          children: [
                              d,
                              U ? (0, i.jsx)(c.cGx, { className: L.yF }) : null,
                              (0, i.jsx)(f.A, {
                                  className: L.Yj,
                                  isShown: w,
                                  type: f.i.PREMIUM,
                                  hasBackground: !0,
                                  children: (0, i.jsxs)("div", {
                                      className: a()({ [L.sW]: !w }),
                                      children: [
                                          u,
                                          G.map((e) => {
                                              let { code: t, promotion: n } = e;
                                              return (0, i.jsx)(
                                                  D,
                                                  {
                                                      outboundPromotion: n,
                                                      code: t,
                                                      addClaimedOutboundPromotionCode: k,
                                                      disabled: !l,
                                                  },
                                                  n.id,
                                              );
                                          }),
                                          p.map((e) =>
                                              (0, i.jsx)(
                                                  D,
                                                  {
                                                      outboundPromotion: e,
                                                      code: M[e.id],
                                                      addClaimedOutboundPromotionCode: k,
                                                      disabled: !l,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                          null != e
                                              ? (0, i.jsx)(
                                                    y.A,
                                                    {
                                                        className: L.uI,
                                                        skuId: e.skuId,
                                                        subscriptionPlanId: e.subscriptionPlanId,
                                                        entitlements: [e],
                                                        giftCodeBatchId: R.FB,
                                                    },
                                                    (0, C.Kx)(e.skuId, e.subscriptionPlanId),
                                                )
                                              : null,
                                          s.length > 0
                                              ? (0, i.jsx)(
                                                    y.A,
                                                    {
                                                        className: L.uI,
                                                        skuId: s[0].skuId,
                                                        subscriptionPlanId: s[0].subscriptionPlanId,
                                                        entitlements: s,
                                                        giftCodeBatchId: R.Bu,
                                                    },
                                                    (0, C.Kx)(s[0].skuId, s[0].subscriptionPlanId),
                                                )
                                              : null,
                                          r.length > 0
                                              ? (0, i.jsx)(
                                                    y.A,
                                                    {
                                                        className: L.uI,
                                                        skuId: r[0].skuId,
                                                        subscriptionPlanId: r[0].subscriptionPlanId,
                                                        entitlements: r,
                                                        giftCodeBatchId: R.Bu,
                                                    },
                                                    (0, C.Kx)(r[0].skuId, r[0].subscriptionPlanId),
                                                )
                                              : null,
                                      ],
                                  }),
                              }),
                          ],
                      });
                  })(),
                  (0, i.jsx)("div", {
                      className: L.sW,
                      children: (0, i.jsxs)(c.Fmo, {
                          component: (0, i.jsx)(c.Heading, {
                              variant: "heading-md/semibold",
                              children: P.intl.string(P.t["9KeUbY"]),
                          }),
                          children: [
                              (0, i.jsx)(c.cGx, { className: L.yF }),
                              0 === Object.keys(g).length
                                  ? (0, i.jsxs)("div", {
                                        className: L.p$,
                                        children: [
                                            (0, i.jsx)("div", { className: L.QT }),
                                            (0, i.jsx)(c.H, { className: L.ks, children: P.intl.string(P.t.B1qgZn) }),
                                            (0, i.jsx)("p", {
                                                className: L.WO,
                                                children: P.intl.format(P.t.HezvJ8, {
                                                    onClick: function () {
                                                        (0, j.openUserSettings)(v.X.NITRO_PANEL);
                                                    },
                                                }),
                                            }),
                                        ],
                                    })
                                  : o()
                                        .keys(g)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: s } = (0, C.X6)(e);
                                            return (0, i.jsx)(
                                                y.A,
                                                {
                                                    className: L.uI,
                                                    skuId: t,
                                                    subscriptionPlanId: n,
                                                    entitlements: g[e],
                                                    giftStyle: s,
                                                },
                                                e,
                                            );
                                        }),
                          ],
                      }),
                  }),
              ],
          })
        : (0, i.jsx)(c.y$y, { className: L.Lq });
};
