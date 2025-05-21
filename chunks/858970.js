n.d(t, { Z: () => O }), n(388685), n(953529);
var o = n(255367);
n(73800);
var r = n(442837),
    c = n(481060),
    i = n(100527),
    a = n(906732),
    l = n(138201),
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
    g = n(981631),
    x = n(388032),
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
function O(e) {
    let { user: t, guildId: n, channelId: O, messageId: v, roleId: P, transitionState: A, openedAt: N, onHide: T, sourceAnalyticsLocations: C = [] } = e,
        Z = n === g.ME ? void 0 : n,
        w = (0, r.e7)([s.Z], () => s.Z.isBlocked(t.id)),
        { analyticsLocations: S } = (0, a.ZP)([...C, w ? i.Z.BLOCKED_PROFILE_MODAL : i.Z.IGNORED_PROFILE_MODAL]),
        E = (0, u.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            showGuildProfile: !0,
            guildId: Z,
            channelId: O,
            messageId: v,
            roleId: P
        }),
        B = [
            {
                icon: c.owK,
                description: x.intl.string(x.t.kcuWvb)
            },
            {
                icon: c.owK,
                description: x.intl.string(w ? x.t.QxrDY2 : x.t.W6fjkZ)
            }
        ],
        D = (0, p.ZP)(t.id, Z);
    return (0, o.jsx)(a.Gt, {
        value: S,
        children: (0, o.jsx)(u.Mt, {
            value: E,
            openedAt: N,
            fetchStartedAt: null == D ? void 0 : D.fetchStartedAt,
            fetchEndedAt: null == D ? void 0 : D.fetchEndedAt,
            isLoaded: null == D ? void 0 : D.isLoaded,
            children: (0, o.jsx)(c.Y0X, {
                transitionState: A,
                className: j.root,
                'aria-label': x.intl.string(x.t['3N/J2t']),
                children: (0, o.jsxs)(b.Z, {
                    user: t,
                    displayProfile: D,
                    themeType: h.lY.MODAL_V2,
                    children: [
                        (0, o.jsx)('div', { className: j.background }),
                        (0, o.jsxs)('div', {
                            className: j.content,
                            children: [
                                (0, o.jsx)(m.Z, {
                                    user: t,
                                    guildId: Z,
                                    iconColor: c.TVs.colors.TEXT_NORMAL
                                }),
                                (0, o.jsxs)('div', {
                                    className: j.textContainer,
                                    children: [
                                        (0, o.jsx)(c.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-normal',
                                            children: x.intl.string(x.t.b33pLC)
                                        }),
                                        (0, o.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-normal',
                                            children: x.intl.format(w ? x.t.T7QiLi : x.t.MnEow8, { username: d.ZP.getName(Z, O, t) })
                                        })
                                    ]
                                }),
                                (0, o.jsx)('div', {
                                    className: j.safetyTable,
                                    children: B.map((e, t) => {
                                        let { icon: n, description: r } = e;
                                        return (0, o.jsx)(
                                            l.ZP,
                                            {
                                                icon: n,
                                                title: r,
                                                titleVariant: 'text-md/normal',
                                                color: c.TVs.colors.TEXT_NORMAL.css
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, o.jsxs)(c.Kqy, {
                                    align: 'center',
                                    children: [
                                        (0, o.jsx)(y.Z, {
                                            size: c.PhG.MEDIUM,
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
                                        (0, o.jsx)(_.Z, {
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
