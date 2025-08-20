n.d(t, { Z: () => X });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(355467),
    d = n(179360),
    f = n(496929),
    _ = n(821849),
    p = n(230711),
    h = n(497321),
    m = n(975298),
    g = n(167354),
    E = n(15640),
    b = n(600164),
    y = n(925329),
    O = n(406174),
    v = n(810762),
    I = n(681833),
    T = n(856888),
    S = n(921801),
    A = n(246946),
    C = n(663389),
    N = n(351402),
    R = n(853872),
    P = n(78839),
    w = n(580130),
    D = n(626135),
    x = n(63063),
    L = n(74538),
    j = n(695349),
    M = n(391077),
    k = n(639056),
    U = n(52164),
    G = n(91430),
    B = n(474936),
    Z = n(981631),
    V = n(526761),
    F = n(726985),
    H = n(388032),
    Y = n(49122);
function W() {
    return (0, r.jsx)(l.Zbd, {
        className: Y.noItemsCard,
        type: l.Zbd.Types.CUSTOM,
        children: (0, r.jsxs)(b.Z, {
            align: b.Z.Align.CENTER,
            children: [
                (0, r.jsx)(y.Z, {
                    game: null,
                    size: y.Z.Sizes.SMALL,
                    className: Y.noItemsIcon,
                }),
                (0, r.jsx)("span", {
                    className: Y.cardText,
                    children: H.intl.string(H.t["jy/hys"]),
                }),
            ],
        }),
    });
}
function K() {
    let e = (0, s.e7)([w.Z], () => w.Z.getForApplication(B.CL));
    return (
        i.useEffect(() => {
            (0, f.yD)(B.CL);
        }, []),
        (0, r.jsxs)("section", {
            children: [
                (0, r.jsx)(l.X6q, {
                    variant: "heading-md/bold",
                    className: Y.accountCreditTitle,
                    children: H.intl.string(H.t["2GKrvr"]),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    className: Y.accountCreditDescription,
                    children: H.intl.string(H.t.kNEjGh),
                }),
                null != e && L.ZP.hasAccountCredit(e)
                    ? (0, r.jsx)(k.Z, {
                          className: Y.accountCredit,
                          entitlements: e,
                      })
                    : (0, r.jsx)(W, {}),
            ],
        })
    );
}
function z(e, t) {
    return (0, r.jsxs)("section", {
        children: [
            (0, r.jsx)(l.X6q, {
                variant: "heading-md/bold",
                className: Y.accountCreditTitle,
                children: H.intl.string(H.t.Obre8v),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                className: Y.accountCreditDescription,
                children: H.intl.format(H.t["7Zi06e"], {
                    helpCenterLink: x.Z.getArticleURL(Z.BhN.FRACTIONAL_PREMIUM_ABOUT),
                }),
            }),
            (0, r.jsx)(M.Z, {
                className: Y.accountCredit,
                fractionalPremiumInfo: e,
                activationDate: t,
            }),
        ],
    });
}
function q() {
    return (0, r.jsx)("hr", { className: Y.hr });
}
let X = function () {
    let e = (0, s.e7)([P.Z], () => P.Z.getPremiumTypeSubscription()),
        t = (0, g.Z)({ subscriptionFilter: (e) => G.eS.has(e.status) }),
        n = t.length > 1,
        a = (0, s.e7)(
            [R.Z],
            () => (null != e && null != e.paymentSourceId ? R.Z.getPaymentSource(e.paymentSourceId) : null),
            [e],
        ),
        f = (0, s.e7)([P.Z], () => P.Z.hasFetchedSubscriptions()),
        b = (0, s.e7)([N.Z], () => N.Z.isBusy),
        y = (0, E.V)(),
        w = (0, s.e7)([C.Z], () => C.Z.getSubsection()),
        x = (0, s.e7)([P.Z], () => {
            var e, t;
            return null != (t = null == (e = P.Z.getActiveApplicationSubscriptions()) ? void 0 : e.length) ? t : 0;
        }),
        L = (0, s.e7)([P.Z], () => {
            var e;
            return Object.values(null != (e = P.Z.getSubscriptions()) ? e : {})
                .filter((e) => e.type === Z.NYc.GUILD)
                .filter((e) => e.status !== Z.O0b.ENDED).length;
        }),
        M = (0, m.Z)({ forceFetch: !0 }),
        k = (0, j.W)(),
        H = null !== e ? e.currentPeriodEnd : void 0,
        W =
            !(k && !(M.unactivatedUnits.length > 0)) &&
            (M.fractionalState !== B.a$.NONE || M.unactivatedUnits.length > 0);
    return (i.useEffect(
        () => (
            c.Z.wait(() => {
                (0, _.Y2)(), u.jg(), (0, d.X8)(), u.tZ();
            }),
            function () {
                p.Z.clearSubsection();
            }
        ),
        [],
    ),
    A.Z.enabled)
        ? (0, r.jsx)(h.Z, {})
        : f && y
          ? w === V.cP
              ? (0, r.jsx)(v.Z, { onGoBack: () => p.Z.clearSubsection() })
              : w === V.XZ
                ? (0, r.jsx)(T.Z, { onGoBack: () => p.Z.clearSubsection() })
                : (0, r.jsx)("div", {
                      className: Y.container,
                      children: (0, r.jsxs)("div", {
                          className: Y.content,
                          children: [
                              n ? (0, r.jsx)(G.Yn, {}) : null,
                              null != e
                                  ? (0, r.jsx)(G.ZP, {
                                        subscription: e,
                                        paymentSource: a,
                                        busy: b,
                                        subscriptions: t,
                                    })
                                  : (0, r.jsx)(G.MM, {}),
                              W && z(M, H),
                              (0, r.jsx)(S.F, {
                                  setting: F.s6.SUBSCRIPTIONS_CREDITS,
                                  children: (0, r.jsx)(K, {}),
                              }),
                              L > 0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(q, {}),
                                          (0, r.jsx)(O.Z, {
                                              count: L,
                                              onClickManageSubscription: () =>
                                                  p.Z.setSection(Z.oAB.SUBSCRIPTIONS, V.cP),
                                          }),
                                      ],
                                  }),
                              x > 0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(q, {}),
                                          (0, r.jsx)(I.Z, {
                                              count: x,
                                              onClickManageSubscription: () => {
                                                  p.Z.setSection(Z.oAB.SUBSCRIPTIONS, V.XZ),
                                                      D.default.track(
                                                          Z.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                      );
                                              },
                                          }),
                                      ],
                                  }),
                              (0, r.jsx)(q, {}),
                              null != e
                                  ? (0, r.jsx)(U.Z, {
                                        subscription: e,
                                        withOverheadSeparator: !1,
                                    })
                                  : null,
                          ],
                      }),
                  })
          : (0, r.jsx)("div", {
                className: o()(Y.container, Y.loading),
                children: (0, r.jsx)(l.$jN, {}),
            });
};
