n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(534514),
    s = n(834730),
    r = n(939249),
    a = n(658675),
    o = n(239705),
    d = n(985018),
    c = n(411374);
function u(e) {
    let { action: t, triggerType: n, toggled: u, onToggleAction: m } = e,
        g = (e) => () => m(e),
        h = (0, o.x)(t.type, t, n);
    if (null == h) return null;
    let { headerText: x, descriptionText: _, icon: p } = h;
    return (0, i.jsxs)("div", {
        className: c.Ik,
        children: [
            (0, i.jsx)("div", {
                className: c.TV,
                children: (0, i.jsx)(p, { size: "custom", color: "currentColor", className: c.gE }),
            }),
            (0, i.jsxs)("div", {
                className: c.xj,
                children: [
                    (0, i.jsx)(l.D, { variant: "heading-sm/semibold", children: x }),
                    (0, i.jsx)(s.E, { color: "interactive-text-default", variant: "text-xs/medium", children: _ }),
                    u
                        ? (0, i.jsxs)(s.E, {
                              color: "text-muted",
                              variant: "text-xs/medium",
                              children: [
                                  d.intl.string(d.t.Oa9oWJ),
                                  (0, i.jsx)(r.D, {
                                      onClick: g(!0),
                                      className: c._2,
                                      tag: "span",
                                      role: "link",
                                      children: d.intl.string(d.t.QupmYY),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(r.D, {
                    onClick: h.isEditable ? g(!1) : void 0,
                    children: (0, i.jsx)(a.P, { checked: u, disabled: !h.isEditable }),
                }),
            }),
        ],
    });
}
