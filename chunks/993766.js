n.d(t, { Z: () => o });
var i = n(192379),
    l = n(442837),
    a = n(499254),
    r = n(213459),
    s = n(592125);
function o(e) {
    let { isProfileFetching: t, wasProfileFetching: n, applicationId: o, channelId: c, commands: d } = e;
    i.useEffect(() => {
        !t && n && null == o && (0, a.Tv)(c);
    }, [t, n, o, c]),
        i.useEffect(() => {
            (0, a.Hm)(c);
        }, [c]);
    let u = (0, l.e7)([r.ZP], () => {
            var e, t;
            return null !== (t = null === (e = r.ZP.getApplicationState(o)) || void 0 === e ? void 0 : e.fetchState.fetching) && void 0 !== t && t;
        }),
        h = (0, l.e7)([r.ZP, s.Z], () => {
            var e, t;
            let n = s.Z.getChannel(c);
            return (
                null !==
                    (t =
                        null ===
                            (e = r.ZP.getContextState(
                                null != n
                                    ? {
                                          channel: n,
                                          type: 'channel'
                                      }
                                    : { type: 'contextless' }
                            )) || void 0 === e
                            ? void 0
                            : e.fetchState.fetching) &&
                void 0 !== t &&
                t
            );
        }),
        p = i.useRef(!1),
        m = i.useRef(!1);
    i.useEffect(() => {
        (p.current = !1), (m.current = !1);
    }, [c]),
        i.useEffect(() => {
            u && (p.current = !0);
        }, [u]),
        i.useEffect(() => {
            h && (m.current = !0);
        }, [h]),
        i.useEffect(() => {
            !u && !h && p.current && m.current && 0 === d.length && (0, a.Tv)(c);
        }, [u, h, d, c]);
}
