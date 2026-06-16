"use strict";
n.d(t, { l: () => u });
var i = n(64700),
    r = n(17928),
    s = n(919638),
    a = n(52074),
    o = n(309698),
    l = n(652215);
function u(e) {
    let t = (0, r.bG)([s.A], () => s.A.isUnavailable(e?.guild_id)),
        { hasRequestedStatuses: n, status: u } = (0, r.cf)([o.A], () => ({
            hasRequestedStatuses: null != e && o.A.hasRequestedStatuses(e.guild_id),
            status: o.A.getChannelStatus(e),
        })),
        c = e?.type === l.rbe.GUILD_VOICE;
    return (
        i.useEffect(() => {
            n || !c || t || (0, a.U)(e.guild_id);
        }, [c, e?.guild_id, n, t]),
        u
    );
}
