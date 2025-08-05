t.d(n, { Z: () => b });
var l = t(255367);
t(73800);
var i = t(442837),
    r = t(481060),
    a = t(430824),
    o = t(594174),
    u = t(979651),
    s = t(471253),
    c = t(200498),
    d = t(88751),
    g = t(267980),
    Z = t(623633),
    f = t(388032);
function b(e) {
    var n;
    let t = (0, Z.Z)(),
        b = null == t ? void 0 : t.id,
        O = null == t ? void 0 : t.guild_id,
        p = (0, i.e7)([a.Z], () => a.Z.getGuild(O), [O]),
        m = (0, i.e7)([u.Z], () => (null != b ? u.Z.getVoiceStateForChannel(b, e.id) : null), [b, e.id]),
        h = (null == (n = o.default.getCurrentUser()) ? void 0 : n.id) === e.id,
        j = (0, g.Z)(),
        P = (0, i.e7)([d.ZP], () => d.ZP.getPermissionsForUser(e.id, b), [b, e.id]),
        v = (0, c.B)(b);
    if (null == t || null == p || null == m || P.speaker) return null;
    let x = () => {
        h ? (0, s.RK)(t, !1) : (0, s._0)(t, e.id);
    };
    return v
        ? (0, l.jsx)(r.sNh, {
              id: 'invite-speaker',
              label: h ? f.intl.string(f.t['W6c/VV']) : f.intl.string(f.t.VUCWcH),
              action: x
          })
        : j && h
          ? (0, l.jsx)(r.sNh, {
                id: 'invite-speaker',
                label: f.intl.string(f.t['W6c/VV']),
                action: x
            })
          : null;
}
