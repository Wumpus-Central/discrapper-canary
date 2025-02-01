i.d(n, { Z: () => S }), i(47120);
var t = i(200651),
    l = i(192379),
    o = i(481060),
    s = i(727637),
    r = i(100527),
    a = i(906732),
    d = i(680295),
    c = i(5192),
    u = i(785717),
    m = i(687158),
    x = i(899007),
    p = i(648052),
    f = i(867176),
    I = i(280885),
    h = i(900927),
    v = i(678738),
    Z = i(502762),
    g = i(530),
    _ = i(679332),
    j = i(544989),
    E = i(228168),
    N = i(981631),
    y = i(388032),
    T = i(171865),
    P = i(64406),
    b = i(893302);
function S(e) {
    let { user: n, guildId: i, channelId: S, messageId: L, roleId: C, sessionId: A, transitionState: O, onClose: M, sourceAnalyticsLocations: R = [] } = e,
        U = i === N.ME ? void 0 : i,
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
    return (0, t.jsx)(a.Gt, {
        value: F,
        children: (0, t.jsx)(u.Mt, {
            value: D,
            children: (0, t.jsxs)(o.Y0X, {
                transitionState: O,
                className: T.root,
                hideShadow: !0,
                'aria-label': y.intl.string(y.t['3N/J2t']),
                children: [
                    (0, t.jsxs)(Z.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: E.y0.FULL_SIZE,
                        ref: G,
                        children: [
                            (0, t.jsx)(j.Z, {
                                profileType: E.y0.FULL_SIZE,
                                children: (0, t.jsx)(_.Z, { user: n })
                            }),
                            (0, t.jsxs)('header', {
                                children: [
                                    (0, t.jsx)(f.Z, {
                                        user: n,
                                        displayProfile: B,
                                        profileType: E.y0.FULL_SIZE
                                    }),
                                    (0, t.jsx)('div', {
                                        className: T.headerInner,
                                        children: (0, t.jsx)(x.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: U,
                                            channelId: S,
                                            profileType: E.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('div', {
                                className: T.body,
                                children: [
                                    (0, t.jsx)(g.Z, {
                                        user: n,
                                        profileType: E.y0.FULL_SIZE,
                                        nickname: c.ZP.getName(U, S, n),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, t.jsx)(p.Z, {
                                            displayProfile: B,
                                            profileType: E.y0.FULL_SIZE,
                                            onClose: M
                                        })
                                    }),
                                    (0, t.jsx)(Z.Z.Overlay, {
                                        className: T.overlay,
                                        children: (0, t.jsxs)('div', {
                                            className: b.container,
                                            children: [
                                                (0, t.jsx)(o.njP, {
                                                    className: b.tabBar,
                                                    type: 'top',
                                                    selectedItem: E.oh.BOT_INFO,
                                                    onItemSelect: N.dG4,
                                                    children: (0, t.jsx)(
                                                        o.njP.Item,
                                                        {
                                                            className: b.tabBarItem,
                                                            id: E.oh.BOT_INFO,
                                                            'aria-label': y.intl.string(y.t.jGoPJS),
                                                            children: (0, t.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: y.intl.string(y.t.jGoPJS)
                                                            })
                                                        },
                                                        E.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, t.jsxs)(o.zJl, {
                                                    fade: !0,
                                                    className: P.scroller,
                                                    children: [
                                                        (0, t.jsx)(I.Z, {
                                                            userId: n.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, t.jsx)(v.Z, {
                                                            heading: y.intl.string(y.t['A//N4u']),
                                                            children: (0, t.jsx)(h.Z, {
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
                        (0, t.jsx)(d.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: w
                        })
                ]
            })
        })
    });
}
