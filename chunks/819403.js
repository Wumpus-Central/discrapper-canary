n.d(e, { Z: () => v });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    d = n(430824),
    r = n(594174),
    o = n(979651),
    s = n(471253),
    u = n(200498),
    c = n(88751),
    g = n(267980),
    Z = n(623633),
    f = n(388032);
function v(t) {
    var e;
    let n = (0, Z.Z)(),
        v = null == n ? void 0 : n.id,
        b = null == n ? void 0 : n.guild_id,
        h = (0, l.e7)([d.Z], () => d.Z.getGuild(b), [b]),
        m = (0, l.e7)([o.Z], () => (null != v ? o.Z.getVoiceStateForChannel(v, t.id) : null), [v, t.id]),
        x = (null === (e = r.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id,
        I = (0, g.Z)(),
        U = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(t.id, v), [v, t.id]),
        _ = (0, u.B)(v);
    if (null == n || null == h || null == m || U.speaker) return null;
    let p = () => {
        x ? (0, s.RK)(n, !1) : (0, s._0)(n, t.id);
    };
    return _
        ? (0, i.jsx)(a.sNh, {
              id: 'invite-speaker',
              label: x ? f.intl.string(f.t['W6c/VV']) : f.intl.string(f.t.VUCWcH),
              action: p
          })
        : I && x
          ? (0, i.jsx)(a.sNh, {
                id: 'invite-speaker',
                label: f.intl.string(f.t['W6c/VV']),
                action: p
            })
          : null;
}
