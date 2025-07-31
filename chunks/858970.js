(n.d(t, { Z: () => O }), n(388685), n(953529));
var r = n(255367);
n(73800);
var o = n(442837),
    i = n(755721),
    a = n(481060),
    l = n(100527),
    c = n(906732),
    s = n(138201),
    d = n(699516),
    u = n(5192),
    f = n(785717),
    m = n(221292),
    p = n(687158),
    g = n(316027),
    b = n(502762),
    x = n(848780),
    _ = n(907179),
    j = n(228168),
    h = n(981631),
    y = n(388032),
    v = n(247787);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function O(e) {
    let { user: t, guildId: n, channelId: O, messageId: P, roleId: N, transitionState: T, openedAt: Z, onHide: A, sourceAnalyticsLocations: w = [] } = e,
        C = n === h.ME ? void 0 : n,
        E = (0, o.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: S } = (0, c.ZP)([...w, E ? l.Z.BLOCKED_PROFILE_MODAL : l.Z.IGNORED_PROFILE_MODAL]),
        L = (0, f.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            showGuildProfile: !0,
            guildId: C,
            channelId: O,
            messageId: P,
            roleId: N
        }),
        k = [
            {
                icon: a.owK,
                description: y.intl.string(y.t.kcuWvb)
            },
            {
                icon: a.owK,
                description: y.intl.string(E ? y.t.QxrDY2 : y.t.W6fjkZ)
            }
        ],
        B = (0, p.ZP)(t.id, C),
        R = u.ZP.getName(null == B ? void 0 : B.guildId, O, t),
        D = y.intl.formatToPlainString(y.t.KRe1Fh, { name: R });
    return (0, r.jsx)(c.Gt, {
        value: S,
        children: (0, r.jsx)(f.Mt, {
            value: L,
            openedAt: Z,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsx)(a.Y0X, {
                transitionState: T,
                className: v.root,
                'aria-label': D,
                parentComponent: 'RestrictedUserProfileModalV2',
                children: (0, r.jsxs)(b.Z, {
                    user: t,
                    displayProfile: B,
                    themeType: j.lY.MODAL_V2,
                    children: [
                        (0, r.jsx)('div', { className: v.background }),
                        (0, r.jsxs)('div', {
                            className: v.content,
                            children: [
                                (0, r.jsx)(g.Z, {
                                    user: t,
                                    guildId: C,
                                    iconColor: a.TVs.colors.TEXT_DEFAULT
                                }),
                                (0, r.jsxs)('div', {
                                    className: v.textContainer,
                                    children: [
                                        (0, r.jsx)(a.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-default',
                                            children: y.intl.string(y.t.b33pLC)
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-default',
                                            children: y.intl.format(E ? y.t.T7QiLi : y.t.MnEow8, { username: R })
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: v.safetyTable,
                                    children: k.map((e, t) => {
                                        let { icon: n, description: o } = e;
                                        return (0, r.jsx)(
                                            s.ZP,
                                            {
                                                icon: n,
                                                title: o,
                                                titleVariant: 'text-md/normal',
                                                color: a.TVs.colors.TEXT_DEFAULT.css
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, r.jsxs)(a.Kqy, {
                                    align: 'center',
                                    children: [
                                        (0, r.jsx)(_.Z, {
                                            size: i.Ph.MEDIUM,
                                            isBlocked: E,
                                            onClick: () => {
                                                (A(),
                                                    (0, m.pQ)(
                                                        I(
                                                            {
                                                                action: E ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                analyticsLocations: S
                                                            },
                                                            L
                                                        )
                                                    ));
                                            }
                                        }),
                                        (0, r.jsx)(x.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                (A(),
                                                    (0, m.pQ)(
                                                        I(
                                                            {
                                                                action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                analyticsLocations: S
                                                            },
                                                            L
                                                        )
                                                    ));
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
    });
}
