n.d(t, { B: () => h }), n(47120);
var l = n(192379),
    i = n(442837),
    s = n(902704),
    r = n(247272),
    a = n(662594),
    o = n(751771),
    d = n(938475),
    u = n(245335),
    c = n(981631);
function h(e) {
    var t;
    let { guild: n, inviteChannel: h, inviteTargetType: g, applicationId: m } = e,
        x = null != (t = null == h ? void 0 : h.getGuildId()) ? t : n.id,
        [v, p, N, I] = (0, i.Wu)([o.Z, d.ZP], () => [o.Z.getInviteSuggestionRows(), o.Z.getTotalSuggestionsCount() >= 1, o.Z.getInitialCounts(), null == h ? null : d.ZP.getVoiceStatesForChannel(h)], [h]),
        f = (0, i.e7)(
            [a.ZP],
            () => {
                let e = null == h ? null : h.id;
                return null != x ? a.ZP.getProps(x, e) : void 0;
            },
            [h, x],
            s.Z
        ),
        j = l.useMemo(() => {
            let e = new Set();
            return (
                g === u.Iq.STREAM && null != I
                    ? I.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : g !== u.Iq.EMBEDDED_APPLICATION &&
                      null != f &&
                      f.rows.forEach((t) => {
                          t.type === a.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [h]);
    return (
        l.useEffect(() => {
            (0, r.x)({
                omitUserIds: j,
                guild: n,
                channel: h,
                applicationId: m,
                inviteTargetType: g
            }).catch(c.VqG);
        }, [j, n, h, m, g]),
        {
            rows: v,
            showFriends: p,
            initialCounts: N
        }
    );
}
