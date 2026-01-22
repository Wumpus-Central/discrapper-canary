n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(239705),
    s = n(985018),
    a = n(86181);

function c(e) {
    let { action: t, triggerType: n, toggled: c, onToggleAction: o } = e,
        d = (e) => () => o(e),
        u = (0, l.x)(t.type, t, n);
    if (null == u) return null;
    let { headerText: f, descriptionText: g, icon: b } = u;
    return (0, r.jsxs)("div", {
        className: a.Ik,
        children: [
            (0, r.jsx)("div", {
                className: a.TV,
                children: (0, r.jsx)(b, {
                    size: "custom",
                    color: "currentColor",
                    className: a.gE,
                }),
            }),
            (0, r.jsxs)("div", {
                className: a.xj,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-sm/semibold",
                        children: f,
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "interactive-text-default",
                        variant: "text-xs/medium",
                        children: g,
                    }),
                    c
                        ? (0, r.jsxs)(i.Text, {
                              color: "text-muted",
                              variant: "text-xs/medium",
                              children: [
                                  s.intl.string(s.t.Oa9oWJ),
                                  (0, r.jsx)(i.DUT, {
                                      onClick: d(!0),
                                      className: a._2,
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
                children: (0, r.jsx)(i.DUT, {
                    onClick: u.isEditable ? d(!1) : void 0,
                    children: (0, r.jsx)(i.P7L, {
                        checked: c,
                        disabled: !u.isEditable,
                    }),
                }),
            }),
        ],
    });
}
