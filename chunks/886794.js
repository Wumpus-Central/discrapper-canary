(t.d(n, { Z: () => A }), t(388685));
var l = t(255367),
    r = t(73800),
    i = t(481060),
    o = t(727637),
    s = t(100527),
    c = t(906732),
    a = t(313201),
    u = t(680295),
    d = t(5192),
    f = t(785717),
    p = t(687158),
    j = t(899007),
    g = t(648052),
    h = t(867176),
    v = t(280885),
    m = t(900927),
    b = t(678738),
    x = t(502762),
    y = t(530),
    O = t(679332),
    Z = t(544989),
    I = t(228168),
    P = t(981631),
    E = t(388032),
    T = t(405666),
    S = t(349966),
    N = t(923243);
function A(e) {
    let { user: n, guildId: t, channelId: A, messageId: C, roleId: w, sessionId: _, transitionState: R, openedAt: M, onClose: U, sourceAnalyticsLocations: D = [] } = e,
        L = t === P.ME ? void 0 : t,
        B = (0, p.ZP)(n.id, L),
        k = d.ZP.getName(L, A, n),
        G = (0, a.Dt)(),
        { analyticsLocations: Y } = (0, c.ZP)([...D, s.Z.USER_PROFILE_MODAL]),
        V = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: _,
            guildId: L,
            channelId: A,
            messageId: C,
            roleId: w
        }),
        F = r.useRef(null),
        W = (0, o.Z)(F);
    return (0, l.jsx)(c.Gt, {
        value: Y,
        children: (0, l.jsx)(f.Mt, {
            value: V,
            openedAt: M,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, l.jsxs)(i.Y0X, {
                transitionState: R,
                className: T.root,
                hideShadow: !0,
                'aria-labelledby': G,
                parentComponent: 'NonUserBotProfileModal',
                children: [
                    (0, l.jsx)(i.y5t, {
                        component: (0, l.jsx)(i.nn4, {
                            children: (0, l.jsx)(i.H, {
                                id: G,
                                children: E.intl.format(E.t.KRe1Fh, { name: k })
                            })
                        }),
                        children: (0, l.jsxs)(x.Z, {
                            user: n,
                            displayProfile: B,
                            themeType: I.lY.MODAL,
                            ref: (null == B ? void 0 : B.profileEffectId) != null ? F : void 0,
                            children: [
                                (0, l.jsx)(Z.Z, { children: (0, l.jsx)(O.Z, { user: n }) }),
                                (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(h.Z, {
                                            user: n,
                                            displayProfile: B,
                                            themeType: I.lY.MODAL
                                        }),
                                        (0, l.jsx)('div', {
                                            className: T.headerInner,
                                            children: (0, l.jsx)(j.Z, {
                                                user: n,
                                                displayProfile: B,
                                                guildId: L,
                                                channelId: A,
                                                themeType: I.lY.MODAL
                                            })
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('div', {
                                    className: T.body,
                                    children: [
                                        (0, l.jsx)(y.Z, {
                                            className: T.username,
                                            user: n,
                                            nickname: k,
                                            pronouns: null == B ? void 0 : B.pronouns,
                                            nicknameVariant: 'heading-xl/bold',
                                            tags: (0, l.jsx)(g.Z, {
                                                displayProfile: B,
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
                                                        (0, l.jsx)(v.Z, {
                                                            userId: n.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, l.jsx)(b.Z, {
                                                            heading: E.intl.string(E.t['A//N4u']),
                                                            children: (0, l.jsx)(m.Z, {
                                                                userId: n.id,
                                                                guildId: L,
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
                    (null == B ? void 0 : B.profileEffectId) != null &&
                        (0, l.jsx)(u.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: W
                        })
                ]
            })
        })
    });
}
