n.d(t, { Z: () => l });
var r = n(73800),
    i = n(442837),
    a = n(499254),
    o = n(213459),
    s = n(592125);
function l(e) {
    let { isProfileFetching: t, wasProfileFetching: n, applicationId: l, channelId: c, commands: u } = e;
    (r.useEffect(() => {
        !t && n && null == l && (0, a.Tv)(c);
    }, [t, n, l, c]),
        r.useEffect(() => {
            (0, a.Hm)(c);
        }, [c]));
    let d = (0, i.e7)([o.ZP], () => {
            var e, t;
            return null != (t = null == (e = o.ZP.getApplicationState(l)) ? void 0 : e.fetchState.fetching) && t;
        }),
        f = (0, i.e7)([o.ZP, s.Z], () => {
            var e, t;
            let n = s.Z.getChannel(c),
                r =
                    null != n
                        ? {
                              channel: n,
                              type: 'channel'
                          }
                        : { type: 'contextless' };
            return null != (t = null == (e = o.ZP.getContextState(r)) ? void 0 : e.fetchState.fetching) && t;
        }),
        _ = r.useRef(!1),
        p = r.useRef(!1);
    (r.useEffect(() => {
        ((_.current = !1), (p.current = !1));
    }, [c]),
        r.useEffect(() => {
            d && (_.current = !0);
        }, [d]),
        r.useEffect(() => {
            f && (p.current = !0);
        }, [f]),
        r.useEffect(() => {
            !d && !f && _.current && p.current && 0 === u.length && (0, a.Tv)(c);
        }, [d, f, u, c]));
}
