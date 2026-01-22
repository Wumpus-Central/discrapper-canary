n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(793574),
    s = n(73028),
    o = n(763754),
    l = n(888675),
    c = n(985018);

function u(e) {
    let { message: t, usernameHook: n, compact: u } = e,
        d = (0, o.Ay)(t),
        f = n(d);
    return (0, r.jsx)(l.A, {
        iconNode: (0, r.jsx)(i.R2l, {
            size: "xs",
            color: "currentColor",
        }),
        timestamp: t.timestamp,
        compact: u,
        children: c.intl.format(c.t["4wLp25"], {
            username: d.nick,
            usernameHook: f,
            editGroupButton: (0, r.jsx)(
                i.Text,
                {
                    tag: "span",
                    variant: "text-md/medium",
                    color: "text-link",
                    children: c.intl.string(c.t["5Q9+/L"]),
                },
                "edit-group-button-".concat(t.id),
            ),
            onEditGroup: () => (0, s.U)(t.channel_id, a.A.GROUP_DM_SYSTEM_MESSAGE_ICON),
        }),
    });
}
