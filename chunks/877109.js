n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(272008),
    l = n(569984),
    c = n(497505),
    u = n(415104),
    d = n(134483),
    f = n(216074),
    _ = n(388032),
    p = n(818923);
let h = function (e) {
    let { questId: t } = e,
        n = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]),
        h = (0, a.e7)([l.Z], () => (null != t ? l.Z.getQuest(t) : void 0), [t]),
        m = i.useRef(!1);
    i.useEffect(() => {
        null == t || m.current || ((m.current = !0), (0, s.MG)(t));
    }, [t]);
    let g = () => {
        null != t && (0, s.MG)(t);
    };
    return null == h
        ? (0, r.jsxs)("div", {
              className: p.previewPage,
              children: [
                  (0, r.jsx)(o.Mgn, { className: p.errorIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsx)(o.Zbd, {
                      className: p.messageWrapper,
                      children: (0, r.jsx)("code", {
                          className: p.message,
                          children: "Unable to load Quest",
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: p.previewPage,
              children: [
                  (0, r.jsx)(o.qDn, { className: p.questsIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsxs)("div", {
                      className: p.menu,
                      children: [
                          (0, r.jsx)(o.Zbd, {
                              className: p.messageWrapper,
                              children: (0, r.jsx)("code", {
                                  className: p.message,
                                  children: h.config.messages.questName,
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: p.messageButton,
                              children: (0, r.jsx)(o.hU, {
                                  onClick: g,
                                  "aria-label": _.intl.string(_.t.wzzjk5),
                                  icon: o.DuK,
                                  loading: n,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsxs)(o.Zbd, {
                      className: p.previewCard,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: p.heading,
                              variant: "heading-lg/semibold",
                              children: "Discovery Card",
                          }),
                          (0, r.jsx)(u.Z, {
                              className: p.questTile,
                              quest: h,
                              questContent: c.jn.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: c.jn.INTERNAL_PREVIEW_TOOL,
                          }),
                      ],
                  }),
                  (0, r.jsxs)(o.Zbd, {
                      className: p.previewCard,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: p.heading,
                              variant: "heading-lg/semibold",
                              children: "Channel Call Header",
                          }),
                          (0, r.jsx)("div", {
                              className: p.questChannelCallHeaderWrapper,
                              children: (0, r.jsx)(d.Z, {
                                  channelId: "preview-channel-id",
                                  previewQuest: h,
                                  isParticipatingOverride: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(f.Z, { questId: h.id }),
              ],
          });
};
