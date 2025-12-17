n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(556012),
    a = n(388032),
    s = n(239244);
function o(e) {
    let { action: t, triggerType: n, toggled: o, onToggleAction: c } = e,
        d = (e) => () => c(e),
        u = (0, l.c)(t.type, t, n);
    if (null == u) return null;
    let { headerText: g, descriptionText: f, icon: m } = u;
    return (0, r.jsxs)("div", {
        className: s.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: s.actionIconContainer,
                children: (0, r.jsx)(m, {
                    size: "custom",
                    color: "currentColor",
                    className: s.actionIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: s.actionTextContainer,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-sm/semibold",
                        children: g,
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "interactive-text-default",
                        variant: "text-xs/medium",
                        children: f,
                    }),
                    o
                        ? (0, r.jsxs)(i.Text, {
                              color: "text-muted",
                              variant: "text-xs/medium",
                              children: [
                                  a.intl.string(a.t.Oa9oWJ),
                                  (0, r.jsx)(i.P3F, {
                                      onClick: d(!0),
                                      className: s.editChannel,
                                      tag: "span",
                                      role: "link",
                                      children: a.intl.string(a.t.QupmYY),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(i.P3F, {
                    onClick: u.isEditable ? d(!1) : void 0,
                    children: (0, r.jsx)(i.FZ5, {
                        checked: o,
                        disabled: !u.isEditable,
                    }),
                }),
            }),
        ],
    });
}
