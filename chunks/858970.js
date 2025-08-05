(n.d(t, { Z: () => I }), n(388685), n(953529));
var r = n(255367);
n(73800);
var o = n(442837),
    i = n(755721),
    l = n(481060),
    a = n(100527),
    c = n(906732),
    s = n(138201),
    d = n(699516),
    u = n(5192),
    f = n(785717),
    p = n(221292),
    m = n(687158),
    g = n(316027),
    b = n(502762),
    y = n(848780),
    O = n(907179),
    h = n(228168),
    j = n(981631),
    x = n(388032),
    _ = n(247787);
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
    let { user: t, guildId: n, channelId: I, messageId: P, roleId: w, transitionState: N, openedAt: T, onHide: E, sourceAnalyticsLocations: Z = [] } = e,
        A = n === j.ME ? void 0 : n,
        C = (0, o.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: S } = (0, c.ZP)([...Z, C ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        L = (0, f.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            showGuildProfile: !0,
            guildId: A,
            channelId: I,
            messageId: P,
            roleId: w
        }),
        k = [
            {
                icon: l.owK,
                description: x.intl.string(x.t.kcuWvb)
            },
            {
                icon: l.owK,
                description: x.intl.string(C ? x.t.QxrDY2 : x.t.W6fjkZ)
            }
        ],
        R = (0, m.ZP)(t.id, A),
        D = u.ZP.getName(null == R ? void 0 : R.guildId, I, t),
        G = x.intl.formatToPlainString(x.t.KRe1Fh, { name: D });
    return (0, r.jsx)(c.Gt, {
        value: S,
        children: (0, r.jsx)(f.Mt, {
            value: L,
            openedAt: T,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, r.jsx)(l.Y0X, {
                transitionState: N,
                className: _.root,
                'aria-label': G,
                parentComponent: 'RestrictedUserProfileModalV2',
                children: (0, r.jsxs)(b.Z, {
                    user: t,
                    displayProfile: R,
                    themeType: h.lY.MODAL_V2,
                    children: [
                        (0, r.jsx)('div', { className: _.background }),
                        (0, r.jsxs)('div', {
                            className: _.content,
                            children: [
                                (0, r.jsx)(g.Z, {
                                    user: t,
                                    guildId: A,
                                    iconColor: l.TVs.colors.TEXT_DEFAULT
                                }),
                                (0, r.jsxs)('div', {
                                    className: _.textContainer,
                                    children: [
                                        (0, r.jsx)(l.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-default',
                                            children: x.intl.string(x.t.b33pLC)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-default',
                                            children: x.intl.format(C ? x.t.T7QiLi : x.t.MnEow8, { username: D })
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: _.safetyTable,
                                    children: k.map((e, t) => {
                                        let { icon: n, description: o } = e;
                                        return (0, r.jsx)(
                                            s.ZP,
                                            {
                                                icon: n,
                                                title: o,
                                                titleVariant: 'text-md/normal',
                                                color: l.TVs.colors.TEXT_DEFAULT.css
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, r.jsxs)(l.Kqy, {
                                    align: 'center',
                                    children: [
                                        (0, r.jsx)(O.Z, {
                                            size: i.Ph.MEDIUM,
                                            isBlocked: C,
                                            onClick: () => {
                                                (E(),
                                                    (0, p.pQ)(
                                                        v(
                                                            {
                                                                action: C ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                analyticsLocations: S
                                                            },
                                                            L
                                                        )
                                                    ));
                                            }
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                (E(),
                                                    (0, p.pQ)(
                                                        v(
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
