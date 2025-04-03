t.d(n, { W: () => N }), t(47120), t(266796);
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
    b = t(785717),
    y = t(221292),
    m = t(687158),
    g = t(471879),
    I = t(502762),
    j = t(848780),
    v = t(907179);
t(475413);
var h = t(228168),
    _ = t(981631),
    x = t(388032),
    O = t(17291),
    Z = t(161068);
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
function N(e) {
    let { user: n, guildId: t, channelId: i, messageId: N, roleId: E, transitionState: S, onViewBlockedProfileClick: T, showGuildProfile: C = !0, sourceAnalyticsLocations: A = [] } = e,
        w = t === _.ME ? void 0 : t,
        L = (0, s.e7)([f.Z], () => f.Z.isBlocked(n.id)),
        { analyticsLocations: R } = (0, d.ZP)([...A, L ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        M = (0, b.ZB)({
            layout: L ? 'BLOCKED_PROFILE_MODAL' : 'IGNORED_PROFILE_MODAL',
            userId: n.id,
            guildId: w,
            channelId: i,
            messageId: N,
            roleId: E,
            showGuildProfile: C
        }),
        B = [
            {
                icon: c.owK,
                description: x.NW.string(x.t.kcuWvb)
            },
            {
                icon: c.owK,
                description: x.NW.string(L ? x.t.QxrDY2 : x.t.W6fjkZ)
            }
        ],
        U = (0, m.ZP)(n.id, C ? w : void 0),
        D = o.createRef();
    return (0, r.jsx)(d.Gt, {
        value: R,
        children: (0, r.jsx)(b.Mt, {
            value: M,
            children: (0, r.jsx)(c.Y0X, {
                transitionState: S,
                className: O.root,
                hideShadow: !0,
                'aria-label': x.NW.string(x.t['3N/J2t']),
                children: (0, r.jsx)(I.Z, {
                    user: n,
                    displayProfile: U,
                    profileType: h.y0.FULL_SIZE,
                    ref: D,
                    children: (0, r.jsxs)('div', {
                        className: O.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: O.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: l()(O.body, O.bodySpacing),
                                children: [
                                    (0, r.jsx)(g.i, {
                                        user: n,
                                        guildId: w
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: O.headerContainer,
                                        children: [
                                            (0, r.jsx)(c.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: x.NW.string(x.t.b33pLC)
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: x.NW.format(L ? x.t['8F+WNz'] : x.t['/cZp5u'], { username: p.ZP.getName(w, i, n) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: O.restrictedSafetyTable,
                                        children: B.map((e, n) => {
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
                                            (0, r.jsx)(v.Z, {
                                                size: c.PhG.MEDIUM,
                                                isBlocked: L,
                                                onClick: () => {
                                                    null == T || T(),
                                                        (0, y.pQ)(
                                                            P(
                                                                {
                                                                    action: L ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: R
                                                                },
                                                                M
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, r.jsx)(j.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    null == T || T(),
                                                        (0, y.pQ)(
                                                            P(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: R
                                                                },
                                                                M
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
