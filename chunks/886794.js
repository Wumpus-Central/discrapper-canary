t.d(n, { Z: () => N }), t(388685);
var l = t(255367),
    r = t(73800),
    i = t(481060),
    o = t(727637),
    s = t(100527),
    c = t(906732),
    a = t(680295),
    u = t(5192),
    d = t(785717),
    f = t(687158),
    p = t(899007),
    g = t(648052),
    h = t(867176),
    v = t(280885),
    j = t(900927),
    m = t(678738),
    b = t(502762),
    x = t(530),
    Z = t(679332),
    y = t(544989),
    O = t(228168),
    I = t(981631),
    P = t(388032),
    E = t(405666),
    T = t(349966),
    S = t(923243);
function N(e) {
    let { user: n, guildId: t, channelId: N, messageId: A, roleId: C, sessionId: _, transitionState: w, openedAt: R, onClose: M, sourceAnalyticsLocations: U = [] } = e,
        L = t === I.ME ? void 0 : t,
        D = (0, f.ZP)(n.id, L),
        { analyticsLocations: B } = (0, c.ZP)([...U, s.Z.USER_PROFILE_MODAL]),
        k = (0, d.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: _,
            guildId: L,
            channelId: N,
            messageId: A,
            roleId: C
        }),
        G = r.useRef(null),
        Y = (0, o.Z)(G);
    return (0, l.jsx)(c.Gt, {
        value: B,
        children: (0, l.jsx)(d.Mt, {
            value: k,
            openedAt: R,
            fetchStartedAt: null == D ? void 0 : D.fetchStartedAt,
            fetchEndedAt: null == D ? void 0 : D.fetchEndedAt,
            isLoaded: null == D ? void 0 : D.isLoaded,
            children: (0, l.jsxs)(i.Y0X, {
                transitionState: w,
                className: E.root,
                hideShadow: !0,
                'aria-label': P.intl.string(P.t['3N/J2t']),
                children: [
                    (0, l.jsxs)(b.Z, {
                        user: n,
                        displayProfile: D,
                        themeType: O.lY.MODAL,
                        ref: G,
                        children: [
                            (0, l.jsx)(y.Z, { children: (0, l.jsx)(Z.Z, { user: n }) }),
                            (0, l.jsxs)('header', {
                                children: [
                                    (0, l.jsx)(h.Z, {
                                        user: n,
                                        displayProfile: D,
                                        themeType: O.lY.MODAL
                                    }),
                                    (0, l.jsx)('div', {
                                        className: E.headerInner,
                                        children: (0, l.jsx)(p.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: L,
                                            channelId: N,
                                            themeType: O.lY.MODAL
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
                                        nickname: u.ZP.getName(L, N, n),
                                        pronouns: null == D ? void 0 : D.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, l.jsx)(g.Z, {
                                            displayProfile: D,
                                            themeType: O.lY.MODAL,
                                            onClose: M
                                        })
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: S.container,
                                        children: [
                                            (0, l.jsx)(i.njP, {
                                                className: S.tabBar,
                                                type: 'top',
                                                selectedItem: O.oh.BOT_INFO,
                                                onItemSelect: I.dG4,
                                                children: (0, l.jsx)(
                                                    i.njP.Item,
                                                    {
                                                        className: S.tabBarItem,
                                                        id: O.oh.BOT_INFO,
                                                        'aria-label': P.intl.string(P.t.jGoPJS),
                                                        children: (0, l.jsx)(i.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: P.intl.string(P.t.jGoPJS)
                                                        })
                                                    },
                                                    O.oh.BOT_INFO
                                                )
                                            }),
                                            (0, l.jsxs)(i.zJl, {
                                                fade: !0,
                                                className: T.scroller,
                                                children: [
                                                    (0, l.jsx)(v.Z, {
                                                        userId: n.id,
                                                        userBio: null == D ? void 0 : D.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, l.jsx)(m.Z, {
                                                        heading: P.intl.string(P.t['A//N4u']),
                                                        children: (0, l.jsx)(j.Z, {
                                                            userId: n.id,
                                                            guildId: L,
                                                            tooltipDelay: O.vB
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
                    (null == D ? void 0 : D.profileEffectId) != null &&
                        (0, l.jsx)(a.Z, {
                            profileEffectId: null == D ? void 0 : D.profileEffectId,
                            isHovering: Y
                        })
                ]
            })
        })
    });
}
