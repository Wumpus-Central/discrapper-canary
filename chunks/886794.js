(t.d(n, { Z: () => A }), t(388685));
var l = t(255367),
    r = t(73800),
    i = t(481060),
    o = t(727637),
    s = t(100527),
    d = t(906732),
    a = t(313201),
    c = t(680295),
    u = t(5192),
    f = t(785717),
    p = t(687158),
    h = t(899007),
    g = t(648052),
    v = t(867176),
    j = t(280885),
    m = t(900927),
    b = t(678738),
    x = t(502762),
    Z = t(530),
    y = t(679332),
    O = t(544989),
    I = t(228168),
    P = t(981631),
    E = t(388032),
    T = t(405666),
    S = t(349966),
    N = t(923243);
function A(e) {
    let { user: n, guildId: t, channelId: A, messageId: C, roleId: _, sessionId: M, transitionState: R, openedAt: w, onClose: U, sourceAnalyticsLocations: L = [] } = e,
        D = t === P.ME ? void 0 : t,
        G = (0, p.ZP)(n.id, D),
        B = u.ZP.getName(D, A, n),
        k = (0, a.Dt)(),
        { analyticsLocations: Y } = (0, d.ZP)([...L, s.Z.USER_PROFILE_MODAL]),
        V = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: M,
            guildId: D,
            channelId: A,
            messageId: C,
            roleId: _
        }),
        F = r.useRef(null),
        W = (0, o.Z)(F);
    return (0, l.jsx)(d.Gt, {
        value: Y,
        children: (0, l.jsx)(f.Mt, {
            value: V,
            openedAt: w,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, l.jsxs)(i.Y0X, {
                transitionState: R,
                className: T.root,
                hideShadow: !0,
                'aria-labelledby': k,
                parentComponent: 'NonUserBotProfileModal',
                children: [
                    (0, l.jsx)(i.y5t, {
                        component: (0, l.jsx)(i.nn4, {
                            children: (0, l.jsx)(i.H, {
                                id: k,
                                children: E.intl.format(E.t.KRe1Fh, { name: B })
                            })
                        }),
                        children: (0, l.jsxs)(x.Z, {
                            user: n,
                            displayProfile: G,
                            themeType: I.lY.MODAL,
                            ref: (null == G ? void 0 : G.profileEffectId) != null ? F : void 0,
                            children: [
                                (0, l.jsx)(O.Z, { children: (0, l.jsx)(y.Z, { user: n }) }),
                                (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(v.Z, {
                                            user: n,
                                            displayProfile: G,
                                            themeType: I.lY.MODAL
                                        }),
                                        (0, l.jsx)('div', {
                                            className: T.headerInner,
                                            children: (0, l.jsx)(h.Z, {
                                                user: n,
                                                displayProfile: G,
                                                guildId: D,
                                                channelId: A,
                                                themeType: I.lY.MODAL
                                            })
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('div', {
                                    className: T.body,
                                    children: [
                                        (0, l.jsx)(Z.Z, {
                                            className: T.username,
                                            user: n,
                                            nickname: B,
                                            pronouns: null == G ? void 0 : G.pronouns,
                                            nicknameVariant: 'heading-xl/bold',
                                            tags: (0, l.jsx)(g.Z, {
                                                displayProfile: G,
                                                themeType: I.lY.MODAL,
                                                onClose: U
                                            })
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: N.container,
                                            children: [
                                                (0, l.jsx)(i.njP, {
                                                    className: N.tabBar,
                                                    type: 'top',
                                                    selectedItem: I.oh.BOT_INFO,
                                                    onItemSelect: P.dG4,
                                                    children: (0, l.jsx)(
                                                        i.njP.Item,
                                                        {
                                                            className: N.tabBarItem,
                                                            id: I.oh.BOT_INFO,
                                                            'aria-label': E.intl.string(E.t.jGoPJS),
                                                            children: (0, l.jsx)(i.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: E.intl.string(E.t.jGoPJS)
                                                            })
                                                        },
                                                        I.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, l.jsxs)(i.zJl, {
                                                    fade: !0,
                                                    className: S.scroller,
                                                    children: [
                                                        (0, l.jsx)(j.Z, {
                                                            userId: n.id,
                                                            userBio: null == G ? void 0 : G.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, l.jsx)(b.Z, {
                                                            heading: E.intl.string(E.t['A//N4u']),
                                                            children: (0, l.jsx)(m.Z, {
                                                                userId: n.id,
                                                                guildId: D,
                                                                tooltipDelay: I.vB
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (null == G ? void 0 : G.profileEffectId) != null &&
                        (0, l.jsx)(c.Z, {
                            profileEffectId: null == G ? void 0 : G.profileEffectId,
                            isHovering: W
                        })
                ]
            })
        })
    });
}
