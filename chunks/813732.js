n.d(t, { Z: () => K });
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
    N = n(925329),
    f = n(406174),
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
    L = n(391077),
    k = n(639056),
    B = n(52164),
    M = n(91430),
    V = n(474936),
    w = n(981631),
    U = n(526761),
    G = n(726985),
    F = n(388032),
    z = n(656397);
function Y() {
    return (0, i.jsx)(o.Zbd, {
        className: z.noItemsCard,
        type: o.Zbd.Types.CUSTOM,
        children: (0, i.jsxs)(C.Z, {
            align: C.Z.Align.CENTER,
            children: [
                (0, i.jsx)(N.Z, {
                    game: null,
                    size: N.Z.Sizes.SMALL,
                    className: z.noItemsIcon
                }),
                (0, i.jsx)('span', {
                    className: z.cardText,
                    children: F.intl.string(F.t['jy/hys'])
                })
            ]
        })
    });
}
function H() {
    let e = (0, a.e7)([D.Z], () => D.Z.getForApplication(V.CL));
    return (
        s.useEffect(() => {
            (0, h.yD)(V.CL);
        }, []),
        (0, i.jsxs)('section', {
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-md/bold',
                    className: z.accountCreditTitle,
                    children: F.intl.string(F.t['2GKrvr'])
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: z.accountCreditDescription,
                    children: F.intl.string(F.t.kNEjGh)
                }),
                null != e && Z.ZP.hasAccountCredit(e)
                    ? (0, i.jsx)(k.Z, {
                          className: z.accountCredit,
                          entitlements: e
                      })
                    : (0, i.jsx)(Y, {})
            ]
        })
    );
}
function W() {
    return (0, i.jsx)('hr', { className: z.hr });
}
let K = function () {
    let e = (0, a.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        t = (0, p.Z)({ subscriptionFilter: (e) => M.eS.has(e.status) }),
        n = t.length > 1,
        l = (0, a.e7)([O.Z], () => (null != e && null != e.paymentSourceId ? O.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        h = (0, a.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
        C = (0, a.e7)([A.Z], () => A.Z.isBusy),
        N = (0, E.V)(),
        D = (0, a.e7)([b.Z], () => b.Z.getSubsection()),
        Z = (0, a.e7)([R.ZP], () => {
            var e, t;
            return null !== (t = null === (e = R.ZP.getActiveApplicationSubscriptions()) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
        }),
        k = (0, a.e7)([R.ZP], () => {
            var e;
            return Object.values(null !== (e = R.ZP.getSubscriptions()) && void 0 !== e ? e : {})
                .filter((e) => e.type === w.NYc.GUILD)
                .filter((e) => e.status !== w.O0b.ENDED).length;
        }),
        Y = (0, _.Z)({ forceFetch: !0 }),
        K = null !== e ? e.currentPeriodEnd : void 0,
        X = Y.fractionalState !== V.a$.NONE || Y.unactivatedUnits.length > 0;
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
        : h && N
          ? D === U.cP
              ? (0, i.jsx)(I.Z, { onGoBack: () => g.Z.clearSubsection() })
              : D === U.XZ
                ? (0, i.jsx)(S.Z, { onGoBack: () => g.Z.clearSubsection() })
                : (0, i.jsx)('div', {
                      className: z.container,
                      children: (0, i.jsxs)('div', {
                          className: z.content,
                          children: [
                              n ? (0, i.jsx)(M.Yn, {}) : null,
                              null != e
                                  ? (0, i.jsx)(M.ZP, {
                                        subscription: e,
                                        paymentSource: l,
                                        busy: C,
                                        subscriptions: t
                                    })
                                  : (0, i.jsx)(M.MM, {}),
                              X &&
                                  (0, i.jsxs)('section', {
                                      children: [
                                          (0, i.jsx)(o.X6q, {
                                              variant: 'heading-md/bold',
                                              className: z.accountCreditTitle,
                                              children: F.intl.string(F.t.Obre8v)
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              className: z.accountCreditDescription,
                                              children: F.intl.format(F.t['7Zi06e'], { helpCenterLink: y.Z.getArticleURL(w.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                          }),
                                          (0, i.jsx)(L.Z, {
                                              className: z.accountCredit,
                                              fractionalPremiumInfo: Y,
                                              activationDate: K
                                          })
                                      ]
                                  }),
                              (0, i.jsx)(j.F, {
                                  setting: G.s6.SUBSCRIPTIONS_CREDITS,
                                  children: (0, i.jsx)(H, {})
                              }),
                              k > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(W, {}),
                                          (0, i.jsx)(f.Z, {
                                              count: k,
                                              onClickManageSubscription: () => g.Z.setSection(w.oAB.SUBSCRIPTIONS, U.cP)
                                          })
                                      ]
                                  }),
                              Z > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(W, {}),
                                          (0, i.jsx)(T.Z, {
                                              count: Z,
                                              onClickManageSubscription: () => {
                                                  g.Z.setSection(w.oAB.SUBSCRIPTIONS, U.XZ), P.default.track(w.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
                                              }
                                          })
                                      ]
                                  }),
                              (0, i.jsx)(W, {}),
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
                className: r()(z.container, z.loading),
                children: (0, i.jsx)(o.$jN, {})
            });
};
