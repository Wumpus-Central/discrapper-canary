t.d(n, { Z: () => f });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    a = t(430824),
    o = t(594174),
    u = t(979651),
    s = t(471253),
    c = t(200498),
    d = t(88751),
    g = t(267980),
    Z = t(623633),
    b = t(388032);
function f(e) {
    var n;
    let t = (0, Z.Z)(),
        f = null == t ? void 0 : t.id,
        p = null == t ? void 0 : t.guild_id,
        m = (0, r.e7)([a.Z], () => a.Z.getGuild(p), [p]),
        O = (0, r.e7)([u.Z], () => (null != f ? u.Z.getVoiceStateForChannel(f, e.id) : null), [f, e.id]),
        N = (null == (n = o.default.getCurrentUser()) ? void 0 : n.id) === e.id,
        h = (0, g.Z)(),
        j = (0, r.e7)([d.ZP], () => d.ZP.getPermissionsForUser(e.id, f), [f, e.id]),
        P = (0, c.B)(f);
    if (null == t || null == m || null == O || j.speaker) return null;
    let x = () => {
        N ? (0, s.RK)(t, !1) : (0, s._0)(t, e.id);
    };
    return P
        ? (0, l.jsx)(i.sNh, {
              id: 'invite-speaker',
              label: N ? b.NW.string(b.t['W6c/VV']) : b.NW.string(b.t.VUCWcH),
              action: x
          })
        : h && N
          ? (0, l.jsx)(i.sNh, {
                id: 'invite-speaker',
                label: b.NW.string(b.t['W6c/VV']),
                action: x
            })
          : null;
}
