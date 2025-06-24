n.d(t, { Z: () => v }), n(388685), n(953529);
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    c = n(100527),
    l = n(906732),
    a = n(138201),
    s = n(699516),
    d = n(5192),
    u = n(785717),
    f = n(221292),
    p = n(687158),
    m = n(316027),
    b = n(502762),
    x = n(848780),
    y = n(907179),
    _ = n(228168),
    h = n(981631),
    g = n(388032),
    j = n(247787);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                (o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o);
            });
    }
    return e;
}
function v(e) {
    let { user: t, guildId: n, channelId: v, messageId: O, roleId: P, transitionState: A, openedAt: N, onHide: T, sourceAnalyticsLocations: Z = [] } = e,
        C = n === h.ME ? void 0 : n,
        w = (0, r.e7)([s.Z], () => s.Z.isBlocked(t.id)),
        { analyticsLocations: S } = (0, l.ZP)([...Z, w ? c.Z.BLOCKED_PROFILE_MODAL : c.Z.IGNORED_PROFILE_MODAL]),
        E = (0, u.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            showGuildProfile: !0,
            guildId: C,
            channelId: v,
            messageId: O,
            roleId: P
        }),
        B = [
            {
                icon: i.owK,
                description: g.intl.string(g.t.kcuWvb)
            },
            {
                icon: i.owK,
                description: g.intl.string(w ? g.t.QxrDY2 : g.t.W6fjkZ)
            }
        ],
        L = (0, p.ZP)(t.id, C),
        D = d.ZP.getName(null == L ? void 0 : L.guildId, v, t),
        U = g.intl.formatToPlainString(g.t.KRe1Fh, { name: D });
    return (0, o.jsx)(l.Gt, {
        value: S,
        children: (0, o.jsx)(u.Mt, {
            value: E,
            openedAt: N,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, o.jsx)(i.Y0X, {
                transitionState: A,
                className: j.root,
                'aria-label': U,
                parentComponent: 'RestrictedUserProfileModalV2',
                children: (0, o.jsxs)(b.Z, {
                    user: t,
                    displayProfile: L,
                    themeType: _.lY.MODAL_V2,
                    children: [
                        (0, o.jsx)('div', { className: j.background }),
                        (0, o.jsxs)('div', {
                            className: j.content,
                            children: [
                                (0, o.jsx)(m.Z, {
                                    user: t,
                                    guildId: C,
                                    iconColor: i.TVs.colors.TEXT_NORMAL
                                }),
                                (0, o.jsxs)('div', {
                                    className: j.textContainer,
                                    children: [
                                        (0, o.jsx)(i.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-normal',
                                            children: g.intl.string(g.t.b33pLC)
                                        }),
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-normal',
                                            children: g.intl.format(w ? g.t.T7QiLi : g.t.MnEow8, { username: D })
                                        })
                                    ]
                                }),
                                (0, o.jsx)('div', {
                                    className: j.safetyTable,
                                    children: B.map((e, t) => {
                                        let { icon: n, description: r } = e;
                                        return (0, o.jsx)(
                                            a.ZP,
                                            {
                                                icon: n,
                                                title: r,
                                                titleVariant: 'text-md/normal',
                                                color: i.TVs.colors.TEXT_NORMAL.css
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, o.jsxs)(i.Kqy, {
                                    align: 'center',
                                    children: [
                                        (0, o.jsx)(y.Z, {
                                            size: i.PhG.MEDIUM,
                                            isBlocked: w,
                                            onClick: () => {
                                                T(),
                                                    (0, f.pQ)(
                                                        I(
                                                            {
                                                                action: w ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                analyticsLocations: S
                                                            },
                                                            E
                                                        )
                                                    );
                                            }
                                        }),
                                        (0, o.jsx)(x.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                T(),
                                                    (0, f.pQ)(
                                                        I(
                                                            {
                                                                action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                analyticsLocations: S
                                                            },
                                                            E
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
    });
}
