n.d(e, { Z: () => d }), n(388685);
var l = n(54381);
n(473749);
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
        [p, v] = (0, r.Wu)([u.ZP], () => [u.ZP.isActive(e), u.ZP.getGuildScheduledEvent(e)]),
        E = (0, a.Z)(n, null == v ? void 0 : v.id),
        y = null != v && b(v);
    return f && (null == E ? void 0 : E.is_canceled) && y && (!p || f)
        ? (0, l.jsx)(i.sNh, {
              id: s.intl.string(s.t.b8606G),
              label: s.intl.string(s.t.b8606G),
              action: () => {
                  null != n && null != E && (0, c.Z)(E, d.id, e, n);
              },
          })
        : null;
}
