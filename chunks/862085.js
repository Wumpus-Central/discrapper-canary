n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    a = n(556012),
    s = n(388032),
    o = n(75765);
function c(e) {
    let { action: t, triggerType: n, toggled: c, onToggleAction: d } = e,
        u = (e) => () => d(e),
        m = (0, a.c)(t.type, t, n);
    if (null == m) return null;
    let { headerText: g, descriptionText: p, icon: f } = m;
    return (0, r.jsxs)("div", {
        className: o.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: o.actionIconContainer,
                children: (0, r.jsx)(f, {
                    size: "custom",
                    color: "currentColor",
                    className: o.actionIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: o.actionTextContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-sm/semibold",
                        children: g,
                    }),
                    (0, r.jsx)(l.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: p,
                    }),
                    c
                        ? (0, r.jsxs)(l.Text, {
                              color: "text-muted",
                              variant: "text-xs/medium",
                              children: [
                                  s.intl.string(s.t.Oa9oWF),
                                  (0, r.jsx)(l.P3F, {
                                      onClick: u(!0),
                                      className: o.editChannel,
                                      tag: "span",
                                      role: "link",
                                      children: s.intl.string(s.t.QupmYW),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(i.$q, {
                    type: i.M0.INVERTED,
                    value: c,
                    onChange: u(!1),
                    className: o.__invalid_actionCheckbox,
                }),
            }),
        ],
    });
}
