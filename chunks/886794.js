t.d(n, { Z: () => S }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(481060),
    s = t(727637),
    r = t(100527),
    a = t(906732),
    c = t(680295),
    d = t(5192),
    u = t(785717),
    m = t(687158),
    x = t(899007),
    p = t(648052),
    f = t(867176),
    I = t(280885),
    h = t(900927),
    v = t(678738),
    Z = t(502762),
    _ = t(530),
    g = t(679332),
    j = t(544989),
    E = t(228168),
    N = t(981631),
    y = t(388032),
    T = t(171865),
    P = t(64406),
    b = t(893302);
function S(e) {
    let { user: n, guildId: t, channelId: S, messageId: L, roleId: C, sessionId: A, transitionState: O, onClose: M, sourceAnalyticsLocations: R = [] } = e,
        U = t === N.ME ? void 0 : t,
        B = (0, m.ZP)(n.id, U),
        { analyticsLocations: F } = (0, a.ZP)([...R, r.Z.SIMPLIFIED_PROFILE_MODAL]),
        D = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: A,
            guildId: U,
            channelId: S,
            messageId: L,
            roleId: C
        }),
        G = l.createRef(),
        w = (0, s.Z)(G);
    return (0, i.jsx)(a.Gt, {
        value: F,
        children: (0, i.jsx)(u.Mt, {
            value: D,
            children: (0, i.jsxs)(o.Y0X, {
                transitionState: O,
                className: T.root,
                hideShadow: !0,
                'aria-label': y.intl.string(y.t['3N/J2t']),
                children: [
                    (0, i.jsxs)(Z.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: E.y0.FULL_SIZE,
                        ref: G,
                        children: [
                            (0, i.jsx)(j.Z, {
                                profileType: E.y0.FULL_SIZE,
                                children: (0, i.jsx)(g.Z, { user: n })
                            }),
                            (0, i.jsxs)('header', {
                                children: [
                                    (0, i.jsx)(f.Z, {
                                        user: n,
                                        displayProfile: B,
                                        profileType: E.y0.FULL_SIZE
                                    }),
                                    (0, i.jsx)('div', {
                                        className: T.headerInner,
                                        children: (0, i.jsx)(x.Z, {
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
                                    (0, i.jsx)(_.Z, {
                                        user: n,
                                        profileType: E.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, S, n),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, i.jsx)(p.Z, {
                                            displayProfile: B,
                                            profileType: E.y0.FULL_SIZE,
                                            onClose: M
                                        })
                                    }),
                                    (0, i.jsx)(Z.Z.Overlay, {
                                        className: T.overlay,
                                        children: (0, i.jsxs)('div', {
                                            className: b.container,
                                            children: [
                                                (0, i.jsx)(o.njP, {
                                                    className: b.tabBar,
                                                    type: 'top',
                                                    selectedItem: E.oh.BOT_INFO,
                                                    onItemSelect: N.dG4,
                                                    children: (0, i.jsx)(
                                                        o.njP.Item,
                                                        {
                                                            className: b.tabBarItem,
                                                            id: E.oh.BOT_INFO,
                                                            'aria-label': y.intl.string(y.t.jGoPJS),
                                                            children: (0, i.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: y.intl.string(y.t.jGoPJS)
                                                            })
                                                        },
                                                        E.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, i.jsxs)(o.zJl, {
                                                    fade: !0,
                                                    className: P.scroller,
                                                    children: [
                                                        (0, i.jsx)(I.Z, {
                                                            userId: n.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, i.jsx)(v.Z, {
                                                            heading: y.intl.string(y.t['A//N4u']),
                                                            children: (0, i.jsx)(h.Z, {
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
                        (0, i.jsx)(c.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: w
                        })
                ]
            })
        })
    });
}
