n.d(t, {
    KZ: () => d,
    Mt: () => u,
    ZB: () => c
});
var i = n(200651),
    r = n(192379),
    a = n(772848),
    s = n(906732),
    o = n(221292);
let l = r.createContext(null),
    u = (e) => {
        let { value: t, children: n, shouldTrackViewOnMount: a = !0 } = e,
            { analyticsLocations: u } = (0, s.ZP)(),
            c = {
                analyticsLocations: u,
                value: t
            },
            d = r.useRef(c);
        return (
            r.useEffect(() => {
                d.current = c;
            }),
            r.useEffect(() => {
                if (!a) return;
                let { analyticsLocations: e, value: t } = d.current;
                (0, o.pQ)({
                    action: 'VIEW',
                    analyticsLocations: e,
                    ...t
                });
            }, [a]),
            (0, i.jsx)(l.Provider, {
                value: t,
                children: n
            })
        );
    },
    c = (e) => {
        var t;
        let { layout: n, userId: i, guildId: s, channelId: o, messageId: u, roleId: c, sourceSessionId: d, showGuildProfile: f = !0 } = e,
            _ = null === (t = r.useContext(l)) || void 0 === t ? void 0 : t.sessionId;
        return r.useMemo(
            () => ({
                sessionId: (0, a.Z)(),
                sourceSessionId: null != d ? d : _,
                layout: n,
                userId: i,
                guildId: s,
                channelId: o,
                messageId: u,
                roleId: c,
                showGuildProfile: f
            }),
            [_, n, i, s, o, u, c, d, f]
        );
    },
    d = () => {
        let e = r.useContext(l),
            { analyticsLocations: t } = (0, s.ZP)();
        return {
            context: e,
            trackUserProfileAction: r.useCallback(
                (n) => {
                    null != e &&
                        (0, o.pQ)({
                            analyticsLocations: t,
                            ...e,
                            ...n
                        });
                },
                [e, t]
            )
        };
    };
