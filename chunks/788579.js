"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(262763),
    d = n(753727),
    u = n(721592),
    h = n(406704),
    A = n(576705),
    p = n(977997),
    g = n(203982),
    m = n(58736),
    _ = n(652215),
    f = n(985018);
let x = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, d.A)(),
        l = (0, a.bG)([p.A], () => p.A.isInChannel(t.id)),
        x = (0, a.bG)([p.A], () => !r().isEmpty(p.A.getVoiceStatesForChannel(t.id))),
        C = (0, a.bG)([A.A], () => A.A.can(_.xBc.CONNECT, t)),
        { needSubscriptionToAccess: E } = (0, u.A)(t.id),
        I = (0, h.Id)(t),
        b = s.useCallback(() => {
            c.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: E, locked: !1 });
        }, [t, l, E]);
    return (s.useEffect(
        () => (
            g._.subscribe(_.jej.CALL_START, b),
            () => {
                g._.unsubscribe(_.jej.CALL_START, b);
            }
        ),
        [b],
    ),
    h.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }).enabled &&
        !n &&
        !l &&
        C &&
        I &&
        t.isVocalThread())
        ? (0, i.jsx)(m.Ay.Icon, {
              icon: o._jp,
              onClick: b,
              tooltip: x ? f.intl.string(f.t.fdEeb5) : f.intl.string(f.t.focH1t),
          })
        : null;
});
