t.d(n, { Z: () => N }), t(388685);
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
    b = t(900927),
    h = t(678738),
    m = t(502762),
    x = t(530),
    O = t(679332),
    Z = t(544989),
    y = t(228168),
    P = t(981631),
    I = t(388032),
    E = t(405666),
    T = t(349966),
    S = t(923243);
function N(e) {
    let { user: n, guildId: t, channelId: N, messageId: A, roleId: C, sessionId: _, transitionState: w, openedAt: M, onClose: R, sourceAnalyticsLocations: U = [] } = e,
        D = t === P.ME ? void 0 : t,
        L = (0, f.ZP)(n.id, D),
        { analyticsLocations: k } = (0, a.ZP)([...U, s.Z.USER_PROFILE_MODAL]),
        G = (0, d.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: _,
            guildId: D,
            channelId: N,
            messageId: A,
            roleId: C
        }),
        B = r.useRef(null),
        V = (0, o.Z)(B);
    return (0, l.jsx)(a.Gt, {
        value: k,
        children: (0, l.jsx)(d.Mt, {
            value: G,
            openedAt: M,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, l.jsxs)(i.Y0X, {
                transitionState: w,
                className: E.root,
                hideShadow: !0,
                'aria-label': I.intl.string(I.t['3N/J2t']),
                children: [
                    (0, l.jsxs)(m.Z, {
                        user: n,
                        displayProfile: L,
                        themeType: y.lY.MODAL,
                        ref: B,
                        children: [
                            (0, l.jsx)(Z.Z, { children: (0, l.jsx)(O.Z, { user: n }) }),
                            (0, l.jsxs)('header', {
                                children: [
                                    (0, l.jsx)(v.Z, {
                                        user: n,
                                        displayProfile: L,
                                        themeType: y.lY.MODAL
                                    }),
                                    (0, l.jsx)('div', {
                                        className: E.headerInner,
                                        children: (0, l.jsx)(p.Z, {
                                            user: n,
                                            displayProfile: L,
                                            guildId: D,
                                            channelId: N,
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
                                        nickname: u.ZP.getName(D, N, n),
                                        pronouns: null == L ? void 0 : L.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, l.jsx)(g.Z, {
                                            displayProfile: L,
                                            themeType: y.lY.MODAL,
                                            onClose: R
                                        })
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: S.container,
                                        children: [
                                            (0, l.jsx)(i.njP, {
                                                className: S.tabBar,
                                                type: 'top',
                                                selectedItem: y.oh.BOT_INFO,
                                                onItemSelect: P.dG4,
                                                children: (0, l.jsx)(
                                                    i.njP.Item,
                                                    {
                                                        className: S.tabBarItem,
                                                        id: y.oh.BOT_INFO,
                                                        'aria-label': I.intl.string(I.t.jGoPJS),
                                                        children: (0, l.jsx)(i.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: I.intl.string(I.t.jGoPJS)
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
                                                        userBio: null == L ? void 0 : L.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, l.jsx)(h.Z, {
                                                        heading: I.intl.string(I.t['A//N4u']),
                                                        children: (0, l.jsx)(b.Z, {
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
                    (null == L ? void 0 : L.profileEffectId) != null &&
                        (0, l.jsx)(c.Z, {
                            profileEffectId: null == L ? void 0 : L.profileEffectId,
                            isHovering: V
                        })
                ]
            })
        })
    });
}
