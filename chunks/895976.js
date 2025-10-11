n.d(t, { B: () => c }), n(388685);
var l = n(647438),
    i = n(442837),
    a = n(247272),
    r = n(751771),
    s = n(938475),
    o = n(245335),
    u = n(981631);
function c(e) {
    let { guild: t, inviteChannel: n, inviteTargetType: c, applicationId: d } = e,
        [g, m, I, p] = (0, i.Wu)(
            [r.Z, s.ZP],
            () => [
                r.Z.getInviteSuggestionRows(),
                r.Z.getTotalSuggestionsCount() >= 1,
                r.Z.getInitialCounts(),
                null == n ? null : s.ZP.getVoiceStatesForChannel(n),
            ],
            [n],
        ),
        f = l.useMemo(() => {
            let e = new Set();
            return (
                c === o.Iq.STREAM &&
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
            (0, a.x)({
                omitUserIds: f,
                guild: t,
                channel: n,
                applicationId: d,
                inviteTargetType: c,
            }).catch(u.VqG);
        }, [f, t, n, d, c]),
        {
            rows: g,
            showFriends: m,
            initialCounts: I,
        }
    );
}
