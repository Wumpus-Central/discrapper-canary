n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    a = n(556012),
    s = n(388032),
    o = n(464992);
function c(e) {
    let { action: t, triggerType: n, toggled: c, onToggleAction: d } = e,
        u = (e) => () => d(e),
        g = (0, a.c)(t.type, t, n);
    if (null == g) return null;
    let { headerText: m, descriptionText: p, icon: f } = g;
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
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-sm/semibold",
                        children: m,
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
                                  s.intl.string(s.t.Oa9oWJ),
                                  (0, r.jsx)(l.P3F, {
                                      onClick: u(!0),
                                      className: o.editChannel,
                                      tag: "span",
                                      role: "link",
                                      children: s.intl.string(s.t.QupmYY),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(i.$q, {
                    value: c,
                    onChange: u(!1),
                    className: o.__invalid_actionCheckbox,
                }),
            }),
        ],
    });
}
