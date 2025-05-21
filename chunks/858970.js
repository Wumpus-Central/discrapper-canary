t.d(n, { Z: () => O }), t(388685), t(953529);
var o = t(255367);
t(73800);
var r = t(442837),
    c = t(481060),
    i = t(100527),
    a = t(906732),
    l = t(138201),
    s = t(699516),
    d = t(5192),
    u = t(785717),
    f = t(221292),
    p = t(687158),
    m = t(316027),
    b = t(502762),
    _ = t(848780),
    y = t(907179),
    h = t(228168),
    g = t(981631),
    x = t(388032),
    j = t(247787);
function I(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
function O(e) {
    let { user: n, guildId: t, channelId: O, messageId: v, roleId: P, transitionState: A, openedAt: N, onHide: T, sourceAnalyticsLocations: C = [] } = e,
        Z = t === g.ME ? void 0 : t,
        w = (0, r.e7)([s.Z], () => s.Z.isBlocked(n.id)),
        { analyticsLocations: S } = (0, a.ZP)([...C, w ? i.Z.BLOCKED_PROFILE_MODAL : i.Z.IGNORED_PROFILE_MODAL]),
        E = (0, u.ZB)({
            layout: 'MODAL_V2',
            userId: n.id,
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
        D = (0, p.ZP)(n.id, Z);
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
                    user: n,
                    displayProfile: D,
                    themeType: h.lY.MODAL_V2,
                    children: [
                        (0, o.jsx)('div', { className: j.background }),
                        (0, o.jsxs)('div', {
                            className: j.content,
                            children: [
                                (0, o.jsx)(m.Z, {
                                    user: n,
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
                                            children: x.intl.format(w ? x.t.T7QiLi : x.t.MnEow8, { username: d.ZP.getName(Z, O, n) })
                                        })
                                    ]
                                }),
                                (0, o.jsx)('div', {
                                    className: j.safetyTable,
                                    children: B.map((e, n) => {
                                        let { icon: t, description: r } = e;
                                        return (0, o.jsx)(
                                            l.ZP,
                                            {
                                                icon: t,
                                                title: r,
                                                titleVariant: 'text-md/normal',
                                                color: c.TVs.colors.TEXT_NORMAL.css
                                            },
                                            n
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
                                            userId: n.id,
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
