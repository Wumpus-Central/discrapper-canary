n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(272008),
    l = n(569984),
    c = n(497505),
    u = n(415104),
    d = n(216074),
    f = n(388032),
    _ = n(818923);
let p = function (e) {
    let { questId: t } = e,
        n = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]),
        p = (0, a.e7)([l.Z], () => (null != t ? l.Z.getQuest(t) : void 0), [t]),
        h = i.useRef(!1);
    i.useEffect(() => {
        null == t || h.current || ((h.current = !0), (0, s.MG)(t));
    }, [t]);
    let m = () => {
        null != t && (0, s.MG)(t);
    };
    return null == p
        ? (0, r.jsxs)("div", {
              className: _.previewPage,
              children: [
                  (0, r.jsx)(o.Mgn, { className: _.errorIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsx)(o.Zbd, {
                      className: _.messageWrapper,
                      children: (0, r.jsx)("code", {
                          className: _.message,
                          children: "Unable to load Quest",
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: _.previewPage,
              children: [
                  (0, r.jsx)(o.qDn, { className: _.questsIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsxs)("div", {
                      className: _.menu,
                      children: [
                          (0, r.jsx)(o.Zbd, {
                              className: _.messageWrapper,
                              children: (0, r.jsx)("code", {
                                  className: _.message,
                                  children: p.config.messages.questName,
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: _.messageButton,
                              children: (0, r.jsx)(o.hU, {
                                  onClick: m,
                                  "aria-label": f.intl.string(f.t.wzzjk5),
                                  icon: o.DuK,
                                  loading: n,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsxs)(o.Zbd, {
                      className: _.previewCard,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: _.heading,
                              variant: "heading-lg/semibold",
                              children: "Discovery Card",
                          }),
                          (0, r.jsx)(u.Z, {
                              className: _.questTile,
                              quest: p,
                              questContent: c.jn.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: c.jn.INTERNAL_PREVIEW_TOOL,
                          }),
                      ],
                  }),
                  (0, r.jsx)(d.Z, { questId: p.id }),
              ],
          });
};
