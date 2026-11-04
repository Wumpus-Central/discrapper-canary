var i = n(582128),
    r = n(505779),
    a = n(855986),
    s = n(574332),
    l = n(311043),
    o = n(454908),
    d = n(184989),
    c = n(299091),
    u = n(927813),
    _ = n(652215);
function E(e) {
    let t = e?.websites?.find((e) => {
            let { category: t } = e;
            return t === r.V1.DISCORD;
        }),
        n = t?.url.split("/").pop();
    return null != n && "" !== n ? n : null;
}
function A(e) {
    return !(
        null == e ||
        e.state === _.elq.RESOLVING ||
        e.state === _.elq.EXPIRED ||
        e.state === _.elq.BANNED ||
        (null != e.expires_at && new Date(e.expires_at).getTime() <= Date.now())
    );
}
let h = (0, a.UT)(c.A, {
    getQueryId: _.fic.GAME_PROFILE_INVITE,
    staleAfter: 5 * u.A.Seconds.MINUTE,
    failureStaleAfter: 5 * u.A.Seconds.MINUTE,
    get: (e) => {
        if (null == e) return null;
        let t = c.A.getInvite(e);
        return A(t) ? t : null;
    },
    load: async (e) => {
        if (null != e && (await s.Ay.resolveInvite(e, "game_profile"), !A(c.A.getInvite(e))))
            throw Error(`Failed to resolve game profile invite: ${e}`);
    },
});
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            let n = i.useRef(t);
            i.useEffect(() => {
                n.current = t;
            }, [t]);
            let r = E(e),
                { data: s, error: l, isLoading: o } = h(r),
                c = null != r && null == s && (o || null == l),
                u = (0, a.bG)([d.A], () => s?.guild?.id != null && d.A.isMember(s?.guild?.id));
            return (
                i.useEffect(() => {
                    null != s && n.current?.(s);
                }, [s]),
                { invite: s, isMember: u, isResolving: c }
            );
        },
        UT: function (e) {
            o.I.fetchMany([e]).then(() => {
                let t = E(l.A.getGame(e));
                null != t && h.fetchMany([t]);
            });
        },
        rG: function (e) {
            return (
                e?.websites?.some((e) => {
                    let { category: t } = e;
                    return t === r.V1.DISCORD;
                }) ?? !1
            );
        },
    },
);
