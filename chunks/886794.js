t.d(n, { Z: () => N }), t(388685);
var r = t(200651),
    o = t(192379),
    i = t(481060),
    l = t(727637),
    s = t(100527),
    c = t(906732),
    a = t(680295),
    d = t(5192),
    u = t(785717),
    f = t(687158),
    p = t(899007),
    b = t(648052),
    m = t(867176),
    h = t(280885),
    g = t(900927),
    y = t(678738),
    I = t(502762),
    j = t(530),
    v = t(679332),
    x = t(544989),
    _ = t(228168),
    Z = t(981631),
    O = t(388032),
    P = t(405666),
    E = t(349966),
    S = t(923243);
function N(e) {
    let { user: n, guildId: t, channelId: N, messageId: T, roleId: A, sessionId: C, transitionState: L, openedAt: w, onClose: R, sourceAnalyticsLocations: M = [] } = e,
        U = t === Z.ME ? void 0 : t,
        B = (0, f.ZP)(n.id, U),
        { analyticsLocations: D } = (0, c.ZP)([...M, s.Z.SIMPLIFIED_PROFILE_MODAL]),
        G = (0, u.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: C,
            guildId: U,
            channelId: N,
            messageId: T,
            roleId: A
        }),
        k = o.createRef(),
        F = (0, l.Z)(k);
    return (0, r.jsx)(c.Gt, {
        value: D,
        children: (0, r.jsx)(u.Mt, {
            value: G,
            openedAt: w,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsxs)(i.Y0X, {
                transitionState: L,
                className: P.root,
                hideShadow: !0,
                'aria-label': O.intl.string(O.t['3N/J2t']),
                children: [
                    (0, r.jsxs)(I.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: _.y0.FULL_SIZE,
                        ref: k,
                        children: [
                            (0, r.jsx)(x.Z, {
                                profileType: _.y0.FULL_SIZE,
                                children: (0, r.jsx)(v.Z, { user: n })
                            }),
                            (0, r.jsxs)('header', {
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        user: n,
                                        displayProfile: B,
                                        profileType: _.y0.FULL_SIZE
                                    }),
                                    (0, r.jsx)('div', {
                                        className: P.headerInner,
                                        children: (0, r.jsx)(p.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: U,
                                            channelId: N,
                                            profileType: _.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: P.body,
                                children: [
                                    (0, r.jsx)(j.Z, {
                                        className: P.username,
                                        user: n,
                                        profileType: _.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, N, n),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, r.jsx)(b.Z, {
                                            displayProfile: B,
                                            profileType: _.y0.FULL_SIZE,
                                            onClose: R
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: S.container,
                                        children: [
                                            (0, r.jsx)(i.njP, {
                                                className: S.tabBar,
                                                type: 'top',
                                                selectedItem: _.oh.BOT_INFO,
                                                onItemSelect: Z.dG4,
                                                children: (0, r.jsx)(
                                                    i.njP.Item,
                                                    {
                                                        className: S.tabBarItem,
                                                        id: _.oh.BOT_INFO,
                                                        'aria-label': O.intl.string(O.t.jGoPJS),
                                                        children: (0, r.jsx)(i.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: O.intl.string(O.t.jGoPJS)
                                                        })
                                                    },
                                                    _.oh.BOT_INFO
                                                )
                                            }),
                                            (0, r.jsxs)(i.zJl, {
                                                fade: !0,
                                                className: E.scroller,
                                                children: [
                                                    (0, r.jsx)(h.Z, {
                                                        userId: n.id,
                                                        userBio: null == B ? void 0 : B.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        heading: O.intl.string(O.t['A//N4u']),
                                                        children: (0, r.jsx)(g.Z, {
                                                            userId: n.id,
                                                            guildId: U,
                                                            tooltipDelay: _.vB
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (null == B ? void 0 : B.profileEffectId) != null &&
                        (0, r.jsx)(a.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: F
                        })
                ]
            })
        })
    });
}
