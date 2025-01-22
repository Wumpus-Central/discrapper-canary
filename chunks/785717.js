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
    o = r(772848),
    s = r(906732),
    l = r(221292);
let u = a.createContext(null),
    c = (e) => {
        let { value: n, children: r, shouldTrackViewOnMount: o = !0 } = e,
            { analyticsLocations: c } = (0, s.ZP)(),
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
                if (!o) return;
                let { analyticsLocations: e, value: n } = f.current;
                (0, l.pQ)({
                    action: 'VIEW',
                    analyticsLocations: e,
                    ...n
                });
            }, [o]),
            (0, i.jsx)(u.Provider, {
                value: n,
                children: r
            })
        );
    },
    d = (e) => {
        var n;
        let { layout: r, userId: i, guildId: s, channelId: l, messageId: c, roleId: d, sourceSessionId: f, showGuildProfile: p = !0 } = e,
            h = null === (n = a.useContext(u)) || void 0 === n ? void 0 : n.sessionId;
        return a.useMemo(
            () => ({
                sessionId: (0, o.Z)(),
                sourceSessionId: null != f ? f : h,
                layout: r,
                userId: i,
                guildId: s,
                channelId: l,
                messageId: c,
                roleId: d,
                showGuildProfile: p
            }),
            [h, r, i, s, l, c, d, f, p]
        );
    },
    f = () => {
        let e = a.useContext(u),
            { analyticsLocations: n } = (0, s.ZP)();
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
