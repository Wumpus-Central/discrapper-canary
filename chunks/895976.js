n.d(t, { B: () => h }), n(388685);
var l = n(192379),
    i = n(442837),
    r = n(902704),
    s = n(247272),
    a = n(662594),
    o = n(751771),
    u = n(938475),
    d = n(245335),
    c = n(981631);
function h(e) {
    var t;
    let { guild: n, inviteChannel: h, inviteTargetType: g, applicationId: m } = e,
        v = null != (t = null == h ? void 0 : h.getGuildId()) ? t : n.id,
        [x, p, I, N] = (0, i.Wu)([o.Z, u.ZP], () => [o.Z.getInviteSuggestionRows(), o.Z.getTotalSuggestionsCount() >= 1, o.Z.getInitialCounts(), null == h ? null : u.ZP.getVoiceStatesForChannel(h)], [h]),
        f = (0, i.e7)(
            [a.ZP],
            () => {
                let e = null == h ? null : h.id;
                return null != v ? a.ZP.getProps(v, e) : void 0;
            },
            [h, v],
            r.Z
        ),
        j = l.useMemo(() => {
            let e = new Set();
            return (
                g === d.Iq.STREAM && null != N
                    ? N.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : g !== d.Iq.EMBEDDED_APPLICATION &&
                      null != f &&
                      f.rows.forEach((t) => {
                          t.type === a.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [h]);
    return (
        l.useEffect(() => {
            (0, s.x)({
                omitUserIds: j,
                guild: n,
                channel: h,
                applicationId: m,
                inviteTargetType: g
            }).catch(c.VqG);
        }, [j, n, h, m, g]),
        {
            rows: x,
            showFriends: p,
            initialCounts: I
        }
    );
}
