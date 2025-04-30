t.d(n, { Z: () => S }), t(388685);
var l = t(200651),
    r = t(192379),
    i = t(481060),
    s = t(727637),
    o = t(100527),
    a = t(906732),
    c = t(680295),
    d = t(5192),
    u = t(785717),
    f = t(687158),
    p = t(899007),
    h = t(648052),
    v = t(867176),
    g = t(280885),
    j = t(900927),
    m = t(678738),
    b = t(502762),
    x = t(530),
    Z = t(679332),
    O = t(544989),
    y = t(228168),
    I = t(981631),
    P = t(388032),
    E = t(405666),
    N = t(349966),
    T = t(923243);
function S(e) {
    let { user: n, guildId: t, channelId: S, messageId: A, roleId: C, sessionId: _, transitionState: w, openedAt: R, onClose: M, sourceAnalyticsLocations: L = [] } = e,
        D = t === I.ME ? void 0 : t,
        U = (0, f.ZP)(n.id, D),
        { analyticsLocations: k } = (0, a.ZP)([...L, o.Z.USER_PROFILE_MODAL]),
        B = (0, u.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: _,
            guildId: D,
            channelId: S,
            messageId: A,
            roleId: C
        }),
        G = r.createRef(),
        Y = (0, s.Z)(G);
    return (0, l.jsx)(a.Gt, {
        value: k,
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
                    (0, l.jsxs)(b.Z, {
                        user: n,
                        displayProfile: U,
                        themeType: y.lY.MODAL,
                        ref: G,
                        children: [
                            (0, l.jsx)(O.Z, { children: (0, l.jsx)(Z.Z, { user: n }) }),
                            (0, l.jsxs)('header', {
                                children: [
                                    (0, l.jsx)(v.Z, {
                                        user: n,
                                        displayProfile: U,
                                        themeType: y.lY.MODAL
                                    }),
                                    (0, l.jsx)('div', {
                                        className: E.headerInner,
                                        children: (0, l.jsx)(p.Z, {
                                            user: n,
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
                                    (0, l.jsx)(x.Z, {
                                        className: E.username,
                                        user: n,
                                        nickname: d.ZP.getName(D, S, n),
                                        pronouns: null == U ? void 0 : U.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, l.jsx)(h.Z, {
                                            displayProfile: U,
                                            themeType: y.lY.MODAL,
                                            onClose: M
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
                                                        userId: n.id,
                                                        userBio: null == U ? void 0 : U.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, l.jsx)(m.Z, {
                                                        heading: P.intl.string(P.t['A//N4u']),
                                                        children: (0, l.jsx)(j.Z, {
                                                            userId: n.id,
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
                        (0, l.jsx)(c.Z, {
                            profileEffectId: null == U ? void 0 : U.profileEffectId,
                            isHovering: Y
                        })
                ]
            })
        })
    });
}
