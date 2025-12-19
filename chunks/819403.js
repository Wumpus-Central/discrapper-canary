t.d(n, { Z: () => p });
var i = t(54381);
t(473749);
var l = t(442837),
    r = t(481060),
    a = t(168107),
    o = t(480916),
    u = t(430824),
    c = t(594174),
    s = t(979651),
    d = t(471253),
    f = t(200498),
    g = t(88751),
    v = t(267980),
    h = t(623633),
    b = t(430104),
    _ = t(388032);
function p(e) {
    var n;
    let t = (0, h.Z)(),
        p = null == t ? void 0 : t.id,
        m = null == t ? void 0 : t.guild_id,
        O = (0, l.e7)([u.Z], () => u.Z.getGuild(m), [m]),
        Z = (0, l.e7)([s.Z], () => (null != p ? s.Z.getVoiceStateForChannel(p, e.id) : null), [p, e.id]),
        E = (null == (n = c.default.getCurrentUser()) ? void 0 : n.id) === e.id,
        N = (0, v.Z)(),
        C = (0, l.e7)([g.ZP], () => g.ZP.getPermissionsForUser(e.id, p), [p, e.id]),
        j = (0, f.B)(p),
        y = (0, b.sP)();
    if (null == t || null == O || null == Z || C.speaker) return null;
    let A = () => {
        if (E) {
            if ((0, b.u1)())
                return void a.Z.showAgeVerificationGetStartedModal({ entryPoint: o.cU.STAGE_CHANNEL_RAISE_HAND });
            (0, d.RK)(t, !1);
        } else (0, d._0)(t, e.id);
    };
    return E && y
        ? null
        : j
          ? (0, i.jsx)(r.sNh, {
                id: "invite-speaker",
                label: E ? _.intl.string(_.t["W6c/Vf"]) : _.intl.string(_.t.VUCWcO),
                action: A,
            })
          : N && E
            ? (0, i.jsx)(r.sNh, {
                  id: "invite-speaker",
                  label: _.intl.string(_.t["W6c/Vf"]),
                  action: A,
              })
            : null;
}
