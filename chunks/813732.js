n.d(t, { Z: () => q });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(496929),
    g = n(821849),
    h = n(230711),
    x = n(497321),
    _ = n(975298),
    p = n(167354),
    E = n(15640),
    C = n(600164),
    f = n(925329),
    T = n(406174),
    N = n(810762),
    S = n(681833),
    I = n(856888),
    b = n(921801),
    v = n(246946),
    j = n(663389),
    A = n(351402),
    O = n(853872),
    R = n(78839),
    P = n(580130),
    D = n(626135),
    y = n(63063),
    Z = n(74538),
    k = n(695349),
    L = n(391077),
    B = n(639056),
    M = n(52164),
    w = n(91430),
    V = n(474936),
    U = n(981631),
    G = n(526761),
    F = n(726985),
    H = n(388032),
    z = n(806671);
function Y() {
    return (0, i.jsx)(o.Zbd, {
        className: z.noItemsCard,
        type: o.Zbd.Types.CUSTOM,
        children: (0, i.jsxs)(C.Z, {
            align: C.Z.Align.CENTER,
            children: [
                (0, i.jsx)(f.Z, {
                    game: null,
                    size: f.Z.Sizes.SMALL,
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
    let e = (0, a.e7)([P.Z], () => P.Z.getForApplication(V.CL));
    return (
        s.useEffect(() => {
            (0, m.yD)(V.CL);
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
                    ? (0, i.jsx)(B.Z, {
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
    let e = (0, a.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        t = (0, p.Z)({ subscriptionFilter: (e) => w.eS.has(e.status) }),
        n = t.length > 1,
        r = (0, a.e7)([O.Z], () => (null != e && null != e.paymentSourceId ? O.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        m = (0, a.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
        C = (0, a.e7)([A.Z], () => A.Z.isBusy),
        f = (0, E.V)(),
        P = (0, a.e7)([j.Z], () => j.Z.getSubsection()),
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
        Y = (0, _.Z)({ forceFetch: !0 }),
        q = (0, k.W)(),
        X = null !== e ? e.currentPeriodEnd : void 0,
        J = !q && (Y.fractionalState !== V.a$.NONE || Y.unactivatedUnits.length > 0);
    return (s.useEffect(
        () => (
            c.Z.wait(() => {
                (0, g.Y2)(), d.jg(), (0, u.X8)(), d.tZ();
            }),
            function () {
                h.Z.clearSubsection();
            }
        ),
        []
    ),
    v.Z.enabled)
        ? (0, i.jsx)(x.Z, {})
        : m && f
          ? P === G.cP
              ? (0, i.jsx)(N.Z, { onGoBack: () => h.Z.clearSubsection() })
              : P === G.XZ
                ? (0, i.jsx)(I.Z, { onGoBack: () => h.Z.clearSubsection() })
                : (0, i.jsx)('div', {
                      className: z.container,
                      children: (0, i.jsxs)('div', {
                          className: z.content,
                          children: [
                              n ? (0, i.jsx)(w.Yn, {}) : null,
                              null != e
                                  ? (0, i.jsx)(w.ZP, {
                                        subscription: e,
                                        paymentSource: r,
                                        busy: C,
                                        subscriptions: t
                                    })
                                  : (0, i.jsx)(w.MM, {}),
                              J &&
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
                                              children: H.intl.format(H.t['7Zi06e'], { helpCenterLink: y.Z.getArticleURL(U.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                          }),
                                          (0, i.jsx)(L.Z, {
                                              className: z.accountCredit,
                                              fractionalPremiumInfo: Y,
                                              activationDate: X
                                          })
                                      ]
                                  }),
                              (0, i.jsx)(b.F, {
                                  setting: F.s6.SUBSCRIPTIONS_CREDITS,
                                  children: (0, i.jsx)(W, {})
                              }),
                              B > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(K, {}),
                                          (0, i.jsx)(T.Z, {
                                              count: B,
                                              onClickManageSubscription: () => h.Z.setSection(U.oAB.SUBSCRIPTIONS, G.cP)
                                          })
                                      ]
                                  }),
                              Z > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(K, {}),
                                          (0, i.jsx)(S.Z, {
                                              count: Z,
                                              onClickManageSubscription: () => {
                                                  h.Z.setSection(U.oAB.SUBSCRIPTIONS, G.XZ), D.default.track(U.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
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
                className: l()(z.container, z.loading),
                children: (0, i.jsx)(o.$jN, {})
            });
};
