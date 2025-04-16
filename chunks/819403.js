n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(430824),
    a = n(594174),
    s = n(979651),
    u = n(471253),
    d = n(200498),
    c = n(88751),
    f = n(267980),
    Z = n(623633),
    b = n(388032);
function g(e) {
    var t;
    let n = (0, Z.Z)(),
        g = null == n ? void 0 : n.id,
        O = null == n ? void 0 : n.guild_id,
        v = (0, l.e7)([o.Z], () => o.Z.getGuild(O), [O]),
        p = (0, l.e7)([s.Z], () => (null != g ? s.Z.getVoiceStateForChannel(g, e.id) : null), [g, e.id]),
        j = (null == (t = a.default.getCurrentUser()) ? void 0 : t.id) === e.id,
        N = (0, f.Z)(),
        m = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, g), [g, e.id]),
        h = (0, d.B)(g);
    if (null == n || null == v || null == p || m.speaker) return null;
    let y = () => {
        j ? (0, u.RK)(n, !1) : (0, u._0)(n, e.id);
    };
    return h
        ? (0, i.jsx)(r.sNh, {
              id: 'invite-speaker',
              label: j ? b.NW.string(b.t['W6c/VV']) : b.NW.string(b.t.VUCWcH),
              action: y
          })
        : N && j
          ? (0, i.jsx)(r.sNh, {
                id: 'invite-speaker',
                label: b.NW.string(b.t['W6c/VV']),
                action: y
            })
          : null;
}
