n.d(t, { l: () => d });
var l = n(64700),
    i = n(17928),
    r = n(919638),
    a = n(52074),
    u = n(309698),
    s = n(652215);
function d(e) {
    let t = (0, i.bG)([r.A], () => r.A.isUnavailable(e?.guild_id)),
        { hasRequestedStatuses: n, status: d } = (0, i.cf)([u.A], () => ({
            hasRequestedStatuses: null != e && u.A.hasRequestedStatuses(e.guild_id),
            status: u.A.getChannelStatus(e),
        })),
        o = e?.type === s.rbe.GUILD_VOICE;
    return (
        l.useEffect(() => {
            n || !o || t || (0, a.U)(e.guild_id);
        }, [o, e?.guild_id, n, t]),
        d
    );
}
