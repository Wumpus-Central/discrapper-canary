t.d(n, { Z: () => b });
var l = t(951288);
t(647438);
var i = t(442837),
    r = t(481060),
    a = t(430824),
    u = t(594174),
    o = t(979651),
    s = t(471253),
    d = t(200498),
    c = t(88751),
    g = t(267980),
    Z = t(623633),
    f = t(388032);
function b(e) {
    var n;
    let t = (0, Z.Z)(),
        b = null == t ? void 0 : t.id,
        O = null == t ? void 0 : t.guild_id,
        m = (0, i.e7)([a.Z], () => a.Z.getGuild(O), [O]),
        p = (0, i.e7)([o.Z], () => (null != b ? o.Z.getVoiceStateForChannel(b, e.id) : null), [b, e.id]),
        h = (null == (n = u.default.getCurrentUser()) ? void 0 : n.id) === e.id,
        j = (0, g.Z)(),
        P = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, b), [b, e.id]),
        v = (0, d.B)(b);
    if (null == t || null == m || null == p || P.speaker) return null;
    let x = () => {
        h ? (0, s.RK)(t, !1) : (0, s._0)(t, e.id);
    };
    return v
        ? (0, l.jsx)(r.sNh, {
              id: "invite-speaker",
              label: h ? f.intl.string(f.t["W6c/Vf"]) : f.intl.string(f.t.VUCWcO),
              action: x,
          })
        : j && h
          ? (0, l.jsx)(r.sNh, {
                id: "invite-speaker",
                label: f.intl.string(f.t["W6c/Vf"]),
                action: x,
            })
          : null;
}
