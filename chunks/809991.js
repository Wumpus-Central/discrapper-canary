n.d(t, { A: () => p });
var a = n(627968);
n(64700);
var s = n(554146),
    i = n(354486),
    l = n(379848),
    r = n(441811),
    o = n(587084),
    d = n(693240),
    c = n(844526),
    u = n(201805),
    m = n(523620),
    h = n(49999),
    x = n(654487);
function p(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, u.c9)({ location: x.rE.CONFLICT_CHECKS }),
        p = null != e.targetElementRef.current && t && n,
        [g, _] = (0, o.r)(e.guildId, { shouldShow: p }),
        [f, v] = (0, o.L)(e.currentUser, { shouldShow: p }),
        [b, j] = (0, i.l)({ shouldShow: p });
    return p
        ? g === s.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, a.jsx)(d.w, {
                  guildId: e.guildId,
                  onDismiss: _,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : f === s.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, a.jsx)(d.o, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: v,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : b === s.M.DO_NOT_DISTURB_REMINDER_POPOVER
                ? (0, a.jsx)(i.A, { targetElementRef: e.targetElementRef, onDismiss: j, children: e.children })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(c.A, { groupName: h.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                          (0, a.jsx)(l.Ay, {
                              contentTypes: p ? (e.additionalDCs ?? []) : [],
                              groupName: h.m.ACCOUNT_NAME_ZONE,
                              children: (t) => {
                                  let { visibleContent: n, markAsDismissed: i } = t;
                                  switch (n) {
                                      case s.M.WIDGETS_RTC_UPSELL_COACHMARK:
                                          return (0, a.jsx)(m.A, {
                                              markAsDismissed: i,
                                              targetElementRef: e.targetElementRef,
                                              children: e.children,
                                          });
                                      case s.M.DISPLAY_NAME_STYLES_COACHMARK:
                                          return (0, a.jsx)(r.l, {
                                              markAsDismissed: i,
                                              targetElementRef: e.targetElementRef,
                                              children: e.children,
                                          });
                                      default:
                                          return e.children;
                                  }
                              },
                          }),
                      ],
                  })
        : e.children;
}
