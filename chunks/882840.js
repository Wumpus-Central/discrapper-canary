n.d(e, { l: () => o });
var a = n(64700),
    l = n(17928),
    i = n(919638),
    s = n(52074),
    r = n(309698),
    u = n(652215);
function o(t) {
    let e = (0, l.bG)([i.A], () => i.A.isUnavailable(t?.guild_id)),
        { hasRequestedStatuses: n, status: o } = (0, l.cf)([r.A], () => ({
            hasRequestedStatuses: null != t && r.A.hasRequestedStatuses(t.guild_id),
            status: r.A.getChannelStatus(t),
        })),
        d = t?.type === u.rbe.GUILD_VOICE;
    return (
        a.useEffect(() => {
            n || !d || e || (0, s.U)(t.guild_id);
        }, [d, t?.guild_id, n, e]),
        o
    );
}
