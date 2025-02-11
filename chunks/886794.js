t.d(n, { Z: () => S }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(481060),
    s = t(727637),
    r = t(100527),
    a = t(906732),
    d = t(680295),
    c = t(5192),
    u = t(785717),
    I = t(687158),
    f = t(899007),
    p = t(648052),
    x = t(867176),
    m = t(280885),
    _ = t(900927),
    h = t(678738),
    Z = t(502762),
    v = t(530),
    g = t(679332),
    j = t(544989),
    E = t(228168),
    y = t(981631),
    N = t(388032),
    T = t(757672),
    b = t(148839),
    P = t(480234);
function S(e) {
    let { user: n, guildId: t, channelId: S, messageId: L, roleId: C, sessionId: A, transitionState: O, onClose: R, sourceAnalyticsLocations: M = [] } = e,
        U = t === y.ME ? void 0 : t,
        B = (0, I.ZP)(n.id, U),
        { analyticsLocations: F } = (0, a.ZP)([...M, r.Z.SIMPLIFIED_PROFILE_MODAL]),
        D = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: A,
            guildId: U,
            channelId: S,
            messageId: L,
            roleId: C
        }),
        w = l.createRef(),
        G = (0, s.Z)(w);
    return (0, i.jsx)(a.Gt, {
        value: F,
        children: (0, i.jsx)(u.Mt, {
            value: D,
            children: (0, i.jsxs)(o.Y0X, {
                transitionState: O,
                className: T.root,
                hideShadow: !0,
                'aria-label': N.intl.string(N.t['3N/J2t']),
                children: [
                    (0, i.jsxs)(Z.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: E.y0.FULL_SIZE,
                        ref: w,
                        children: [
                            (0, i.jsx)(j.Z, {
                                profileType: E.y0.FULL_SIZE,
                                children: (0, i.jsx)(g.Z, { user: n })
                            }),
                            (0, i.jsxs)('header', {
                                children: [
                                    (0, i.jsx)(x.Z, {
                                        user: n,
                                        displayProfile: B,
                                        profileType: E.y0.FULL_SIZE
                                    }),
                                    (0, i.jsx)('div', {
                                        className: T.headerInner,
                                        children: (0, i.jsx)(f.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: U,
                                            channelId: S,
                                            profileType: E.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: T.body,
                                children: [
                                    (0, i.jsx)(v.Z, {
                                        user: n,
                                        profileType: E.y0.FULL_SIZE,
                                        nickname: c.ZP.getName(U, S, n),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, i.jsx)(p.Z, {
                                            displayProfile: B,
                                            profileType: E.y0.FULL_SIZE,
                                            onClose: R
                                        })
                                    }),
                                    (0, i.jsx)(Z.Z.Overlay, {
                                        className: T.overlay,
                                        children: (0, i.jsxs)('div', {
                                            className: P.container,
                                            children: [
                                                (0, i.jsx)(o.njP, {
                                                    className: P.tabBar,
                                                    type: 'top',
                                                    selectedItem: E.oh.BOT_INFO,
                                                    onItemSelect: y.dG4,
                                                    children: (0, i.jsx)(
                                                        o.njP.Item,
                                                        {
                                                            className: P.tabBarItem,
                                                            id: E.oh.BOT_INFO,
                                                            'aria-label': N.intl.string(N.t.jGoPJS),
                                                            children: (0, i.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: N.intl.string(N.t.jGoPJS)
                                                            })
                                                        },
                                                        E.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, i.jsxs)(o.zJl, {
                                                    fade: !0,
                                                    className: b.scroller,
                                                    children: [
                                                        (0, i.jsx)(m.Z, {
                                                            userId: n.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, i.jsx)(h.Z, {
                                                            heading: N.intl.string(N.t['A//N4u']),
                                                            children: (0, i.jsx)(_.Z, {
                                                                userId: n.id,
                                                                guildId: U,
                                                                tooltipDelay: E.vB
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (null == B ? void 0 : B.profileEffectId) != null &&
                        (0, i.jsx)(d.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: G
                        })
                ]
            })
        })
    });
}
