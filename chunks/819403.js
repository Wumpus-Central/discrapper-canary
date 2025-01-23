t.d(n, {
    Z: function () {
        return m;
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
    g = t(388032);
function m(e) {
    var n;
    let t = (0, f.Z)(),
        m = null == t ? void 0 : t.id,
        M = null == t ? void 0 : t.guild_id,
        v = (0, i.e7)([a.Z], () => a.Z.getGuild(M), [M]),
        x = (0, i.e7)([o.Z], () => (null != m ? o.Z.getVoiceStateForChannel(m, e.id) : null), [m, e.id]),
        h = (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
        p = (0, Z.Z)(),
        P = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, m), [m, e.id]),
        C = (0, s.B)(m);
    if (null == t || null == v || null == x || P.speaker) return null;
    let I = () => {
        h ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
    };
    return C
        ? (0, l.jsx)(r.MenuItem, {
              id: 'invite-speaker',
              label: h ? g.intl.string(g.t['W6c/VV']) : g.intl.string(g.t.VUCWcH),
              action: I
          })
        : p && h
          ? (0, l.jsx)(r.MenuItem, {
                id: 'invite-speaker',
                label: g.intl.string(g.t['W6c/VV']),
                action: I
            })
          : null;
}
