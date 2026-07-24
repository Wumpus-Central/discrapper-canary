"use strict";
n.d(t, { l: () => d });
var i = n(64700),
    r = n(17928),
    a = n(919638),
    s = n(52074),
    l = n(309698),
    o = n(652215);
function d(e) {
    let t = (0, r.bG)([a.A], () => a.A.isUnavailable(e?.guild_id)),
        { hasRequestedStatuses: n, status: d } = (0, r.cf)([l.A], () => ({
            hasRequestedStatuses: null != e && l.A.hasRequestedStatuses(e.guild_id),
            status: l.A.getChannelStatus(e),
        })),
        c = e?.type === o.rbe.GUILD_VOICE;
    return (
        i.useEffect(() => {
            n || !c || t || (0, s.U)(e.guild_id);
        }, [c, e?.guild_id, n, t]),
        d
    );
}
