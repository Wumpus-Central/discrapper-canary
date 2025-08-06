e.d(n, { Z: () => d }), e(388685);
var l = e(255367);
e(73800);
var i = e(442837),
    r = e(481060),
    o = e(357156),
    a = e(924301),
    c = e(495279),
    s = e(894017),
    u = e(388032);
function d(t) {
    let { guildEventId: n, recurrenceId: e, guild: d, channel: g } = t,
        v = null != e,
        { canManageGuildEvent: b } = (0, o.XJ)(null != g ? g : d),
        [f, p] = (0, i.Wu)([a.ZP], () => [a.ZP.isActive(n), a.ZP.getGuildScheduledEvent(n)]),
        j = (0, s.Z)(e, null == p ? void 0 : p.id),
        h = null != p && b(p);
    return v && (null == j ? void 0 : j.is_canceled) && h && (!f || v)
        ? (0, l.jsx)(r.sNh, {
              id: u.intl.string(u.t.b8606O),
              label: u.intl.string(u.t.b8606O),
              action: () => {
                  null != e && null != j && (0, c.Z)(j, d.id, n, e);
              },
          })
        : null;
}
