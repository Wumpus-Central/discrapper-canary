n.d(t, { B: () => d }), n(388685);
var l = n(192379),
    i = n(442837),
    r = n(247272),
    s = n(751771),
    a = n(938475),
    o = n(245335),
    u = n(981631);
function d(e) {
    let { guild: t, inviteChannel: n, inviteTargetType: d, applicationId: c } = e,
        [g, h, m, p] = (0, i.Wu)([s.Z, a.ZP], () => [s.Z.getInviteSuggestionRows(), s.Z.getTotalSuggestionsCount() >= 1, s.Z.getInitialCounts(), null == n ? null : a.ZP.getVoiceStatesForChannel(n)], [n]),
        v = l.useMemo(() => {
            let e = new Set();
            return (
                d === o.Iq.STREAM &&
                    null != p &&
                    p.forEach((t) => {
                        let { user: n } = t;
                        e.add(n.id);
                    }),
                e
            );
        }, [n]);
    return (
        l.useEffect(() => {
            (0, r.x)({
                omitUserIds: v,
                guild: t,
                channel: n,
                applicationId: c,
                inviteTargetType: d
            }).catch(u.VqG);
        }, [v, t, n, c, d]),
        {
            rows: g,
            showFriends: h,
            initialCounts: m
        }
    );
}
