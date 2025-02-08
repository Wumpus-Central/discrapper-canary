n.d(t, { Z: () => K });
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
    I = n(681833),
    S = n(856888),
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
    k = n(391077),
    L = n(639056),
    B = n(52164),
    M = n(91430),
    w = n(474936),
    V = n(981631),
    U = n(526761),
    G = n(726985),
    F = n(388032),
    H = n(125503);
function z() {
    return (0, i.jsx)(o.Zbd, {
        className: H.noItemsCard,
        type: o.Zbd.Types.CUSTOM,
        children: (0, i.jsxs)(C.Z, {
            align: C.Z.Align.CENTER,
            children: [
                (0, i.jsx)(f.Z, {
                    game: null,
                    size: f.Z.Sizes.SMALL,
                    className: H.noItemsIcon
                }),
                (0, i.jsx)('span', {
                    className: H.cardText,
                    children: F.intl.string(F.t['jy/hys'])
                })
            ]
        })
    });
}
function Y() {
    let e = (0, a.e7)([P.Z], () => P.Z.getForApplication(w.CL));
    return (
        s.useEffect(() => {
            (0, m.yD)(w.CL);
        }, []),
        (0, i.jsxs)('section', {
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-md/bold',
                    className: H.accountCreditTitle,
                    children: F.intl.string(F.t['2GKrvr'])
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: H.accountCreditDescription,
                    children: F.intl.string(F.t.kNEjGh)
                }),
                null != e && Z.ZP.hasAccountCredit(e)
                    ? (0, i.jsx)(L.Z, {
                          className: H.accountCredit,
                          entitlements: e
                      })
                    : (0, i.jsx)(z, {})
            ]
        })
    );
}
function W() {
    return (0, i.jsx)('hr', { className: H.hr });
}
let K = function () {
    let e = (0, a.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        t = (0, p.Z)({ subscriptionFilter: (e) => M.eS.has(e.status) }),
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
        L = (0, a.e7)([R.ZP], () => {
            var e;
            return Object.values(null !== (e = R.ZP.getSubscriptions()) && void 0 !== e ? e : {})
                .filter((e) => e.type === V.NYc.GUILD)
                .filter((e) => e.status !== V.O0b.ENDED).length;
        }),
        z = (0, _.Z)({ forceFetch: !0 }),
        K = null !== e ? e.currentPeriodEnd : void 0,
        q = z.fractionalState !== w.a$.NONE || z.unactivatedUnits.length > 0;
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
          ? P === U.cP
              ? (0, i.jsx)(N.Z, { onGoBack: () => h.Z.clearSubsection() })
              : P === U.XZ
                ? (0, i.jsx)(S.Z, { onGoBack: () => h.Z.clearSubsection() })
                : (0, i.jsx)('div', {
                      className: H.container,
                      children: (0, i.jsxs)('div', {
                          className: H.content,
                          children: [
                              n ? (0, i.jsx)(M.Yn, {}) : null,
                              null != e
                                  ? (0, i.jsx)(M.ZP, {
                                        subscription: e,
                                        paymentSource: r,
                                        busy: C,
                                        subscriptions: t
                                    })
                                  : (0, i.jsx)(M.MM, {}),
                              q &&
                                  (0, i.jsxs)('section', {
                                      children: [
                                          (0, i.jsx)(o.X6q, {
                                              variant: 'heading-md/bold',
                                              className: H.accountCreditTitle,
                                              children: F.intl.string(F.t.Obre8v)
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              className: H.accountCreditDescription,
                                              children: F.intl.format(F.t['7Zi06e'], { helpCenterLink: y.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                          }),
                                          (0, i.jsx)(k.Z, {
                                              className: H.accountCredit,
                                              fractionalPremiumInfo: z,
                                              activationDate: K
                                          })
                                      ]
                                  }),
                              (0, i.jsx)(b.F, {
                                  setting: G.s6.SUBSCRIPTIONS_CREDITS,
                                  children: (0, i.jsx)(Y, {})
                              }),
                              L > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(W, {}),
                                          (0, i.jsx)(T.Z, {
                                              count: L,
                                              onClickManageSubscription: () => h.Z.setSection(V.oAB.SUBSCRIPTIONS, U.cP)
                                          })
                                      ]
                                  }),
                              Z > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(W, {}),
                                          (0, i.jsx)(I.Z, {
                                              count: Z,
                                              onClickManageSubscription: () => {
                                                  h.Z.setSection(V.oAB.SUBSCRIPTIONS, U.XZ), D.default.track(V.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
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
                className: l()(H.container, H.loading),
                children: (0, i.jsx)(o.$jN, {})
            });
};
