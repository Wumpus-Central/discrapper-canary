n.d(t, { A: () => z });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    u = n(534514),
    c = n(834730),
    g = n(821609),
    m = n(725570),
    _ = n(403581),
    A = n(827734),
    h = n(404778),
    p = n(707554),
    x = n(289873),
    E = n(73153),
    T = n(339048),
    S = n(736653),
    f = n(46054),
    b = n(807055),
    C = n(264779),
    v = n(35587),
    N = n(982311),
    I = n(725807),
    y = n(212168),
    j = n(976860),
    O = n(287809),
    R = n(469778),
    L = n(45938),
    D = n(927578),
    P = n(780964),
    G = n(779733),
    M = n(858897),
    U = n(709732),
    k = n(652215),
    w = n(788868),
    V = n(985018),
    B = n(479913);
function F(e) {
    let t,
        { outboundPromotion: n, code: l, addClaimedOutboundPromotionCode: r, disabled: o } = e,
        [d, _] = s.useState(!1),
        [A, h] = s.useState(!1),
        p = () => _((e) => !e),
        x = (0, S.Ay)(),
        E = (0, C.WD)(n.id, x),
        T = null != l,
        v = (0, b.A)(n, T);
    T && d
        ? (t = V.intl.format(V.t.pkxVx6, { endDate: v, onClickDetails: p }))
        : T && !d
          ? (t = V.intl.format(V.t["4sFeob"], { endDate: v, onClickDetails: p }))
          : !T && d
            ? (t = V.intl.format(V.t["RBnE+l"], { endDate: v, onClickDetails: p }))
            : T || d || (t = V.intl.format(V.t["57+7Qn"], { endDate: v, onClickDetails: p }));
    let I = T ? V.intl.string(V.t["2cHUti"]) : V.intl.string(V.t.O13yhz),
        y = s.useCallback(() => h(!1), []),
        { outboundTitle: j, outboundTermsAndConditions: O } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(B.uI, B.AX),
                children: [
                    (0, i.jsxs)("div", {
                        className: B.gE,
                        children: [
                            (0, i.jsxs)("div", {
                                className: B.At,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: B.$G,
                                        children: (0, i.jsx)("img", { alt: "", src: E, className: B.IJ }),
                                    }),
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(u.D, { variant: "heading-md/semibold", children: j }),
                                            (0, i.jsx)(c.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: B.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !o && (0, i.jsx)(g.$, { text: I, onClick: () => h(!0), disabled: o, size: "sm" }),
                        ],
                    }),
                    d &&
                        (0, i.jsx)(c.E, {
                            className: B.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: f.A.parse(O, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            A &&
                (0, i.jsx)(m.aF, {
                    renderModal: (e) =>
                        (0, i.jsx)(N.A, { ...e, onClose: y, onClaim: r, code: l, outboundPromotion: n }),
                    onCloseRequest: y,
                }),
        ],
    });
}
let z = function () {
    let e = (0, d.yK)([R.A], () => R.A.getGiftable()),
        [t, n] = o().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        l = (0, d.bG)([O.default], () => D.Ay.isPremiumExactly(O.default.getCurrentUser(), w.PremiumTypes.TIER_2)),
        r = (0, d.bG)([O.default], () => !D.Ay.isPremium(O.default.getCurrentUser())),
        g = o().groupBy(t, (e) => (0, L.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [m, S] = s.useState(!1);
    s.useEffect(() => {
        E.h.wait(() => {
            (0, T.XJ)().then(() => S(!0));
        });
    }, []);
    let {
            promotionsLoaded: f,
            activeOutboundPromotions: b,
            claimedEndedOutboundPromotions: C,
            claimedOutboundPromotionCodeMap: N,
            addClaimedOutboundPromotionCode: z,
        } = (0, v.y7)(),
        H = b.length + C.length > 0,
        Y = r && H;
    return m && f
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (function () {
                      let e = n.find((e) => e.giftCodeBatchId === w.FB && !e.consumed),
                          t = n.filter((e) => e.giftCodeBatchId === w.Bu && !e.consumed) ?? [],
                          [s, r] = o().partition(t, (e) => {
                              let { subscriptionPlanId: t } = e;
                              return t === w.gD.PREMIUM_YEAR_TIER_2;
                          }),
                          d = (0, i.jsx)(u.D, {
                              variant: "heading-md/semibold",
                              children: H ? V.intl.string(V.t.wFsj3B) : void 0,
                          }),
                          g = Y
                              ? (0, i.jsxs)("div", {
                                    className: B.uo,
                                    children: [
                                        (0, i.jsx)(_.t, {
                                            size: "md",
                                            color: A.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                            className: B.PC,
                                        }),
                                        (0, i.jsx)(c.E, {
                                            variant: "text-md/normal",
                                            className: B.Qw,
                                            children: V.intl.format(V.t.G4fwxK, {
                                                onClick: () => {
                                                    (0, G.default)(), (0, j.pX)(k.BVt.APPLICATION_STORE);
                                                },
                                            }),
                                        }),
                                        (0, i.jsx)(I.A, {
                                            showGradient: !0,
                                            className: B.aA,
                                            subscriptionTier: w.pe.TIER_2,
                                            textOptions: { textOverride: V.intl.string(V.t.mr4K7D) },
                                        }),
                                    ],
                                })
                              : null;
                      return (0, i.jsxs)("div", {
                          children: [
                              d,
                              H ? (0, i.jsx)(h.c, { className: B.yF }) : null,
                              (0, i.jsx)(y.A, {
                                  className: B.Yj,
                                  isShown: Y,
                                  type: y.i.PREMIUM,
                                  hasBackground: !0,
                                  children: (0, i.jsxs)("div", {
                                      className: a()({ [B.sW]: !Y }),
                                      children: [
                                          g,
                                          C.map((e) => {
                                              let { code: t, promotion: n } = e;
                                              return (0, i.jsx)(
                                                  F,
                                                  {
                                                      outboundPromotion: n,
                                                      code: t,
                                                      addClaimedOutboundPromotionCode: z,
                                                      disabled: !l,
                                                  },
                                                  n.id,
                                              );
                                          }),
                                          b.map((e) =>
                                              (0, i.jsx)(
                                                  F,
                                                  {
                                                      outboundPromotion: e,
                                                      code: N[e.id],
                                                      addClaimedOutboundPromotionCode: z,
                                                      disabled: !l,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                          null != e
                                              ? (0, i.jsx)(
                                                    U.A,
                                                    {
                                                        className: B.uI,
                                                        skuId: e.skuId,
                                                        subscriptionPlanId: e.subscriptionPlanId,
                                                        entitlements: [e],
                                                        giftCodeBatchId: w.FB,
                                                    },
                                                    (0, L.Kx)(e.skuId, e.subscriptionPlanId),
                                                )
                                              : null,
                                          s.length > 0
                                              ? (0, i.jsx)(
                                                    U.A,
                                                    {
                                                        className: B.uI,
                                                        skuId: s[0].skuId,
                                                        subscriptionPlanId: s[0].subscriptionPlanId,
                                                        entitlements: s,
                                                        giftCodeBatchId: w.Bu,
                                                    },
                                                    (0, L.Kx)(s[0].skuId, s[0].subscriptionPlanId),
                                                )
                                              : null,
                                          r.length > 0
                                              ? (0, i.jsx)(
                                                    U.A,
                                                    {
                                                        className: B.uI,
                                                        skuId: r[0].skuId,
                                                        subscriptionPlanId: r[0].subscriptionPlanId,
                                                        entitlements: r,
                                                        giftCodeBatchId: w.Bu,
                                                    },
                                                    (0, L.Kx)(r[0].skuId, r[0].subscriptionPlanId),
                                                )
                                              : null,
                                      ],
                                  }),
                              }),
                          ],
                      });
                  })(),
                  (0, i.jsx)("div", {
                      className: B.sW,
                      children: (0, i.jsxs)(p.F, {
                          component: (0, i.jsx)(u.D, {
                              variant: "heading-md/semibold",
                              children: V.intl.string(V.t["9KeUbY"]),
                          }),
                          children: [
                              (0, i.jsx)(h.c, { className: B.yF }),
                              0 === Object.keys(g).length
                                  ? (0, i.jsxs)("div", {
                                        className: B.p$,
                                        children: [
                                            (0, i.jsx)("div", { className: B.QT }),
                                            (0, i.jsx)(p.H, { className: B.ks, children: V.intl.string(V.t.B1qgZn) }),
                                            (0, i.jsx)("p", {
                                                className: B.WO,
                                                children: V.intl.format(V.t.HezvJ8, {
                                                    onClick: function () {
                                                        (0, M.openUserSettings)(P.X.NITRO_PANEL);
                                                    },
                                                }),
                                            }),
                                        ],
                                    })
                                  : o()
                                        .keys(g)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: s } = (0, L.X6)(e);
                                            return (0, i.jsx)(
                                                U.A,
                                                {
                                                    className: B.uI,
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
        : (0, i.jsx)(x.y, { className: B.Lq });
};
