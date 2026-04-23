n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(554146),
    l = n(379848),
    a = n(441811),
    r = n(587084),
    o = n(693240),
    d = n(844526),
    c = n(201805),
    u = n(49999);
function p(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, c.c9)(),
        p = null != e.targetElementRef.current && t && n,
        [h, m] = (0, r.r)(e.guildId, { shouldShow: p }),
        [_, A] = (0, r.L)(e.currentUser, { shouldShow: p });
    return p
        ? h === s.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(o.w, {
                  guildId: e.guildId,
                  onDismiss: m,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : _ === s.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(o.o, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: A,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(d.A, { groupName: u.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(l.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: u.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                return n === s.M.DISPLAY_NAME_STYLES_COACHMARK
                                    ? (0, i.jsx)(a.l, {
                                          markAsDismissed: l,
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
