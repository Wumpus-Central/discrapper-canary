n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(262763),
    c = n(753727),
    u = n(721592),
    h = n(406704),
    A = n(576705),
    g = n(977997),
    m = n(203982),
    p = n(58736),
    _ = n(652215),
    x = n(985018);
let f = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, c.A)(),
        s = (0, r.bG)([g.A], () => g.A.isInChannel(t.id)),
        f = (0, r.bG)([g.A], () => !a().isEmpty(g.A.getVoiceStatesForChannel(t.id))),
        E = (0, r.bG)([A.A], () => A.A.can(_.xBc.CONNECT, t)),
        { needSubscriptionToAccess: C } = (0, u.A)(t.id),
        I = (0, h.Id)(t),
        S = l.useCallback(() => {
            d.A.handleVoiceConnect({ channel: t, connected: s, needSubscriptionToAccess: C, locked: !1 });
        }, [t, s, C]);
    return (l.useEffect(
        () => (
            m._.subscribe(_.jej.CALL_START, S),
            () => {
                m._.unsubscribe(_.jej.CALL_START, S);
            }
        ),
        [S],
    ),
    h.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }).enabled &&
        !n &&
        !s &&
        E &&
        I &&
        t.isVocalThread())
        ? (0, i.jsx)(p.Ay.Icon, {
              icon: o._jp,
              onClick: S,
              tooltip: f ? x.intl.string(x.t.fdEeb5) : x.intl.string(x.t.focH1t),
          })
        : null;
});
