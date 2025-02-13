t.d(n, { Z: () => h });
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(100527),
    s = t(906732),
    o = t(613464),
    c = t(6025),
    d = t(433355),
    u = t(430824),
    m = t(981631),
    x = t(557873);
function h(e) {
    let { guildId: n } = e,
        t = (0, r.e7)([u.Z], () => u.Z.getGuild(n)),
        { analyticsLocations: h } = (0, s.ZP)(a.Z.MEMBER_SAFETY_PAGE),
        j = (0, r.e7)([d.ZP], () => d.ZP.getGuildSidebarState(n), [n]),
        C = i.useCallback(() => {
            c.Z.closeGuildSidebar(n);
        }, [n]),
        _ = null != j;
    return null != t && _ && null != j
        ? (0, l.jsx)(s.Gt, {
              value: h,
              children: (0, l.jsx)('div', {
                  className: x.__invalid_sidebarContainer,
                  style: { width: m.$Y6 },
                  children: (0, l.jsx)(o.Z, {
                      userId: j.details.userId,
                      guildId: j.details.guildId,
                      onClose: C
                  })
              })
          })
        : null;
}
