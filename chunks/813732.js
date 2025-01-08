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
    h = n(821849),
    g = n(230711),
    p = n(497321),
    x = n(975298),
    S = n(167354),
    T = n(15640),
    E = n(600164),
    C = n(925329),
    _ = n(406174),
    f = n(810762),
    I = n(681833),
    N = n(856888),
    A = n(921801),
    b = n(246946),
    v = n(663389),
    j = n(351402),
    O = n(853872),
    R = n(78839),
    P = n(580130),
    D = n(626135),
    y = n(63063),
    B = n(74538),
    L = n(391077),
    Z = n(639056),
    F = n(52164),
    M = n(91430),
    k = n(474936),
    w = n(981631),
    U = n(526761),
    V = n(726985),
    G = n(388032),
    Y = n(125503);
function H() {
    return (0, i.jsx)(o.Card, {
        className: Y.noItemsCard,
        type: o.Card.Types.CUSTOM,
        children: (0, i.jsxs)(E.Z, {
            align: E.Z.Align.CENTER,
            children: [
                (0, i.jsx)(C.Z, {
                    game: null,
                    size: C.Z.Sizes.SMALL,
                    className: Y.noItemsIcon
                }),
                (0, i.jsx)('span', {
                    className: Y.cardText,
                    children: G.intl.string(G.t['jy/hys'])
                })
            ]
        })
    });
}
function z() {
    let e = (0, a.e7)([P.Z], () => P.Z.getForApplication(k.CL));
    return (
        s.useEffect(() => {
            (0, m.yD)(k.CL);
        }, []),
        (0, i.jsxs)('section', {
            children: [
                (0, i.jsx)(o.Heading, {
                    variant: 'heading-md/bold',
                    className: Y.accountCreditTitle,
                    children: G.intl.string(G.t['2GKrvr'])
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: Y.accountCreditDescription,
                    children: G.intl.string(G.t.kNEjGh)
                }),
                null != e && B.ZP.hasAccountCredit(e)
                    ? (0, i.jsx)(Z.Z, {
                          className: Y.accountCredit,
                          entitlements: e
                      })
                    : (0, i.jsx)(H, {})
            ]
        })
    );
}
function W() {
    return (0, i.jsx)('hr', { className: Y.hr });
}
t.Z = function () {
    var e, t;
    let n = (0, a.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        r = (0, S.Z)({ subscriptionFilter: (e) => M.eS.has(e.status) }),
        m = r.length > 1,
        E = (0, a.e7)([O.Z], () => (null != n && null != n.paymentSourceId ? O.Z.getPaymentSource(n.paymentSourceId) : null), [n]),
        C = (0, a.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
        P = (0, a.e7)([j.Z], () => j.Z.isBusy),
        B = (0, T.V)(),
        Z = (0, a.e7)([v.Z], () => v.Z.getSubsection()),
        H = (0, a.e7)([R.ZP], () => {
            var e, t;
            return null !== (t = null === (e = R.ZP.getActiveApplicationSubscriptions()) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
        }),
        K = (0, a.e7)([R.ZP], () => {
            var e;
            return Object.values(null !== (e = R.ZP.getSubscriptions()) && void 0 !== e ? e : {})
                .filter((e) => e.type === w.NYc.GUILD)
                .filter((e) => e.status !== w.O0b.ENDED).length;
        }),
        q = (0, x.Z)({ forceFetch: !0 }),
        X = null !== n ? n.currentPeriodEnd : void 0,
        Q = q.fractionalState !== k.a$.NONE || q.unactivatedUnits.length > 0;
    if (
        (s.useEffect(
            () => (
                c.Z.wait(() => {
                    (0, h.Y2)(), d.jg(), (0, u.X8)(), d.tZ();
                }),
                function () {
                    g.Z.clearSubsection();
                }
            ),
            []
        ),
        b.Z.enabled)
    )
        return (0, i.jsx)(p.Z, {});
    if (!C || !B)
        return (0, i.jsx)('div', {
            className: l()(Y.container, Y.loading),
            children: (0, i.jsx)(o.Spinner, {})
        });
    if (Z === U.cP) return (0, i.jsx)(f.Z, { onGoBack: () => g.Z.clearSubsection() });
    if (Z === U.XZ) return (0, i.jsx)(N.Z, { onGoBack: () => g.Z.clearSubsection() });
    return (0, i.jsx)('div', {
        className: Y.container,
        children: (0, i.jsxs)('div', {
            className: Y.content,
            children: [
                m ? (0, i.jsx)(M.Yn, {}) : null,
                null != n
                    ? (0, i.jsx)(M.ZP, {
                          subscription: n,
                          paymentSource: E,
                          busy: P,
                          subscriptions: r
                      })
                    : (0, i.jsx)(M.MM, {}),
                Q &&
                    ((e = q),
                    (t = X),
                    (0, i.jsxs)('section', {
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-md/bold',
                                className: Y.accountCreditTitle,
                                children: G.intl.string(G.t.Obre8v)
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                className: Y.accountCreditDescription,
                                children: G.intl.format(G.t['7Zi06e'], { helpCenterLink: y.Z.getArticleURL(w.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                            }),
                            (0, i.jsx)(L.Z, {
                                className: Y.accountCredit,
                                fractionalPremiumInfo: e,
                                activationDate: t
                            })
                        ]
                    })),
                (0, i.jsx)(A.F, {
                    setting: V.s6.SUBSCRIPTIONS_CREDITS,
                    children: (0, i.jsx)(z, {})
                }),
                K > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(W, {}),
                            (0, i.jsx)(_.Z, {
                                count: K,
                                onClickManageSubscription: () => g.Z.setSection(w.oAB.SUBSCRIPTIONS, U.cP)
                            })
                        ]
                    }),
                H > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(W, {}),
                            (0, i.jsx)(I.Z, {
                                count: H,
                                onClickManageSubscription: () => {
                                    g.Z.setSection(w.oAB.SUBSCRIPTIONS, U.XZ), D.default.track(w.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
                                }
                            })
                        ]
                    }),
                (0, i.jsx)(W, {}),
                null != n
                    ? (0, i.jsx)(F.Z, {
                          subscription: n,
                          withOverheadSeparator: !1
                      })
                    : null
            ]
        })
    });
};
