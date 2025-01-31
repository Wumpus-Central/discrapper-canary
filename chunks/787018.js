t.d(n, {
    W: () => b,
    Z: () => P
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(120356),
    s = t.n(o),
    r = t(442837),
    a = t(481060),
    c = t(100527),
    d = t(906732),
    u = t(138201),
    m = t(699516),
    x = t(5192),
    p = t(785717),
    f = t(221292),
    I = t(687158),
    h = t(471879),
    v = t(502762),
    Z = t(848780),
    _ = t(907179),
    g = t(475413),
    j = t(228168),
    E = t(981631),
    N = t(388032),
    y = t(409308),
    T = t(161068);
function P(e) {
    let { user: n, guildId: t, channelId: o, messageId: s, roleId: r, transitionState: m, onViewBlockedProfileClick: x, showGuildProfile: Z = !0, sourceAnalyticsLocations: _ = [] } = e,
        P = t === E.ME ? void 0 : t,
        { analyticsLocations: b } = (0, d.ZP)([..._, c.Z.BLOCKED_PROFILE_MODAL]),
        S = (0, p.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: P,
            channelId: o,
            messageId: s,
            roleId: r,
            showGuildProfile: Z
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
        C = (0, I.ZP)(n.id, Z ? P : void 0),
        A = l.createRef();
    return (0, i.jsx)(d.Gt, {
        value: b,
        children: (0, i.jsx)(p.Mt, {
            value: S,
            children: (0, i.jsx)(a.Y0X, {
                transitionState: m,
                className: y.root,
                hideShadow: !0,
                'aria-label': N.intl.string(N.t['3N/J2t']),
                children: (0, i.jsx)(v.Z, {
                    user: n,
                    displayProfile: C,
                    profileType: j.y0.FULL_SIZE,
                    ref: A,
                    children: (0, i.jsxs)('div', {
                        className: y.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: T,
                                className: y.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: y.body,
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        user: n,
                                        guildId: P
                                    }),
                                    (0, i.jsx)(a.X6q, {
                                        variant: 'heading-xl/bold',
                                        className: y.header,
                                        children: N.intl.string(N.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/medium',
                                        children: N.intl.format(N.t.LXbngo, { username: n.username })
                                    }),
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/medium',
                                        children: N.intl.string(N.t['uBvD//'])
                                    }),
                                    (0, i.jsx)('div', {
                                        className: y.safetyTable,
                                        children: L.map((e, n) => {
                                            let { icon: t, description: l } = e;
                                            return (0, i.jsx)(
                                                u.ZP,
                                                {
                                                    icon: t,
                                                    title: l,
                                                    titleVariant: 'text-md/medium'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, i.jsx)(g.tG, {
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
    let { user: n, guildId: t, channelId: o, messageId: g, roleId: P, transitionState: b, onViewBlockedProfileClick: S, showGuildProfile: L = !0, sourceAnalyticsLocations: C = [] } = e,
        A = t === E.ME ? void 0 : t,
        O = (0, r.e7)([m.Z], () => m.Z.isBlocked(n.id)),
        { analyticsLocations: M } = (0, d.ZP)([...C, O ? c.Z.BLOCKED_PROFILE_MODAL : c.Z.IGNORED_PROFILE_MODAL]),
        R = (0, p.ZB)({
            layout: O ? 'BLOCKED_PROFILE_MODAL' : 'IGNORED_PROFILE_MODAL',
            userId: n.id,
            guildId: A,
            channelId: o,
            messageId: g,
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
                description: N.intl.string(O ? N.t.QxrDY2 : N.t.W6fjkZ)
            }
        ],
        B = (0, I.ZP)(n.id, L ? A : void 0),
        F = l.createRef();
    return (0, i.jsx)(d.Gt, {
        value: M,
        children: (0, i.jsx)(p.Mt, {
            value: R,
            children: (0, i.jsx)(a.Y0X, {
                transitionState: b,
                className: y.root,
                hideShadow: !0,
                'aria-label': N.intl.string(N.t['3N/J2t']),
                children: (0, i.jsx)(v.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: j.y0.FULL_SIZE,
                    ref: F,
                    children: (0, i.jsxs)('div', {
                        className: y.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: T,
                                className: y.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: s()(y.body, y.bodySpacing),
                                children: [
                                    (0, i.jsx)(h.i, {
                                        user: n,
                                        guildId: A
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: y.headerContainer,
                                        children: [
                                            (0, i.jsx)(a.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: N.intl.string(N.t.b33pLC)
                                            }),
                                            (0, i.jsx)(a.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: N.intl.format(O ? N.t['8F+WNz'] : N.t['/cZp5u'], { username: x.ZP.getName(A, o, n) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: y.restrictedSafetyTable,
                                        children: U.map((e, n) => {
                                            let { icon: t, description: l } = e;
                                            return (0, i.jsx)(
                                                u.ZP,
                                                {
                                                    icon: t,
                                                    title: l,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, i.jsxs)(a.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, i.jsx)(_.Z, {
                                                size: a.PhG.MEDIUM,
                                                isBlocked: O,
                                                onClick: () => {
                                                    null == S || S(),
                                                        (0, f.pQ)({
                                                            action: O ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                            analyticsLocations: M,
                                                            ...R
                                                        });
                                                }
                                            }),
                                            (0, i.jsx)(Z.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    null == S || S(),
                                                        (0, f.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: M,
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
