e.d(n, { Z: () => v });
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    o = e(430824),
    d = e(594174),
    r = e(979651),
    s = e(471253),
    u = e(200498),
    c = e(88751),
    g = e(267980),
    Z = e(623633),
    f = e(388032);
function v(t) {
    var n;
    let e = (0, Z.Z)(),
        v = null == e ? void 0 : e.id,
        b = null == e ? void 0 : e.guild_id,
        h = (0, l.e7)([o.Z], () => o.Z.getGuild(b), [b]),
        m = (0, l.e7)([r.Z], () => (null != v ? r.Z.getVoiceStateForChannel(v, t.id) : null), [v, t.id]),
        x = (null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === t.id,
        p = (0, g.Z)(),
        I = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(t.id, v), [v, t.id]),
        A = (0, u.B)(v);
    if (null == e || null == h || null == m || I.speaker) return null;
    let C = () => {
        x ? (0, s.RK)(e, !1) : (0, s._0)(e, t.id);
    };
    return A
        ? (0, i.jsx)(a.sNh, {
              id: 'invite-speaker',
              label: x ? f.intl.string(f.t['W6c/VV']) : f.intl.string(f.t.VUCWcH),
              action: C
          })
        : p && x
          ? (0, i.jsx)(a.sNh, {
                id: 'invite-speaker',
                label: f.intl.string(f.t['W6c/VV']),
                action: C
            })
          : null;
}
