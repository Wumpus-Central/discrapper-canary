n.d(t, { Z: () => s });
var i = n(647438),
    r = n(442837),
    l = n(499254),
    a = n(213459),
    o = n(592125);
function s(e) {
    let { isProfileFetching: t, wasProfileFetching: n, applicationId: s, channelId: c, commands: u } = e;
    i.useEffect(() => {
        !t && n && null == s && (0, l.Tv)(c);
    }, [t, n, s, c]),
        i.useEffect(() => {
            (0, l.Hm)(c);
        }, [c]);
    let d = (0, r.e7)([a.ZP], () => {
            var e, t;
            return null != (t = null == (e = a.ZP.getApplicationState(s)) ? void 0 : e.fetchState.fetching) && t;
        }),
        p = (0, r.e7)([a.ZP, o.Z], () => {
            var e, t;
            let n = o.Z.getChannel(c);
            return (
                null !=
                    (t =
                        null ==
                        (e = a.ZP.getContextState(
                            null != n
                                ? {
                                      channel: n,
                                      type: "channel",
                                  }
                                : { type: "contextless" },
                        ))
                            ? void 0
                            : e.fetchState.fetching) && t
            );
        }),
        h = i.useRef(!1),
        f = i.useRef(!1);
    i.useEffect(() => {
        (h.current = !1), (f.current = !1);
    }, [c]),
        i.useEffect(() => {
            d && (h.current = !0);
        }, [d]),
        i.useEffect(() => {
            p && (f.current = !0);
        }, [p]),
        i.useEffect(() => {
            !d && !p && h.current && f.current && 0 === u.length && (0, l.Tv)(c);
        }, [d, p, u, c]);
}
