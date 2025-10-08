n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    s = n(556012),
    a = n(388032),
    o = n(464992);
function c(e) {
    let { action: t, triggerType: n, toggled: c, onToggleAction: d } = e,
        u = (e) => () => d(e),
        g = (0, s.c)(t.type, t, n);
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
                    (0, r.jsx)(l.X6q, {
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
                                  a.intl.string(a.t.Oa9oWF),
                                  (0, r.jsx)(l.P3F, {
                                      onClick: u(!0),
                                      className: o.editChannel,
                                      tag: "span",
                                      role: "link",
                                      children: a.intl.string(a.t.QupmYW),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(i.VL, {
                    checked: c,
                    onChange: u(!1),
                    className: o.__invalid_actionCheckbox,
                }),
            }),
        ],
    });
}
