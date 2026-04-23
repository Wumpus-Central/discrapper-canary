"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(22231),
    l = n(834730),
    s = n(793574),
    a = n(73028),
    o = n(763754),
    c = n(888675),
    u = n(985018);
function d(e) {
    let { message: t, usernameHook: n, compact: d } = e,
        _ = (0, o.Ay)(t),
        E = n(_);
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(r.R, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: d,
        children: u.intl.format(u.t["4wLp25"], {
            username: _.nick,
            usernameHook: E,
            editGroupButton: (0, i.jsx)(
                l.E,
                { tag: "span", variant: "text-md/medium", color: "text-link", children: u.intl.string(u.t["5Q9+/L"]) },
                `edit-group-button-${t.id}`,
            ),
            onEditGroup: () => (0, a.U)(t.channel_id, s.A.GROUP_DM_SYSTEM_MESSAGE_ICON),
        }),
    });
}
