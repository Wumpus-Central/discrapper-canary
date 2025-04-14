n.d(t, { Z: () => h });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(100527),
    o = n(906732),
    s = n(613464),
    c = n(6025),
    d = n(433355),
    u = n(430824),
    m = n(981631),
    x = n(86931);
function h(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([u.Z], () => u.Z.getGuild(t)),
        { analyticsLocations: h } = (0, o.ZP)(a.Z.MEMBER_SAFETY_PAGE),
        j = (0, i.e7)([d.ZP], () => d.ZP.getGuildSidebarState(t), [t]),
        b = l.useCallback(() => {
            c.Z.closeGuildSidebar(t);
        }, [t]),
        f = null != j;
    return null != n && f && null != j
        ? (0, r.jsx)(o.Gt, {
              value: h,
              children: (0, r.jsx)('div', {
                  className: x.__invalid_sidebarContainer,
                  style: { width: m.$Y6 },
                  children: (0, r.jsx)(s.Z, {
                      userId: j.details.userId,
                      guildId: j.details.guildId,
                      onClose: b
                  })
              })
          })
        : null;
}
