n.d(t, { Z: () => q });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(496929),
    g = n(821849),
    p = n(230711),
    h = n(497321),
    f = n(975298),
    b = n(167354),
    _ = n(15640),
    x = n(600164),
    E = n(925329),
    j = n(406174),
    C = n(810762),
    O = n(681833),
    S = n(856888),
    v = n(921801),
    T = n(246946),
    I = n(663389),
    N = n(351402),
    y = n(853872),
    A = n(78839),
    P = n(580130),
    R = n(626135),
    D = n(63063),
    Z = n(74538),
    w = n(695349),
    k = n(391077),
    L = n(639056),
    B = n(52164),
    M = n(91430),
    U = n(474936),
    V = n(981631),
    G = n(526761),
    F = n(726985),
    H = n(388032),
    z = n(125978);
function Y() {
    return (0, i.jsx)(o.Zbd, {
        className: z.noItemsCard,
        type: o.Zbd.Types.CUSTOM,
        children: (0, i.jsxs)(x.Z, {
            align: x.Z.Align.CENTER,
            children: [
                (0, i.jsx)(E.Z, {
                    game: null,
                    size: E.Z.Sizes.SMALL,
                    className: z.noItemsIcon
                }),
                (0, i.jsx)('span', {
                    className: z.cardText,
                    children: H.intl.string(H.t['jy/hys'])
                })
            ]
        })
    });
}
function W() {
    let e = (0, a.e7)([P.Z], () => P.Z.getForApplication(U.CL));
    return (
        r.useEffect(() => {
            (0, m.yD)(U.CL);
        }, []),
        (0, i.jsxs)('section', {
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-md/bold',
                    className: z.accountCreditTitle,
                    children: H.intl.string(H.t['2GKrvr'])
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: z.accountCreditDescription,
                    children: H.intl.string(H.t.kNEjGh)
                }),
                null != e && Z.ZP.hasAccountCredit(e)
                    ? (0, i.jsx)(L.Z, {
                          className: z.accountCredit,
                          entitlements: e
                      })
                    : (0, i.jsx)(Y, {})
            ]
        })
    );
}
function K() {
    return (0, i.jsx)('hr', { className: z.hr });
}
let q = function () {
    let e = (0, a.e7)([A.ZP], () => A.ZP.getPremiumTypeSubscription()),
        t = (0, b.Z)({ subscriptionFilter: (e) => M.eS.has(e.status) }),
        n = t.length > 1,
        s = (0, a.e7)([y.Z], () => (null != e && null != e.paymentSourceId ? y.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        m = (0, a.e7)([A.ZP], () => A.ZP.hasFetchedSubscriptions()),
        x = (0, a.e7)([N.Z], () => N.Z.isBusy),
        E = (0, _.V)(),
        P = (0, a.e7)([I.Z], () => I.Z.getSubsection()),
        Z = (0, a.e7)([A.ZP], () => {
            var e, t;
            return null != (t = null == (e = A.ZP.getActiveApplicationSubscriptions()) ? void 0 : e.length) ? t : 0;
        }),
        L = (0, a.e7)([A.ZP], () => {
            var e;
            return Object.values(null != (e = A.ZP.getSubscriptions()) ? e : {})
                .filter((e) => e.type === V.NYc.GUILD)
                .filter((e) => e.status !== V.O0b.ENDED).length;
        }),
        Y = (0, f.Z)({ forceFetch: !0 }),
        q = (0, w.W)(),
        X = null !== e ? e.currentPeriodEnd : void 0,
        Q = !q && (Y.fractionalState !== U.a$.NONE || Y.unactivatedUnits.length > 0);
    return (r.useEffect(
        () => (
            c.Z.wait(() => {
                (0, g.Y2)(), d.jg(), (0, u.X8)(), d.tZ();
            }),
            function () {
                p.Z.clearSubsection();
            }
        ),
        []
    ),
    T.Z.enabled)
        ? (0, i.jsx)(h.Z, {})
        : m && E
          ? P === G.cP
              ? (0, i.jsx)(C.Z, { onGoBack: () => p.Z.clearSubsection() })
              : P === G.XZ
                ? (0, i.jsx)(S.Z, { onGoBack: () => p.Z.clearSubsection() })
                : (0, i.jsx)('div', {
                      className: z.container,
                      children: (0, i.jsxs)('div', {
                          className: z.content,
                          children: [
                              n ? (0, i.jsx)(M.Yn, {}) : null,
                              null != e
                                  ? (0, i.jsx)(M.ZP, {
                                        subscription: e,
                                        paymentSource: s,
                                        busy: x,
                                        subscriptions: t
                                    })
                                  : (0, i.jsx)(M.MM, {}),
                              Q &&
                                  (0, i.jsxs)('section', {
                                      children: [
                                          (0, i.jsx)(o.X6q, {
                                              variant: 'heading-md/bold',
                                              className: z.accountCreditTitle,
                                              children: H.intl.string(H.t.Obre8v)
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              className: z.accountCreditDescription,
                                              children: H.intl.format(H.t['7Zi06e'], { helpCenterLink: D.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                          }),
                                          (0, i.jsx)(k.Z, {
                                              className: z.accountCredit,
                                              fractionalPremiumInfo: Y,
                                              activationDate: X
                                          })
                                      ]
                                  }),
                              (0, i.jsx)(v.F, {
                                  setting: F.s6.SUBSCRIPTIONS_CREDITS,
                                  children: (0, i.jsx)(W, {})
                              }),
                              L > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(K, {}),
                                          (0, i.jsx)(j.Z, {
                                              count: L,
                                              onClickManageSubscription: () => p.Z.setSection(V.oAB.SUBSCRIPTIONS, G.cP)
                                          })
                                      ]
                                  }),
                              Z > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(K, {}),
                                          (0, i.jsx)(O.Z, {
                                              count: Z,
                                              onClickManageSubscription: () => {
                                                  p.Z.setSection(V.oAB.SUBSCRIPTIONS, G.XZ), R.default.track(V.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
                                              }
                                          })
                                      ]
                                  }),
                              (0, i.jsx)(K, {}),
                              null != e
                                  ? (0, i.jsx)(B.Z, {
                                        subscription: e,
                                        withOverheadSeparator: !1
                                    })
                                  : null
                          ]
                      })
                  })
          : (0, i.jsx)('div', {
                className: l()(z.container, z.loading),
                children: (0, i.jsx)(o.$jN, {})
            });
};
