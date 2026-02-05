"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(239705),
    r = n(870758),
    a = n(741207),
    o = n(437242),
    d = n(411335),
    c = n(86181);
function u(e) {
    let { action: t, triggerType: n, toggled: r, onToggleAction: a } = e,
        o = (0, l.x)(t.type, t, n);
    if (null == o) return null;
    let { headerText: d, descriptionText: u, icon: m } = o;
    return (0, i.jsxs)("div", {
        className: c.Ik,
        children: [
            (0, i.jsx)("div", {
                className: c.TV,
                children: (0, i.jsx)(m, { size: "md", color: "currentColor", className: c.gE }),
            }),
            (0, i.jsxs)("div", {
                className: c.xj,
                children: [
                    (0, i.jsx)(s.Heading, { variant: "heading-sm/semibold", children: d }),
                    (0, i.jsx)(s.Text, { color: "interactive-text-default", variant: "text-xs/medium", children: u }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(s.DUT, {
                    onClick: o.isEditable ? () => a(!1) : void 0,
                    children: (0, i.jsx)(s.P7L, { checked: r, disabled: !o.isEditable }),
                }),
            }),
        ],
    });
}
function m(e) {
    let { action: t, guildId: n, triggerType: s, toggled: l, onToggleAction: c } = e;
    switch (t.type) {
        case d.AH.FLAG_TO_CHANNEL:
            return (0, i.jsx)(o.A, { action: t, triggerType: s, toggled: l, onToggleAction: c });
        case d.AH.USER_COMMUNICATION_DISABLED:
            return (0, i.jsx)(a.A, { action: t, guildId: n, triggerType: s, toggled: l, onToggleAction: c });
        case d.AH.BLOCK_MESSAGE:
            return (0, i.jsx)(r.A, { action: t, triggerType: s, toggled: l, onToggleAction: c });
        default:
            return (0, i.jsx)(u, { action: t, guildId: n, toggled: l, triggerType: s, onToggleAction: c });
    }
}
