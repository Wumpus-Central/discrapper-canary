n.d(t, { Z: () => q });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
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
    N = n(15640),
    x = n(600164),
    _ = n(925329),
    E = n(406174),
    j = n(810762),
    O = n(681833),
    C = n(856888),
    S = n(921801),
    v = n(246946),
    T = n(663389),
    I = n(351402),
    y = n(853872),
    A = n(78839),
    P = n(580130),
    R = n(626135),
    D = n(63063),
    Z = n(74538),
    w = n(695349),
    k = n(391077),
    W = n(639056),
    L = n(52164),
    B = n(91430),
    M = n(474936),
    U = n(981631),
    V = n(526761),
    G = n(726985),
    F = n(388032),
    H = n(125978);
function z() {
    return (0, r.jsx)(o.Zbd, {
        className: H.noItemsCard,
        type: o.Zbd.Types.CUSTOM,
        children: (0, r.jsxs)(x.Z, {
            align: x.Z.Align.CENTER,
            children: [
                (0, r.jsx)(_.Z, {
                    game: null,
                    size: _.Z.Sizes.SMALL,
                    className: H.noItemsIcon
                }),
                (0, r.jsx)('span', {
                    className: H.cardText,
                    children: F.NW.string(F.t['jy/hys'])
                })
            ]
        })
    });
}
function Y() {
    let e = (0, l.e7)([P.Z], () => P.Z.getForApplication(M.CL));
    return (
        i.useEffect(() => {
            (0, m.yD)(M.CL);
        }, []),
        (0, r.jsxs)('section', {
            children: [
                (0, r.jsx)(o.X6q, {
                    variant: 'heading-md/bold',
                    className: H.accountCreditTitle,
                    children: F.NW.string(F.t['2GKrvr'])
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: H.accountCreditDescription,
                    children: F.NW.string(F.t.kNEjGh)
                }),
                null != e && Z.ZP.hasAccountCredit(e)
                    ? (0, r.jsx)(W.Z, {
                          className: H.accountCredit,
                          entitlements: e
                      })
                    : (0, r.jsx)(z, {})
            ]
        })
    );
}
function K() {
    return (0, r.jsx)('hr', { className: H.hr });
}
let q = function () {
    let e = (0, l.e7)([A.ZP], () => A.ZP.getPremiumTypeSubscription()),
        t = (0, b.Z)({ subscriptionFilter: (e) => B.eS.has(e.status) }),
        n = t.length > 1,
        s = (0, l.e7)([y.Z], () => (null != e && null != e.paymentSourceId ? y.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        m = (0, l.e7)([A.ZP], () => A.ZP.hasFetchedSubscriptions()),
        x = (0, l.e7)([I.Z], () => I.Z.isBusy),
        _ = (0, N.V)(),
        P = (0, l.e7)([T.Z], () => T.Z.getSubsection()),
        Z = (0, l.e7)([A.ZP], () => {
            var e, t;
            return null != (t = null == (e = A.ZP.getActiveApplicationSubscriptions()) ? void 0 : e.length) ? t : 0;
        }),
        W = (0, l.e7)([A.ZP], () => {
            var e;
            return Object.values(null != (e = A.ZP.getSubscriptions()) ? e : {})
                .filter((e) => e.type === U.NYc.GUILD)
                .filter((e) => e.status !== U.O0b.ENDED).length;
        }),
        z = (0, f.Z)({ forceFetch: !0 }),
        q = (0, w.W)(),
        X = null !== e ? e.currentPeriodEnd : void 0,
        J = !q && (z.fractionalState !== M.a$.NONE || z.unactivatedUnits.length > 0);
    return (i.useEffect(
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
    v.Z.enabled)
        ? (0, r.jsx)(h.Z, {})
        : m && _
          ? P === V.cP
              ? (0, r.jsx)(j.Z, { onGoBack: () => p.Z.clearSubsection() })
              : P === V.XZ
                ? (0, r.jsx)(C.Z, { onGoBack: () => p.Z.clearSubsection() })
                : (0, r.jsx)('div', {
                      className: H.container,
                      children: (0, r.jsxs)('div', {
                          className: H.content,
                          children: [
                              n ? (0, r.jsx)(B.Yn, {}) : null,
                              null != e
                                  ? (0, r.jsx)(B.ZP, {
                                        subscription: e,
                                        paymentSource: s,
                                        busy: x,
                                        subscriptions: t
                                    })
                                  : (0, r.jsx)(B.MM, {}),
                              J &&
                                  (0, r.jsxs)('section', {
                                      children: [
                                          (0, r.jsx)(o.X6q, {
                                              variant: 'heading-md/bold',
                                              className: H.accountCreditTitle,
                                              children: F.NW.string(F.t.Obre8v)
                                          }),
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              className: H.accountCreditDescription,
                                              children: F.NW.format(F.t['7Zi06e'], { helpCenterLink: D.Z.getArticleURL(U.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                          }),
                                          (0, r.jsx)(k.Z, {
                                              className: H.accountCredit,
                                              fractionalPremiumInfo: z,
                                              activationDate: X
                                          })
                                      ]
                                  }),
                              (0, r.jsx)(S.F, {
                                  setting: G.s6.SUBSCRIPTIONS_CREDITS,
                                  children: (0, r.jsx)(Y, {})
                              }),
                              W > 0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(K, {}),
                                          (0, r.jsx)(E.Z, {
                                              count: W,
                                              onClickManageSubscription: () => p.Z.setSection(U.oAB.SUBSCRIPTIONS, V.cP)
                                          })
                                      ]
                                  }),
                              Z > 0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(K, {}),
                                          (0, r.jsx)(O.Z, {
                                              count: Z,
                                              onClickManageSubscription: () => {
                                                  p.Z.setSection(U.oAB.SUBSCRIPTIONS, V.XZ), R.default.track(U.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
                                              }
                                          })
                                      ]
                                  }),
                              (0, r.jsx)(K, {}),
                              null != e
                                  ? (0, r.jsx)(L.Z, {
                                        subscription: e,
                                        withOverheadSeparator: !1
                                    })
                                  : null
                          ]
                      })
                  })
          : (0, r.jsx)('div', {
                className: a()(H.container, H.loading),
                children: (0, r.jsx)(o.$jN, {})
            });
};
