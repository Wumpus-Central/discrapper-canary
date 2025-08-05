(n.d(t, { Z: () => I }), n(388685), n(953529));
var r = n(255367),
    o = n(442837),
    l = n(755721),
    i = n(481060),
    a = n(100527),
    c = n(906732),
    s = n(138201),
    d = n(699516),
    u = n(5192),
    f = n(785717),
    p = n(221292),
    m = n(687158),
    b = n(316027),
    g = n(502762),
    y = n(848780),
    _ = n(907179),
    O = n(228168),
    h = n(981631),
    j = n(388032),
    x = n(247787);
function v(e) {
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
function I(e) {
    let { user: t, guildId: n, channelId: I, messageId: P, roleId: N, transitionState: w, openedAt: E, onHide: A, sourceAnalyticsLocations: T = [] } = e,
        S = n === h.ME ? void 0 : n,
        Z = (0, o.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: C } = (0, c.ZP)([...T, Z ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        G = (0, f.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            showGuildProfile: !0,
            guildId: S,
            channelId: I,
            messageId: P,
            roleId: N
        }),
        L = [
            {
                icon: i.owK,
                description: j.intl.string(j.t.kcuWvb)
            },
            {
                icon: i.owK,
                description: j.intl.string(Z ? j.t.QxrDY2 : j.t.W6fjkZ)
            }
        ],
        k = (0, m.ZP)(t.id, S),
        M = u.ZP.getName(null == k ? void 0 : k.guildId, I, t),
        R = j.intl.formatToPlainString(j.t.KRe1Fh, { name: M });
    return (0, r.jsx)(c.Gt, {
        value: C,
        children: (0, r.jsx)(f.Mt, {
            value: G,
            openedAt: E,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, r.jsx)(i.Y0X, {
                transitionState: w,
                className: x.root,
                'aria-label': R,
                parentComponent: 'RestrictedUserProfileModalV2',
                children: (0, r.jsxs)(g.Z, {
                    user: t,
                    displayProfile: k,
                    themeType: O.lY.MODAL_V2,
                    children: [
                        (0, r.jsx)('div', { className: x.background }),
                        (0, r.jsxs)('div', {
                            className: x.content,
                            children: [
                                (0, r.jsx)(b.Z, {
                                    user: t,
                                    guildId: S,
                                    iconColor: i.TVs.colors.TEXT_DEFAULT
                                }),
                                (0, r.jsxs)('div', {
                                    className: x.textContainer,
                                    children: [
                                        (0, r.jsx)(i.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-default',
                                            children: j.intl.string(j.t.b33pLC)
                                        }),
                                        (0, r.jsx)(i.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-default',
                                            children: j.intl.format(Z ? j.t.T7QiLi : j.t.MnEow8, { username: M })
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: x.safetyTable,
                                    children: L.map((e, t) => {
                                        let { icon: n, description: o } = e;
                                        return (0, r.jsx)(
                                            s.JZ,
                                            {
                                                icon: n,
                                                title: o,
                                                titleVariant: 'text-md/normal',
                                                color: i.TVs.colors.TEXT_DEFAULT.css
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, r.jsxs)(i.Kqy, {
                                    align: 'center',
                                    children: [
                                        (0, r.jsx)(_.Z, {
                                            size: l.Ph.MEDIUM,
                                            isBlocked: Z,
                                            onClick: () => {
                                                (A(),
                                                    (0, p.pQ)(
                                                        v(
                                                            {
                                                                action: Z ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                analyticsLocations: C
                                                            },
                                                            G
                                                        )
                                                    ));
                                            }
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                (A(),
                                                    (0, p.pQ)(
                                                        v(
                                                            {
                                                                action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                analyticsLocations: C
                                                            },
                                                            G
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
