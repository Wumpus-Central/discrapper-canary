n.d(t, { Z: () => S }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(699516),
    u = n(5192),
    d = n(785717),
    f = n(221292),
    _ = n(687158),
    p = n(316027),
    h = n(502762),
    m = n(848780),
    g = n(907179),
    E = n(228168),
    b = n(388032),
    y = n(70964),
    O = n(609440);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e) {
    let { user: t, guildId: n, setPopoutRef: v, channelId: S, messageId: T, roleId: A, openedAt: N, onHide: C, newAnalyticsLocations: R = [], disableAutoFocus: P = !1 } = e,
        w = (0, a.e7)([c.Z], () => c.Z.isBlocked(t.id)),
        { analyticsLocations: D } = (0, l.ZP)([...R, w ? s.Z.BLOCKED_PROFILE_POPOUT : s.Z.IGNORED_PROFILE_POPOUT]),
        L = (0, d.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: n,
            channelId: S,
            messageId: T,
            roleId: A
        }),
        x = i.useRef(null),
        M = (0, _.ZP)(t.id, n);
    i.useEffect(() => {
        null == v || v(null == x ? void 0 : x.current);
    }, [x, v]);
    let k = w ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
        j = P ? 'div' : o.VqE;
    return (0, r.jsx)(l.Gt, {
        value: D,
        children: (0, r.jsx)(d.Mt, {
            value: L,
            openedAt: N,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
            children: (0, r.jsx)(j, {
                ref: x,
                'aria-label': t.username,
                children: (0, r.jsx)(h.Z, {
                    user: t,
                    displayProfile: M,
                    themeType: E.lY.POPOUT,
                    children: (0, r.jsxs)('div', {
                        className: y.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: O,
                                className: y.preview,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: y.body,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: y.headerContainer,
                                        children: [
                                            (0, r.jsx)(p.Z, {
                                                user: t,
                                                guildId: n
                                            }),
                                            (0, r.jsx)(o.X6q, {
                                                variant: 'heading-lg/bold',
                                                children: b.intl.string(b.t.b33pLC)
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-sm/medium',
                                                children: b.intl.format(w ? b.t['8F+WNz'] : b.t['/cZp5u'], { username: u.ZP.getName(n, S, t) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(o.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, r.jsx)(g.Z, {
                                                isBlocked: w,
                                                onClick: () => {
                                                    C(),
                                                        (0, f.pQ)(
                                                            I(
                                                                {
                                                                    action: k,
                                                                    analyticsLocations: D
                                                                },
                                                                L
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, r.jsx)(m.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    C(),
                                                        (0, f.pQ)(
                                                            I(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: D
                                                                },
                                                                L
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
        })
    });
}
