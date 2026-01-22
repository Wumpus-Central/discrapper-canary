n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(239705),
    s = n(870758),
    a = n(741207),
    c = n(437242),
    o = n(411335),
    d = n(86181);

function u(e) {
    let { action: t, triggerType: n, toggled: s, onToggleAction: a } = e,
        c = (0, l.x)(t.type, t, n);
    if (null == c) return null;
    let { headerText: o, descriptionText: u, icon: f } = c;
    return (0, r.jsxs)("div", {
        className: d.Ik,
        children: [
            (0, r.jsx)("div", {
                className: d.TV,
                children: (0, r.jsx)(f, {
                    size: "md",
                    color: "currentColor",
                    className: d.gE,
                }),
            }),
            (0, r.jsxs)("div", {
                className: d.xj,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-sm/semibold",
                        children: o,
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "interactive-text-default",
                        variant: "text-xs/medium",
                        children: u,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(i.DUT, {
                    onClick: c.isEditable ? () => a(!1) : void 0,
                    children: (0, r.jsx)(i.P7L, {
                        checked: s,
                        disabled: !c.isEditable,
                    }),
                }),
            }),
        ],
    });
}

function f(e) {
    let { action: t, guildId: n, triggerType: i, toggled: l, onToggleAction: d } = e;
    switch (t.type) {
        case o.AH.FLAG_TO_CHANNEL:
            return (0, r.jsx)(c.A, {
                action: t,
                triggerType: i,
                toggled: l,
                onToggleAction: d,
            });
        case o.AH.USER_COMMUNICATION_DISABLED:
            return (0, r.jsx)(a.A, {
                action: t,
                guildId: n,
                triggerType: i,
                toggled: l,
                onToggleAction: d,
            });
        case o.AH.BLOCK_MESSAGE:
            return (0, r.jsx)(s.A, {
                action: t,
                triggerType: i,
                toggled: l,
                onToggleAction: d,
            });
        default:
            return (0, r.jsx)(u, {
                action: t,
                guildId: n,
                toggled: l,
                triggerType: i,
                onToggleAction: d,
            });
    }
}
