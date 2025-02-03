i.d(n, {
    W: () => b,
    Z: () => P
}),
    i(47120);
var t = i(200651),
    l = i(192379),
    o = i(120356),
    s = i.n(o),
    r = i(442837),
    a = i(481060),
    d = i(100527),
    c = i(906732),
    u = i(138201),
    m = i(699516),
    x = i(5192),
    p = i(785717),
    f = i(221292),
    I = i(687158),
    h = i(471879),
    v = i(502762),
    g = i(848780),
    Z = i(907179),
    _ = i(475413),
    j = i(228168),
    E = i(981631),
    N = i(388032),
    y = i(409308),
    T = i(161068);
function P(e) {
    let { user: n, guildId: i, channelId: o, messageId: s, roleId: r, transitionState: m, onViewBlockedProfileClick: x, showGuildProfile: g = !0, sourceAnalyticsLocations: Z = [] } = e,
        P = i === E.ME ? void 0 : i,
        { analyticsLocations: b } = (0, c.ZP)([...Z, d.Z.BLOCKED_PROFILE_MODAL]),
        S = (0, p.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: P,
            channelId: o,
            messageId: s,
            roleId: r,
            showGuildProfile: g
        }),
        L = [
            {
                icon: a.owu,
                description: N.intl.string(N.t.Kn2UDA)
            },
            {
                icon: a.t6m,
                description: N.intl.string(N.t.QxrDY2)
            }
        ],
        C = (0, I.ZP)(n.id, g ? P : void 0),
        A = l.createRef();
    return (0, t.jsx)(c.Gt, {
        value: b,
        children: (0, t.jsx)(p.Mt, {
            value: S,
            children: (0, t.jsx)(a.Y0X, {
                transitionState: m,
                className: y.root,
                hideShadow: !0,
                'aria-label': N.intl.string(N.t['3N/J2t']),
                children: (0, t.jsx)(v.Z, {
                    user: n,
                    displayProfile: C,
                    profileType: j.y0.FULL_SIZE,
                    ref: A,
                    children: (0, t.jsxs)('div', {
                        className: y.container,
                        children: [
                            (0, t.jsx)('img', {
                                alt: '',
                                src: T,
                                className: y.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, t.jsxs)('div', {
                                className: y.body,
                                children: [
                                    (0, t.jsx)(h.Z, {
                                        user: n,
                                        guildId: P
                                    }),
                                    (0, t.jsx)(a.X6q, {
                                        variant: 'heading-xl/bold',
                                        className: y.header,
                                        children: N.intl.string(N.t.VNJ7UF)
                                    }),
                                    (0, t.jsx)(a.Text, {
                                        variant: 'text-md/medium',
                                        children: N.intl.format(N.t.LXbngo, { username: n.username })
                                    }),
                                    (0, t.jsx)(a.Text, {
                                        variant: 'text-md/medium',
                                        children: N.intl.string(N.t['uBvD//'])
                                    }),
                                    (0, t.jsx)('div', {
                                        className: y.safetyTable,
                                        children: L.map((e, n) => {
                                            let { icon: i, description: l } = e;
                                            return (0, t.jsx)(
                                                u.ZP,
                                                {
                                                    icon: i,
                                                    title: l,
                                                    titleVariant: 'text-md/medium'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, t.jsx)(_.tG, {
                                        className: y.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: N.intl.string(N.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == x || x(),
                                                (0, f.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: b,
                                                    ...S
                                                });
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
function b(e) {
    let { user: n, guildId: i, channelId: o, messageId: _, roleId: P, transitionState: b, onViewBlockedProfileClick: S, showGuildProfile: L = !0, sourceAnalyticsLocations: C = [] } = e,
        A = i === E.ME ? void 0 : i,
        M = (0, r.e7)([m.Z], () => m.Z.isBlocked(n.id)),
        { analyticsLocations: O } = (0, c.ZP)([...C, M ? d.Z.BLOCKED_PROFILE_MODAL : d.Z.IGNORED_PROFILE_MODAL]),
        R = (0, p.ZB)({
            layout: M ? 'BLOCKED_PROFILE_MODAL' : 'IGNORED_PROFILE_MODAL',
            userId: n.id,
            guildId: A,
            channelId: o,
            messageId: _,
            roleId: P,
            showGuildProfile: L
        }),
        U = [
            {
                icon: a.owK,
                description: N.intl.string(N.t.kcuWvb)
            },
            {
                icon: a.owK,
                description: N.intl.string(M ? N.t.QxrDY2 : N.t.W6fjkZ)
            }
        ],
        B = (0, I.ZP)(n.id, L ? A : void 0),
        F = l.createRef();
    return (0, t.jsx)(c.Gt, {
        value: O,
        children: (0, t.jsx)(p.Mt, {
            value: R,
            children: (0, t.jsx)(a.Y0X, {
                transitionState: b,
                className: y.root,
                hideShadow: !0,
                'aria-label': N.intl.string(N.t['3N/J2t']),
                children: (0, t.jsx)(v.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: j.y0.FULL_SIZE,
                    ref: F,
                    children: (0, t.jsxs)('div', {
                        className: y.container,
                        children: [
                            (0, t.jsx)('img', {
                                alt: '',
                                src: T,
                                className: y.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, t.jsxs)('div', {
                                className: s()(y.body, y.bodySpacing),
                                children: [
                                    (0, t.jsx)(h.i, {
                                        user: n,
                                        guildId: A
                                    }),
                                    (0, t.jsxs)('div', {
                                        className: y.headerContainer,
                                        children: [
                                            (0, t.jsx)(a.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: N.intl.string(N.t.b33pLC)
                                            }),
                                            (0, t.jsx)(a.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: N.intl.format(M ? N.t['8F+WNz'] : N.t['/cZp5u'], { username: x.ZP.getName(A, o, n) })
                                            })
                                        ]
                                    }),
                                    (0, t.jsx)('div', {
                                        className: y.restrictedSafetyTable,
                                        children: U.map((e, n) => {
                                            let { icon: i, description: l } = e;
                                            return (0, t.jsx)(
                                                u.ZP,
                                                {
                                                    icon: i,
                                                    title: l,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, t.jsxs)(a.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, t.jsx)(Z.Z, {
                                                size: a.PhG.MEDIUM,
                                                isBlocked: M,
                                                onClick: () => {
                                                    null == S || S(),
                                                        (0, f.pQ)({
                                                            action: M ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                            analyticsLocations: O,
                                                            ...R
                                                        });
                                                }
                                            }),
                                            (0, t.jsx)(g.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    null == S || S(),
                                                        (0, f.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: O,
                                                            ...R
                                                        });
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
