t.d(n, {
    W: () => S,
    Z: () => E
}),
    t(47120),
    t(266796);
var r = t(200651),
    o = t(192379),
    i = t(120356),
    l = t.n(i),
    s = t(442837),
    c = t(481060),
    a = t(100527),
    d = t(906732),
    u = t(138201),
    f = t(699516),
    p = t(5192),
    m = t(785717),
    I = t(221292),
    b = t(687158),
    g = t(471879),
    v = t(502762),
    y = t(848780),
    j = t(907179),
    h = t(475413),
    x = t(228168),
    O = t(981631),
    _ = t(388032),
    Z = t(624176),
    N = t(161068);
function P(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function E(e) {
    let { user: n, guildId: t, channelId: i, messageId: l, roleId: s, transitionState: f, onViewBlockedProfileClick: p, showGuildProfile: y = !0, sourceAnalyticsLocations: j = [] } = e,
        E = t === O.ME ? void 0 : t,
        { analyticsLocations: S } = (0, d.ZP)([...j, a.Z.BLOCKED_PROFILE_MODAL]),
        T = (0, m.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: E,
            channelId: i,
            messageId: l,
            roleId: s,
            showGuildProfile: y
        }),
        C = [
            {
                icon: c.owu,
                description: _.NW.string(_.t.Kn2UDA)
            },
            {
                icon: c.t6m,
                description: _.NW.string(_.t.QxrDY2)
            }
        ],
        L = (0, b.ZP)(n.id, y ? E : void 0),
        w = o.createRef();
    return (0, r.jsx)(d.Gt, {
        value: S,
        children: (0, r.jsx)(m.Mt, {
            value: T,
            children: (0, r.jsx)(c.Y0X, {
                transitionState: f,
                className: Z.root,
                hideShadow: !0,
                'aria-label': _.NW.string(_.t['3N/J2t']),
                children: (0, r.jsx)(v.Z, {
                    user: n,
                    displayProfile: L,
                    profileType: x.y0.FULL_SIZE,
                    ref: w,
                    children: (0, r.jsxs)('div', {
                        className: Z.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: N,
                                className: Z.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: Z.body,
                                children: [
                                    (0, r.jsx)(g.Z, {
                                        user: n,
                                        guildId: E
                                    }),
                                    (0, r.jsx)(c.X6q, {
                                        variant: 'heading-xl/bold',
                                        className: Z.header,
                                        children: _.NW.string(_.t.VNJ7UF)
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: _.NW.format(_.t.LXbngo, { username: n.username })
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: _.NW.string(_.t['uBvD//'])
                                    }),
                                    (0, r.jsx)('div', {
                                        className: Z.safetyTable,
                                        children: C.map((e, n) => {
                                            let { icon: t, description: o } = e;
                                            return (0, r.jsx)(
                                                u.ZP,
                                                {
                                                    icon: t,
                                                    title: o,
                                                    titleVariant: 'text-md/medium'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, r.jsx)(h.tG, {
                                        className: Z.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: _.NW.string(_.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == p || p(),
                                                (0, I.pQ)(
                                                    P(
                                                        {
                                                            action: 'VIEW_BLOCKED_PROFILE',
                                                            analyticsLocations: S
                                                        },
                                                        T
                                                    )
                                                );
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
function S(e) {
    let { user: n, guildId: t, channelId: i, messageId: h, roleId: E, transitionState: S, onViewBlockedProfileClick: T, showGuildProfile: C = !0, sourceAnalyticsLocations: L = [] } = e,
        w = t === O.ME ? void 0 : t,
        A = (0, s.e7)([f.Z], () => f.Z.isBlocked(n.id)),
        { analyticsLocations: M } = (0, d.ZP)([...L, A ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        R = (0, m.ZB)({
            layout: A ? 'BLOCKED_PROFILE_MODAL' : 'IGNORED_PROFILE_MODAL',
            userId: n.id,
            guildId: w,
            channelId: i,
            messageId: h,
            roleId: E,
            showGuildProfile: C
        }),
        U = [
            {
                icon: c.owK,
                description: _.NW.string(_.t.kcuWvb)
            },
            {
                icon: c.owK,
                description: _.NW.string(A ? _.t.QxrDY2 : _.t.W6fjkZ)
            }
        ],
        D = (0, b.ZP)(n.id, C ? w : void 0),
        B = o.createRef();
    return (0, r.jsx)(d.Gt, {
        value: M,
        children: (0, r.jsx)(m.Mt, {
            value: R,
            children: (0, r.jsx)(c.Y0X, {
                transitionState: S,
                className: Z.root,
                hideShadow: !0,
                'aria-label': _.NW.string(_.t['3N/J2t']),
                children: (0, r.jsx)(v.Z, {
                    user: n,
                    displayProfile: D,
                    profileType: x.y0.FULL_SIZE,
                    ref: B,
                    children: (0, r.jsxs)('div', {
                        className: Z.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: N,
                                className: Z.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: l()(Z.body, Z.bodySpacing),
                                children: [
                                    (0, r.jsx)(g.i, {
                                        user: n,
                                        guildId: w
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: Z.headerContainer,
                                        children: [
                                            (0, r.jsx)(c.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: _.NW.string(_.t.b33pLC)
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: _.NW.format(A ? _.t['8F+WNz'] : _.t['/cZp5u'], { username: p.ZP.getName(w, i, n) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: Z.restrictedSafetyTable,
                                        children: U.map((e, n) => {
                                            let { icon: t, description: o } = e;
                                            return (0, r.jsx)(
                                                u.ZP,
                                                {
                                                    icon: t,
                                                    title: o,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, r.jsxs)(c.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, r.jsx)(j.Z, {
                                                size: c.PhG.MEDIUM,
                                                isBlocked: A,
                                                onClick: () => {
                                                    null == T || T(),
                                                        (0, I.pQ)(
                                                            P(
                                                                {
                                                                    action: A ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: M
                                                                },
                                                                R
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, r.jsx)(y.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    null == T || T(),
                                                        (0, I.pQ)(
                                                            P(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: M
                                                                },
                                                                R
                                                            )
                                                        );
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
