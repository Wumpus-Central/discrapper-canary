l.d(t, { N: () => r });
var n = l(64700),
    i = l(562465),
    s = l(652215);
let a = new Map();
function r(e) {
    let [t, l] = n.useState(a.has(e) ? Array.from(a.get(e)) : []),
        [r, o] = n.useState(!1),
        C = n.useMemo(() => t.map((e) => e.code), [t]),
        d = n.useMemo(() => t.reduce((e, t) => ((e[t.code] = t), e), {}), [t]),
        c = n.useCallback(async () => {
            o(!0);
            let t = (await i.Bo.get({ url: s.Rsh.GUILD_INSTANT_INVITES(e), rejectWithError: !0 })).body.sort(
                (e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime(),
            );
            l(t), a.set(e, new Set(t)), o(!1);
        }, [e]);
    return (
        n.useEffect(() => {
            c();
        }, [e, c]),
        { invitesRaw: t, inviteCodes: C, invitesByCode: d, loading: r }
    );
}
