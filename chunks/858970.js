n.d(t, { Z: () => I }), n(388685), n(953529);
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
    _ = n(848780),
    y = n(907179),
    x = n(228168),
    h = n(981631),
    j = n(388032),
    g = n(247787);
function O(e) {
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
function I(e) {
    let { user: t, guildId: n, channelId: I, messageId: v, roleId: P, transitionState: N, openedAt: A, onHide: T, sourceAnalyticsLocations: Z = [] } = e,
        C = n === h.ME ? void 0 : n,
        w = (0, r.e7)([s.Z], () => s.Z.isBlocked(t.id)),
        { analyticsLocations: S } = (0, l.ZP)([...Z, w ? c.Z.BLOCKED_PROFILE_MODAL : c.Z.IGNORED_PROFILE_MODAL]),
        E = (0, u.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            showGuildProfile: !0,
            guildId: C,
            channelId: I,
            messageId: v,
            roleId: P
        }),
        B = [
            {
                icon: i.owK,
                description: j.intl.string(j.t.kcuWvb)
            },
            {
                icon: i.owK,
                description: j.intl.string(w ? j.t.QxrDY2 : j.t.W6fjkZ)
            }
        ],
        D = (0, p.ZP)(t.id, C);
    return (0, o.jsx)(l.Gt, {
        value: S,
        children: (0, o.jsx)(u.Mt, {
            value: E,
            openedAt: A,
            fetchStartedAt: null == D ? void 0 : D.fetchStartedAt,
            fetchEndedAt: null == D ? void 0 : D.fetchEndedAt,
            isLoaded: null == D ? void 0 : D.isLoaded,
            children: (0, o.jsx)(i.Y0X, {
                transitionState: N,
                className: g.root,
                'aria-label': j.intl.string(j.t['3N/J2t']),
                children: (0, o.jsxs)(b.Z, {
                    user: t,
                    displayProfile: D,
                    themeType: x.lY.MODAL_V2,
                    children: [
                        (0, o.jsx)('div', { className: g.background }),
                        (0, o.jsxs)('div', {
                            className: g.content,
                            children: [
                                (0, o.jsx)(m.Z, {
                                    user: t,
                                    guildId: C,
                                    iconColor: i.TVs.colors.TEXT_NORMAL
                                }),
                                (0, o.jsxs)('div', {
                                    className: g.textContainer,
                                    children: [
                                        (0, o.jsx)(i.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-normal',
                                            children: j.intl.string(j.t.b33pLC)
                                        }),
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-normal',
                                            children: j.intl.format(w ? j.t.T7QiLi : j.t.MnEow8, { username: d.ZP.getName(C, I, t) })
                                        })
                                    ]
                                }),
                                (0, o.jsx)('div', {
                                    className: g.safetyTable,
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
                                                        O(
                                                            {
                                                                action: w ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                analyticsLocations: S
                                                            },
                                                            E
                                                        )
                                                    );
                                            }
                                        }),
                                        (0, o.jsx)(_.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                T(),
                                                    (0, f.pQ)(
                                                        O(
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
