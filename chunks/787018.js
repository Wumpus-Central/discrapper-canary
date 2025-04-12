t.d(n, { W: () => P }), t(388685), t(953529);
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
    m = t(221292),
    I = t(687158),
    g = t(471879),
    y = t(502762),
    h = t(848780),
    j = t(907179);
t(475413);
var v = t(228168),
    x = t(981631),
    _ = t(388032),
    O = t(17291),
    Z = t(161068);
function N(e) {
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
function P(e) {
    let { user: n, guildId: t, channelId: i, messageId: P, roleId: E, transitionState: S, openedAt: T, onViewBlockedProfileClick: C, showGuildProfile: A = !0, sourceAnalyticsLocations: L = [] } = e,
        w = t === x.ME ? void 0 : t,
        R = (0, s.e7)([f.Z], () => f.Z.isBlocked(n.id)),
        { analyticsLocations: M } = (0, d.ZP)([...L, R ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        U = (0, b.ZB)({
            layout: R ? 'BLOCKED_PROFILE_MODAL' : 'IGNORED_PROFILE_MODAL',
            userId: n.id,
            guildId: w,
            channelId: i,
            messageId: P,
            roleId: E,
            showGuildProfile: A
        }),
        D = [
            {
                icon: c.owK,
                description: _.NW.string(_.t.kcuWvb)
            },
            {
                icon: c.owK,
                description: _.NW.string(R ? _.t.QxrDY2 : _.t.W6fjkZ)
            }
        ],
        B = (0, I.ZP)(n.id, A ? w : void 0),
        W = o.createRef();
    return (0, r.jsx)(d.Gt, {
        value: M,
        children: (0, r.jsx)(b.Mt, {
            value: U,
            openedAt: T,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsx)(c.Y0X, {
                transitionState: S,
                className: O.root,
                hideShadow: !0,
                'aria-label': _.NW.string(_.t['3N/J2t']),
                children: (0, r.jsx)(y.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: v.y0.FULL_SIZE,
                    ref: W,
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
                                                children: _.NW.string(_.t.b33pLC)
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: _.NW.format(R ? _.t['8F+WNz'] : _.t['/cZp5u'], { username: p.ZP.getName(w, i, n) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: O.restrictedSafetyTable,
                                        children: D.map((e, n) => {
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
                                                isBlocked: R,
                                                onClick: () => {
                                                    null == C || C(),
                                                        (0, m.pQ)(
                                                            N(
                                                                {
                                                                    action: R ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: M
                                                                },
                                                                U
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, r.jsx)(h.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    null == C || C(),
                                                        (0, m.pQ)(
                                                            N(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: M
                                                                },
                                                                U
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
