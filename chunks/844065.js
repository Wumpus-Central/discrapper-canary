t.d(e, { A: () => h });
var n = t(477900);
t(582128);
var l = t(17928),
    r = t(477782),
    d = t(379257),
    u = t(847599),
    A = t(71393),
    a = t(287809),
    s = t(977997),
    o = t(849736),
    c = t(776781),
    f = t(312006),
    _ = t(280450),
    g = t(309010),
    p = t(105530),
    b = t(354583),
    C = t(418208),
    G = t(375708);
function h(i) {
    let e,
        t,
        h = (0, b.A)(),
        E = h?.id,
        S = h?.guild_id,
        k = (0, l.bG)([A.A], () => A.A.getGuild(S), [S]),
        y = (0, l.bG)([s.A], () => (null != E ? s.A.getVoiceStateForChannel(E, i.id) : null), [E, i.id]),
        N = a.default.getCurrentUser()?.id === i.id,
        U =
            ((e = (0, l.bG)([g.Ay], () => g.Ay.getVoiceChannelId())),
            (t = (0, l.bG)([_.default], () => _.default.getId())),
            (0, p.Ay)(t, e) === p.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK),
        V = (0, l.bG)([f.Ay], () => f.Ay.getPermissionsForUser(i.id, E), [E, i.id]),
        v = (0, c.Ni)(E),
        D = (0, C.zU)();
    if (null == h || null == k || null == y || V.speaker) return null;
    function I() {
        if (null != h)
            if (N) {
                if ((0, C.Cf)(h.id))
                    return void d.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.STAGE_CHANNEL_RAISE_HAND });
                (0, o.e7)(h, !1);
            } else (0, o.SA)(h, i.id);
    }
    return N && D
        ? null
        : v
          ? (0, n.jsx)(r.Dr, {
                id: "invite-speaker",
                label: N ? G.intl.string(G.t["W6c/Vf"]) : G.intl.string(G.t.VUCWcO),
                action: I,
            })
          : U && N
            ? (0, n.jsx)(r.Dr, { id: "invite-speaker", label: G.intl.string(G.t["W6c/Vf"]), action: I })
            : null;
}
