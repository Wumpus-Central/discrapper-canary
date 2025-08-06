n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(496675),
    a = n(996861),
    s = n(981631),
    l = n(388032);
function c(e, t) {
    let n = t.getGuildId();
    return null != n && e.type === s.uaV.USER_JOIN && o.Z.canWithPartialContext(s.Plq.MANAGE_GUILD, { guildId: n })
        ? (0, r.jsx)(i.sNh, {
              id: "configure",
              label: l.intl.string(l.t.NpHUi4),
              icon: i.idN,
              action: () => (0, a.zW)(t),
          })
        : null;
}
