t.d(n, { Z: () => g });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    u = t(430824),
    a = t(594174),
    o = t(979651),
    c = t(471253),
    d = t(200498),
    s = t(88751),
    _ = t(267980),
    E = t(623633),
    f = t(388032);
function g(e) {
    var n;
    let t = (0, E.Z)(),
        g = null == t ? void 0 : t.id,
        A = null == t ? void 0 : t.guild_id,
        h = (0, i.e7)([u.Z], () => u.Z.getGuild(A), [A]),
        T = (0, i.e7)([o.Z], () => (null != g ? o.Z.getVoiceStateForChannel(g, e.id) : null), [g, e.id]),
        b = (null == (n = a.default.getCurrentUser()) ? void 0 : n.id) === e.id,
        v = (0, _.Z)(),
        O = (0, i.e7)([s.ZP], () => s.ZP.getPermissionsForUser(e.id, g), [g, e.id]),
        S = (0, d.B)(g);
    if (null == t || null == h || null == T || O.speaker) return null;
    let y = () => {
        b ? (0, c.RK)(t, !1) : (0, c._0)(t, e.id);
    };
    return S
        ? (0, l.jsx)(r.sNh, {
              id: 'invite-speaker',
              label: b ? f.intl.string(f.t['W6c/VV']) : f.intl.string(f.t.VUCWcH),
              action: y
          })
        : v && b
          ? (0, l.jsx)(r.sNh, {
                id: 'invite-speaker',
                label: f.intl.string(f.t['W6c/VV']),
                action: y
            })
          : null;
}
