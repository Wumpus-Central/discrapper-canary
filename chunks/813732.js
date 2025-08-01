n.d(t, { Z: () => q });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(496929),
    p = n(821849),
    g = n(230711),
    h = n(497321),
    f = n(975298),
    b = n(167354),
    x = n(15640),
    _ = n(600164),
    j = n(925329),
    O = n(406174),
    C = n(810762),
    E = n(681833),
    v = n(856888),
    S = n(921801),
    T = n(246946),
    N = n(663389),
    I = n(351402),
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
    W = n(125978);
function z() {
    return (0, i.jsx)(o.Zbd, {
        className: W.noItemsCard,
        type: o.Zbd.Types.CUSTOM,
        children: (0, i.jsxs)(_.Z, {
            align: _.Z.Align.CENTER,
            children: [
                (0, i.jsx)(j.Z, {
                    game: null,
                    size: j.Z.Sizes.SMALL,
                    className: W.noItemsIcon
                }),
                (0, i.jsx)('span', {
                    className: W.cardText,
                    children: H.intl.string(H.t['jy/hys'])
                })
            ]
        })
    });
}
function Y() {
    let e = (0, l.e7)([P.Z], () => P.Z.getForApplication(U.CL));
    return (
        r.useEffect(() => {
            (0, m.yD)(U.CL);
        }, []),
        (0, i.jsxs)('section', {
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-md/bold',
                    className: W.accountCreditTitle,
                    children: H.intl.string(H.t['2GKrvr'])
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: W.accountCreditDescription,
                    children: H.intl.string(H.t.kNEjGh)
                }),
                null != e && Z.ZP.hasAccountCredit(e)
                    ? (0, i.jsx)(L.Z, {
                          className: W.accountCredit,
                          entitlements: e
                      })
                    : (0, i.jsx)(z, {})
            ]
        })
    );
}
function K() {
    return (0, i.jsx)('hr', { className: W.hr });
}
let q = function () {
    let e = (0, l.e7)([A.Z], () => A.Z.getPremiumTypeSubscription()),
        t = (0, b.Z)({ subscriptionFilter: (e) => M.eS.has(e.status) }),
        n = t.length > 1,
        s = (0, l.e7)([y.Z], () => (null != e && null != e.paymentSourceId ? y.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        m = (0, l.e7)([A.Z], () => A.Z.hasFetchedSubscriptions()),
        _ = (0, l.e7)([I.Z], () => I.Z.isBusy),
        j = (0, x.V)(),
        P = (0, l.e7)([N.Z], () => N.Z.getSubsection()),
        Z = (0, l.e7)([A.Z], () => {
            var e, t;
            return null != (t = null == (e = A.Z.getActiveApplicationSubscriptions()) ? void 0 : e.length) ? t : 0;
        }),
        L = (0, l.e7)([A.Z], () => {
            var e;
            return Object.values(null != (e = A.Z.getSubscriptions()) ? e : {})
                .filter((e) => e.type === V.NYc.GUILD)
                .filter((e) => e.status !== V.O0b.ENDED).length;
        }),
        z = (0, f.Z)({ forceFetch: !0 }),
        q = (0, w.W)(),
        X = null !== e ? e.currentPeriodEnd : void 0,
        J = !(q && !(z.unactivatedUnits.length > 0)) && (z.fractionalState !== U.a$.NONE || z.unactivatedUnits.length > 0);
    return (r.useEffect(
        () => (
            c.Z.wait(() => {
                ((0, p.Y2)(), d.jg(), (0, u.X8)(), d.tZ());
            }),
            function () {
                g.Z.clearSubsection();
            }
        ),
        []
    ),
    T.Z.enabled)
        ? (0, i.jsx)(h.Z, {})
        : m && j
          ? P === G.cP
              ? (0, i.jsx)(C.Z, { onGoBack: () => g.Z.clearSubsection() })
              : P === G.XZ
                ? (0, i.jsx)(v.Z, { onGoBack: () => g.Z.clearSubsection() })
                : (0, i.jsx)('div', {
                      className: W.container,
                      children: (0, i.jsxs)('div', {
                          className: W.content,
                          children: [
                              n ? (0, i.jsx)(M.Yn, {}) : null,
                              null != e
                                  ? (0, i.jsx)(M.ZP, {
                                        subscription: e,
                                        paymentSource: s,
                                        busy: _,
                                        subscriptions: t
                                    })
                                  : (0, i.jsx)(M.MM, {}),
                              J &&
                                  (0, i.jsxs)('section', {
                                      children: [
                                          (0, i.jsx)(o.X6q, {
                                              variant: 'heading-md/bold',
                                              className: W.accountCreditTitle,
                                              children: H.intl.string(H.t.Obre8v)
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              className: W.accountCreditDescription,
                                              children: H.intl.format(H.t['7Zi06e'], { helpCenterLink: D.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                          }),
                                          (0, i.jsx)(k.Z, {
                                              className: W.accountCredit,
                                              fractionalPremiumInfo: z,
                                              activationDate: X
                                          })
                                      ]
                                  }),
                              (0, i.jsx)(S.F, {
                                  setting: F.s6.SUBSCRIPTIONS_CREDITS,
                                  children: (0, i.jsx)(Y, {})
                              }),
                              L > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(K, {}),
                                          (0, i.jsx)(O.Z, {
                                              count: L,
                                              onClickManageSubscription: () => g.Z.setSection(V.oAB.SUBSCRIPTIONS, G.cP)
                                          })
                                      ]
                                  }),
                              Z > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(K, {}),
                                          (0, i.jsx)(E.Z, {
                                              count: Z,
                                              onClickManageSubscription: () => {
                                                  (g.Z.setSection(V.oAB.SUBSCRIPTIONS, G.XZ), R.default.track(V.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED));
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
                className: a()(W.container, W.loading),
                children: (0, i.jsx)(o.$jN, {})
            });
};
