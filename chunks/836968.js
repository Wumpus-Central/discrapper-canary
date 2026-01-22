n.d(t, {
    N: () => a,
}),
    n(896048),
    n(638769);
var r = n(64700),
    l = n(562465),
    i = n(652215);
let o = new Map();

function a(e) {
    let [t, n] = r.useState(o.has(e) ? Array.from(o.get(e)) : []),
        [a, s] = r.useState(!1),
        c = r.useMemo(() => t.map((e) => e.code), [t]),
        d = r.useMemo(() => t.reduce((e, t) => ((e[t.code] = t), e), {}), [t]),
        u = r.useCallback(async () => {
            s(!0);
            let t = (
                await l.Bo.get({
                    url: i.Rsh.GUILD_INSTANT_INVITES(e),
                    rejectWithError: !0,
                })
            ).body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
            n(t), o.set(e, new Set(t)), s(!1);
        }, [e]);
    return (
        r.useEffect(() => {
            u();
        }, [e, u]),
        {
            invitesRaw: t,
            inviteCodes: c,
            invitesByCode: d,
            loading: a,
        }
    );
}
