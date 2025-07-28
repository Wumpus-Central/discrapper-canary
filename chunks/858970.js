(n.d(t, { Z: () => O }), n(388685), n(953529));
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(755721),
    c = n(481060),
    l = n(100527),
    a = n(906732),
    s = n(138201),
    d = n(699516),
    u = n(5192),
    f = n(785717),
    p = n(221292),
    m = n(687158),
    b = n(316027),
    x = n(502762),
    _ = n(848780),
    h = n(907179),
    y = n(228168),
    g = n(981631),
    j = n(388032),
    I = n(247787);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                ((o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o));
            }));
    }
    return e;
}
function O(e) {
    let { user: t, guildId: n, channelId: O, messageId: P, roleId: N, transitionState: A, openedAt: T, onHide: C, sourceAnalyticsLocations: Z = [] } = e,
        w = n === g.ME ? void 0 : n,
        E = (0, r.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: S } = (0, a.ZP)([...Z, E ? l.Z.BLOCKED_PROFILE_MODAL : l.Z.IGNORED_PROFILE_MODAL]),
        B = (0, f.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            showGuildProfile: !0,
            guildId: w,
            channelId: O,
            messageId: P,
            roleId: N
        }),
        D = [
            {
                icon: c.owK,
                description: j.intl.string(j.t.kcuWvb)
            },
            {
                icon: c.owK,
                description: j.intl.string(E ? j.t.QxrDY2 : j.t.W6fjkZ)
            }
        ],
        L = (0, m.ZP)(t.id, w),
        U = u.ZP.getName(null == L ? void 0 : L.guildId, O, t),
        k = j.intl.formatToPlainString(j.t.KRe1Fh, { name: U });
    return (0, o.jsx)(a.Gt, {
        value: S,
        children: (0, o.jsx)(f.Mt, {
            value: B,
            openedAt: T,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, o.jsx)(c.Y0X, {
                transitionState: A,
                className: I.root,
                'aria-label': k,
                parentComponent: 'RestrictedUserProfileModalV2',
                children: (0, o.jsxs)(x.Z, {
                    user: t,
                    displayProfile: L,
                    themeType: y.lY.MODAL_V2,
                    children: [
                        (0, o.jsx)('div', { className: I.background }),
                        (0, o.jsxs)('div', {
                            className: I.content,
                            children: [
                                (0, o.jsx)(b.Z, {
                                    user: t,
                                    guildId: w,
                                    iconColor: c.TVs.colors.TEXT_DEFAULT
                                }),
                                (0, o.jsxs)('div', {
                                    className: I.textContainer,
                                    children: [
                                        (0, o.jsx)(c.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-default',
                                            children: j.intl.string(j.t.b33pLC)
                                        }),
                                        (0, o.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-default',
                                            children: j.intl.format(E ? j.t.T7QiLi : j.t.MnEow8, { username: U })
                                        })
                                    ]
                                }),
                                (0, o.jsx)('div', {
                                    className: I.safetyTable,
                                    children: D.map((e, t) => {
                                        let { icon: n, description: r } = e;
                                        return (0, o.jsx)(
                                            s.ZP,
                                            {
                                                icon: n,
                                                title: r,
                                                titleVariant: 'text-md/normal',
                                                color: c.TVs.colors.TEXT_DEFAULT.css
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, o.jsxs)(c.Kqy, {
                                    align: 'center',
                                    children: [
                                        (0, o.jsx)(h.Z, {
                                            size: i.Ph.MEDIUM,
                                            isBlocked: E,
                                            onClick: () => {
                                                (C(),
                                                    (0, p.pQ)(
                                                        v(
                                                            {
                                                                action: E ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                analyticsLocations: S
                                                            },
                                                            B
                                                        )
                                                    ));
                                            }
                                        }),
                                        (0, o.jsx)(_.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                (C(),
                                                    (0, p.pQ)(
                                                        v(
                                                            {
                                                                action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                analyticsLocations: S
                                                            },
                                                            B
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
