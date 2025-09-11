n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(272008),
    l = n(569984),
    c = n(497505),
    u = n(415104),
    d = n(388032),
    f = n(818923);
let _ = function (e) {
    let { questId: t } = e,
        n = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]),
        _ = (0, a.e7)([l.Z], () => (null != t ? l.Z.getQuest(t) : void 0), [t]),
        p = i.useRef(!1);
    i.useEffect(() => {
        null == t || p.current || ((p.current = !0), (0, s.MG)(t));
    }, [t]);
    let h = () => {
        null != t && (0, s.MG)(t);
    };
    return null == _
        ? (0, r.jsxs)("div", {
              className: f.previewPage,
              children: [
                  (0, r.jsx)(o.Mgn, { className: f.errorIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsx)(o.Zbd, {
                      className: f.messageWrapper,
                      children: (0, r.jsx)("code", {
                          className: f.message,
                          children: "Unable to load Quest",
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: f.previewPage,
              children: [
                  (0, r.jsx)(o.qDn, { className: f.questsIcon }),
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-lg/semibold",
                      children: "Welcome to the Ad preview Tool",
                  }),
                  (0, r.jsxs)("div", {
                      className: f.menu,
                      children: [
                          (0, r.jsx)(o.Zbd, {
                              className: f.messageWrapper,
                              children: (0, r.jsx)("code", {
                                  className: f.message,
                                  children: _.config.messages.questName,
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: f.messageButton,
                              children: (0, r.jsx)(o.hU, {
                                  onClick: h,
                                  "aria-label": d.intl.string(d.t.wzzjk5),
                                  icon: o.DuK,
                                  loading: n,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsxs)(o.Zbd, {
                      className: f.previewCard,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              className: f.heading,
                              variant: "heading-lg/semibold",
                              children: "Discovery Card",
                          }),
                          (0, r.jsx)(u.Z, {
                              className: f.questTile,
                              quest: _,
                              questContent: c.jn.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: c.jn.INTERNAL_PREVIEW_TOOL,
                          }),
                      ],
                  }),
              ],
          });
};
