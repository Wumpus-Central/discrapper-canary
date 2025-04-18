t.d(n, { Z: () => S }), t(388685);
var r = t(200651),
    o = t(192379),
    i = t(481060),
    l = t(727637),
    s = t(100527),
    c = t(906732),
    a = t(680295),
    d = t(5192),
    u = t(785717),
    f = t(687158),
    p = t(899007),
    b = t(648052),
    m = t(867176),
    h = t(280885),
    I = t(900927),
    g = t(678738),
    y = t(502762),
    j = t(530),
    v = t(679332),
    x = t(544989),
    _ = t(228168),
    Z = t(981631),
    O = t(388032),
    N = t(405666),
    P = t(349966),
    E = t(923243);
function S(e) {
    let { user: n, guildId: t, channelId: S, messageId: T, roleId: A, sessionId: C, transitionState: L, openedAt: w, onClose: R, sourceAnalyticsLocations: M = [] } = e,
        U = t === Z.ME ? void 0 : t,
        D = (0, f.ZP)(n.id, U),
        { analyticsLocations: B } = (0, c.ZP)([...M, s.Z.SIMPLIFIED_PROFILE_MODAL]),
        W = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: C,
            guildId: U,
            channelId: S,
            messageId: T,
            roleId: A
        }),
        G = o.createRef(),
        F = (0, l.Z)(G);
    return (0, r.jsx)(c.Gt, {
        value: B,
        children: (0, r.jsx)(u.Mt, {
            value: W,
            openedAt: w,
            fetchStartedAt: null == D ? void 0 : D.fetchStartedAt,
            fetchEndedAt: null == D ? void 0 : D.fetchEndedAt,
            isLoaded: null == D ? void 0 : D.isLoaded,
            children: (0, r.jsxs)(i.Y0X, {
                transitionState: L,
                className: N.root,
                hideShadow: !0,
                'aria-label': O.NW.string(O.t['3N/J2t']),
                children: [
                    (0, r.jsxs)(y.Z, {
                        user: n,
                        displayProfile: D,
                        profileType: _.y0.FULL_SIZE,
                        ref: G,
                        children: [
                            (0, r.jsx)(x.Z, {
                                profileType: _.y0.FULL_SIZE,
                                children: (0, r.jsx)(v.Z, { user: n })
                            }),
                            (0, r.jsxs)('header', {
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        user: n,
                                        displayProfile: D,
                                        profileType: _.y0.FULL_SIZE
                                    }),
                                    (0, r.jsx)('div', {
                                        className: N.headerInner,
                                        children: (0, r.jsx)(p.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: U,
                                            channelId: S,
                                            profileType: _.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, r.jsx)(j.Z, {
                                        className: N.username,
                                        user: n,
                                        profileType: _.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, S, n),
                                        pronouns: null == D ? void 0 : D.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, r.jsx)(b.Z, {
                                            displayProfile: D,
                                            profileType: _.y0.FULL_SIZE,
                                            onClose: R
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: E.container,
                                        children: [
                                            (0, r.jsx)(i.njP, {
                                                className: E.tabBar,
                                                type: 'top',
                                                selectedItem: _.oh.BOT_INFO,
                                                onItemSelect: Z.dG4,
                                                children: (0, r.jsx)(
                                                    i.njP.Item,
                                                    {
                                                        className: E.tabBarItem,
                                                        id: _.oh.BOT_INFO,
                                                        'aria-label': O.NW.string(O.t.jGoPJS),
                                                        children: (0, r.jsx)(i.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: O.NW.string(O.t.jGoPJS)
                                                        })
                                                    },
                                                    _.oh.BOT_INFO
                                                )
                                            }),
                                            (0, r.jsxs)(i.zJl, {
                                                fade: !0,
                                                className: P.scroller,
                                                children: [
                                                    (0, r.jsx)(h.Z, {
                                                        userId: n.id,
                                                        userBio: null == D ? void 0 : D.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, r.jsx)(g.Z, {
                                                        heading: O.NW.string(O.t['A//N4u']),
                                                        children: (0, r.jsx)(I.Z, {
                                                            userId: n.id,
                                                            guildId: U,
                                                            tooltipDelay: _.vB
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
                        (0, r.jsx)(a.Z, {
                            profileEffectId: null == D ? void 0 : D.profileEffectId,
                            isHovering: F
                        })
                ]
            })
        })
    });
}
