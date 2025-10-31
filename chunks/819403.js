n.d(t, { Z: () => m });
var l = n(951288);
n(647438);
var i = n(442837),
    r = n(481060),
    a = n(430824),
    o = n(594174),
    s = n(979651),
    u = n(471253),
    d = n(200498),
    c = n(88751),
    g = n(267980),
    f = n(647767),
    b = n(623633),
    Z = n(388032);
function m(e) {
    var t;
    let n = (0, b.Z)(),
        m = null == n ? void 0 : n.id,
        v = null == n ? void 0 : n.guild_id,
        p = (0, i.e7)([a.Z], () => a.Z.getGuild(v), [v]),
        O = (0, i.e7)([s.Z], () => (null != m ? s.Z.getVoiceStateForChannel(m, e.id) : null), [m, e.id]),
        h = (null == (t = o.default.getCurrentUser()) ? void 0 : t.id) === e.id,
        j = (0, g.Z)(),
        x = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, m), [m, e.id]),
        _ = (0, d.B)(m),
        y = (0, f.s)();
    if (null == n || null == p || null == O || x.speaker) return null;
    let I = () => {
        h ? (0, u.RK)(n, !1) : (0, u._0)(n, e.id);
    };
    return h && y
        ? null
        : _
          ? (0, l.jsx)(r.sNh, {
                id: "invite-speaker",
                label: h ? Z.intl.string(Z.t["W6c/Vf"]) : Z.intl.string(Z.t.VUCWcO),
                action: I,
            })
          : j && h
            ? (0, l.jsx)(r.sNh, {
                  id: "invite-speaker",
                  label: Z.intl.string(Z.t["W6c/Vf"]),
                  action: I,
              })
            : null;
}
