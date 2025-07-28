(n.d(t, { Z: () => O }), n(388685), n(953529));
var r = n(255367);
n(73800);
var o = n(442837),
    i = n(755721),
    c = n(481060),
    l = n(100527),
    a = n(906732),
    s = n(138201),
    d = n(699516),
    u = n(5192),
    f = n(785717),
    m = n(221292),
    p = n(687158),
    b = n(316027),
    x = n(502762),
    h = n(848780),
    _ = n(907179),
    g = n(228168),
    y = n(981631),
    j = n(388032),
    v = n(247787);
function I(e) {
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
function O(e) {
    let { user: t, guildId: n, channelId: O, messageId: P, roleId: N, transitionState: A, openedAt: T, onHide: Z, sourceAnalyticsLocations: C = [] } = e,
        w = n === y.ME ? void 0 : n,
        S = (0, o.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: E } = (0, a.ZP)([...C, S ? l.Z.BLOCKED_PROFILE_MODAL : l.Z.IGNORED_PROFILE_MODAL]),
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
                description: j.intl.string(S ? j.t.QxrDY2 : j.t.W6fjkZ)
            }
        ],
        L = (0, p.ZP)(t.id, w),
        U = u.ZP.getName(null == L ? void 0 : L.guildId, O, t),
        k = j.intl.formatToPlainString(j.t.KRe1Fh, { name: U });
    return (0, r.jsx)(a.Gt, {
        value: E,
        children: (0, r.jsx)(f.Mt, {
            value: B,
            openedAt: T,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, r.jsx)(c.Y0X, {
                transitionState: A,
                className: v.root,
                'aria-label': k,
                parentComponent: 'RestrictedUserProfileModalV2',
                children: (0, r.jsxs)(x.Z, {
                    user: t,
                    displayProfile: L,
                    themeType: g.lY.MODAL_V2,
                    children: [
                        (0, r.jsx)('div', { className: v.background }),
                        (0, r.jsxs)('div', {
                            className: v.content,
                            children: [
                                (0, r.jsx)(b.Z, {
                                    user: t,
                                    guildId: w,
                                    iconColor: c.TVs.colors.TEXT_DEFAULT
                                }),
                                (0, r.jsxs)('div', {
                                    className: v.textContainer,
                                    children: [
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-default',
                                            children: j.intl.string(j.t.b33pLC)
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-default',
                                            children: j.intl.format(S ? j.t.T7QiLi : j.t.MnEow8, { username: U })
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: v.safetyTable,
                                    children: D.map((e, t) => {
                                        let { icon: n, description: o } = e;
                                        return (0, r.jsx)(
                                            s.ZP,
                                            {
                                                icon: n,
                                                title: o,
                                                titleVariant: 'text-md/normal',
                                                color: c.TVs.colors.TEXT_DEFAULT.css
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, r.jsxs)(c.Kqy, {
                                    align: 'center',
                                    children: [
                                        (0, r.jsx)(_.Z, {
                                            size: i.Ph.MEDIUM,
                                            isBlocked: S,
                                            onClick: () => {
                                                (Z(),
                                                    (0, m.pQ)(
                                                        I(
                                                            {
                                                                action: S ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                analyticsLocations: E
                                                            },
                                                            B
                                                        )
                                                    ));
                                            }
                                        }),
                                        (0, r.jsx)(h.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                (Z(),
                                                    (0, m.pQ)(
                                                        I(
                                                            {
                                                                action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                analyticsLocations: E
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
