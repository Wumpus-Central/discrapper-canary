n.d(t, { Z: () => S }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(481060),
    s = n(727637),
    o = n(100527),
    c = n(906732),
    a = n(680295),
    d = n(5192),
    u = n(785717),
    f = n(687158),
    p = n(899007),
    h = n(648052),
    j = n(867176),
    g = n(280885),
    v = n(900927),
    m = n(678738),
    x = n(502762),
    b = n(530),
    O = n(679332),
    Z = n(544989),
    y = n(228168),
    I = n(981631),
    P = n(388032),
    E = n(405666),
    N = n(349966),
    T = n(923243);
function S(e) {
    let { user: t, guildId: n, channelId: S, messageId: A, roleId: C, sessionId: _, transitionState: w, openedAt: R, onClose: L, sourceAnalyticsLocations: M = [] } = e,
        D = n === I.ME ? void 0 : n,
        U = (0, f.ZP)(t.id, D),
        { analyticsLocations: G } = (0, c.ZP)([...M, o.Z.USER_PROFILE_MODAL]),
        B = (0, u.ZB)({
            layout: 'MODAL',
            userId: t.id,
            sourceSessionId: _,
            guildId: D,
            channelId: S,
            messageId: A,
            roleId: C
        }),
        k = r.createRef(),
        Y = (0, s.Z)(k);
    return (0, l.jsx)(c.Gt, {
        value: G,
        children: (0, l.jsx)(u.Mt, {
            value: B,
            openedAt: R,
            fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
            fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
            isLoaded: null == U ? void 0 : U.isLoaded,
            children: (0, l.jsxs)(i.Y0X, {
                transitionState: w,
                className: E.root,
                hideShadow: !0,
                'aria-label': P.intl.string(P.t['3N/J2t']),
                children: [
                    (0, l.jsxs)(x.Z, {
                        user: t,
                        displayProfile: U,
                        themeType: y.lY.MODAL,
                        ref: k,
                        children: [
                            (0, l.jsx)(Z.Z, { children: (0, l.jsx)(O.Z, { user: t }) }),
                            (0, l.jsxs)('header', {
                                children: [
                                    (0, l.jsx)(j.Z, {
                                        user: t,
                                        displayProfile: U,
                                        themeType: y.lY.MODAL
                                    }),
                                    (0, l.jsx)('div', {
                                        className: E.headerInner,
                                        children: (0, l.jsx)(p.Z, {
                                            user: t,
                                            displayProfile: U,
                                            guildId: D,
                                            channelId: S,
                                            themeType: y.lY.MODAL
                                        })
                                    })
                                ]
                            }),
                            (0, l.jsxs)('div', {
                                className: E.body,
                                children: [
                                    (0, l.jsx)(b.Z, {
                                        className: E.username,
                                        user: t,
                                        nickname: d.ZP.getName(D, S, t),
                                        pronouns: null == U ? void 0 : U.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, l.jsx)(h.Z, {
                                            displayProfile: U,
                                            themeType: y.lY.MODAL,
                                            onClose: L
                                        })
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: T.container,
                                        children: [
                                            (0, l.jsx)(i.njP, {
                                                className: T.tabBar,
                                                type: 'top',
                                                selectedItem: y.oh.BOT_INFO,
                                                onItemSelect: I.dG4,
                                                children: (0, l.jsx)(
                                                    i.njP.Item,
                                                    {
                                                        className: T.tabBarItem,
                                                        id: y.oh.BOT_INFO,
                                                        'aria-label': P.intl.string(P.t.jGoPJS),
                                                        children: (0, l.jsx)(i.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: P.intl.string(P.t.jGoPJS)
                                                        })
                                                    },
                                                    y.oh.BOT_INFO
                                                )
                                            }),
                                            (0, l.jsxs)(i.zJl, {
                                                fade: !0,
                                                className: N.scroller,
                                                children: [
                                                    (0, l.jsx)(g.Z, {
                                                        userId: t.id,
                                                        userBio: null == U ? void 0 : U.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, l.jsx)(m.Z, {
                                                        heading: P.intl.string(P.t['A//N4u']),
                                                        children: (0, l.jsx)(v.Z, {
                                                            userId: t.id,
                                                            guildId: D,
                                                            tooltipDelay: y.vB
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
                    (null == U ? void 0 : U.profileEffectId) != null &&
                        (0, l.jsx)(a.Z, {
                            profileEffectId: null == U ? void 0 : U.profileEffectId,
                            isHovering: Y
                        })
                ]
            })
        })
    });
}
