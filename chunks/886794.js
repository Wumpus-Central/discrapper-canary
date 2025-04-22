t.d(n, { Z: () => A }), t(388685);
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
    m = t(648052),
    b = t(867176),
    h = t(280885),
    g = t(900927),
    j = t(678738),
    v = t(502762),
    x = t(530),
    y = t(679332),
    I = t(544989),
    O = t(228168),
    Z = t(981631),
    _ = t(388032),
    P = t(405666),
    E = t(349966),
    N = t(923243);
function A(e) {
    let { user: n, guildId: t, channelId: A, messageId: T, roleId: C, sessionId: S, transitionState: w, openedAt: M, onClose: R, sourceAnalyticsLocations: L = [] } = e,
        D = t === Z.ME ? void 0 : t,
        B = (0, f.ZP)(n.id, D),
        { analyticsLocations: G } = (0, c.ZP)([...L, s.Z.USER_PROFILE_MODAL]),
        U = (0, u.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: S,
            guildId: D,
            channelId: A,
            messageId: T,
            roleId: C
        }),
        k = o.createRef(),
        V = (0, l.Z)(k);
    return (0, r.jsx)(c.Gt, {
        value: G,
        children: (0, r.jsx)(u.Mt, {
            value: U,
            openedAt: M,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsxs)(i.Y0X, {
                transitionState: w,
                className: P.root,
                hideShadow: !0,
                'aria-label': _.intl.string(_.t['3N/J2t']),
                children: [
                    (0, r.jsxs)(v.Z, {
                        user: n,
                        displayProfile: B,
                        themeType: O.lY.MODAL,
                        ref: k,
                        children: [
                            (0, r.jsx)(I.Z, { children: (0, r.jsx)(y.Z, { user: n }) }),
                            (0, r.jsxs)('header', {
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        user: n,
                                        displayProfile: B,
                                        themeType: O.lY.MODAL
                                    }),
                                    (0, r.jsx)('div', {
                                        className: P.headerInner,
                                        children: (0, r.jsx)(p.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: D,
                                            channelId: A,
                                            themeType: O.lY.MODAL
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: P.body,
                                children: [
                                    (0, r.jsx)(x.Z, {
                                        className: P.username,
                                        user: n,
                                        nickname: d.ZP.getName(D, A, n),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, r.jsx)(m.Z, {
                                            displayProfile: B,
                                            themeType: O.lY.MODAL,
                                            onClose: R
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: N.container,
                                        children: [
                                            (0, r.jsx)(i.njP, {
                                                className: N.tabBar,
                                                type: 'top',
                                                selectedItem: O.oh.BOT_INFO,
                                                onItemSelect: Z.dG4,
                                                children: (0, r.jsx)(
                                                    i.njP.Item,
                                                    {
                                                        className: N.tabBarItem,
                                                        id: O.oh.BOT_INFO,
                                                        'aria-label': _.intl.string(_.t.jGoPJS),
                                                        children: (0, r.jsx)(i.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: _.intl.string(_.t.jGoPJS)
                                                        })
                                                    },
                                                    O.oh.BOT_INFO
                                                )
                                            }),
                                            (0, r.jsxs)(i.zJl, {
                                                fade: !0,
                                                className: E.scroller,
                                                children: [
                                                    (0, r.jsx)(h.Z, {
                                                        userId: n.id,
                                                        userBio: null == B ? void 0 : B.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, r.jsx)(j.Z, {
                                                        heading: _.intl.string(_.t['A//N4u']),
                                                        children: (0, r.jsx)(g.Z, {
                                                            userId: n.id,
                                                            guildId: D,
                                                            tooltipDelay: O.vB
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
                        (0, r.jsx)(a.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: V
                        })
                ]
            })
        })
    });
}
