n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(262763),
    d = n(753727),
    u = n(721592),
    h = n(406704),
    A = n(576705),
    _ = n(977997),
    m = n(203982),
    g = n(58736),
    p = n(652215),
    f = n(985018);
let x = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, d.A)(),
        s = (0, r.bG)([_.A], () => _.A.isInChannel(t.id)),
        x = (0, r.bG)([_.A], () => !a().isEmpty(_.A.getVoiceStatesForChannel(t.id))),
        E = (0, r.bG)([A.A], () => A.A.can(p.xBc.CONNECT, t)),
        { needSubscriptionToAccess: I } = (0, u.A)(t.id),
        C = (0, h.Id)(t),
        N = l.useCallback(() => {
            c.A.handleVoiceConnect({ channel: t, connected: s, needSubscriptionToAccess: I, locked: !1 });
        }, [t, s, I]);
    return (l.useEffect(
        () => (
            m._.subscribe(p.jej.CALL_START, N),
            () => {
                m._.unsubscribe(p.jej.CALL_START, N);
            }
        ),
        [N],
    ),
    h.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }).enabled &&
        !n &&
        !s &&
        E &&
        C &&
        t.isVocalThread())
        ? (0, i.jsx)(g.Ay.Icon, {
              icon: o._jp,
              onClick: N,
              tooltip: x ? f.intl.string(f.t.fdEeb5) : f.intl.string(f.t.focH1t),
          })
        : null;
});
