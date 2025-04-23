t.d(n, { Z: () => P }), t(388685);
var o = t(200651),
    c = t(192379),
    r = t(481060),
    a = t(727637),
    i = t(100527),
    d = t(906732),
    s = t(680295),
    l = t(5192),
    u = t(785717),
    f = t(687158),
    _ = t(899007),
    m = t(648052),
    x = t(867176),
    h = t(280885),
    b = t(900927),
    p = t(678738),
    I = t(502762),
    j = t(530),
    y = t(679332),
    A = t(544989),
    v = t(228168),
    g = t(981631),
    O = t(388032),
    N = t(405666),
    Z = t(349966),
    C = t(923243);
function P(e) {
    let { user: n, guildId: t, channelId: P, messageId: T, roleId: w, sessionId: L, transitionState: S, openedAt: M, onClose: B, sourceAnalyticsLocations: E = [] } = e,
        D = t === g.ME ? void 0 : t,
        k = (0, f.ZP)(n.id, D),
        { analyticsLocations: R } = (0, d.ZP)([...E, i.Z.USER_PROFILE_MODAL]),
        G = (0, u.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: L,
            guildId: D,
            channelId: P,
            messageId: T,
            roleId: w
        }),
        F = c.createRef(),
        V = (0, a.Z)(F);
    return (0, o.jsx)(d.Gt, {
        value: R,
        children: (0, o.jsx)(u.Mt, {
            value: G,
            openedAt: M,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, o.jsxs)(r.Y0X, {
                transitionState: S,
                className: N.root,
                hideShadow: !0,
                'aria-label': O.intl.string(O.t['3N/J2t']),
                children: [
                    (0, o.jsxs)(I.Z, {
                        user: n,
                        displayProfile: k,
                        themeType: v.lY.MODAL,
                        ref: F,
                        children: [
                            (0, o.jsx)(A.Z, { children: (0, o.jsx)(y.Z, { user: n }) }),
                            (0, o.jsxs)('header', {
                                children: [
                                    (0, o.jsx)(x.Z, {
                                        user: n,
                                        displayProfile: k,
                                        themeType: v.lY.MODAL
                                    }),
                                    (0, o.jsx)('div', {
                                        className: N.headerInner,
                                        children: (0, o.jsx)(_.Z, {
                                            user: n,
                                            displayProfile: k,
                                            guildId: D,
                                            channelId: P,
                                            themeType: v.lY.MODAL
                                        })
                                    })
                                ]
                            }),
                            (0, o.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, o.jsx)(j.Z, {
                                        className: N.username,
                                        user: n,
                                        nickname: l.ZP.getName(D, P, n),
                                        pronouns: null == k ? void 0 : k.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, o.jsx)(m.Z, {
                                            displayProfile: k,
                                            themeType: v.lY.MODAL,
                                            onClose: B
                                        })
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: C.container,
                                        children: [
                                            (0, o.jsx)(r.njP, {
                                                className: C.tabBar,
                                                type: 'top',
                                                selectedItem: v.oh.BOT_INFO,
                                                onItemSelect: g.dG4,
                                                children: (0, o.jsx)(
                                                    r.njP.Item,
                                                    {
                                                        className: C.tabBarItem,
                                                        id: v.oh.BOT_INFO,
                                                        'aria-label': O.intl.string(O.t.jGoPJS),
                                                        children: (0, o.jsx)(r.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: O.intl.string(O.t.jGoPJS)
                                                        })
                                                    },
                                                    v.oh.BOT_INFO
                                                )
                                            }),
                                            (0, o.jsxs)(r.zJl, {
                                                fade: !0,
                                                className: Z.scroller,
                                                children: [
                                                    (0, o.jsx)(h.Z, {
                                                        userId: n.id,
                                                        userBio: null == k ? void 0 : k.bio,
                                                        setLineClamp: !1
                                                    }),
                                                    (0, o.jsx)(p.Z, {
                                                        heading: O.intl.string(O.t['A//N4u']),
                                                        children: (0, o.jsx)(b.Z, {
                                                            userId: n.id,
                                                            guildId: D,
                                                            tooltipDelay: v.vB
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
                    (null == k ? void 0 : k.profileEffectId) != null &&
                        (0, o.jsx)(s.Z, {
                            profileEffectId: null == k ? void 0 : k.profileEffectId,
                            isHovering: V
                        })
                ]
            })
        })
    });
}
