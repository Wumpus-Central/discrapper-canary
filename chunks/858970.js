n.d(t, { Z: () => I }), n(388685), n(953529);
var r = n(255367);
n(73800);
var o = n(442837),
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
    h = n(228168),
    x = n(981631),
    g = n(388032),
    j = n(247787);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e) {
    let { user: t, guildId: n, channelId: I, messageId: v, roleId: P, transitionState: A, openedAt: N, onHide: T, sourceAnalyticsLocations: Z = [] } = e,
        C = n === x.ME ? void 0 : n,
        w = (0, o.e7)([s.Z], () => s.Z.isBlocked(t.id)),
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
                description: g.intl.string(g.t.kcuWvb)
            },
            {
                icon: i.owK,
                description: g.intl.string(w ? g.t.QxrDY2 : g.t.W6fjkZ)
            }
        ],
        D = (0, p.ZP)(t.id, C);
    return (0, r.jsx)(l.Gt, {
        value: S,
        children: (0, r.jsx)(u.Mt, {
            value: E,
            openedAt: N,
            fetchStartedAt: null == D ? void 0 : D.fetchStartedAt,
            fetchEndedAt: null == D ? void 0 : D.fetchEndedAt,
            isLoaded: null == D ? void 0 : D.isLoaded,
            children: (0, r.jsx)(i.Y0X, {
                transitionState: A,
                className: j.root,
                'aria-label': g.intl.string(g.t['3N/J2t']),
                children: (0, r.jsxs)(b.Z, {
                    user: t,
                    displayProfile: D,
                    themeType: h.lY.MODAL_V2,
                    children: [
                        (0, r.jsx)('div', { className: j.background }),
                        (0, r.jsxs)('div', {
                            className: j.content,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    user: t,
                                    guildId: C,
                                    iconColor: i.TVs.colors.TEXT_NORMAL
                                }),
                                (0, r.jsxs)('div', {
                                    className: j.textContainer,
                                    children: [
                                        (0, r.jsx)(i.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-normal',
                                            children: g.intl.string(g.t.b33pLC)
                                        }),
                                        (0, r.jsx)(i.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-normal',
                                            children: g.intl.format(w ? g.t.T7QiLi : g.t.MnEow8, { username: d.ZP.getName(C, I, t) })
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: j.safetyTable,
                                    children: B.map((e, t) => {
                                        let { icon: n, description: o } = e;
                                        return (0, r.jsx)(
                                            a.ZP,
                                            {
                                                icon: n,
                                                title: o,
                                                titleVariant: 'text-md/normal',
                                                color: i.TVs.colors.TEXT_NORMAL.css
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, r.jsxs)(i.Kqy, {
                                    align: 'center',
                                    children: [
                                        (0, r.jsx)(y.Z, {
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
                                        (0, r.jsx)(_.Z, {
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
