t.d(n, { Z: () => S }), t(47120);
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
    y = t(867176),
    m = t(280885),
    g = t(900927),
    I = t(678738),
    j = t(502762),
    v = t(530),
    h = t(679332),
    _ = t(544989),
    x = t(228168),
    O = t(981631),
    Z = t(388032),
    P = t(405666),
    N = t(349966),
    E = t(923243);
function S(e) {
    let { user: n, guildId: t, channelId: S, messageId: T, roleId: C, sessionId: A, transitionState: w, onClose: L, sourceAnalyticsLocations: R = [] } = e,
        M = t === O.ME ? void 0 : t,
        B = (0, f.ZP)(n.id, M),
        { analyticsLocations: U } = (0, c.ZP)([...R, s.Z.SIMPLIFIED_PROFILE_MODAL]),
        D = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: A,
            guildId: M,
            channelId: S,
            messageId: T,
            roleId: C
        }),
        W = o.createRef(),
        F = (0, l.Z)(W);
    return (0, r.jsx)(c.Gt, {
        value: U,
        children: (0, r.jsx)(u.Mt, {
            value: D,
            children: (0, r.jsxs)(i.Y0X, {
                transitionState: w,
                className: P.root,
                hideShadow: !0,
                'aria-label': Z.NW.string(Z.t['3N/J2t']),
                children: [
                    (0, r.jsxs)(j.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: x.y0.FULL_SIZE,
                        ref: W,
                        children: [
                            (0, r.jsx)(_.Z, {
                                profileType: x.y0.FULL_SIZE,
                                children: (0, r.jsx)(h.Z, { user: n })
                            }),
                            (0, r.jsxs)('header', {
                                children: [
                                    (0, r.jsx)(y.Z, {
                                        user: n,
                                        displayProfile: B,
                                        profileType: x.y0.FULL_SIZE
                                    }),
                                    (0, r.jsx)('div', {
                                        className: P.headerInner,
                                        children: (0, r.jsx)(p.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: M,
                                            channelId: S,
                                            profileType: x.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: P.body,
                                children: [
                                    (0, r.jsx)(v.Z, {
                                        user: n,
                                        profileType: x.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(M, S, n),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, r.jsx)(b.Z, {
                                            displayProfile: B,
                                            profileType: x.y0.FULL_SIZE,
                                            onClose: L
                                        })
                                    }),
                                    (0, r.jsx)(j.Z.Overlay, {
                                        className: P.overlay,
                                        children: (0, r.jsxs)('div', {
                                            className: E.container,
                                            children: [
                                                (0, r.jsx)(i.njP, {
                                                    className: E.tabBar,
                                                    type: 'top',
                                                    selectedItem: x.oh.BOT_INFO,
                                                    onItemSelect: O.dG4,
                                                    children: (0, r.jsx)(
                                                        i.njP.Item,
                                                        {
                                                            className: E.tabBarItem,
                                                            id: x.oh.BOT_INFO,
                                                            'aria-label': Z.NW.string(Z.t.jGoPJS),
                                                            children: (0, r.jsx)(i.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: Z.NW.string(Z.t.jGoPJS)
                                                            })
                                                        },
                                                        x.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, r.jsxs)(i.zJl, {
                                                    fade: !0,
                                                    className: N.scroller,
                                                    children: [
                                                        (0, r.jsx)(m.Z, {
                                                            userId: n.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, r.jsx)(I.Z, {
                                                            heading: Z.NW.string(Z.t['A//N4u']),
                                                            children: (0, r.jsx)(g.Z, {
                                                                userId: n.id,
                                                                guildId: M,
                                                                tooltipDelay: x.vB
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
                        (0, r.jsx)(a.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: F
                        })
                ]
            })
        })
    });
}
