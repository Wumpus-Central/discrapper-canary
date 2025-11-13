t.d(n, { Z: () => p });
var i = t(951288);
t(647438);
var l = t(442837),
    r = t(481060),
    a = t(168107),
    o = t(480916),
    u = t(430824),
    s = t(594174),
    d = t(979651),
    c = t(471253),
    f = t(200498),
    g = t(88751),
    h = t(267980),
    v = t(623633),
    _ = t(430104),
    b = t(388032);
function p(e) {
    var n;
    let t = (0, v.Z)(),
        p = null == t ? void 0 : t.id,
        O = null == t ? void 0 : t.guild_id,
        Z = (0, l.e7)([u.Z], () => u.Z.getGuild(O), [O]),
        m = (0, l.e7)([d.Z], () => (null != p ? d.Z.getVoiceStateForChannel(p, e.id) : null), [p, e.id]),
        E = (null == (n = s.default.getCurrentUser()) ? void 0 : n.id) === e.id,
        N = (0, h.Z)(),
        C = (0, l.e7)([g.ZP], () => g.ZP.getPermissionsForUser(e.id, p), [p, e.id]),
        y = (0, f.B)(p),
        j = (0, _.sP)();
    if (null == t || null == Z || null == m || C.speaker) return null;
    let A = () => {
        if (E) {
            if ((0, _.u1)())
                return void a.Z.showAgeVerificationGetStartedModal({ entryPoint: o.cU.STAGE_CHANNEL_RAISE_HAND });
            (0, c.RK)(t, !1);
        } else (0, c._0)(t, e.id);
    };
    return E && j
        ? null
        : y
          ? (0, i.jsx)(r.sNh, {
                id: "invite-speaker",
                label: E ? b.intl.string(b.t["W6c/Vf"]) : b.intl.string(b.t.VUCWcO),
                action: A,
            })
          : N && E
            ? (0, i.jsx)(r.sNh, {
                  id: "invite-speaker",
                  label: b.intl.string(b.t["W6c/Vf"]),
                  action: A,
              })
            : null;
}
