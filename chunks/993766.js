n.d(t, { Z: () => s });
var r = n(192379),
    i = n(442837),
    l = n(499254),
    o = n(213459),
    a = n(592125);
function s(e) {
    let { isProfileFetching: t, wasProfileFetching: n, applicationId: s, channelId: c, commands: u } = e;
    r.useEffect(() => {
        !t && n && null == s && (0, l.Tv)(c);
    }, [t, n, s, c]),
        r.useEffect(() => {
            (0, l.Hm)(c);
        }, [c]);
    let d = (0, i.e7)([o.ZP], () => {
            var e, t;
            return null != (t = null == (e = o.ZP.getApplicationState(s)) ? void 0 : e.fetchState.fetching) && t;
        }),
        p = (0, i.e7)([o.ZP, a.Z], () => {
            var e, t;
            let n = a.Z.getChannel(c);
            return (
                null !=
                    (t =
                        null ==
                        (e = o.ZP.getContextState(
                            null != n
                                ? {
                                      channel: n,
                                      type: 'channel'
                                  }
                                : { type: 'contextless' }
                        ))
                            ? void 0
                            : e.fetchState.fetching) && t
            );
        }),
        h = r.useRef(!1),
        f = r.useRef(!1);
    r.useEffect(() => {
        (h.current = !1), (f.current = !1);
    }, [c]),
        r.useEffect(() => {
            d && (h.current = !0);
        }, [d]),
        r.useEffect(() => {
            p && (f.current = !0);
        }, [p]),
        r.useEffect(() => {
            !d && !p && h.current && f.current && 0 === u.length && (0, l.Tv)(c);
        }, [d, p, u, c]);
}
