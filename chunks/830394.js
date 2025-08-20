n.d(e, { Z: () => d }), n(388685);
var l = n(951288);
n(647438);
var r = n(442837),
    i = n(481060),
    o = n(357156),
    u = n(924301),
    c = n(495279),
    a = n(894017),
    s = n(388032);
function d(t) {
    let { guildEventId: e, recurrenceId: n, guild: d, channel: g } = t,
        f = null != n,
        { canManageGuildEvent: b } = (0, o.XJ)(null != g ? g : d),
        [v, E] = (0, r.Wu)([u.ZP], () => [u.ZP.isActive(e), u.ZP.getGuildScheduledEvent(e)]),
        p = (0, a.Z)(n, null == E ? void 0 : E.id),
        Z = null != E && b(E);
    return f && (null == p ? void 0 : p.is_canceled) && Z && (!v || f)
        ? (0, l.jsx)(i.sNh, {
              id: s.intl.string(s.t.b8606O),
              label: s.intl.string(s.t.b8606O),
              action: () => {
                  null != n && null != p && (0, c.Z)(p, d.id, e, n);
              },
          })
        : null;
}
