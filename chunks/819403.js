t.d(n, { Z: () => h });
var l = t(54381);
t(473749);
var i = t(442837),
    r = t(481060),
    a = t(168107),
    o = t(480916),
    u = t(430824),
    s = t(594174),
    d = t(979651),
    c = t(471253),
    g = t(200498),
    Z = t(88751),
    f = t(267980),
    b = t(623633),
    O = t(430104),
    m = t(388032);
function h(e) {
    var n;
    let t = (0, b.Z)(),
        h = null == t ? void 0 : t.id,
        p = null == t ? void 0 : t.guild_id,
        P = (0, i.e7)([u.Z], () => u.Z.getGuild(p), [p]),
        j = (0, i.e7)([d.Z], () => (null != h ? d.Z.getVoiceStateForChannel(h, e.id) : null), [h, e.id]),
        v = (null == (n = s.default.getCurrentUser()) ? void 0 : n.id) === e.id,
        N = (0, f.Z)(),
        y = (0, i.e7)([Z.ZP], () => Z.ZP.getPermissionsForUser(e.id, h), [h, e.id]),
        x = (0, g.B)(h),
        E = (0, O.sP)();
    if (null == t || null == P || null == j || y.speaker) return null;
    let _ = () => {
        if (v) {
            if ((0, O.u1)(t.id))
                return void a.Z.showAgeVerificationGetStartedModal({ entryPoint: o.cU.STAGE_CHANNEL_RAISE_HAND });
            (0, c.RK)(t, !1);
        } else (0, c._0)(t, e.id);
    };
    return v && E
        ? null
        : x
          ? (0, l.jsx)(r.sNh, {
                id: "invite-speaker",
                label: v ? m.intl.string(m.t["W6c/Vf"]) : m.intl.string(m.t.VUCWcO),
                action: _,
            })
          : N && v
            ? (0, l.jsx)(r.sNh, {
                  id: "invite-speaker",
                  label: m.intl.string(m.t["W6c/Vf"]),
                  action: _,
              })
            : null;
}
