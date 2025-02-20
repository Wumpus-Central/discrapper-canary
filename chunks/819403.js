n.d(t, { Z: () => Z });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(430824),
    a = n(594174),
    u = n(979651),
    s = n(471253),
    c = n(200498),
    d = n(88751),
    f = n(267980),
    g = n(623633),
    b = n(388032);
function Z(e) {
    var t;
    let n = (0, g.Z)(),
        Z = null == n ? void 0 : n.id,
        v = null == n ? void 0 : n.guild_id,
        p = (0, l.e7)([o.Z], () => o.Z.getGuild(v), [v]),
        N = (0, l.e7)([u.Z], () => (null != Z ? u.Z.getVoiceStateForChannel(Z, e.id) : null), [Z, e.id]),
        O = (null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
        m = (0, f.Z)(),
        y = (0, l.e7)([d.ZP], () => d.ZP.getPermissionsForUser(e.id, Z), [Z, e.id]),
        h = (0, c.B)(Z);
    if (null == n || null == p || null == N || y.speaker) return null;
    let j = () => {
        O ? (0, s.RK)(n, !1) : (0, s._0)(n, e.id);
    };
    return h
        ? (0, i.jsx)(r.sNh, {
              id: 'invite-speaker',
              label: O ? b.NW.string(b.t['W6c/VV']) : b.NW.string(b.t.VUCWcH),
              action: j
          })
        : m && O
          ? (0, i.jsx)(r.sNh, {
                id: 'invite-speaker',
                label: b.NW.string(b.t['W6c/VV']),
                action: j
            })
          : null;
}
