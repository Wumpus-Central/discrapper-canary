r.d(n, {
    KZ: function () {
        return f;
    },
    Mt: function () {
        return c;
    },
    ZB: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(772848),
    o = r(906732),
    l = r(221292);
let u = a.createContext(null),
    c = (e) => {
        let { value: n, children: r, shouldTrackViewOnMount: s = !0 } = e,
            { analyticsLocations: c } = (0, o.ZP)(),
            d = {
                analyticsLocations: c,
                value: n
            },
            f = a.useRef(d);
        return (
            a.useEffect(() => {
                f.current = d;
            }),
            a.useEffect(() => {
                if (!s) return;
                let { analyticsLocations: e, value: n } = f.current;
                (0, l.pQ)({
                    action: 'VIEW',
                    analyticsLocations: e,
                    ...n
                });
            }, [s]),
            (0, i.jsx)(u.Provider, {
                value: n,
                children: r
            })
        );
    },
    d = (e) => {
        var n;
        let { layout: r, userId: i, guildId: o, channelId: l, messageId: c, roleId: d, sourceSessionId: f, showGuildProfile: _ = !0 } = e,
            h = null === (n = a.useContext(u)) || void 0 === n ? void 0 : n.sessionId;
        return a.useMemo(
            () => ({
                sessionId: (0, s.Z)(),
                sourceSessionId: null != f ? f : h,
                layout: r,
                userId: i,
                guildId: o,
                channelId: l,
                messageId: c,
                roleId: d,
                showGuildProfile: _
            }),
            [h, r, i, o, l, c, d, f, _]
        );
    },
    f = () => {
        let e = a.useContext(u),
            { analyticsLocations: n } = (0, o.ZP)();
        return {
            context: e,
            trackUserProfileAction: a.useCallback(
                (r) => {
                    if (null != e)
                        (0, l.pQ)({
                            analyticsLocations: n,
                            ...e,
                            ...r
                        });
                },
                [e, n]
            )
        };
    };
