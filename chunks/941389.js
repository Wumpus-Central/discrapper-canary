n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(496675),
    o = n(996861),
    a = n(981631),
    c = n(388032);
function s(e, t) {
    let n = t.getGuildId();
    return null != n && e.type === a.uaV.USER_JOIN && l.Z.canWithPartialContext(a.Plq.MANAGE_GUILD, { guildId: n })
        ? (0, r.jsx)(i.sNh, {
              id: "configure",
              label: c.intl.string(c.t.NpHUi1),
              icon: i.idN,
              action: () => (0, o.zW)(t),
          })
        : null;
}
