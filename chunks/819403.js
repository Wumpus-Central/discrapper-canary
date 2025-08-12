n.d(t, { Z: () => O });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    o = n(430824),
    a = n(594174),
    u = n(979651),
    c = n(471253),
    s = n(200498),
    d = n(88751),
    f = n(267980),
    b = n(623633),
    g = n(388032);
function O(e) {
    var t;
    let n = (0, b.Z)(),
        O = null == n ? void 0 : n.id,
        Z = null == n ? void 0 : n.guild_id,
        y = (0, r.e7)([o.Z], () => o.Z.getGuild(Z), [Z]),
        j = (0, r.e7)([u.Z], () => (null != O ? u.Z.getVoiceStateForChannel(O, e.id) : null), [O, e.id]),
        v = (null == (t = a.default.getCurrentUser()) ? void 0 : t.id) === e.id,
        E = (0, f.Z)(),
        m = (0, r.e7)([d.ZP], () => d.ZP.getPermissionsForUser(e.id, O), [O, e.id]),
        p = (0, s.B)(O);
    if (null == n || null == y || null == j || m.speaker) return null;
    let S = () => {
        v ? (0, c.RK)(n, !1) : (0, c._0)(n, e.id);
    };
    return p
        ? (0, l.jsx)(i.sNh, {
              id: "invite-speaker",
              label: v ? g.intl.string(g.t["W6c/VV"]) : g.intl.string(g.t.VUCWcH),
              action: S,
          })
        : E && v
          ? (0, l.jsx)(i.sNh, {
                id: "invite-speaker",
                label: g.intl.string(g.t["W6c/VV"]),
                action: S,
            })
          : null;
}
