t.d(n, {
    Z: function () {
        return g;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(430824),
    u = t(594174),
    o = t(979651),
    d = t(471253),
    s = t(200498),
    c = t(88751),
    Z = t(267980),
    f = t(623633),
    m = t(388032);
function g(e) {
    var n;
    let t = (0, f.Z)(),
        g = null == t ? void 0 : t.id,
        M = null == t ? void 0 : t.guild_id,
        x = (0, i.e7)([a.Z], () => a.Z.getGuild(M), [M]),
        h = (0, i.e7)([o.Z], () => (null != g ? o.Z.getVoiceStateForChannel(g, e.id) : null), [g, e.id]),
        v = (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
        p = (0, Z.Z)(),
        b = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, g), [g, e.id]),
        I = (0, s.B)(g);
    if (null == t || null == x || null == h || b.speaker) return null;
    let C = () => {
        v ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
    };
    return I
        ? (0, l.jsx)(r.MenuItem, {
              id: 'invite-speaker',
              label: v ? m.intl.string(m.t['W6c/VV']) : m.intl.string(m.t.VUCWcH),
              action: C
          })
        : p && v
          ? (0, l.jsx)(r.MenuItem, {
                id: 'invite-speaker',
                label: m.intl.string(m.t['W6c/VV']),
                action: C
            })
          : null;
}
