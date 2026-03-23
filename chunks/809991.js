n.d(t, { A: () => h });
var a = n(627968);
n(64700);
var i = n(554146),
    s = n(354486),
    l = n(379848),
    r = n(441811),
    o = n(587084),
    d = n(693240),
    c = n(844526),
    u = n(201805),
    m = n(49999);
function h(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, u.c9)(),
        h = null != e.targetElementRef.current && t && n,
        [x, p] = (0, o.r)(e.guildId, { shouldShow: h }),
        [g, _] = (0, o.L)(e.currentUser, { shouldShow: h }),
        [f, v] = (0, s.l)({ shouldShow: h });
    return h
        ? x === i.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, a.jsx)(d.w, {
                  guildId: e.guildId,
                  onDismiss: p,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : g === i.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, a.jsx)(d.o, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: _,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : f === i.M.DO_NOT_DISTURB_REMINDER_POPOVER
                ? (0, a.jsx)(s.A, { targetElementRef: e.targetElementRef, onDismiss: v, children: e.children })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(c.A, { groupName: m.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                          (0, a.jsx)(l.Ay, {
                              contentTypes: h ? (e.additionalDCs ?? []) : [],
                              groupName: m.m.ACCOUNT_NAME_ZONE,
                              children: (t) => {
                                  let { visibleContent: n, markAsDismissed: s } = t;
                                  return n === i.M.DISPLAY_NAME_STYLES_COACHMARK
                                      ? (0, a.jsx)(r.l, {
                                            markAsDismissed: s,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        })
                                      : e.children;
                              },
                          }),
                      ],
                  })
        : e.children;
}
