n.d(t, { Z: () => Z });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(430824),
    o = n(594174),
    s = n(979651),
    u = n(471253),
    c = n(200498),
    d = n(88751),
    g = n(267980),
    f = n(623633),
    b = n(388032);
function Z(e) {
    var t;
    let n = (0, f.Z)(),
        Z = null == n ? void 0 : n.id,
        N = null == n ? void 0 : n.guild_id,
        m = (0, l.e7)([a.Z], () => a.Z.getGuild(N), [N]),
        v = (0, l.e7)([s.Z], () => (null != Z ? s.Z.getVoiceStateForChannel(Z, e.id) : null), [Z, e.id]),
        p = (null == (t = o.default.getCurrentUser()) ? void 0 : t.id) === e.id,
        O = (0, g.Z)(),
        h = (0, l.e7)([d.ZP], () => d.ZP.getPermissionsForUser(e.id, Z), [Z, e.id]),
        j = (0, c.B)(Z);
    if (null == n || null == m || null == v || h.speaker) return null;
    let x = () => {
        p ? (0, u.RK)(n, !1) : (0, u._0)(n, e.id);
    };
    return j
        ? (0, i.jsx)(r.sNh, {
              id: 'invite-speaker',
              label: p ? b.NW.string(b.t['W6c/VV']) : b.NW.string(b.t.VUCWcH),
              action: x
          })
        : O && p
          ? (0, i.jsx)(r.sNh, {
                id: 'invite-speaker',
                label: b.NW.string(b.t['W6c/VV']),
                action: x
            })
          : null;
}
