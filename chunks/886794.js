t.d(n, { Z: () => C }), t(388685);
var i = t(200651),
    o = t(192379),
    l = t(481060),
    r = t(727637),
    s = t(100527),
    a = t(906732),
    c = t(680295),
    d = t(5192),
    u = t(785717),
    f = t(687158),
    m = t(899007),
    p = t(648052),
    h = t(867176),
    x = t(280885),
    I = t(900927),
    v = t(678738),
    b = t(502762),
    j = t(530),
    _ = t(679332),
    g = t(544989),
    Z = t(228168),
    y = t(981631),
    N = t(388032),
    A = t(405666),
    T = t(349966),
    O = t(923243);
function C(e) {
    let { user: n, guildId: t, channelId: C, messageId: E, roleId: P, sessionId: S, transitionState: M, openedAt: L, onClose: w, sourceAnalyticsLocations: B = [] } = e,
        D = t === y.ME ? void 0 : t,
        U = (0, f.ZP)(n.id, D),
        { analyticsLocations: R } = (0, a.ZP)([...B, s.Z.USER_PROFILE_MODAL]),
        k = (0, u.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: S,
            guildId: D,
            channelId: C,
            messageId: E,
            roleId: P
        }),
        G = o.createRef(),
        Y = (0, r.Z)(G);
    return (0, i.jsx)(a.Gt, {
        value: R,
        children: (0, i.jsx)(u.Mt, {
            value: k,
            openedAt: L,
            fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
            fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
            isLoaded: null == U ? void 0 : U.isLoaded,
            children: (0, i.jsxs)(l.Y0X, {
                transitionState: M,
                className: A.root,
                hideShadow: !0,
                'aria-label': N.intl.string(N.t['3N/J2t']),
                children: [
                    (0, i.jsxs)(b.Z, {
                        user: n,
                        displayProfile: U,
                        themeType: Z.lY.MODAL,
                        ref: G,
                        children: [
                            (0, i.jsx)(g.Z, { children: (0, i.jsx)(_.Z, { user: n }) }),
                            (0, i.jsxs)('header', {
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        user: n,
                                        displayProfile: U,
                                        themeType: Z.lY.MODAL
                                    }),
                                    (0, i.jsx)('div', {
                                        className: A.headerInner,
                                        children: (0, i.jsx)(m.Z, {
                                            user: n,
                                            displayProfile: U,
                                            guildId: D,
                                            channelId: C,
                                            themeType: Z.lY.MODAL
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: A.body,
                                children: [
                                    (0, i.jsx)(j.Z, {
                                        className: A.username,
                                        user: n,
                                        nickname: d.ZP.getName(D, C, n),
                                        pronouns: null == U ? void 0 : U.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, i.jsx)(p.Z, {
                                            displayProfile: U,
                                            themeType: Z.lY.MODAL,
                                            onClose: w
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: O.container,
                                        children: [
                                            (0, i.jsx)(l.njP, {
                                                className: O.tabBar,
                                                type: 'top',
                                                selectedItem: Z.oh.BOT_INFO,
                                                onItemSelect: y.dG4,
                                                children: (0, i.jsx)(
                                                    l.njP.Item,
                                                    {
                                                        className: O.tabBarItem,
                                                        id: Z.oh.BOT_INFO,
                                                        'aria-label': N.intl.string(N.t.jGoPJS),
                                                        children: (0, i.jsx)(l.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: N.intl.string(N.t.jGoPJS)
                                                        })
                                                    },
                                                    Z.oh.BOT_INFO
                                                )
                                            }),
                                            (0, i.jsxs)(l.zJl, {
                                                fade: !0,
                                                className: T.scroller,
                                                children: [
                                                    (0, i.jsx)(x.Z, {
                                                        userId: n.id,
                                                        userBio: null == U ? void 0 : U.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, i.jsx)(v.Z, {
                                                        heading: N.intl.string(N.t['A//N4u']),
                                                        children: (0, i.jsx)(I.Z, {
                                                            userId: n.id,
                                                            guildId: D,
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
                    (null == U ? void 0 : U.profileEffectId) != null &&
                        (0, i.jsx)(c.Z, {
                            profileEffectId: null == U ? void 0 : U.profileEffectId,
                            isHovering: Y
                        })
                ]
            })
        })
    });
}
