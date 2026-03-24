n.d(t, { A: () => m });
var a = n(627968);
n(64700);
var i = n(554146),
    s = n(379848),
    l = n(441811),
    r = n(587084),
    o = n(693240),
    d = n(844526),
    c = n(201805),
    u = n(49999);
function m(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, c.c9)(),
        m = null != e.targetElementRef.current && t && n,
        [h, x] = (0, r.r)(e.guildId, { shouldShow: m }),
        [p, g] = (0, r.L)(e.currentUser, { shouldShow: m });
    return m
        ? h === i.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, a.jsx)(o.w, {
                  guildId: e.guildId,
                  onDismiss: x,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : p === i.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, a.jsx)(o.o, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: g,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.A, { groupName: u.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, a.jsx)(s.Ay, {
                            contentTypes: m ? (e.additionalDCs ?? []) : [],
                            groupName: u.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: s } = t;
                                return n === i.M.DISPLAY_NAME_STYLES_COACHMARK
                                    ? (0, a.jsx)(l.l, {
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
