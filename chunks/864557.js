n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(534514),
    s = n(834730),
    r = n(939249),
    a = n(658675),
    o = n(239705),
    d = n(870758),
    c = n(741207),
    u = n(437242),
    m = n(411335),
    g = n(411374);
function h(e) {
    let { action: t, triggerType: n, toggled: d, onToggleAction: c } = e,
        u = (0, o.x)(t.type, t, n);
    if (null == u) return null;
    let { headerText: m, descriptionText: h, icon: x } = u;
    return (0, i.jsxs)("div", {
        className: g.Ik,
        children: [
            (0, i.jsx)("div", {
                className: g.TV,
                children: (0, i.jsx)(x, { size: "md", color: "currentColor", className: g.gE }),
            }),
            (0, i.jsxs)("div", {
                className: g.xj,
                children: [
                    (0, i.jsx)(l.D, { variant: "heading-sm/semibold", children: m }),
                    (0, i.jsx)(s.E, { color: "interactive-text-default", variant: "text-xs/medium", children: h }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(r.D, {
                    onClick: u.isEditable ? () => c(!1) : void 0,
                    children: (0, i.jsx)(a.P, { checked: d, disabled: !u.isEditable }),
                }),
            }),
        ],
    });
}
function x(e) {
    let { action: t, guildId: n, triggerType: l, toggled: s, onToggleAction: r } = e;
    switch (t.type) {
        case m.AH.FLAG_TO_CHANNEL:
            return (0, i.jsx)(u.A, { action: t, triggerType: l, toggled: s, onToggleAction: r });
        case m.AH.USER_COMMUNICATION_DISABLED:
            return (0, i.jsx)(c.A, { action: t, guildId: n, triggerType: l, toggled: s, onToggleAction: r });
        case m.AH.BLOCK_MESSAGE:
            return (0, i.jsx)(d.A, { action: t, triggerType: l, toggled: s, onToggleAction: r });
        default:
            return (0, i.jsx)(h, { action: t, guildId: n, toggled: s, triggerType: l, onToggleAction: r });
    }
}
