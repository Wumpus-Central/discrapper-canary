n.d(t, { Z: () => Z });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(430824),
    o = n(594174),
    s = n(979651),
    u = n(471253),
    d = n(200498),
    c = n(88751),
    g = n(267980),
    f = n(623633),
    b = n(388032);
function Z(e) {
    var t;
    let n = (0, f.Z)(),
        Z = null == n ? void 0 : n.id,
        m = null == n ? void 0 : n.guild_id,
        v = (0, l.e7)([a.Z], () => a.Z.getGuild(m), [m]),
        p = (0, l.e7)([s.Z], () => (null != Z ? s.Z.getVoiceStateForChannel(Z, e.id) : null), [Z, e.id]),
        O = (null == (t = o.default.getCurrentUser()) ? void 0 : t.id) === e.id,
        h = (0, g.Z)(),
        j = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, Z), [Z, e.id]),
        x = (0, d.B)(Z);
    if (null == n || null == v || null == p || j.speaker) return null;
    let _ = () => {
        O ? (0, u.RK)(n, !1) : (0, u._0)(n, e.id);
    };
    return x
        ? (0, i.jsx)(r.sNh, {
              id: 'invite-speaker',
              label: O ? b.intl.string(b.t['W6c/VV']) : b.intl.string(b.t.VUCWcH),
              action: _
          })
        : h && O
          ? (0, i.jsx)(r.sNh, {
                id: 'invite-speaker',
                label: b.intl.string(b.t['W6c/VV']),
                action: _
            })
          : null;
}
