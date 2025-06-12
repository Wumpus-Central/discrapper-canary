n.d(t, {
    KZ: () => f,
    Mt: () => d,
    ZB: () => _
});
var r = n(255367),
    i = n(73800),
    a = n(772848),
    o = n(906732),
    s = n(221292);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = i.createContext(null),
    d = (e) => {
        let { value: t, children: n, openedAt: a, fetchStartedAt: l, fetchEndedAt: d, isLoaded: _ = !1 } = e,
            { analyticsLocations: f } = (0, o.ZP)(),
            p = i.useRef(void 0),
            h = {
                analyticsLocations: f,
                value: t
            },
            m = i.useRef(h);
        return (
            i.useEffect(() => {
                m.current = h;
            }),
            i.useEffect(() => {
                let e = Date.now();
                if ((null == p.current && null != a && (p.current = e - a), !_)) return;
                let { analyticsLocations: t, value: n } = m.current;
                (0, s.pQ)(
                    c(
                        {
                            action: 'VIEW',
                            analyticsLocations: t
                        },
                        n
                    )
                ),
                    (0, s.RV)(
                        c(
                            {
                                profileUi: 'USER_PROFILE',
                                timeToInteractiveMs: p.current,
                                timeToLoadMs: null != a ? e - a : void 0,
                                timeToFetchMs: null != l && null != d ? d - l : void 0,
                                viewStartedAt: a,
                                fetchStartedAt: l,
                                analyticsLocations: t
                            },
                            n
                        )
                    );
            }, [_]),
            (0, r.jsx)(u.Provider, {
                value: t,
                children: n
            })
        );
    },
    _ = (e) => {
        var t;
        let { layout: n, userId: r, guildId: o, channelId: s, messageId: l, roleId: c, sourceSessionId: d, showGuildProfile: _ = !0 } = e,
            f = null == (t = i.useContext(u)) ? void 0 : t.sessionId;
        return i.useMemo(
            () => ({
                sessionId: (0, a.Z)(),
                sourceSessionId: null != d ? d : f,
                layout: n,
                userId: r,
                guildId: o,
                channelId: s,
                messageId: l,
                roleId: c,
                showGuildProfile: _
            }),
            [f, n, r, o, s, l, c, d, _]
        );
    },
    f = () => {
        let e = i.useContext(u),
            { analyticsLocations: t } = (0, o.ZP)();
        return {
            context: e,
            trackUserProfileAction: i.useCallback(
                (n) => {
                    null != e && (0, s.pQ)(c({ analyticsLocations: t }, e, n));
                },
                [e, t]
            )
        };
    };
