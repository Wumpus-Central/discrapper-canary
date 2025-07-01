(t.d(n, { Z: () => N }), t(388685));
var l = t(255367),
    r = t(73800),
    i = t(481060),
    o = t(727637),
    s = t(100527),
    a = t(906732),
    c = t(680295),
    u = t(5192),
    d = t(785717),
    f = t(687158),
    p = t(899007),
    g = t(648052),
    v = t(867176),
    j = t(280885),
    h = t(900927),
    m = t(678738),
    b = t(502762),
    x = t(530),
    O = t(679332),
    y = t(544989),
    Z = t(228168),
    I = t(981631),
    P = t(388032),
    E = t(405666),
    T = t(349966),
    S = t(923243);
function N(e) {
    let { user: n, guildId: t, channelId: N, messageId: A, roleId: C, sessionId: w, transitionState: _, openedAt: R, onClose: M, sourceAnalyticsLocations: U = [] } = e,
        L = t === I.ME ? void 0 : t,
        D = (0, f.ZP)(n.id, L),
        B = u.ZP.getName(L, N, n),
        k = P.intl.formatToPlainString(P.t.KRe1Fh, { name: B }),
        { analyticsLocations: G } = (0, a.ZP)([...U, s.Z.USER_PROFILE_MODAL]),
        Y = (0, d.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: w,
            guildId: L,
            channelId: N,
            messageId: A,
            roleId: C
        }),
        V = r.useRef(null),
        F = (0, o.Z)(V);
    return (0, l.jsx)(a.Gt, {
        value: G,
        children: (0, l.jsx)(d.Mt, {
            value: Y,
            openedAt: R,
            fetchStartedAt: null == D ? void 0 : D.fetchStartedAt,
            fetchEndedAt: null == D ? void 0 : D.fetchEndedAt,
            isLoaded: null == D ? void 0 : D.isLoaded,
            children: (0, l.jsxs)(i.Y0X, {
                transitionState: _,
                className: E.root,
                hideShadow: !0,
                'aria-label': k,
                parentComponent: 'NonUserBotProfileModal',
                children: [
                    (0, l.jsxs)(b.Z, {
                        user: n,
                        displayProfile: D,
                        themeType: Z.lY.MODAL,
                        ref: (null == D ? void 0 : D.profileEffectId) != null ? V : void 0,
                        children: [
                            (0, l.jsx)(y.Z, { children: (0, l.jsx)(O.Z, { user: n }) }),
                            (0, l.jsxs)('header', {
                                children: [
                                    (0, l.jsx)(v.Z, {
                                        user: n,
                                        displayProfile: D,
                                        themeType: Z.lY.MODAL
                                    }),
                                    (0, l.jsx)('div', {
                                        className: E.headerInner,
                                        children: (0, l.jsx)(p.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: L,
                                            channelId: N,
                                            themeType: Z.lY.MODAL
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
                                        nickname: B,
                                        pronouns: null == D ? void 0 : D.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, l.jsx)(g.Z, {
                                            displayProfile: D,
                                            themeType: Z.lY.MODAL,
                                            onClose: M
                                        })
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: S.container,
                                        children: [
                                            (0, l.jsx)(i.njP, {
                                                className: S.tabBar,
                                                type: 'top',
                                                selectedItem: Z.oh.BOT_INFO,
                                                onItemSelect: I.dG4,
                                                children: (0, l.jsx)(
                                                    i.njP.Item,
                                                    {
                                                        className: S.tabBarItem,
                                                        id: Z.oh.BOT_INFO,
                                                        'aria-label': P.intl.string(P.t.jGoPJS),
                                                        children: (0, l.jsx)(i.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: P.intl.string(P.t.jGoPJS)
                                                        })
                                                    },
                                                    Z.oh.BOT_INFO
                                                )
                                            }),
                                            (0, l.jsxs)(i.zJl, {
                                                fade: !0,
                                                className: T.scroller,
                                                children: [
                                                    (0, l.jsx)(j.Z, {
                                                        userId: n.id,
                                                        userBio: null == D ? void 0 : D.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, l.jsx)(m.Z, {
                                                        heading: P.intl.string(P.t['A//N4u']),
                                                        children: (0, l.jsx)(h.Z, {
                                                            userId: n.id,
                                                            guildId: L,
                                                            tooltipDelay: Z.vB
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
                        (0, l.jsx)(c.Z, {
                            profileEffectId: null == D ? void 0 : D.profileEffectId,
                            isHovering: F
                        })
                ]
            })
        })
    });
}
