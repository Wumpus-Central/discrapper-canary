n.d(t, { Z: () => b });
var l = n(54381),
    r = n(473749),
    a = n(442837),
    i = n(100527),
    s = n(906732),
    o = n(613464),
    c = n(6025),
    d = n(433355),
    u = n(430824),
    m = n(981631),
    x = n(976621);
function b(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([u.Z], () => u.Z.getGuild(t)),
        { analyticsLocations: b } = (0, s.ZP)(i.Z.MEMBER_SAFETY_PAGE),
        j = (0, a.e7)([d.ZP], () => d.ZP.getGuildSidebarState(t), [t]),
        f = r.useCallback(() => {
            c.Z.closeGuildSidebar(t);
        }, [t]),
        h = null != j;
    return null != n && h && null != j
        ? (0, l.jsx)(s.Gt, {
              value: b,
              children: (0, l.jsx)("div", {
                  className: x.__invalid_sidebarContainer,
                  style: { width: m.$Y6 },
                  children: (0, l.jsx)(o.Z, {
                      userId: j.details.userId,
                      guildId: j.details.guildId,
                      onClose: f,
                  }),
              }),
          })
        : null;
}
