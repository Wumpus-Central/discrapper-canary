n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(496675),
    s = n(996861),
    r = n(981631),
    o = n(388032);
function d(e, t) {
    let n = t.getGuildId();
    return null != n && (e.type === r.uaV.USER_JOIN || e.type === r.uaV.GUILD_INVITE_REMINDER) && a.Z.canWithPartialContext(r.Plq.MANAGE_GUILD, { guildId: n })
        ? (0, i.jsx)(l.sNh, {
              id: 'configure',
              label: o.intl.string(o.t.NpHUi4),
              icon: l.idN,
              action: () => (0, s.zW)(t)
          })
        : null;
}
