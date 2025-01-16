t.d(n, {
    W: function () {
        return T;
    },
    Z: function () {
        return y;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(120356),
    r = t.n(o),
    s = t(442837),
    c = t(481060),
    a = t(100527),
    d = t(906732),
    u = t(138201),
    f = t(699516),
    m = t(5192),
    x = t(785717),
    I = t(221292),
    p = t(687158),
    h = t(471879),
    v = t(502762),
    Z = t(848780),
    g = t(907179),
    j = t(475413),
    _ = t(228168),
    b = t(981631),
    E = t(388032),
    N = t(409308),
    S = t(161068);
function y(e) {
    let { user: n, guildId: t, channelId: o, messageId: r, roleId: s, transitionState: f, onViewBlockedProfileClick: m, showGuildProfile: Z = !0, sourceAnalyticsLocations: g = [] } = e,
        y = t === b.ME ? void 0 : t,
        { analyticsLocations: T } = (0, d.ZP)([...g, a.Z.BLOCKED_PROFILE_MODAL]),
        P = (0, x.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: y,
            channelId: o,
            messageId: r,
            roleId: s,
            showGuildProfile: Z
        }),
        C = [
            {
                icon: c.BellSlashIcon,
                description: E.intl.string(E.t.Kn2UDA)
            },
            {
                icon: c.DenyIcon,
                description: E.intl.string(E.t.QxrDY2)
            }
        ],
        A = (0, p.ZP)(n.id, Z ? y : void 0),
        L = l.createRef();
    return (0, i.jsx)(d.Gt, {
        value: T,
        children: (0, i.jsx)(x.Mt, {
            value: P,
            children: (0, i.jsx)(c.ModalRoot, {
                transitionState: f,
                className: N.root,
                hideShadow: !0,
                'aria-label': E.intl.string(E.t['3N/J2t']),
                children: (0, i.jsx)(v.Z, {
                    user: n,
                    displayProfile: A,
                    profileType: _.y0.FULL_SIZE,
                    ref: L,
                    children: (0, i.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: S,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        user: n,
                                        guildId: y
                                    }),
                                    (0, i.jsx)(c.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: N.header,
                                        children: E.intl.string(E.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: E.intl.format(E.t.LXbngo, { username: n.username })
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: E.intl.string(E.t['uBvD//'])
                                    }),
                                    (0, i.jsx)('div', {
                                        className: N.safetyTable,
                                        children: C.map((e, n) => {
                                            let { icon: t, description: l } = e;
                                            return (0, i.jsx)(
                                                u.Z,
                                                {
                                                    icon: t,
                                                    title: l,
                                                    titleVariant: 'text-md/medium'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, i.jsx)(j.tG, {
                                        className: N.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: E.intl.string(E.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == m || m(),
                                                (0, I.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: T,
                                                    ...P
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
function T(e) {
    let { user: n, guildId: t, channelId: o, messageId: j, roleId: y, transitionState: T, onViewBlockedProfileClick: P, showGuildProfile: C = !0, sourceAnalyticsLocations: A = [] } = e,
        L = t === b.ME ? void 0 : t,
        M = (0, s.e7)([f.Z], () => f.Z.isBlocked(n.id)),
        { analyticsLocations: R } = (0, d.ZP)([...A, M ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        O = (0, x.ZB)({
            layout: M ? 'BLOCKED_PROFILE_MODAL' : 'IGNORED_PROFILE_MODAL',
            userId: n.id,
            guildId: L,
            channelId: o,
            messageId: j,
            roleId: y,
            showGuildProfile: C
        }),
        U = [
            {
                icon: c.CircleCheckIcon,
                description: E.intl.string(E.t.kcuWvb)
            },
            {
                icon: c.CircleCheckIcon,
                description: E.intl.string(M ? E.t.QxrDY2 : E.t.W6fjkZ)
            }
        ],
        B = (0, p.ZP)(n.id, C ? L : void 0),
        D = l.createRef();
    return (0, i.jsx)(d.Gt, {
        value: R,
        children: (0, i.jsx)(x.Mt, {
            value: O,
            children: (0, i.jsx)(c.ModalRoot, {
                transitionState: T,
                className: N.root,
                hideShadow: !0,
                'aria-label': E.intl.string(E.t['3N/J2t']),
                children: (0, i.jsx)(v.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: _.y0.FULL_SIZE,
                    ref: D,
                    children: (0, i.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: S,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: r()(N.body, N.bodySpacing),
                                children: [
                                    (0, i.jsx)(h.i, {
                                        user: n,
                                        guildId: L
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: N.headerContainer,
                                        children: [
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: E.intl.string(E.t.b33pLC)
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: E.intl.format(M ? E.t['8F+WNz'] : E.t['/cZp5u'], { username: m.ZP.getName(L, o, n) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: N.restrictedSafetyTable,
                                        children: U.map((e, n) => {
                                            let { icon: t, description: l } = e;
                                            return (0, i.jsx)(
                                                u.Z,
                                                {
                                                    icon: t,
                                                    title: l,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, i.jsxs)(c.Stack, {
                                        align: 'center',
                                        children: [
                                            (0, i.jsx)(g.Z, {
                                                size: c.ButtonSizes.MEDIUM,
                                                isBlocked: M,
                                                onClick: () => {
                                                    null == P || P(),
                                                        (0, I.pQ)({
                                                            action: M ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                            analyticsLocations: R,
                                                            ...O
                                                        });
                                                }
                                            }),
                                            (0, i.jsx)(Z.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    null == P || P(),
                                                        (0, I.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: R,
                                                            ...O
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
