"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(793574),
    l = n(73028),
    a = n(763754),
    c = n(888675),
    o = n(985018);
function u(e) {
    let { message: t, usernameHook: n, compact: u } = e,
        d = (0, a.Ay)(t),
        _ = n(d);
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(r.R2l, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: u,
        children: o.intl.format(o.t["4wLp25"], {
            username: d.nick,
            usernameHook: _,
            editGroupButton: (0, i.jsx)(
                r.Text,
                { tag: "span", variant: "text-md/medium", color: "text-link", children: o.intl.string(o.t["5Q9+/L"]) },
                `edit-group-button-${t.id}`,
            ),
            onEditGroup: () => (0, l.U)(t.channel_id, s.A.GROUP_DM_SYSTEM_MESSAGE_ICON),
        }),
    });
}
