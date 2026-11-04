var a = n(582128),
    i = n(855986),
    l = n(919638),
    s = n(52074),
    r = n(309698),
    u = n(652215);
n.d(
    e,
    {},
    {
        l: function (t) {
            let e = (0, i.bG)([l.A], () => l.A.isUnavailable(t?.guild_id)),
                { hasRequestedStatuses: n, status: o } = (0, i.cf)([r.A], () => ({
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
        },
    },
);
