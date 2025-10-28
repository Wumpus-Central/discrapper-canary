t.d(n, { Z: () => v });
var i = t(951288);
t(647438);
var l = t(442837),
    r = t(481060),
    a = t(430824),
    o = t(594174),
    u = t(979651),
    s = t(471253),
    d = t(200498),
    c = t(88751),
    f = t(267980),
    g = t(623633),
    h = t(388032);
function v(e) {
    var n;
    let t = (0, g.Z)(),
        v = null == t ? void 0 : t.id,
        b = null == t ? void 0 : t.guild_id,
        _ = (0, l.e7)([a.Z], () => a.Z.getGuild(b), [b]),
        p = (0, l.e7)([u.Z], () => (null != v ? u.Z.getVoiceStateForChannel(v, e.id) : null), [v, e.id]),
        O = (null == (n = o.default.getCurrentUser()) ? void 0 : n.id) === e.id,
        Z = (0, f.Z)(),
        m = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, v), [v, e.id]),
        E = (0, d.B)(v);
    if (null == t || null == _ || null == p || m.speaker) return null;
    let C = () => {
        O ? (0, s.RK)(t, !1) : (0, s._0)(t, e.id);
    };
    return E
        ? (0, i.jsx)(r.sNh, {
              id: "invite-speaker",
              label: O ? h.intl.string(h.t["W6c/Vf"]) : h.intl.string(h.t.VUCWcO),
              action: C,
          })
        : Z && O
          ? (0, i.jsx)(r.sNh, {
                id: "invite-speaker",
                label: h.intl.string(h.t["W6c/Vf"]),
                action: C,
            })
          : null;
}
