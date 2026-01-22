n.d(t, {
    A: () => y,
});
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(262763),
    u = n(753727),
    d = n(721592),
    f = n(406704),
    p = n(576705),
    h = n(977997),
    b = n(203982),
    g = n(58736),
    m = n(652215),
    A = n(985018);
let y = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, u.A)(),
        i = (0, s.bG)([h.A], () => h.A.isInChannel(t.id)),
        y = (0, s.bG)([h.A], () => !a().isEmpty(h.A.getVoiceStatesForChannel(t.id))),
        O = (0, s.bG)([p.A], () => p.A.can(m.xBc.CONNECT, t)),
        { needSubscriptionToAccess: j } = (0, d.A)(t.id),
        v = (0, f.Id)(t),
        x = l.useCallback(() => {
            c.A.handleVoiceConnect({
                channel: t,
                connected: i,
                needSubscriptionToAccess: j,
                locked: !1,
            });
        }, [t, i, j]);
    return (l.useEffect(
        () => (
            b._.subscribe(m.jej.CALL_START, x),
            () => {
                b._.unsubscribe(m.jej.CALL_START, x);
            }
        ),
        [x],
    ),
    f.io.useExperiment(
        {
            guildId: t.guild_id,
            location: "63250c_1",
        },
        {
            autoTrackExposure: !1,
        },
    ).enabled &&
        !n &&
        !i &&
        O &&
        v &&
        t.isVocalThread())
        ? (0, r.jsx)(g.Ay.Icon, {
              icon: o._jp,
              onClick: x,
              tooltip: y ? A.intl.string(A.t.fdEeb5) : A.intl.string(A.t.focH1t),
          })
        : null;
});
