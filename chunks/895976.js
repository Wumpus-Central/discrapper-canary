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
        v = null !== (t = null == h ? void 0 : h.getGuildId()) && void 0 !== t ? t : n.id,
        [x, p, N, I] = (0, i.Wu)([o.Z, d.ZP], () => [o.Z.getInviteSuggestionRows(), o.Z.getTotalSuggestionsCount() >= 1, o.Z.getInitialCounts(), null == h ? null : d.ZP.getVoiceStatesForChannel(h)], [h]),
        j = (0, i.e7)(
            [a.ZP],
            () => {
                let e = null == h ? null : h.id;
                return null != v ? a.ZP.getProps(v, e) : void 0;
            },
            [h, v],
            s.Z
        ),
        f = l.useMemo(() => {
            let e = new Set();
            return (
                g === u.Iq.STREAM && null != I
                    ? I.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : g !== u.Iq.EMBEDDED_APPLICATION &&
                      null != j &&
                      j.rows.forEach((t) => {
                          t.type === a.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [h]);
    return (
        l.useEffect(() => {
            (0, r.x)({
                omitUserIds: f,
                guild: n,
                channel: h,
                applicationId: m,
                inviteTargetType: g
            }).catch(c.VqG);
        }, [f, n, h, m, g]),
        {
            rows: x,
            showFriends: p,
            initialCounts: N
        }
    );
}
