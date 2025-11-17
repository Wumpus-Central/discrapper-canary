n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(496675),
    a = n(996861),
    o = n(981631),
    s = n(388032);
function c(e, t) {
    let n = t.getGuildId();
    return null != n && e.type === o.uaV.USER_JOIN && l.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, { guildId: n })
        ? (0, r.jsx)(i.sNh, {
              id: "configure",
              label: s.intl.string(s.t.NpHUi1),
              icon: i.idN,
              action: () => (0, a.zW)(t),
          })
        : null;
}
