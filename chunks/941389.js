n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(496675),
    l = n(996861),
    o = n(981631),
    s = n(388032);
function c(e, t) {
    let n = t.getGuildId();
    return null != n && (e.type === o.uaV.USER_JOIN || e.type === o.uaV.GUILD_INVITE_REMINDER) && a.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, { guildId: n })
        ? (0, r.jsx)(i.sNh, {
              id: 'configure',
              label: s.NW.string(s.t.NpHUi4),
              icon: i.idN,
              action: () => (0, l.zW)(t)
          })
        : null;
}
