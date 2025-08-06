(n.d(t, { Z: () => A }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(727637),
    a = n(100527),
    c = n(906732),
    s = n(313201),
    d = n(680295),
    u = n(5192),
    f = n(785717),
    p = n(687158),
    m = n(899007),
    g = n(648052),
    b = n(867176),
    j = n(280885),
    h = n(900927),
    y = n(678738),
    v = n(502762),
    O = n(530),
    x = n(679332),
    _ = n(544989),
    I = n(228168),
    P = n(981631),
    Z = n(388032),
    E = n(405666),
    N = n(349966),
    T = n(923243);
function A(e) {
    let { user: t, guildId: n, channelId: A, messageId: S, roleId: w, sessionId: C, transitionState: G, openedAt: L, onClose: M, sourceAnalyticsLocations: R = [] } = e,
        D = n === P.ME ? void 0 : n,
        k = (0, p.ZP)(t.id, D),
        U = u.ZP.getName(D, A, t),
        B = (0, s.Dt)(),
        { analyticsLocations: F } = (0, c.ZP)([...R, a.Z.USER_PROFILE_MODAL]),
        V = (0, f.ZB)({
            layout: 'MODAL',
            userId: t.id,
            sourceSessionId: C,
            guildId: D,
            channelId: A,
            messageId: S,
            roleId: w
        }),
        Y = l.useRef(null),
        W = (0, i.Z)(Y);
    return (0, r.jsx)(c.Gt, {
        value: F,
        children: (0, r.jsx)(f.Mt, {
            value: V,
            openedAt: L,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, r.jsxs)(o.Y0X, {
                transitionState: G,
                className: E.root,
                hideShadow: !0,
                'aria-labelledby': B,
                parentComponent: 'NonUserBotProfileModal',
                children: [
                    (0, r.jsx)(o.y5t, {
                        component: (0, r.jsx)(o.nn4, {
                            children: (0, r.jsx)(o.H, {
                                id: B,
                                children: Z.intl.format(Z.t.KRe1Fh, { name: U })
                            })
                        }),
                        children: (0, r.jsxs)(v.Z, {
                            user: t,
                            displayProfile: k,
                            themeType: I.lY.MODAL,
                            ref: (null == k ? void 0 : k.profileEffectId) != null ? Y : void 0,
                            children: [
                                (0, r.jsx)(_.Z, { children: (0, r.jsx)(x.Z, { user: t }) }),
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(b.Z, {
                                            user: t,
                                            displayProfile: k,
                                            themeType: I.lY.MODAL
                                        }),
                                        (0, r.jsx)('div', {
                                            className: E.headerInner,
                                            children: (0, r.jsx)(m.Z, {
                                                user: t,
                                                displayProfile: k,
                                                guildId: D,
                                                channelId: A,
                                                themeType: I.lY.MODAL
                                            })
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: E.body,
                                    children: [
                                        (0, r.jsx)(O.Z, {
                                            className: E.username,
                                            user: t,
                                            nickname: U,
                                            pronouns: null == k ? void 0 : k.pronouns,
                                            nicknameVariant: 'heading-xl/bold',
                                            tags: (0, r.jsx)(g.Z, {
                                                displayProfile: k,
                                                themeType: I.lY.MODAL,
                                                onClose: M
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: T.container,
                                            children: [
                                                (0, r.jsx)(o.njP, {
                                                    className: T.tabBar,
                                                    type: 'top',
                                                    selectedItem: I.oh.BOT_INFO,
                                                    onItemSelect: P.dG4,
                                                    children: (0, r.jsx)(
                                                        o.njP.Item,
                                                        {
                                                            className: T.tabBarItem,
                                                            id: I.oh.BOT_INFO,
                                                            'aria-label': Z.intl.string(Z.t.jGoPJS),
                                                            children: (0, r.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: Z.intl.string(Z.t.jGoPJS)
                                                            })
                                                        },
                                                        I.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, r.jsxs)(o.zJl, {
                                                    fade: !0,
                                                    className: N.scroller,
                                                    children: [
                                                        (0, r.jsx)(j.Z, {
                                                            userId: t.id,
                                                            userBio: null == k ? void 0 : k.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, r.jsx)(y.Z, {
                                                            heading: Z.intl.string(Z.t['A//N4u']),
                                                            children: (0, r.jsx)(h.Z, {
                                                                userId: t.id,
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
                    (null == k ? void 0 : k.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == k ? void 0 : k.profileEffectId,
                            isHovering: W
                        })
                ]
            })
        })
    });
}
