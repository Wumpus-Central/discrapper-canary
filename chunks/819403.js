t.d(n, { Z: () => f });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(430824),
    o = t(594174),
    u = t(979651),
    s = t(471253),
    c = t(200498),
    d = t(88751),
    g = t(267980),
    b = t(623633),
    Z = t(388032);
function f(e) {
    var n;
    let t = (0, b.Z)(),
        f = null == t ? void 0 : t.id,
        p = null == t ? void 0 : t.guild_id,
        O = (0, i.e7)([a.Z], () => a.Z.getGuild(p), [p]),
        m = (0, i.e7)([u.Z], () => (null != f ? u.Z.getVoiceStateForChannel(f, e.id) : null), [f, e.id]),
        h = (null == (n = o.default.getCurrentUser()) ? void 0 : n.id) === e.id,
        j = (0, g.Z)(),
        P = (0, i.e7)([d.ZP], () => d.ZP.getPermissionsForUser(e.id, f), [f, e.id]),
        v = (0, c.B)(f);
    if (null == t || null == O || null == m || P.speaker) return null;
    let x = () => {
        h ? (0, s.RK)(t, !1) : (0, s._0)(t, e.id);
    };
    return v
        ? (0, l.jsx)(r.sNh, {
              id: 'invite-speaker',
              label: h ? Z.intl.string(Z.t['W6c/VV']) : Z.intl.string(Z.t.VUCWcH),
              action: x
          })
        : j && h
          ? (0, l.jsx)(r.sNh, {
                id: 'invite-speaker',
                label: Z.intl.string(Z.t['W6c/VV']),
                action: x
            })
          : null;
}
