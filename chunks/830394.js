e.d(n, { Z: () => c }), e(47120);
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(357156),
    d = e(924301),
    a = e(495279),
    s = e(894017),
    o = e(388032);
function c(t) {
    let { guildEventId: n, recurrenceId: e, guild: c, channel: E } = t,
        g = null != e,
        { canManageGuildEvent: v } = (0, u.XJ)(null != E ? E : c),
        [h, _] = (0, i.Wu)([d.ZP], () => [d.ZP.isActive(n), d.ZP.getGuildScheduledEvent(n)]),
        f = (0, s.Z)(e, null == _ ? void 0 : _.id),
        Z = null != _ && v(_);
    return g && (null == f ? void 0 : f.is_canceled) && Z && (!h || g)
        ? (0, l.jsx)(r.sNh, {
              id: o.intl.string(o.t.b8606O),
              label: o.intl.string(o.t.b8606O),
              action: () => {
                  null != e && null != f && (0, a.Z)(f, c.id, n, e);
              }
          })
        : null;
}
