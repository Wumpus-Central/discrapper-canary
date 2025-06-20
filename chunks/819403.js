n.d(t, { Z: () => O });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    o = n(430824),
    a = n(594174),
    u = n(979651),
    c = n(471253),
    d = n(200498),
    s = n(88751),
    f = n(267980),
    g = n(623633),
    b = n(388032);
function O(e) {
    var t;
    let n = (0, g.Z)(),
        O = null == n ? void 0 : n.id,
        E = null == n ? void 0 : n.guild_id,
        _ = (0, r.e7)([o.Z], () => o.Z.getGuild(E), [E]),
        y = (0, r.e7)([u.Z], () => (null != O ? u.Z.getVoiceStateForChannel(O, e.id) : null), [O, e.id]),
        v = (null == (t = a.default.getCurrentUser()) ? void 0 : t.id) === e.id,
        Z = (0, f.Z)(),
        h = (0, r.e7)([s.ZP], () => s.ZP.getPermissionsForUser(e.id, O), [O, e.id]),
        m = (0, d.B)(O);
    if (null == n || null == _ || null == y || h.speaker) return null;
    let p = () => {
        v ? (0, c.RK)(n, !1) : (0, c._0)(n, e.id);
    };
    return m
        ? (0, l.jsx)(i.sNh, {
              id: 'invite-speaker',
              label: v ? b.intl.string(b.t['W6c/VV']) : b.intl.string(b.t.VUCWcH),
              action: p
          })
        : Z && v
          ? (0, l.jsx)(i.sNh, {
                id: 'invite-speaker',
                label: b.intl.string(b.t['W6c/VV']),
                action: p
            })
          : null;
}
