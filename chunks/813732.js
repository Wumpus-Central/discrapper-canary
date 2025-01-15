var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(496929),
    g = n(821849),
    h = n(230711),
    p = n(497321),
    x = n(975298),
    f = n(167354),
    _ = n(15640),
    E = n(600164),
    C = n(925329),
    T = n(406174),
    S = n(810762),
    b = n(681833),
    I = n(856888),
    N = n(921801),
    v = n(246946),
    A = n(663389),
    j = n(351402),
    R = n(853872),
    O = n(78839),
    P = n(580130),
    y = n(626135),
    D = n(63063),
    B = n(74538),
    Z = n(391077),
    L = n(639056),
    M = n(52164),
    k = n(91430),
    w = n(474936),
    F = n(981631),
    U = n(526761),
    V = n(726985),
    G = n(388032),
    H = n(125503);
function Y() {
    return (0, i.jsx)(o.Card, {
        className: H.noItemsCard,
        type: o.Card.Types.CUSTOM,
        children: (0, i.jsxs)(E.Z, {
            align: E.Z.Align.CENTER,
            children: [
                (0, i.jsx)(C.Z, {
                    game: null,
                    size: C.Z.Sizes.SMALL,
                    className: H.noItemsIcon
                }),
                (0, i.jsx)('span', {
                    className: H.cardText,
                    children: G.intl.string(G.t['jy/hys'])
                })
            ]
        })
    });
}
function W() {
    let e = (0, l.e7)([P.Z], () => P.Z.getForApplication(w.CL));
    return (
        s.useEffect(() => {
            (0, m.yD)(w.CL);
        }, []),
        (0, i.jsxs)('section', {
            children: [
                (0, i.jsx)(o.Heading, {
                    variant: 'heading-md/bold',
                    className: H.accountCreditTitle,
                    children: G.intl.string(G.t['2GKrvr'])
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: H.accountCreditDescription,
                    children: G.intl.string(G.t.kNEjGh)
                }),
                null != e && B.ZP.hasAccountCredit(e)
                    ? (0, i.jsx)(L.Z, {
                          className: H.accountCredit,
                          entitlements: e
                      })
                    : (0, i.jsx)(Y, {})
            ]
        })
    );
}
function z() {
    return (0, i.jsx)('hr', { className: H.hr });
}
t.Z = function () {
    var e, t;
    let n = (0, l.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        r = (0, f.Z)({ subscriptionFilter: (e) => k.eS.has(e.status) }),
        m = r.length > 1,
        E = (0, l.e7)([R.Z], () => (null != n && null != n.paymentSourceId ? R.Z.getPaymentSource(n.paymentSourceId) : null), [n]),
        C = (0, l.e7)([O.ZP], () => O.ZP.hasFetchedSubscriptions()),
        P = (0, l.e7)([j.Z], () => j.Z.isBusy),
        B = (0, _.V)(),
        L = (0, l.e7)([A.Z], () => A.Z.getSubsection()),
        Y = (0, l.e7)([O.ZP], () => {
            var e, t;
            return null !== (t = null === (e = O.ZP.getActiveApplicationSubscriptions()) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
        }),
        K = (0, l.e7)([O.ZP], () => {
            var e;
            return Object.values(null !== (e = O.ZP.getSubscriptions()) && void 0 !== e ? e : {})
                .filter((e) => e.type === F.NYc.GUILD)
                .filter((e) => e.status !== F.O0b.ENDED).length;
        }),
        q = (0, x.Z)({ forceFetch: !0 }),
        Q = null !== n ? n.currentPeriodEnd : void 0,
        X = q.fractionalState !== w.a$.NONE || q.unactivatedUnits.length > 0;
    if (
        (s.useEffect(
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
    )
        return (0, i.jsx)(p.Z, {});
    if (!C || !B)
        return (0, i.jsx)('div', {
            className: a()(H.container, H.loading),
            children: (0, i.jsx)(o.Spinner, {})
        });
    if (L === U.cP) return (0, i.jsx)(S.Z, { onGoBack: () => h.Z.clearSubsection() });
    if (L === U.XZ) return (0, i.jsx)(I.Z, { onGoBack: () => h.Z.clearSubsection() });
    return (0, i.jsx)('div', {
        className: H.container,
        children: (0, i.jsxs)('div', {
            className: H.content,
            children: [
                m ? (0, i.jsx)(k.Yn, {}) : null,
                null != n
                    ? (0, i.jsx)(k.ZP, {
                          subscription: n,
                          paymentSource: E,
                          busy: P,
                          subscriptions: r
                      })
                    : (0, i.jsx)(k.MM, {}),
                X &&
                    ((e = q),
                    (t = Q),
                    (0, i.jsxs)('section', {
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-md/bold',
                                className: H.accountCreditTitle,
                                children: G.intl.string(G.t.Obre8v)
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                className: H.accountCreditDescription,
                                children: G.intl.format(G.t['7Zi06e'], { helpCenterLink: D.Z.getArticleURL(F.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                            }),
                            (0, i.jsx)(Z.Z, {
                                className: H.accountCredit,
                                fractionalPremiumInfo: e,
                                activationDate: t
                            })
                        ]
                    })),
                (0, i.jsx)(N.F, {
                    setting: V.s6.SUBSCRIPTIONS_CREDITS,
                    children: (0, i.jsx)(W, {})
                }),
                K > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(z, {}),
                            (0, i.jsx)(T.Z, {
                                count: K,
                                onClickManageSubscription: () => h.Z.setSection(F.oAB.SUBSCRIPTIONS, U.cP)
                            })
                        ]
                    }),
                Y > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(z, {}),
                            (0, i.jsx)(b.Z, {
                                count: Y,
                                onClickManageSubscription: () => {
                                    h.Z.setSection(F.oAB.SUBSCRIPTIONS, U.XZ), y.default.track(F.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
                                }
                            })
                        ]
                    }),
                (0, i.jsx)(z, {}),
                null != n
                    ? (0, i.jsx)(M.Z, {
                          subscription: n,
                          withOverheadSeparator: !1
                      })
                    : null
            ]
        })
    });
};
