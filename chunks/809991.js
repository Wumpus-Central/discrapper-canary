n.d(t, {
    A: () => x,
}),
    n(896048);
var a = n(627968);
n(64700);
var l = n(554146),
    i = n(354486),
    r = n(379848),
    s = n(441811),
    o = n(587084),
    c = n(693240),
    d = n(987237),
    u = n(844526),
    m = n(201805),
    p = n(523620),
    h = n(49999),
    f = n(654487);

function x(e) {
    var t, n, x;
    let { isQuestBarEmpty: b, hasLoadedQuestBar: g } = (0, m.c9)({
            location: f.rE.CONFLICT_CHECKS,
        }),
        v = null != e.targetElementRef.current && b && g,
        [j, y] = (0, o.r)(e.guildId, {
            shouldShow: v,
        }),
        [_, A] = (0, o.L)(e.currentUser, {
            shouldShow: v,
        }),
        [C, S] = (0, i.l)({
            shouldShow: v,
        });
    return v
        ? j === l.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, a.jsx)(c.w, {
                  guildId: e.guildId,
                  onDismiss: y,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : _ === l.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, a.jsx)(c.o, {
                    guildId:
                        null != (n = null == (x = e.currentUser.primaryGuild) ? void 0 : x.identityGuildId) ? n : null,
                    onDismiss: A,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : C === l.M.DO_NOT_DISTURB_REMINDER_POPOVER
                ? (0, a.jsx)(i.A, {
                      targetElementRef: e.targetElementRef,
                      onDismiss: S,
                      children: e.children,
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(u.A, {
                              groupName: h.m.ACCOUNT_NAME_ZONE,
                              targetElementRef: e.targetElementRef,
                          }),
                          (0, a.jsx)(r.Ay, {
                              contentTypes: v && null != (t = e.additionalDCs) ? t : [],
                              groupName: h.m.ACCOUNT_NAME_ZONE,
                              children: (t) => {
                                  let { visibleContent: n, markAsDismissed: i } = t;
                                  switch (n) {
                                      case l.M.WIDGETS_RTC_UPSELL_COACHMARK:
                                          return (0, a.jsx)(p.A, {
                                              markAsDismissed: i,
                                              targetElementRef: e.targetElementRef,
                                              children: e.children,
                                          });
                                      case l.M.DISPLAY_NAME_STYLES_COACHMARK:
                                          return (0, a.jsx)(s.l, {
                                              markAsDismissed: i,
                                              targetElementRef: e.targetElementRef,
                                              children: e.children,
                                          });
                                      case l.M.TENURE_BADGE_CHURN_REMINDER:
                                          return (0, a.jsx)(d.A, {
                                              markAsDismissed: i,
                                              mode: "popover",
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
