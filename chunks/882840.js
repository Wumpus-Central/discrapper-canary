i.d(t, { l: () => o });
var l = i(64700),
    n = i(311907),
    s = i(919638),
    a = i(52074),
    d = i(309698),
    r = i(652215);
function o(e) {
    let t = (0, n.bG)([s.A], () => s.A.isUnavailable(e?.guild_id)),
        { hasRequestedStatuses: i, status: o } = (0, n.cf)([d.A], () => ({
            hasRequestedStatuses: null != e && d.A.hasRequestedStatuses(e.guild_id),
            status: d.A.getChannelStatus(e),
        })),
        c = e?.type === r.rbe.GUILD_VOICE;
    return (
        l.useEffect(() => {
            i || !c || t || (0, a.U)(e.guild_id);
        }, [c, e?.guild_id, i, t]),
        o
    );
}
