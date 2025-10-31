t.d(n, { Z: () => b });
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
    g = t(647767),
    h = t(623633),
    v = t(388032);
function b(e) {
    var n;
    let t = (0, h.Z)(),
        b = null == t ? void 0 : t.id,
        _ = null == t ? void 0 : t.guild_id,
        p = (0, l.e7)([a.Z], () => a.Z.getGuild(_), [_]),
        O = (0, l.e7)([u.Z], () => (null != b ? u.Z.getVoiceStateForChannel(b, e.id) : null), [b, e.id]),
        Z = (null == (n = o.default.getCurrentUser()) ? void 0 : n.id) === e.id,
        m = (0, f.Z)(),
        E = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, b), [b, e.id]),
        C = (0, d.B)(b),
        N = (0, g.s)();
    if (null == t || null == p || null == O || E.speaker) return null;
    let j = () => {
        Z ? (0, s.RK)(t, !1) : (0, s._0)(t, e.id);
    };
    return Z && N
        ? null
        : C
          ? (0, i.jsx)(r.sNh, {
                id: "invite-speaker",
                label: Z ? v.intl.string(v.t["W6c/Vf"]) : v.intl.string(v.t.VUCWcO),
                action: j,
            })
          : m && Z
            ? (0, i.jsx)(r.sNh, {
                  id: "invite-speaker",
                  label: v.intl.string(v.t["W6c/Vf"]),
                  action: j,
              })
            : null;
}
