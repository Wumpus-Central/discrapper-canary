"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(239705),
    r = n(985018),
    a = n(524190);
function o(e) {
    let { action: t, triggerType: n, toggled: o, onToggleAction: d } = e,
        c = (e) => () => d(e),
        u = (0, l.x)(t.type, t, n);
    if (null == u) return null;
    let { headerText: m, descriptionText: g, icon: x } = u;
    return (0, i.jsxs)("div", {
        className: a.Ik,
        children: [
            (0, i.jsx)("div", {
                className: a.TV,
                children: (0, i.jsx)(x, { size: "custom", color: "currentColor", className: a.gE }),
            }),
            (0, i.jsxs)("div", {
                className: a.xj,
                children: [
                    (0, i.jsx)(s.Heading, { variant: "heading-sm/semibold", children: m }),
                    (0, i.jsx)(s.Text, { color: "interactive-text-default", variant: "text-xs/medium", children: g }),
                    o
                        ? (0, i.jsxs)(s.Text, {
                              color: "text-muted",
                              variant: "text-xs/medium",
                              children: [
                                  r.intl.string(r.t.Oa9oWJ),
                                  (0, i.jsx)(s.DUT, {
                                      onClick: c(!0),
                                      className: a._2,
                                      tag: "span",
                                      role: "link",
                                      children: r.intl.string(r.t.QupmYY),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(s.DUT, {
                    onClick: u.isEditable ? c(!1) : void 0,
                    children: (0, i.jsx)(s.P7L, { checked: o, disabled: !u.isEditable }),
                }),
            }),
        ],
    });
}
