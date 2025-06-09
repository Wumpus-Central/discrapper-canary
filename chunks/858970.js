n.d(t, { Z: () => O }), n(388685), n(953529);
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    c = n(100527),
    l = n(906732),
    a = n(138201),
    s = n(706454),
    d = n(699516),
    u = n(5192),
    f = n(785717),
    p = n(221292),
    m = n(687158),
    b = n(316027),
    y = n(502762),
    _ = n(848780),
    x = n(907179),
    h = n(228168),
    j = n(981631),
    g = n(388032),
    I = n(247787);
function v(e) {
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
    let { user: t, guildId: n, channelId: O, messageId: P, roleId: N, transitionState: A, openedAt: Z, onHide: T, sourceAnalyticsLocations: C = [] } = e,
        w = n === j.ME ? void 0 : n,
        S = (0, r.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: E } = (0, l.ZP)([...C, S ? c.Z.BLOCKED_PROFILE_MODAL : c.Z.IGNORED_PROFILE_MODAL]),
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
                icon: i.owK,
                description: g.intl.string(g.t.kcuWvb)
            },
            {
                icon: i.owK,
                description: g.intl.string(S ? g.t.QxrDY2 : g.t.W6fjkZ)
            }
        ],
        L = (0, m.ZP)(t.id, w),
        U = u.ZP.getName(null == L ? void 0 : L.guildId, O, t),
        k = (0, r.e7)([s.default], () => ['en-US', 'en-GB'].includes(s.default.locale)) ? g.intl.formatToPlainString(g.t.KRe1Fh, { name: U }) : g.intl.string(g.t['3N/J2t']);
    return (0, o.jsx)(l.Gt, {
        value: E,
        children: (0, o.jsx)(f.Mt, {
            value: B,
            openedAt: Z,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, o.jsx)(i.Y0X, {
                transitionState: A,
                className: I.root,
                'aria-label': k,
                parentComponent: 'RestrictedUserProfileModalV2',
                children: (0, o.jsxs)(y.Z, {
                    user: t,
                    displayProfile: L,
                    themeType: h.lY.MODAL_V2,
                    children: [
                        (0, o.jsx)('div', { className: I.background }),
                        (0, o.jsxs)('div', {
                            className: I.content,
                            children: [
                                (0, o.jsx)(b.Z, {
                                    user: t,
                                    guildId: w,
                                    iconColor: i.TVs.colors.TEXT_NORMAL
                                }),
                                (0, o.jsxs)('div', {
                                    className: I.textContainer,
                                    children: [
                                        (0, o.jsx)(i.X6q, {
                                            variant: 'heading-xl/bold',
                                            color: 'text-normal',
                                            children: g.intl.string(g.t.b33pLC)
                                        }),
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-normal',
                                            children: g.intl.format(S ? g.t.T7QiLi : g.t.MnEow8, { username: U })
                                        })
                                    ]
                                }),
                                (0, o.jsx)('div', {
                                    className: I.safetyTable,
                                    children: D.map((e, t) => {
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
                                        (0, o.jsx)(x.Z, {
                                            size: i.PhG.MEDIUM,
                                            isBlocked: S,
                                            onClick: () => {
                                                T(),
                                                    (0, p.pQ)(
                                                        v(
                                                            {
                                                                action: S ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                analyticsLocations: E
                                                            },
                                                            B
                                                        )
                                                    );
                                            }
                                        }),
                                        (0, o.jsx)(_.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                T(),
                                                    (0, p.pQ)(
                                                        v(
                                                            {
                                                                action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                analyticsLocations: E
                                                            },
                                                            B
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
