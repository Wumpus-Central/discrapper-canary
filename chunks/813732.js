n.d(t, { Z: () => X });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    h = n(496929),
    m = n(821849),
    g = n(230711),
    x = n(497321),
    _ = n(975298),
    p = n(167354),
    E = n(15640),
    C = n(600164),
    f = n(925329),
    N = n(406174),
    I = n(810762),
    T = n(681833),
    S = n(856888),
    j = n(921801),
    v = n(246946),
    b = n(663389),
    A = n(351402),
    O = n(853872),
    R = n(78839),
    D = n(580130),
    P = n(626135),
    y = n(63063),
    Z = n(74538),
    L = n(695349),
    k = n(391077),
    B = n(639056),
    M = n(52164),
    V = n(91430),
    w = n(474936),
    U = n(981631),
    G = n(526761),
    F = n(726985),
    z = n(388032),
    Y = n(656397);
function H() {
    return (0, i.jsx)(o.Zbd, {
        className: Y.noItemsCard,
        type: o.Zbd.Types.CUSTOM,
        children: (0, i.jsxs)(C.Z, {
            align: C.Z.Align.CENTER,
            children: [
                (0, i.jsx)(f.Z, {
                    game: null,
                    size: f.Z.Sizes.SMALL,
                    className: Y.noItemsIcon
                }),
                (0, i.jsx)('span', {
                    className: Y.cardText,
                    children: z.intl.string(z.t['jy/hys'])
                })
            ]
        })
    });
}
function W() {
    let e = (0, a.e7)([D.Z], () => D.Z.getForApplication(w.CL));
    return (
        s.useEffect(() => {
            (0, h.yD)(w.CL);
        }, []),
        (0, i.jsxs)('section', {
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-md/bold',
                    className: Y.accountCreditTitle,
                    children: z.intl.string(z.t['2GKrvr'])
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: Y.accountCreditDescription,
                    children: z.intl.string(z.t.kNEjGh)
                }),
                null != e && Z.ZP.hasAccountCredit(e)
                    ? (0, i.jsx)(B.Z, {
                          className: Y.accountCredit,
                          entitlements: e
                      })
                    : (0, i.jsx)(H, {})
            ]
        })
    );
}
function K() {
    return (0, i.jsx)('hr', { className: Y.hr });
}
let X = function () {
    let e = (0, a.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        t = (0, p.Z)({ subscriptionFilter: (e) => V.eS.has(e.status) }),
        n = t.length > 1,
        l = (0, a.e7)([O.Z], () => (null != e && null != e.paymentSourceId ? O.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        h = (0, a.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
        C = (0, a.e7)([A.Z], () => A.Z.isBusy),
        f = (0, E.V)(),
        D = (0, a.e7)([b.Z], () => b.Z.getSubsection()),
        Z = (0, a.e7)([R.ZP], () => {
            var e, t;
            return null !== (t = null === (e = R.ZP.getActiveApplicationSubscriptions()) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
        }),
        B = (0, a.e7)([R.ZP], () => {
            var e;
            return Object.values(null !== (e = R.ZP.getSubscriptions()) && void 0 !== e ? e : {})
                .filter((e) => e.type === U.NYc.GUILD)
                .filter((e) => e.status !== U.O0b.ENDED).length;
        }),
        H = (0, _.Z)({ forceFetch: !0 }),
        X = (0, L.W)(),
        q = null !== e ? e.currentPeriodEnd : void 0,
        J = !X && (H.fractionalState !== w.a$.NONE || H.unactivatedUnits.length > 0);
    return (s.useEffect(
        () => (
            c.Z.wait(() => {
                (0, m.Y2)(), d.jg(), (0, u.X8)(), d.tZ();
            }),
            function () {
                g.Z.clearSubsection();
            }
        ),
        []
    ),
    v.Z.enabled)
        ? (0, i.jsx)(x.Z, {})
        : h && f
          ? D === G.cP
              ? (0, i.jsx)(I.Z, { onGoBack: () => g.Z.clearSubsection() })
              : D === G.XZ
                ? (0, i.jsx)(S.Z, { onGoBack: () => g.Z.clearSubsection() })
                : (0, i.jsx)('div', {
                      className: Y.container,
                      children: (0, i.jsxs)('div', {
                          className: Y.content,
                          children: [
                              n ? (0, i.jsx)(V.Yn, {}) : null,
                              null != e
                                  ? (0, i.jsx)(V.ZP, {
                                        subscription: e,
                                        paymentSource: l,
                                        busy: C,
                                        subscriptions: t
                                    })
                                  : (0, i.jsx)(V.MM, {}),
                              J &&
                                  (0, i.jsxs)('section', {
                                      children: [
                                          (0, i.jsx)(o.X6q, {
                                              variant: 'heading-md/bold',
                                              className: Y.accountCreditTitle,
                                              children: z.intl.string(z.t.Obre8v)
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              className: Y.accountCreditDescription,
                                              children: z.intl.format(z.t['7Zi06e'], { helpCenterLink: y.Z.getArticleURL(U.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                          }),
                                          (0, i.jsx)(k.Z, {
                                              className: Y.accountCredit,
                                              fractionalPremiumInfo: H,
                                              activationDate: q
                                          })
                                      ]
                                  }),
                              (0, i.jsx)(j.F, {
                                  setting: F.s6.SUBSCRIPTIONS_CREDITS,
                                  children: (0, i.jsx)(W, {})
                              }),
                              B > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(K, {}),
                                          (0, i.jsx)(N.Z, {
                                              count: B,
                                              onClickManageSubscription: () => g.Z.setSection(U.oAB.SUBSCRIPTIONS, G.cP)
                                          })
                                      ]
                                  }),
                              Z > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(K, {}),
                                          (0, i.jsx)(T.Z, {
                                              count: Z,
                                              onClickManageSubscription: () => {
                                                  g.Z.setSection(U.oAB.SUBSCRIPTIONS, G.XZ), P.default.track(U.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
                                              }
                                          })
                                      ]
                                  }),
                              (0, i.jsx)(K, {}),
                              null != e
                                  ? (0, i.jsx)(M.Z, {
                                        subscription: e,
                                        withOverheadSeparator: !1
                                    })
                                  : null
                          ]
                      })
                  })
          : (0, i.jsx)('div', {
                className: r()(Y.container, Y.loading),
                children: (0, i.jsx)(o.$jN, {})
            });
};
