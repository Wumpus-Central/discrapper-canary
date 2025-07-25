(e.d(n, { Z: () => d }), e(388685));
var l = e(255367);
e(73800);
var i = e(442837),
    r = e(481060),
    o = e(357156),
    a = e(924301),
    c = e(495279),
    u = e(894017),
    s = e(388032);
function d(t) {
    let { guildEventId: n, recurrenceId: e, guild: d, channel: g } = t,
        f = null != e,
        { canManageGuildEvent: b } = (0, o.XJ)(null != g ? g : d),
        [p, v] = (0, i.Wu)([a.ZP], () => [a.ZP.isActive(n), a.ZP.getGuildScheduledEvent(n)]),
        h = (0, u.Z)(e, null == v ? void 0 : v.id),
        y = null != v && b(v);
    return f && (null == h ? void 0 : h.is_canceled) && y && (!p || f)
        ? (0, l.jsx)(r.sNh, {
              id: s.intl.string(s.t.b8606O),
              label: s.intl.string(s.t.b8606O),
              action: () => {
                  null != e && null != h && (0, c.Z)(h, d.id, n, e);
              }
          })
        : null;
}
