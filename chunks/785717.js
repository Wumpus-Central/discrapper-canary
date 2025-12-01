n.d(t, {
    KZ: () => p,
    Mt: () => d,
    ZB: () => f,
});
var r = n(54381),
    i = n(473749),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = i.createContext(null),
    d = (e) => {
        let { value: t, children: n, openedAt: a, fetchStartedAt: l, fetchEndedAt: d, isLoaded: f = !1 } = e,
            { analyticsLocations: p } = (0, o.ZP)(),
            _ = i.useRef(void 0),
            m = {
                analyticsLocations: p,
                value: t,
            },
            h = i.useRef(m);
        return (
            i.useEffect(() => {
                h.current = m;
            }),
            i.useEffect(() => {
                let e = Date.now();
                if ((null == _.current && null != a && (_.current = e - a), !f)) return;
                let { analyticsLocations: t, value: n } = h.current;
                (0, s.pQ)(
                    c(
                        {
                            action: "VIEW",
                            analyticsLocations: t,
                        },
                        n,
                    ),
                ),
                    (0, s.RV)(
                        c(
                            {
                                profileUi: "USER_PROFILE",
                                timeToInteractiveMs: _.current,
                                timeToLoadMs: null != a ? e - a : void 0,
                                timeToFetchMs: null != l && null != d ? d - l : void 0,
                                viewStartedAt: a,
                                fetchStartedAt: l,
                                analyticsLocations: t,
                            },
                            n,
                        ),
                    );
            }, [f]),
            (0, r.jsx)(u.Provider, {
                value: t,
                children: n,
            })
        );
    },
    f = (e) => {
        var t;
        let {
                layout: n,
                userId: r,
                guildId: o,
                channelId: s,
                messageId: l,
                roleId: c,
                sourceSessionId: d,
                showGuildProfile: f = !0,
            } = e,
            p = null == (t = i.useContext(u)) ? void 0 : t.sessionId;
        return i.useMemo(
            () => ({
                sessionId: (0, a.Z)(),
                sourceSessionId: null != d ? d : p,
                layout: n,
                userId: r,
                guildId: o,
                channelId: s,
                messageId: l,
                roleId: c,
                showGuildProfile: f,
            }),
            [p, n, r, o, s, l, c, d, f],
        );
    },
    p = () => {
        let e = i.useContext(u),
            { analyticsLocations: t } = (0, o.ZP)();
        return {
            context: e,
            trackUserProfileAction: i.useCallback(
                (n) => {
                    null != e && (0, s.pQ)(c({ analyticsLocations: t }, e, n));
                },
                [e, t],
            ),
            trackUserProfileEditAction: i.useCallback(
                (n) => {
                    null != e && (0, s.Of)(c({ analyticsLocations: t }, e, n));
                },
                [e, t],
            ),
            trackUserProfileEditSaved: i.useCallback(
                (n) => {
                    null != e && (0, s.V1)(c({ analyticsLocations: t }, e, n));
                },
                [e, t],
            ),
            trackUserProfileWishlistAction: i.useCallback(
                (n) => {
                    null != e && (0, s.Er)(c({ analyticsLocations: t }, e, n));
                },
                [e, t],
            ),
        };
    };
