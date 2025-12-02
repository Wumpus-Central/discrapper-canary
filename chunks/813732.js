n.d(t, { Z: () => J });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(355467),
    d = n(179360),
    f = n(496929),
    p = n(821849),
    _ = n(230711),
    m = n(497321),
    h = n(975298),
    g = n(167354),
    E = n(15640),
    b = n(600164),
    y = n(925329),
    O = n(406174),
    v = n(810762),
    S = n(681833),
    I = n(856888),
    T = n(921801),
    A = n(313789),
    C = n(518596),
    N = n(246946),
    P = n(663389),
    R = n(351402),
    w = n(853872),
    D = n(78839),
    x = n(580130),
    L = n(626135),
    j = n(63063),
    M = n(74538),
    k = n(695349),
    U = n(391077),
    G = n(639056),
    Z = n(52164),
    B = n(91430),
    F = n(474936),
    V = n(981631),
    H = n(526761),
    Y = n(726985),
    W = n(388032),
    K = n(49122);
function z() {
    return (0, r.jsx)(l.Zbd, {
        className: K.noItemsCard,
        type: l.Zbd.Types.CUSTOM,
        children: (0, r.jsxs)(b.Z, {
            align: b.Z.Align.CENTER,
            children: [
                (0, r.jsx)(y.Z, {
                    game: null,
                    size: y.A.SMALL,
                    className: K.noItemsIcon,
                }),
                (0, r.jsx)("span", {
                    className: K.cardText,
                    children: W.intl.string(W.t["jy/hyj"]),
                }),
            ],
        }),
    });
}
function q() {
    let e = (0, s.e7)([x.Z], () => x.Z.getForApplication(F.CL));
    return (
        i.useEffect(() => {
            (0, f.yD)(F.CL);
        }, []),
        (0, r.jsx)(l.C3N, {
            label: W.intl.string(W.t["2GKrvn"]),
            description: W.intl.string(W.t.kNEjGm),
            children:
                null != e && M.ZP.hasAccountCredit(e)
                    ? (0, r.jsx)(G.Z, {
                          className: K.accountCredit,
                          entitlements: e,
                      })
                    : (0, r.jsx)(z, {}),
        })
    );
}
function X(e, t) {
    return (0, r.jsxs)("section", {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-md/bold",
                className: K.accountCreditTitle,
                children: W.intl.string(W.t.Obre8v),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                className: K.accountCreditDescription,
                children: W.intl.format(W.t["7Zi06b"], {
                    helpCenterLink: j.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT),
                }),
            }),
            (0, r.jsx)(U.Z, {
                className: K.accountCredit,
                fractionalPremiumInfo: e,
                activationDate: t,
            }),
        ],
    });
}
function Q() {
    return (0, r.jsx)("hr", { className: K.hr });
}
let J = function () {
    let e = (0, s.e7)([D.Z], () => D.Z.getPremiumTypeSubscription()),
        t = (0, g.Z)({ subscriptionFilter: (e) => B.eS.has(e.status) }),
        n = t.length > 1,
        a = (0, s.e7)(
            [w.Z],
            () => (null != e && null != e.paymentSourceId ? w.Z.getPaymentSource(e.paymentSourceId) : null),
            [e],
        ),
        f = (0, s.e7)([D.Z], () => D.Z.hasFetchedSubscriptions()),
        b = (0, s.e7)([R.Z], () => R.Z.isBusy),
        y = (0, E.V)(),
        x = (0, s.e7)([P.Z], () => P.Z.getSubsection()),
        j = (0, s.e7)([D.Z], () => {
            var e, t;
            return null != (t = null == (e = D.Z.getActiveApplicationSubscriptions()) ? void 0 : e.length) ? t : 0;
        }),
        M = (0, s.e7)([D.Z], () => {
            var e;
            return Object.values(null != (e = D.Z.getSubscriptions()) ? e : {})
                .filter((e) => e.type === V.NYc.GUILD)
                .filter((e) => e.status !== V.O0b.ENDED).length;
        }),
        U = (0, h.Z)({ forceFetch: !0 }),
        G = (0, k.W)(),
        W = null !== e ? e.currentPeriodEnd : void 0,
        z =
            !(G && !(U.unactivatedUnits.length > 0)) &&
            (U.fractionalState !== F.a$.NONE || U.unactivatedUnits.length > 0);
    return (i.useEffect(
        () => (
            c.Z.wait(() => {
                (0, p.Y2)(), u.jg(), (0, d.X8)(), u.tZ();
            }),
            function () {
                _.Z.clearSubsection();
            }
        ),
        [],
    ),
    N.Z.enabled)
        ? (0, r.jsx)(m.Z, {})
        : f && y
          ? x === H.cP
              ? (0, r.jsx)(v.Z, { onGoBack: () => _.Z.clearSubsection() })
              : x === H.XZ
                ? (0, r.jsx)(I.Z, { onGoBack: () => _.Z.clearSubsection() })
                : (0, r.jsx)("div", {
                      className: K.container,
                      children: (0, r.jsxs)("div", {
                          className: K.content,
                          children: [
                              n ? (0, r.jsx)(B.Yn, {}) : null,
                              null != e
                                  ? (0, r.jsx)(B.ZP, {
                                        subscription: e,
                                        paymentSource: a,
                                        busy: b,
                                        subscriptions: t,
                                    })
                                  : (0, r.jsx)(B.MM, {}),
                              z && X(U, W),
                              (0, r.jsx)(T.F, {
                                  setting: Y.s6.SUBSCRIPTIONS_CREDITS,
                                  children: (0, r.jsx)(q, {}),
                              }),
                              M > 0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(Q, {}),
                                          (0, r.jsx)(O.Z, {
                                              count: M,
                                              onClickManageSubscription: () =>
                                                  (0, C.openUserSettings)(A.n.SUBSCRIPTIONS_PANEL, {
                                                      section: V.oAB.SUBSCRIPTIONS,
                                                      subsection: H.cP,
                                                  }),
                                          }),
                                      ],
                                  }),
                              j > 0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(Q, {}),
                                          (0, r.jsx)(S.Z, {
                                              count: j,
                                              onClickManageSubscription: () => {
                                                  (0, C.openUserSettings)(A.n.SUBSCRIPTIONS_PANEL, {
                                                      section: V.oAB.SUBSCRIPTIONS,
                                                      subsection: H.XZ,
                                                  }),
                                                      L.default.track(
                                                          V.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                      );
                                              },
                                          }),
                                      ],
                                  }),
                              (0, r.jsx)(Q, {}),
                              null != e
                                  ? (0, r.jsx)(Z.Z, {
                                        subscription: e,
                                        withOverheadSeparator: !1,
                                    })
                                  : null,
                          ],
                      }),
                  })
          : (0, r.jsx)("div", {
                className: o()(K.container, K.loading),
                children: (0, r.jsx)(l.$jN, {}),
            });
};
