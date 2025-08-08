n.d(t, { Z: () => Z });
var i = n(255367);
n(73800);
var l = n(442837),
    r = n(481060),
    o = n(430824),
    a = n(594174),
    s = n(979651),
    d = n(471253),
    u = n(200498),
    c = n(88751),
    f = n(267980),
    b = n(623633),
    g = n(388032);
function Z(e) {
    var t;
    let n = (0, b.Z)(),
        Z = null == n ? void 0 : n.id,
        O = null == n ? void 0 : n.guild_id,
        v = (0, l.e7)([o.Z], () => o.Z.getGuild(O), [O]),
        p = (0, l.e7)([s.Z], () => (null != Z ? s.Z.getVoiceStateForChannel(Z, e.id) : null), [Z, e.id]),
        j = (null == (t = a.default.getCurrentUser()) ? void 0 : t.id) === e.id,
        m = (0, f.Z)(),
        h = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, Z), [Z, e.id]),
        y = (0, u.B)(Z);
    if (null == n || null == v || null == p || h.speaker) return null;
    let P = () => {
        j ? (0, d.RK)(n, !1) : (0, d._0)(n, e.id);
    };
    return y
        ? (0, i.jsx)(r.sNh, {
              id: "invite-speaker",
              label: j ? g.intl.string(g.t["W6c/VV"]) : g.intl.string(g.t.VUCWcH),
              action: P,
          })
        : m && j
          ? (0, i.jsx)(r.sNh, {
                id: "invite-speaker",
                label: g.intl.string(g.t["W6c/VV"]),
                action: P,
            })
          : null;
}
