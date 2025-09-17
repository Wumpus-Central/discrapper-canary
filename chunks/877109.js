n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(272008),
    l = n(569984),
    c = n(497505),
    u = n(415104),
    d = n(134483),
    f = n(993369),
    _ = n(881199),
    p = n(388032),
    h = n(818923);
let m = function (e) {
    let { questId: t } = e,
        n = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]),
        m = (0, a.e7)([l.Z], () => (null != t ? l.Z.getQuest(t) : void 0), [t]),
        g = i.useRef(!1);
    i.useEffect(() => {
        null == t || g.current || ((g.current = !0), (0, s.MG)(t));
    }, [t]);
    let E = () => {
        null != t && (0, s.MG)(t);
    };
    return null == m
        ? (0, r.jsxs)("div", {
              className: h.previewPage,
              children: [
                  (0, r.jsx)(o.Mgn, { className: h.errorIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsx)(o.Zbd, {
                      className: h.messageWrapper,
                      children: (0, r.jsx)("code", {
                          className: h.message,
                          children: "Unable to load Quest",
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: h.previewPage,
              children: [
                  (0, r.jsx)(o.qDn, { className: h.questsIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsxs)("div", {
                      className: h.menu,
                      children: [
                          (0, r.jsx)(o.Zbd, {
                              className: h.messageWrapper,
                              children: (0, r.jsx)("code", {
                                  className: h.message,
                                  children: m.config.messages.questName,
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: h.messageButton,
                              children: (0, r.jsx)(o.hU, {
                                  onClick: E,
                                  "aria-label": p.intl.string(p.t.wzzjk5),
                                  icon: o.DuK,
                                  loading: n,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsxs)(o.Zbd, {
                      className: h.previewCard,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: h.heading,
                              variant: "heading-lg/semibold",
                              children: "Discovery Card",
                          }),
                          (0, r.jsx)(u.Z, {
                              className: h.questTile,
                              quest: m,
                              questContent: c.jn.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: c.jn.INTERNAL_PREVIEW_TOOL,
                          }),
                      ],
                  }),
                  (0, r.jsxs)(o.Zbd, {
                      className: h.previewCard,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: h.heading,
                              variant: "heading-lg/semibold",
                              children: "Channel Call Header",
                          }),
                          (0, r.jsx)("div", {
                              className: h.questChannelCallHeaderWrapper,
                              children: (0, r.jsx)(d.Z, {
                                  channelId: "preview-channel-id",
                                  previewQuest: m,
                                  isParticipatingOverride: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(_.Z, { questId: m.id }),
                  (0, r.jsx)(f.Z, { quest: m }),
              ],
          });
};
