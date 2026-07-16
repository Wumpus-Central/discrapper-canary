t.d(e, { A: () => h });
var l = t(627968);
t(64700);
var n = t(17928),
    r = t(477782),
    d = t(379257),
    A = t(847599),
    a = t(71393),
    s = t(287809),
    u = t(977997),
    o = t(849736),
    c = t(776781),
    _ = t(312006),
    f = t(280450),
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
        k = (0, n.bG)([a.A], () => a.A.getGuild(S), [S]),
        y = (0, n.bG)([u.A], () => (null != E ? u.A.getVoiceStateForChannel(E, i.id) : null), [E, i.id]),
        N = s.default.getCurrentUser()?.id === i.id,
        U =
            ((e = (0, n.bG)([g.Ay], () => g.Ay.getVoiceChannelId())),
            (t = (0, n.bG)([f.default], () => f.default.getId())),
            (0, p.Ay)(t, e) === p.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK),
        V = (0, n.bG)([_.Ay], () => _.Ay.getPermissionsForUser(i.id, E), [E, i.id]),
        v = (0, c.Ni)(E),
        D = (0, C.zU)();
    if (null == h || null == k || null == y || V.speaker) return null;
    let I = () => {
        if (N) {
            if ((0, C.Cf)(h.id))
                return void d.A.showAgeVerificationGetStartedModal({ entryPoint: A.q1.STAGE_CHANNEL_RAISE_HAND });
            (0, o.e7)(h, !1);
        } else (0, o.SA)(h, i.id);
    };
    return N && D
        ? null
        : v
          ? (0, l.jsx)(r.Dr, {
                id: "invite-speaker",
                label: N ? G.intl.string(G.t["W6c/Vf"]) : G.intl.string(G.t.VUCWcO),
                action: I,
            })
          : U && N
            ? (0, l.jsx)(r.Dr, { id: "invite-speaker", label: G.intl.string(G.t["W6c/Vf"]), action: I })
            : null;
}
