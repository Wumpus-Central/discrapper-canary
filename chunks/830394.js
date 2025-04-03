n.d(t, { Z: () => d }), n(47120);
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(357156),
    c = n(924301),
    a = n(495279),
    u = n(894017),
    s = n(388032);
function d(e) {
    let { guildEventId: t, recurrenceId: n, guild: d, channel: g } = e,
        f = null != n,
        { canManageGuildEvent: b } = (0, o.XJ)(null != g ? g : d),
        [p, v] = (0, l.Wu)([c.ZP], () => [c.ZP.isActive(t), c.ZP.getGuildScheduledEvent(t)]),
        h = (0, u.Z)(n, null == v ? void 0 : v.id),
        y = null != v && b(v);
    return f && (null == h ? void 0 : h.is_canceled) && y && (!p || f)
        ? (0, r.jsx)(i.sNh, {
              id: s.NW.string(s.t.b8606O),
              label: s.NW.string(s.t.b8606O),
              action: () => {
                  null != n && null != h && (0, a.Z)(h, d.id, t, n);
              }
          })
        : null;
}
