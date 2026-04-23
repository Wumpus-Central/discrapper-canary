n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(477782),
    r = n(139716),
    d = n(847599),
    o = n(71393),
    s = n(287809),
    u = n(977997),
    c = n(849736),
    A = n(776781),
    g = n(312006),
    f = n(495544),
    E = n(309010),
    b = n(105530),
    x = n(354583),
    m = n(418208),
    C = n(985018);
function I(e) {
    let t,
        n,
        I = (0, x.A)(),
        h = I?.id,
        S = I?.guild_id,
        v = (0, l.bG)([o.A], () => o.A.getGuild(S), [S]),
        _ = (0, l.bG)([u.A], () => (null != h ? u.A.getVoiceStateForChannel(h, e.id) : null), [h, e.id]),
        M = s.default.getCurrentUser()?.id === e.id,
        D =
            ((t = (0, l.bG)([E.A], () => E.A.getVoiceChannelId())),
            (n = (0, l.bG)([f.default], () => f.default.getId())),
            (0, b.Ay)(n, t) === b.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK),
        N = (0, l.bG)([g.Ay], () => g.Ay.getPermissionsForUser(e.id, h), [h, e.id]),
        j = (0, A.Ni)(h),
        y = (0, m.zU)();
    if (null == I || null == v || null == _ || N.speaker) return null;
    let p = () => {
        if (M) {
            if ((0, m.Cf)(I.id))
                return void r.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND });
            (0, c.e7)(I, !1);
        } else (0, c.SA)(I, e.id);
    };
    return M && y
        ? null
        : j
          ? (0, i.jsx)(a.Dr, {
                id: "invite-speaker",
                label: M ? C.intl.string(C.t["W6c/Vf"]) : C.intl.string(C.t.VUCWcO),
                action: p,
            })
          : D && M
            ? (0, i.jsx)(a.Dr, { id: "invite-speaker", label: C.intl.string(C.t["W6c/Vf"]), action: p })
            : null;
}
