n.d(t, {
    A: () => x,
}),
    n(896048);
var a = n(627968);
n(64700);
var l = n(554146),
    r = n(354486),
    i = n(379848),
    s = n(441811),
    o = n(587084),
    c = n(693240),
    d = n(844526),
    u = n(201805),
    m = n(523620),
    p = n(49999),
    h = n(654487);

function x(e) {
    var t, n, x;
    let { isQuestBarEmpty: g, hasLoadedQuestBar: f } = (0, u.c9)({
            location: h.rE.CONFLICT_CHECKS,
        }),
        b = null != e.targetElementRef.current && g && f,
        [v, j] = (0, o.r)(e.guildId, {
            shouldShow: b,
        }),
        [_, y] = (0, o.L)(e.currentUser, {
            shouldShow: b,
        }),
        [A, C] = (0, r.l)({
            shouldShow: b,
        });
    return b
        ? v === l.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, a.jsx)(c.w, {
                  guildId: e.guildId,
                  onDismiss: j,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : _ === l.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, a.jsx)(c.o, {
                    guildId:
                        null != (n = null == (x = e.currentUser.primaryGuild) ? void 0 : x.identityGuildId) ? n : null,
                    onDismiss: y,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : A === l.M.DO_NOT_DISTURB_REMINDER_POPOVER
                ? (0, a.jsx)(r.A, {
                      targetElementRef: e.targetElementRef,
                      onDismiss: C,
                      children: e.children,
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(d.A, {
                              groupName: p.m.ACCOUNT_NAME_ZONE,
                              targetElementRef: e.targetElementRef,
                          }),
                          (0, a.jsx)(i.Ay, {
                              contentTypes: b && null != (t = e.additionalDCs) ? t : [],
                              groupName: p.m.ACCOUNT_NAME_ZONE,
                              children: (t) => {
                                  let { visibleContent: n, markAsDismissed: r } = t;
                                  switch (n) {
                                      case l.M.WIDGETS_RTC_UPSELL_COACHMARK:
                                          return (0, a.jsx)(m.A, {
                                              markAsDismissed: r,
                                              targetElementRef: e.targetElementRef,
                                              children: e.children,
                                          });
                                      case l.M.DISPLAY_NAME_STYLES_COACHMARK:
                                          return (0, a.jsx)(s.l, {
                                              markAsDismissed: r,
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
