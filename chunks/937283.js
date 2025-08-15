n.d(t, { Z: () => j });
var l = n(951288),
    r = n(647438),
    a = n(442837),
    i = n(100527),
    s = n(906732),
    o = n(613464),
    c = n(6025),
    d = n(433355),
    u = n(430824),
    m = n(981631),
    x = n(350013);
function j(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([u.Z], () => u.Z.getGuild(t)),
        { analyticsLocations: j } = (0, s.ZP)(i.Z.MEMBER_SAFETY_PAGE),
        h = (0, a.e7)([d.ZP], () => d.ZP.getGuildSidebarState(t), [t]),
        b = r.useCallback(() => {
            c.Z.closeGuildSidebar(t);
        }, [t]),
        f = null != h;
    return null != n && f && null != h
        ? (0, l.jsx)(s.Gt, {
              value: j,
              children: (0, l.jsx)("div", {
                  className: x.__invalid_sidebarContainer,
                  style: { width: m.$Y6 },
                  children: (0, l.jsx)(o.Z, {
                      userId: h.details.userId,
                      guildId: h.details.guildId,
                      onClose: b,
                  }),
              }),
          })
        : null;
}
