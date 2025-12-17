n.d(e, { Z: () => d }), n(388685);
var l = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    u = n(357156),
    o = n(924301),
    c = n(495279),
    a = n(894017),
    s = n(388032);
function d(t) {
    let { guildEventId: e, recurrenceId: n, guild: d, channel: g } = t,
        f = null != n,
        { canManageGuildEvent: b } = (0, u.XJ)(null != g ? g : d),
        [v, E] = (0, r.Wu)([o.ZP], () => [o.ZP.isActive(e), o.ZP.getGuildScheduledEvent(e)]),
        p = (0, a.Z)(n, null == E ? void 0 : E.id),
        Z = null != E && b(E);
    return f && (null == p ? void 0 : p.is_canceled) && Z && (!v || f)
        ? (0, l.jsx)(i.sNh, {
              id: s.intl.string(s.t.b8606G),
              label: s.intl.string(s.t.b8606G),
              action: () => {
                  null != n && null != p && (0, c.Z)(p, d.id, e, n);
              },
          })
        : null;
}
