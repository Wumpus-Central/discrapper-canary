t.d(n, { Z: () => E }), t(388685);
var i = t(200651),
    o = t(192379),
    l = t(481060),
    r = t(727637),
    s = t(100527),
    c = t(906732),
    a = t(680295),
    d = t(5192),
    u = t(785717),
    f = t(687158),
    p = t(899007),
    m = t(648052),
    h = t(867176),
    I = t(280885),
    x = t(900927),
    b = t(678738),
    _ = t(502762),
    j = t(530),
    v = t(679332),
    g = t(544989),
    Z = t(228168),
    y = t(981631),
    A = t(388032),
    T = t(405666),
    O = t(349966),
    N = t(923243);
function E(e) {
    let { user: n, guildId: t, channelId: E, messageId: C, roleId: P, sessionId: S, transitionState: M, openedAt: w, onClose: L, sourceAnalyticsLocations: R = [] } = e,
        D = t === y.ME ? void 0 : t,
        B = (0, f.ZP)(n.id, D),
        { analyticsLocations: U } = (0, c.ZP)([...R, s.Z.USER_PROFILE_MODAL]),
        G = (0, u.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: S,
            guildId: D,
            channelId: E,
            messageId: C,
            roleId: P
        }),
        k = o.createRef(),
        V = (0, r.Z)(k);
    return (0, i.jsx)(c.Gt, {
        value: U,
        children: (0, i.jsx)(u.Mt, {
            value: G,
            openedAt: w,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, i.jsxs)(l.Y0X, {
                transitionState: M,
                className: T.root,
                hideShadow: !0,
                'aria-label': A.intl.string(A.t['3N/J2t']),
                children: [
                    (0, i.jsxs)(_.Z, {
                        user: n,
                        displayProfile: B,
                        themeType: Z.lY.MODAL,
                        ref: k,
                        children: [
                            (0, i.jsx)(g.Z, { children: (0, i.jsx)(v.Z, { user: n }) }),
                            (0, i.jsxs)('header', {
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        user: n,
                                        displayProfile: B,
                                        themeType: Z.lY.MODAL
                                    }),
                                    (0, i.jsx)('div', {
                                        className: T.headerInner,
                                        children: (0, i.jsx)(p.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: D,
                                            channelId: E,
                                            themeType: Z.lY.MODAL
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: T.body,
                                children: [
                                    (0, i.jsx)(j.Z, {
                                        className: T.username,
                                        user: n,
                                        nickname: d.ZP.getName(D, E, n),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, i.jsx)(m.Z, {
                                            displayProfile: B,
                                            themeType: Z.lY.MODAL,
                                            onClose: L
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: N.container,
                                        children: [
                                            (0, i.jsx)(l.njP, {
                                                className: N.tabBar,
                                                type: 'top',
                                                selectedItem: Z.oh.BOT_INFO,
                                                onItemSelect: y.dG4,
                                                children: (0, i.jsx)(
                                                    l.njP.Item,
                                                    {
                                                        className: N.tabBarItem,
                                                        id: Z.oh.BOT_INFO,
                                                        'aria-label': A.intl.string(A.t.jGoPJS),
                                                        children: (0, i.jsx)(l.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: A.intl.string(A.t.jGoPJS)
                                                        })
                                                    },
                                                    Z.oh.BOT_INFO
                                                )
                                            }),
                                            (0, i.jsxs)(l.zJl, {
                                                fade: !0,
                                                className: O.scroller,
                                                children: [
                                                    (0, i.jsx)(I.Z, {
                                                        userId: n.id,
                                                        userBio: null == B ? void 0 : B.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, i.jsx)(b.Z, {
                                                        heading: A.intl.string(A.t['A//N4u']),
                                                        children: (0, i.jsx)(x.Z, {
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
                    (null == B ? void 0 : B.profileEffectId) != null &&
                        (0, i.jsx)(a.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: V
                        })
                ]
            })
        })
    });
}
