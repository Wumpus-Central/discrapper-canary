t.d(n, { Z: () => C }), t(388685);
var l = t(255367),
    r = t(73800),
    i = t(442837),
    o = t(481060),
    s = t(727637),
    a = t(100527),
    c = t(906732),
    u = t(680295),
    d = t(706454),
    f = t(5192),
    p = t(785717),
    g = t(687158),
    v = t(899007),
    j = t(648052),
    h = t(867176),
    m = t(280885),
    b = t(900927),
    x = t(678738),
    O = t(502762),
    y = t(530),
    Z = t(679332),
    P = t(544989),
    I = t(228168),
    E = t(981631),
    S = t(388032),
    T = t(405666),
    N = t(349966),
    A = t(923243);
function C(e) {
    let { user: n, guildId: t, channelId: C, messageId: _, roleId: w, sessionId: M, transitionState: R, openedAt: U, onClose: L, sourceAnalyticsLocations: D = [] } = e,
        B = t === E.ME ? void 0 : t,
        G = (0, g.ZP)(n.id, B),
        k = f.ZP.getName(B, C, n),
        { analyticsLocations: V } = (0, c.ZP)([...D, a.Z.USER_PROFILE_MODAL]),
        Y = (0, p.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: M,
            guildId: B,
            channelId: C,
            messageId: _,
            roleId: w
        }),
        F = r.useRef(null),
        z = (0, s.Z)(F),
        W = (0, i.e7)([d.default], () => ['en-US', 'en-GB'].includes(d.default.locale)) ? S.intl.formatToPlainString(S.t.KRe1Fh, { name: k }) : S.intl.string(S.t['3N/J2t']);
    return (0, l.jsx)(c.Gt, {
        value: V,
        children: (0, l.jsx)(p.Mt, {
            value: Y,
            openedAt: U,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, l.jsxs)(o.Y0X, {
                transitionState: R,
                className: T.root,
                hideShadow: !0,
                'aria-label': W,
                parentComponent: 'NonUserBotProfileModal',
                children: [
                    (0, l.jsxs)(O.Z, {
                        user: n,
                        displayProfile: G,
                        themeType: I.lY.MODAL,
                        ref: (null == G ? void 0 : G.profileEffectId) != null ? F : void 0,
                        children: [
                            (0, l.jsx)(P.Z, { children: (0, l.jsx)(Z.Z, { user: n }) }),
                            (0, l.jsxs)('header', {
                                children: [
                                    (0, l.jsx)(h.Z, {
                                        user: n,
                                        displayProfile: G,
                                        themeType: I.lY.MODAL
                                    }),
                                    (0, l.jsx)('div', {
                                        className: T.headerInner,
                                        children: (0, l.jsx)(v.Z, {
                                            user: n,
                                            displayProfile: G,
                                            guildId: B,
                                            channelId: C,
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
                                        pronouns: null == G ? void 0 : G.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, l.jsx)(j.Z, {
                                            displayProfile: G,
                                            themeType: I.lY.MODAL,
                                            onClose: L
                                        })
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: A.container,
                                        children: [
                                            (0, l.jsx)(o.njP, {
                                                className: A.tabBar,
                                                type: 'top',
                                                selectedItem: I.oh.BOT_INFO,
                                                onItemSelect: E.dG4,
                                                children: (0, l.jsx)(
                                                    o.njP.Item,
                                                    {
                                                        className: A.tabBarItem,
                                                        id: I.oh.BOT_INFO,
                                                        'aria-label': S.intl.string(S.t.jGoPJS),
                                                        children: (0, l.jsx)(o.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: S.intl.string(S.t.jGoPJS)
                                                        })
                                                    },
                                                    I.oh.BOT_INFO
                                                )
                                            }),
                                            (0, l.jsxs)(o.zJl, {
                                                fade: !0,
                                                className: N.scroller,
                                                children: [
                                                    (0, l.jsx)(m.Z, {
                                                        userId: n.id,
                                                        userBio: null == G ? void 0 : G.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, l.jsx)(x.Z, {
                                                        heading: S.intl.string(S.t['A//N4u']),
                                                        children: (0, l.jsx)(b.Z, {
                                                            userId: n.id,
                                                            guildId: B,
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
                    }),
                    (null == G ? void 0 : G.profileEffectId) != null &&
                        (0, l.jsx)(u.Z, {
                            profileEffectId: null == G ? void 0 : G.profileEffectId,
                            isHovering: z
                        })
                ]
            })
        })
    });
}
