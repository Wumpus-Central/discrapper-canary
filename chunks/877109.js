n.d(t, { Z: () => g });
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
    p = n(688695),
    h = n(388032),
    m = n(818923);
let g = function (e) {
    let { questId: t } = e,
        n = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]),
        g = (0, a.e7)([l.Z], () => (null != t ? l.Z.getQuest(t) : void 0), [t]),
        E = i.useRef(!1);
    i.useEffect(() => {
        null == t || E.current || ((E.current = !0), (0, s.MG)(t));
    }, [t]);
    let b = () => {
        null != t && (0, s.MG)(t);
    };
    return null == g
        ? (0, r.jsxs)("div", {
              className: m.previewPage,
              children: [
                  (0, r.jsx)(o.Mgn, { className: m.errorIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsx)(o.Zbd, {
                      className: m.messageWrapper,
                      children: (0, r.jsx)("code", {
                          className: m.message,
                          children: "Unable to load Quest",
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: m.previewPage,
              children: [
                  (0, r.jsx)(o.qDn, { className: m.questsIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsxs)("div", {
                      className: m.menu,
                      children: [
                          (0, r.jsx)(o.Zbd, {
                              className: m.messageWrapper,
                              children: (0, r.jsx)("code", {
                                  className: m.message,
                                  children: g.config.messages.questName,
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: m.messageButton,
                              children: (0, r.jsx)(o.hU, {
                                  onClick: b,
                                  "aria-label": h.intl.string(h.t.wzzjk5),
                                  icon: o.DuK,
                                  loading: n,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsxs)(o.Zbd, {
                      className: m.previewCard,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: m.heading,
                              variant: "heading-lg/semibold",
                              children: "Discovery Card",
                          }),
                          (0, r.jsx)(u.Z, {
                              className: m.questTile,
                              quest: g,
                              questContent: c.jn.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: c.jn.INTERNAL_PREVIEW_TOOL,
                          }),
                      ],
                  }),
                  (0, r.jsxs)(o.Zbd, {
                      className: m.previewCard,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: m.heading,
                              variant: "heading-lg/semibold",
                              children: "Channel Call Header",
                          }),
                          (0, r.jsx)("div", {
                              className: m.questChannelCallHeaderWrapper,
                              children: (0, r.jsx)(d.Z, {
                                  channelId: "preview-channel-id",
                                  previewQuest: g,
                                  isParticipatingOverride: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(_.Z, { questId: g.id }),
                  (0, r.jsx)(f.Z, { quest: g }),
                  (0, r.jsx)(p.Z, { quest: g }),
              ],
          });
};
