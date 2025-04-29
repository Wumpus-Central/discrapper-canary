t.d(n, { Z: () => A }), t(388685);
var l = t(200651),
    r = t(192379),
    i = t(481060),
    o = t(727637),
    s = t(100527),
    a = t(906732),
    d = t(680295),
    c = t(5192),
    u = t(785717),
    f = t(687158),
    h = t(899007),
    p = t(648052),
    g = t(867176),
    j = t(280885),
    v = t(900927),
    m = t(678738),
    x = t(502762),
    Z = t(530),
    b = t(679332),
    O = t(544989),
    y = t(228168),
    I = t(981631),
    E = t(388032),
    P = t(405666),
    T = t(349966),
    N = t(923243);
function A(e) {
    let { user: n, guildId: t, channelId: A, messageId: S, roleId: C, sessionId: _, transitionState: R, openedAt: w, onClose: M, sourceAnalyticsLocations: L = [] } = e,
        D = t === I.ME ? void 0 : t,
        U = (0, f.ZP)(n.id, D),
        { analyticsLocations: G } = (0, a.ZP)([...L, s.Z.USER_PROFILE_MODAL]),
        B = (0, u.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: _,
            guildId: D,
            channelId: A,
            messageId: S,
            roleId: C
        }),
        k = r.createRef(),
        Y = (0, o.Z)(k);
    return (0, l.jsx)(a.Gt, {
        value: G,
        children: (0, l.jsx)(u.Mt, {
            value: B,
            openedAt: w,
            fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
            fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
            isLoaded: null == U ? void 0 : U.isLoaded,
            children: (0, l.jsxs)(i.Y0X, {
                transitionState: R,
                className: P.root,
                hideShadow: !0,
                'aria-label': E.intl.string(E.t['3N/J2t']),
                children: [
                    (0, l.jsxs)(x.Z, {
                        user: n,
                        displayProfile: U,
                        themeType: y.lY.MODAL,
                        ref: k,
                        children: [
                            (0, l.jsx)(O.Z, { children: (0, l.jsx)(b.Z, { user: n }) }),
                            (0, l.jsxs)('header', {
                                children: [
                                    (0, l.jsx)(g.Z, {
                                        user: n,
                                        displayProfile: U,
                                        themeType: y.lY.MODAL
                                    }),
                                    (0, l.jsx)('div', {
                                        className: P.headerInner,
                                        children: (0, l.jsx)(h.Z, {
                                            user: n,
                                            displayProfile: U,
                                            guildId: D,
                                            channelId: A,
                                            themeType: y.lY.MODAL
                                        })
                                    })
                                ]
                            }),
                            (0, l.jsxs)('div', {
                                className: P.body,
                                children: [
                                    (0, l.jsx)(Z.Z, {
                                        className: P.username,
                                        user: n,
                                        nickname: c.ZP.getName(D, A, n),
                                        pronouns: null == U ? void 0 : U.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, l.jsx)(p.Z, {
                                            displayProfile: U,
                                            themeType: y.lY.MODAL,
                                            onClose: M
                                        })
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: N.container,
                                        children: [
                                            (0, l.jsx)(i.njP, {
                                                className: N.tabBar,
                                                type: 'top',
                                                selectedItem: y.oh.BOT_INFO,
                                                onItemSelect: I.dG4,
                                                children: (0, l.jsx)(
                                                    i.njP.Item,
                                                    {
                                                        className: N.tabBarItem,
                                                        id: y.oh.BOT_INFO,
                                                        'aria-label': E.intl.string(E.t.jGoPJS),
                                                        children: (0, l.jsx)(i.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: E.intl.string(E.t.jGoPJS)
                                                        })
                                                    },
                                                    y.oh.BOT_INFO
                                                )
                                            }),
                                            (0, l.jsxs)(i.zJl, {
                                                fade: !0,
                                                className: T.scroller,
                                                children: [
                                                    (0, l.jsx)(j.Z, {
                                                        userId: n.id,
                                                        userBio: null == U ? void 0 : U.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, l.jsx)(m.Z, {
                                                        heading: E.intl.string(E.t['A//N4u']),
                                                        children: (0, l.jsx)(v.Z, {
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
                        (0, l.jsx)(d.Z, {
                            profileEffectId: null == U ? void 0 : U.profileEffectId,
                            isHovering: Y
                        })
                ]
            })
        })
    });
}
