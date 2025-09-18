n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(705262),
    l = n(272008),
    c = n(569984),
    u = n(497505),
    d = n(415104),
    f = n(134483),
    _ = n(993369),
    p = n(881199),
    h = n(688695),
    m = n(388032),
    g = n(818923),
    E = n(726927);
let b = function (e) {
    let { questId: t } = e,
        n = (0, a.e7)([c.Z], () => null != t && c.Z.isFetchingQuestPreview(t), [t]),
        b = (0, a.e7)([c.Z], () => (null != t ? c.Z.getQuest(t) : void 0), [t]),
        y = i.useRef(!1);
    i.useEffect(() => {
        null == t || y.current || ((y.current = !0), (0, l.MG)(t));
    }, [t]);
    let O = () => {
        null != t && (0, l.MG)(t);
    };
    return null == b
        ? (0, r.jsxs)("div", {
              className: g.previewPage,
              children: [
                  (0, r.jsx)(o.Mgn, { className: g.errorIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsx)(o.Zbd, {
                      className: g.messageWrapper,
                      children: (0, r.jsx)("code", {
                          className: g.message,
                          children: "Unable to load Quest",
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: g.previewPage,
              children: [
                  (0, r.jsx)(o.qDn, { className: g.questsIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsxs)("div", {
                      className: g.menu,
                      children: [
                          (0, r.jsx)(o.Zbd, {
                              className: g.messageWrapper,
                              children: (0, r.jsx)("code", {
                                  className: g.message,
                                  children: b.config.messages.questName,
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: g.messageButton,
                              children: (0, r.jsx)(o.hU, {
                                  onClick: O,
                                  "aria-label": m.intl.string(m.t.wzzjk5),
                                  icon: o.DuK,
                                  loading: n,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsxs)(o.Zbd, {
                      className: g.previewCard,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: g.heading,
                              variant: "heading-lg/semibold",
                              children: "Discovery Card",
                          }),
                          (0, r.jsx)(d.Z, {
                              className: g.questTile,
                              quest: b,
                              questContent: u.jn.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: u.jn.INTERNAL_PREVIEW_TOOL,
                          }),
                      ],
                  }),
                  (0, r.jsxs)(o.Zbd, {
                      className: g.previewCard,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: g.heading,
                              variant: "heading-lg/semibold",
                              children: "Channel Call Header",
                          }),
                          (0, r.jsx)("div", {
                              className: g.questChannelCallHeaderWrapper,
                              children: (0, r.jsx)(f.Z, {
                                  channelId: "preview-channel-id",
                                  previewQuest: b,
                                  isParticipatingOverride: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(p.Z, { questId: b.id }),
                  (0, r.jsx)(_.Z, { quest: b }),
                  (0, r.jsx)(h.Z, { quest: b }),
                  (0, r.jsx)("div", {
                      className: E.themes,
                      children: (0, r.jsx)(s.ZP, {
                          type: s.yH.SETTINGS,
                          children: (0, r.jsx)(s.ZP.Basic, { className: E.themeSelectionGroup }),
                      }),
                  }),
              ],
          });
};
