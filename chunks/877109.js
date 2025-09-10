n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(569984),
    s = n(497505),
    l = n(415104),
    c = n(818923);
let u = function (e) {
    let { questId: t } = e,
        n = (0, i.e7)([o.Z], () => (null != t ? o.Z.getQuest(t) : void 0), [t]);
    return null == n
        ? (0, r.jsxs)("div", {
              className: c.errorBoundary,
              children: [
                  (0, r.jsx)(a.Mgn, { className: c.errorBoundaryIcon }),
                  (0, r.jsx)(a.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsx)(a.Zbd, {
                      className: c.errorMessageWrapper,
                      children: (0, r.jsx)("code", {
                          className: c.errorMessage,
                          children: "Unable to load Quest",
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: c.errorBoundary,
              children: [
                  (0, r.jsx)(a.qDn, { className: c.questsIcon }),
                  (0, r.jsx)(a.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsx)(a.Zbd, {
                      className: c.errorMessageWrapper,
                      children: (0, r.jsx)("code", {
                          className: c.errorMessage,
                          children: n.config.messages.questName,
                      }),
                  }),
                  (0, r.jsxs)(a.Zbd, {
                      className: c.previewCard,
                      children: [
                          (0, r.jsx)(a.X6q, {
                              className: c.heading,
                              variant: "heading-lg/semibold",
                              children: "Discovery Card",
                          }),
                          (0, r.jsx)(l.Z, {
                              className: c.questTile,
                              quest: n,
                              questContent: s.jn.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: s.jn.INTERNAL_PREVIEW_TOOL,
                          }),
                      ],
                  }),
              ],
          });
};
