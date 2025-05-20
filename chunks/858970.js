n.d(t, { Z: () => O }), n(388685), n(953529);
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    c = n(100527),
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
    g = n(907179),
    h = n(228168),
    y = n(981631),
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
    let { user: t, guildId: n, channelId: O, messageId: v, roleId: C, transitionState: P, openedAt: A, onHide: T, sourceAnalyticsLocations: N = [] } = e,
        Z = n === y.ME ? void 0 : n,
        w = (0, r.e7)([s.Z], () => s.Z.isBlocked(t.id)),
        { analyticsLocations: S } = (0, a.ZP)([...N, w ? c.Z.BLOCKED_PROFILE_MODAL : c.Z.IGNORED_PROFILE_MODAL]),
        E = (0, u.ZB)({
            layout: 'MODAL_V2',
            userId: t.id,
            showGuildProfile: !0,
            guildId: Z,
            channelId: O,
            messageId: v,
            roleId: C
        }),
        B = [
            {
                icon: i.owK,
                description: x.intl.string(x.t.kcuWvb)
            },
            {
                icon: i.owK,
                description: x.intl.string(w ? x.t.QxrDY2 : x.t.W6fjkZ)
            }
        ],
        k = (0, p.ZP)(t.id, Z);
    return (0, o.jsx)(a.Gt, {
        value: S,
        children: (0, o.jsx)(u.Mt, {
            value: E,
            openedAt: A,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, o.jsx)(i.Y0X, {
                transitionState: P,
                className: j.root,
                'aria-label': x.intl.string(x.t['3N/J2t']),
                children: (0, o.jsxs)(b.Z, {
                    user: t,
                    displayProfile: k,
                    themeType: h.lY.MODAL_V2,
                    children: [
                        (0, o.jsx)('div', { className: j.background }),
                        (0, o.jsxs)('div', {
                            className: j.content,
                            children: [
                                (0, o.jsx)(m.Z, {
                                    user: t,
                                    guildId: Z,
                                    iconColor: i.TVs.colors.TEXT_NORMAL
                                }),
                                (0, o.jsxs)('div', {
                                    className: j.textContainer,
                                    children: [
                                        (0, o.jsx)(i.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-normal',
                                            children: x.intl.string(x.t.b33pLC)
                                        }),
                                        (0, o.jsx)(i.Text, {
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
                                                color: i.TVs.colors.TEXT_NORMAL.css
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, o.jsxs)(i.Kqy, {
                                    align: 'center',
                                    children: [
                                        (0, o.jsx)(g.Z, {
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
