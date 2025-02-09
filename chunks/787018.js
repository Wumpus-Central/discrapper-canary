t.d(n, {
    W: () => P,
    Z: () => b
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(120356),
    s = t.n(o),
    r = t(442837),
    a = t(481060),
    d = t(100527),
    c = t(906732),
    u = t(138201),
    I = t(699516),
    f = t(5192),
    p = t(785717),
    x = t(221292),
    _ = t(687158),
    m = t(471879),
    h = t(502762),
    Z = t(848780),
    v = t(907179),
    g = t(475413),
    j = t(228168),
    E = t(981631),
    y = t(388032),
    N = t(938536),
    T = t(161068);
function b(e) {
    let { user: n, guildId: t, channelId: o, messageId: s, roleId: r, transitionState: I, onViewBlockedProfileClick: f, showGuildProfile: Z = !0, sourceAnalyticsLocations: v = [] } = e,
        b = t === E.ME ? void 0 : t,
        { analyticsLocations: P } = (0, c.ZP)([...v, d.Z.BLOCKED_PROFILE_MODAL]),
        S = (0, p.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: b,
            channelId: o,
            messageId: s,
            roleId: r,
            showGuildProfile: Z
        }),
        L = [
            {
                icon: a.owu,
                description: y.intl.string(y.t.Kn2UDA)
            },
            {
                icon: a.t6m,
                description: y.intl.string(y.t.QxrDY2)
            }
        ],
        C = (0, _.ZP)(n.id, Z ? b : void 0),
        A = l.createRef();
    return (0, i.jsx)(c.Gt, {
        value: P,
        children: (0, i.jsx)(p.Mt, {
            value: S,
            children: (0, i.jsx)(a.Y0X, {
                transitionState: I,
                className: N.root,
                hideShadow: !0,
                'aria-label': y.intl.string(y.t['3N/J2t']),
                children: (0, i.jsx)(h.Z, {
                    user: n,
                    displayProfile: C,
                    profileType: j.y0.FULL_SIZE,
                    ref: A,
                    children: (0, i.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: T,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, i.jsx)(m.Z, {
                                        user: n,
                                        guildId: b
                                    }),
                                    (0, i.jsx)(a.X6q, {
                                        variant: 'heading-xl/bold',
                                        className: N.header,
                                        children: y.intl.string(y.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/medium',
                                        children: y.intl.format(y.t.LXbngo, { username: n.username })
                                    }),
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/medium',
                                        children: y.intl.string(y.t['uBvD//'])
                                    }),
                                    (0, i.jsx)('div', {
                                        className: N.safetyTable,
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
                                        className: N.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: y.intl.string(y.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == f || f(),
                                                (0, x.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: P,
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
function P(e) {
    let { user: n, guildId: t, channelId: o, messageId: g, roleId: b, transitionState: P, onViewBlockedProfileClick: S, showGuildProfile: L = !0, sourceAnalyticsLocations: C = [] } = e,
        A = t === E.ME ? void 0 : t,
        O = (0, r.e7)([I.Z], () => I.Z.isBlocked(n.id)),
        { analyticsLocations: R } = (0, c.ZP)([...C, O ? d.Z.BLOCKED_PROFILE_MODAL : d.Z.IGNORED_PROFILE_MODAL]),
        M = (0, p.ZB)({
            layout: O ? 'BLOCKED_PROFILE_MODAL' : 'IGNORED_PROFILE_MODAL',
            userId: n.id,
            guildId: A,
            channelId: o,
            messageId: g,
            roleId: b,
            showGuildProfile: L
        }),
        B = [
            {
                icon: a.owK,
                description: y.intl.string(y.t.kcuWvb)
            },
            {
                icon: a.owK,
                description: y.intl.string(O ? y.t.QxrDY2 : y.t.W6fjkZ)
            }
        ],
        U = (0, _.ZP)(n.id, L ? A : void 0),
        F = l.createRef();
    return (0, i.jsx)(c.Gt, {
        value: R,
        children: (0, i.jsx)(p.Mt, {
            value: M,
            children: (0, i.jsx)(a.Y0X, {
                transitionState: P,
                className: N.root,
                hideShadow: !0,
                'aria-label': y.intl.string(y.t['3N/J2t']),
                children: (0, i.jsx)(h.Z, {
                    user: n,
                    displayProfile: U,
                    profileType: j.y0.FULL_SIZE,
                    ref: F,
                    children: (0, i.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: T,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: s()(N.body, N.bodySpacing),
                                children: [
                                    (0, i.jsx)(m.i, {
                                        user: n,
                                        guildId: A
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: N.headerContainer,
                                        children: [
                                            (0, i.jsx)(a.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: y.intl.string(y.t.b33pLC)
                                            }),
                                            (0, i.jsx)(a.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: y.intl.format(O ? y.t['8F+WNz'] : y.t['/cZp5u'], { username: f.ZP.getName(A, o, n) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: N.restrictedSafetyTable,
                                        children: B.map((e, n) => {
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
                                            (0, i.jsx)(v.Z, {
                                                size: a.PhG.MEDIUM,
                                                isBlocked: O,
                                                onClick: () => {
                                                    null == S || S(),
                                                        (0, x.pQ)({
                                                            action: O ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                            analyticsLocations: R,
                                                            ...M
                                                        });
                                                }
                                            }),
                                            (0, i.jsx)(Z.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    null == S || S(),
                                                        (0, x.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: R,
                                                            ...M
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
