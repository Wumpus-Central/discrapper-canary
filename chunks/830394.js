n.d(e, { Z: () => d }), n(388685);
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    o = n(357156),
    c = n(924301),
    a = n(495279),
    u = n(894017),
    s = n(388032);
function d(t) {
    let { guildEventId: e, recurrenceId: n, guild: d, channel: g } = t,
        f = null != n,
        { canManageGuildEvent: b } = (0, o.XJ)(null != g ? g : d),
        [p, v] = (0, r.Wu)([c.ZP], () => [c.ZP.isActive(e), c.ZP.getGuildScheduledEvent(e)]),
        h = (0, u.Z)(n, null == v ? void 0 : v.id),
        y = null != v && b(v);
    return f && (null == h ? void 0 : h.is_canceled) && y && (!p || f)
        ? (0, l.jsx)(i.sNh, {
              id: s.intl.string(s.t.b8606O),
              label: s.intl.string(s.t.b8606O),
              action: () => {
                  null != n && null != h && (0, a.Z)(h, d.id, e, n);
              }
          })
        : null;
}
