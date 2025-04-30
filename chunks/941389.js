n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(496675),
    a = n(996861),
    o = n(981631),
    s = n(388032);
function c(e, t) {
    let n = t.getGuildId();
    return null != n && (e.type === o.uaV.USER_JOIN || e.type === o.uaV.GUILD_INVITE_REMINDER) && l.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, { guildId: n })
        ? (0, i.jsx)(r.sNh, {
              id: 'configure',
              label: s.intl.string(s.t.NpHUi4),
              icon: r.idN,
              action: () => (0, a.zW)(t)
          })
        : null;
}
