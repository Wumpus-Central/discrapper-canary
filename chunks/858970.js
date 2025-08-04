(n.d(t, { Z: () => I }), n(388685), n(953529));
var r = n(255367);
n(73800);
var o = n(442837),
    i = n(755721),
    l = n(481060),
    a = n(100527),
    c = n(906732),
    s = n(138201),
    u = n(699516),
    d = n(5192),
    f = n(785717),
    p = n(221292),
    m = n(687158),
    b = n(316027),
    g = n(502762),
    y = n(848780),
    j = n(907179),
    O = n(228168),
    x = n(981631),
    h = n(388032),
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
    let { user: t, guildId: n, channelId: I, messageId: P, roleId: w, transitionState: N, openedAt: Z, onHide: T, sourceAnalyticsLocations: E = [] } = e,
        A = n === x.ME ? void 0 : n,
        S = (0, o.e7)([u.Z], () => u.Z.isBlocked(t.id)),
        { analyticsLocations: C } = (0, c.ZP)([...E, S ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
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
                description: h.intl.string(h.t.kcuWvb)
            },
            {
                icon: l.owK,
                description: h.intl.string(S ? h.t.QxrDY2 : h.t.W6fjkZ)
            }
        ],
        D = (0, m.ZP)(t.id, A),
        B = d.ZP.getName(null == D ? void 0 : D.guildId, I, t),
        G = h.intl.formatToPlainString(h.t.KRe1Fh, { name: B });
    return (0, r.jsx)(c.Gt, {
        value: C,
        children: (0, r.jsx)(f.Mt, {
            value: L,
            openedAt: Z,
            fetchStartedAt: null == D ? void 0 : D.fetchStartedAt,
            fetchEndedAt: null == D ? void 0 : D.fetchEndedAt,
            isLoaded: null == D ? void 0 : D.isLoaded,
            children: (0, r.jsx)(l.Y0X, {
                transitionState: N,
                className: _.root,
                'aria-label': G,
                parentComponent: 'RestrictedUserProfileModalV2',
                children: (0, r.jsxs)(g.Z, {
                    user: t,
                    displayProfile: D,
                    themeType: O.lY.MODAL_V2,
                    children: [
                        (0, r.jsx)('div', { className: _.background }),
                        (0, r.jsxs)('div', {
                            className: _.content,
                            children: [
                                (0, r.jsx)(b.Z, {
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
                                            children: h.intl.string(h.t.b33pLC)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-default',
                                            children: h.intl.format(S ? h.t.T7QiLi : h.t.MnEow8, { username: B })
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
                                        (0, r.jsx)(j.Z, {
                                            size: i.Ph.MEDIUM,
                                            isBlocked: S,
                                            onClick: () => {
                                                (T(),
                                                    (0, p.pQ)(
                                                        v(
                                                            {
                                                                action: S ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                analyticsLocations: C
                                                            },
                                                            L
                                                        )
                                                    ));
                                            }
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                (T(),
                                                    (0, p.pQ)(
                                                        v(
                                                            {
                                                                action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                analyticsLocations: C
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
